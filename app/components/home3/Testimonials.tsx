"use client";

import { useGoogleReviews } from "@/app/context/GoogleReviewsContext";
import { siteConfig } from "@/app/lib/seo";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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

const MAX_CHARS = 180;

export default function TestimonialsMarquee() {
  
  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({});

 const {
  reviews,
  rating,
  totalReviews,
  available,
} = useGoogleReviews();

  const marqueeReviews = useMemo(() => [...reviews, ...reviews], [reviews]);

  // A section headed "Real Google Reviews" showing 0.0 stars and an empty
  // carousel is worse than no section at all, so drop it when the Places
  // lookup gave us nothing to show.
  if (!available || reviews.length === 0) return null;

  const getReviewText = (text: string, expanded: boolean) => {
    if (expanded) return text;

    return text.length > MAX_CHARS
      ? text.slice(0, MAX_CHARS).trim() + "..."
      : text;
  };

  return (
    <section
      className="py-[clamp(74px,8vw,120px)] bg-bg-2"
      id="reviews"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent">
          Real Google Reviews
        </span>

        <h2 className="font-serif font-light leading-[1.04] tracking-[-0.02em] mt-4 text-white max-w-[22ch] text-[clamp(30px,4.6vw,58px)]">
          Patients don&apos;t usually rave about the dentist.
          <em className="italic text-accent"> Ours do.</em>
        </h2>

        <div className="inline-flex items-center gap-[18px] mt-6 rounded-2xl px-[24px] py-[16px] border border-[rgba(244,236,221,0.14)] bg-[rgba(244,236,221,0.04)]">
          <span className="font-serif font-light text-accent leading-none text-[46px]">
            {rating.toFixed(1)}
          </span>

          <div>
            <div className="text-accent text-[15px] tracking-[3px]">
              ★★★★★
            </div>

            <div className="text-[12.5px] tracking-[0.05em] uppercase mt-[5px] font-medium text-cream">
              <b className="text-white font-semibold">{totalReviews}+</b>{" "}
              Google Reviews
            </div>
          </div>
        </div>

        {/*
          Outbound link to the profile these reviews come from. The rating and
          the review text are pulled live from Google Places and rendered server
          side, which is a real integration — but with nothing linking out, it is
          unverifiable. A visitor cannot get to the other 100+ reviews, and a
          crawler sees quoted praise with no attributable source, which is what
          made the site audit report no review integration at all.
        */}
        <a
          href={siteConfig.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-accent underline underline-offset-4 transition-colors hover:text-white"
        >
          Read all {totalReviews} reviews on Google
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden mt-[clamp(40px,5vw,60px)] marquee-mask">
        <div
          className="flex gap-[18px] w-max"
          style={{
            animation: "mq 46s linear infinite",
          }}
        >
          {marqueeReviews.map((review, index) => {
            const reviewText = review.text?.text || "";
            const expanded = expandedReviews[index];

            return (
              <div
                key={index}
                className="flex-none flex flex-col rounded-[20px] w-[min(390px,82vw)] min-h-[340px] p-[24px_26px] border border-[rgba(244,236,221,0.14)] bg-white"
              >
                <div className="text-accent text-[12px] tracking-[3px] mb-3">
                  {"★".repeat(review.rating)}
                </div>

                <div className="flex-1">
                  <p className="font-serif font-light text-[18px] leading-[1.45] text-ink">
                    &ldquo;
                    {getReviewText(reviewText, !!expanded)}
                    &rdquo;
                  </p>

                  {reviewText.length > MAX_CHARS && (
                    <button
                      onClick={() =>
                        setExpandedReviews((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="mt-4 text-accent text-[12px] uppercase tracking-[0.12em] hover:opacity-80 transition"
                    >
                      {expanded ? "View Less" : "View More"}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-ink/80">
                  {review.authorAttribution?.photoUri ? (
                    <Image
                        src={review.authorAttribution.photoUri}
                        alt={review.authorAttribution.displayName}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-accent text-sm font-semibold">
                      {review.authorAttribution?.displayName?.charAt(0) || "G"}
                    </div>
                  )}

                  <cite className="not-italic text-[12px] tracking-[0.08em] uppercase text-ink/90">
                    {review.authorAttribution?.displayName || "Google User"}
                  </cite>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}