"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
} from "react";

interface GoogleReview {
  text?: {
    text: string;
  };
  rating: number;
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
  };
}

interface GoogleReviewsContextType {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  loading: boolean;
  error: boolean;
}

const GoogleReviewsContext = createContext<
  GoogleReviewsContextType | undefined
>(undefined);

export function GoogleReviewsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Prevent duplicate fetches in React Strict Mode (development)
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");

        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await res.json();

        setReviews(data.reviews ?? []);
        setRating(data.rating ?? 0);
        setTotalReviews(data.totalReviews ?? 0);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <GoogleReviewsContext.Provider
      value={{
        reviews,
        rating,
        totalReviews,
        loading,
        error,
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