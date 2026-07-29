import { NextResponse } from "next/server";

import { getGoogleReviews } from "@/app/lib/googleReviews";

// Must be a literal: Next statically analyses segment config exports, so an
// imported constant here fails the build. Keep in sync with
// REVIEWS_REVALIDATE_SECONDS in app/lib/googleReviews.ts (4 days).
export const revalidate = 345_600;

// The site renders reviews server-side via getGoogleReviews(); this route
// remains for any client-side consumer that needs the same payload.
export async function GET() {
  const data = await getGoogleReviews();

  return NextResponse.json(data, { status: data.available ? 200 : 503 });
}
