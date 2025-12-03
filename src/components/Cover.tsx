/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";
import Button from "./Button";
import Image from "next/image";

interface CoverHeadingProps {
  children: React.ReactNode;
  textPosition?: "left" | "right";
}

function CoverHeading({ children, textPosition }: CoverHeadingProps) {
  const textAlign = textPosition || "left";

  return (
    <h1
      className={`${fluxgore.className} text-white relative uppercase`}
      style={{
        textAlign: textAlign,
        fontSize: "clamp(50px, 10vw, 7vw)", // Slightly smaller on all screen sizes
        lineHeight: "1",
      }}
    >
      {/* Shadow layer */}
      {textAlign === "left" && (
        <span
          className="absolute top-0 text-black"
          style={{
            transform: `translate(clamp(6px, 1.5vw, 1vw), clamp(4px, 1vw, 0.6vw))`, // Adjusted shadow offset
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
            transform: `translate(calc(-100% + clamp(6px, 1.5vw, 1vw)), clamp(4px, 1vw, 0.6vw))`, // Adjusted shadow offset
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
          WebkitTextStroke: "clamp(3px, 1vw, 0.6vw) black", // Adjusted stroke width
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
      className={`${fluxgore.className} bg-white text-black px-6 py-2 inline-block text-3xl md:text-[40px] uppercase`}
      style={{
        transform: "skewX(-15deg)",
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
    <div className="relative justify-center items-center py-36">
      {/* Background Image */}
      <Image
        src="/images/KV.png"
        alt="Tech fest background"
        fill
        className="object-cover object-center hidden md:block"
        priority
        quality={85}
      />

      <Image
        src="/images/KV_mobile.png"
        alt="Tech fest background mobile"
        fill
        className="object-cover object-center md:hidden"
        priority
        quality={85}
      />

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="container mx-auto mb-24">
          {/* Top row with ФЕСТИВАЛЬ and date box */}
          <div className="flex align-center justify-center pb-7 md:hidden">
            <DateBox />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/cover_text.png"
              alt="Фестиваль технических видов спорта 2025"
              width={768}
              height={400}
              className="w-full max-w-3xl mx-auto hidden md:block"
              priority
            />

            <Image
              src="/images/cover_text_mobile.png"
              alt="Фестиваль технических видов спорта 2025"
              width={576}
              height={300}
              className="w-full max-w-3xl mx-auto md:hidden"
              priority
            />
          </div>

          <div className="flex justify-end mt-10 md:mt-0">
            <Image
              src="/images/danger.png"
              alt="free_entry"
              width={265}
              height={232}
              className="w-32 md:w-40"
              style={{
                transform: "rotate(15deg)",
              }}
              priority
            />
          </div>
        </div>

        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
}

function CoverSoon() {
  return (
    <div className="relative justify-center items-center py-36">
      {/* Background Image */}
      <Image
        src="/images/KV.png"
        alt="Tech fest background"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-5/7 mb-24">
          {/* Top row with ФЕСТИВАЛЬ and date box */}
          <div className="flex flex-row items-center space-x-16">
            <CoverHeading>ФЕСТИВАЛЬ</CoverHeading>
            <div className="hidden md:block">
              <DateBox />
            </div>
          </div>

          <CoverHeading textPosition="right">ТЕХНИЧЕСКИХ</CoverHeading>

          <CoverHeading>ВИДОВ СПОРТА</CoverHeading>
        </div>

        <div className="flex justify-center items-center">
          <Button disabled>скоро</Button>
        </div>
      </div>
    </div>
  );
}

export { CoverSoon };

export default Cover;
