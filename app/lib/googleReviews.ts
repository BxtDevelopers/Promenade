export type GoogleReview = {
  text?: {
    text: string;
  };
  rating: number;
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
  };
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  /** False when the Places lookup failed or was not configured. */
  available: boolean;
};

/** Four days. Google review content changes slowly; the quota does not. */
export const REVIEWS_REVALIDATE_SECONDS = 345_600;

const EMPTY: GoogleReviewsData = {
  rating: 0,
  totalReviews: 0,
  reviews: [],
  available: false,
};

/**
 * Server-side Places lookup. Callers render the practice's real rating into
 * the HTML, so this must never throw — a failed lookup returns
 * `available: false` and the UI omits the rating entirely rather than
 * advertising "0.0".
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    console.error("Google Places credentials are not configured");
    return EMPTY;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
        },
        next: { revalidate: REVIEWS_REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    const rating = typeof data.rating === "number" ? data.rating : 0;
    const totalReviews =
      typeof data.userRatingCount === "number" ? data.userRatingCount : 0;

    return {
      rating,
      totalReviews,
      reviews: Array.isArray(data.reviews) ? data.reviews : [],
      // A live lookup that genuinely returns no ratings is still "unavailable"
      // for display purposes — there is nothing meaningful to show.
      available: rating > 0 && totalReviews > 0,
    };
  } catch (error) {
    console.error("Google Reviews API Error:", error);
    return EMPTY;
  }
}
