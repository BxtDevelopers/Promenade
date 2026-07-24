"use client";

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
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setRating(data.rating || 0);
        setTotalReviews(data.totalReviews || 0);
      })
      .catch((err) => console.error(err));
  }, []);

  const marqueeReviews = useMemo(() => [...reviews, ...reviews], [reviews]);

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
        <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
          Real Google Reviews
        </span>

        <h2 className="font-serif font-light leading-[1.04] tracking-[-0.02em] mt-4 text-white max-w-[22ch] text-[clamp(30px,4.6vw,58px)]">
          Patients don&apos;t usually rave about the dentist.
          <em className="italic text-coral"> Ours do.</em>
        </h2>

        <div className="inline-flex items-center gap-[18px] mt-6 rounded-2xl px-[24px] py-[16px] border border-[rgba(244,236,221,0.14)] bg-[rgba(244,236,221,0.04)]">
          <span className="font-serif font-light text-coral leading-none text-[46px]">
            {rating.toFixed(1)}
          </span>

          <div>
            <div className="text-coral text-[15px] tracking-[3px]">
              ★★★★★
            </div>

            <div className="text-[12.5px] tracking-[0.05em] uppercase mt-[5px] font-medium text-ivory-2">
              <b className="text-white font-semibold">{totalReviews}+</b>{" "}
              Google Reviews
            </div>
          </div>
        </div>
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
                <div className="text-coral text-[12px] tracking-[3px] mb-3">
                  {"★".repeat(review.rating)}
                </div>

                <div className="flex-1">
                  <p className="font-serif font-light text-[18px] leading-[1.45] text-ivory">
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
                      className="mt-4 text-coral text-[12px] uppercase tracking-[0.12em] hover:opacity-80 transition"
                    >
                      {expanded ? "View Less" : "View More"}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-ivory/80">
                  {review.authorAttribution?.photoUri ? (
                    <img
                      src={review.authorAttribution.photoUri}
                      alt={review.authorAttribution.displayName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral text-sm font-semibold">
                      {review.authorAttribution?.displayName?.charAt(0) || "G"}
                    </div>
                  )}

                  <cite className="not-italic text-[12px] tracking-[0.08em] uppercase text-ivory/90">
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