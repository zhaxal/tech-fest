import { fluxgore } from "@/utils/fonts";
import Button from "./Button";

interface CoverHeadingProps {
  children: React.ReactNode;
  textPosition?: "left" | "right";
}

function CoverHeading({ children, textPosition }: CoverHeadingProps) {
  const textAlign = textPosition || "left";

  return (
    <h1
      className={`${fluxgore.className} text-white relative`}
      style={{
        textAlign: textAlign,
        fontSize: "8vw", // Changed from fixed 130px to 8vw
        lineHeight: "1",
      }}
    >
      {/* Shadow layer */}
      {textAlign === "left" && (
        <span
          className="absolute top-0 text-black"
          style={{
            transform: `translate(1.1vw, 0.7vw)`, // Changed from fixed pixels to vw
            textAlign: textAlign,
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      )}

      {textAlign === "right" && (
        <span
          className="absolute top-0 text-black"
          style={{
            transform: `translate(calc(-100% + 1.1vw), 0.7vw)`, // Changed from fixed pixels to vw
            textAlign: textAlign,
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      )}

      {/* Main text */}
      <span
        className="relative text-white"
        style={{
          zIndex: 3,
          display: "block",
          textAlign: textAlign,
          WebkitTextStroke: "0.75vw black", // Changed from fixed 12px to 0.75vw
          paintOrder: "stroke fill",
        }}
      >
        {children}
      </span>
    </h1>
  );
}

function DateBox() {
  return (
    <div
      className={`${fluxgore.className} bg-white text-black px-6 py-2 inline-block`}
      style={{
        transform: "skewX(-15deg)",
        fontSize: "2vw", // Changed from 40px to 2.5vw
        lineHeight: "1.2",
        filter: `
            drop-shadow(8px 8px 0px black)
            drop-shadow(-2px -2px 0px rgba(0,0,0,0.3))
          `,
        border: "4px solid black",
      }}
    >
      <div style={{ transform: "skewX(15deg)" }}>
        5-7 СЕНТЯБРЯ
        <br />
        МОСКВА 2025
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative justify-center items-center py-36"
      style={{ backgroundImage: "url('/images/cover.svg')" }}
    >
      <div className="container mx-auto max-w-5/7 mb-24">
        {/* Top row with ФЕСТИВАЛЬ and date box */}
        <div className="flex flex-row items-center space-x-16">
          <CoverHeading>ФЕСТИВАЛЬ</CoverHeading>
          <DateBox />
        </div>

        <CoverHeading textPosition="right">ТЕХНИЧЕСКИХ</CoverHeading>

        <CoverHeading>ВИДОВ СПОРТА</CoverHeading>
      </div>

      <div className="flex justify-center items-center">
        <Button
          onClick={() => {
            window.location.href = "/about";
          }}
        >
          смотреть карту
        </Button>
      </div>
    </div>
  );
}

export default Cover;
