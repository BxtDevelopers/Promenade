import { NextResponse } from "next/server";

const REVALIDATE_TIME = 60 * 60 * 24 * 4; // 4 days

export const revalidate = REVALIDATE_TIME;

export async function GET() {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${process.env.GOOGLE_PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews",
        },
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    return NextResponse.json({
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: data.reviews ?? [],
    });
  } catch (error) {
    console.error("Google Reviews API Error:", error);

    return NextResponse.json(
      {
        rating: 0,
        totalReviews: 0,
        reviews: [],
      },
      { status: 500 }
    );
  }
}