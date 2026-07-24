// app/api/place-search/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://places.googleapis.com/v1/places:searchText",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({
        textQuery: "Promenade Dental Chandler Arizona",
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}