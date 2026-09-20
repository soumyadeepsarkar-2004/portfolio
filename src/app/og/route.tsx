import { USER } from "@/data"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || USER.name
    const description =
      searchParams.get("description") ||
      "Full Stack & Web3 Developer • GSSoC Mentor"

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "630px",
            width: "1200px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#09090b",
            padding: "48px",
            gap: "20px",
          }}
        >
          {/* Subtle Grid Border Frame */}
          <div
            style={{
              position: "absolute",
              top: "32px",
              bottom: "32px",
              left: "32px",
              right: "32px",
              border: "1px solid #27272a",
              borderRadius: "16px",
              display: "flex",
            }}
          />

          {/* Avatar Circle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "110px",
              height: "110px",
              borderRadius: "55px",
              backgroundColor: "#18181b",
              border: "2px solid #3b82f6",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            SS
          </div>

          {/* User Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "52px",
                fontWeight: "800",
                color: "#f4f4f5",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              {title}
            </span>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: "850px",
              fontFamily: "sans-serif",
            }}
          >
            {description}
          </div>

          {/* Tech Badges */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["Next.js", "React", "TypeScript", "Solidity", "Node.js"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46",
                    borderRadius: "6px",
                    padding: "6px 16px",
                    color: "#e4e4e7",
                    fontSize: "15px",
                    fontWeight: "600",
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          {/* URL Footer Pill */}
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: "20px",
              padding: "8px 24px",
              color: "#38bdf8",
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: "monospace",
            }}
          >
            soumyadeep-dev.vercel.app
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch {
    return new Response("Failed to generate image", { status: 500 })
  }
}
