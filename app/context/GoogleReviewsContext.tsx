"use client";

import { createContext, useContext, ReactNode } from "react";

import type { GoogleReview, GoogleReviewsData } from "@/app/lib/googleReviews";

export type { GoogleReview };

interface GoogleReviewsContextType {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  /**
   * False when the Places lookup failed. Consumers must check this before
   * rendering a rating — otherwise a failed lookup advertises "0.0 stars"
   * and "0+ Google reviews" on a page headed "Real Google Reviews".
   */
  available: boolean;
}

const GoogleReviewsContext = createContext<
  GoogleReviewsContextType | undefined
>(undefined);

/**
 * Reviews are fetched on the server (see app/lib/googleReviews.ts) and passed
 * in here, so the real rating and review text are present in the initial HTML
 * for crawlers and there is no flash of "0.0" on first paint.
 */
export function GoogleReviewsProvider({
  value,
  children,
}: {
  value: GoogleReviewsData;
  children: ReactNode;
}) {
  return (
    <GoogleReviewsContext.Provider
      value={{
        reviews: value.reviews,
        rating: value.rating,
        totalReviews: value.totalReviews,
        available: value.available,
      }}
    >
      {children}
    </GoogleReviewsContext.Provider>
  );
}

export function useGoogleReviews() {
  const context = useContext(GoogleReviewsContext);

  if (!context) {
    throw new Error(
      "useGoogleReviews must be used within GoogleReviewsProvider"
    );
  }

  return context;
}
