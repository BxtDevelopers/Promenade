import { ImageResponse } from "next/og";

export const alt =
  "Promenade Dental — gentle dentistry in Fulton Ranch, Chandler, Arizona";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#2e1b18",
        color: "#f4ecdd",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#d7775b",
          display: "flex",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Fulton Ranch · Chandler, Arizona
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontSize: 92,
            letterSpacing: "-0.035em",
            lineHeight: 1,
          }}
        >
          Promenade Dental
        </div>
        <div
          style={{
            color: "#d8cbb8",
            display: "flex",
            fontSize: 38,
            lineHeight: 1.3,
          }}
        >
          Gentle, personal care for every smile.
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          borderTop: "2px solid #6d4a40",
          display: "flex",
          fontSize: 28,
          justifyContent: "space-between",
          paddingTop: 30,
        }}
      >
        <span>Family · Cosmetic · Emergency</span>
        <span>(480) 802-8188</span>
      </div>
    </div>,
    size,
  );
}
