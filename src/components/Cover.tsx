/* eslint-disable @next/next/no-img-element */
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
      className={`${fluxgore.className} text-white relative animate-fade-in-up uppercase`}
      style={{
        textAlign: textAlign,
        fontSize: "clamp(50px, 10vw, 7vw)", // Slightly smaller on all screen sizes
        lineHeight: "1",
        animationDelay: textPosition === "right" ? "0.3s" : "0.1s",
        animationFillMode: "both",
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
      className={`${fluxgore.className} bg-white text-black px-6 py-2 inline-block text-3xl md:text-[40px] animate-bounce-in uppercase`}
      style={{
        transform: "skewX(-15deg)",
        lineHeight: "1.2",
        filter: `
            drop-shadow(8px 8px 0px black)
            drop-shadow(-2px -2px 0px rgba(0,0,0,0.3))
          `,
        border: "4px solid black",
        animationDelay: "0.5s",
        animationFillMode: "both",
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
      className="bg-cover bg-center bg-no-repeat relative justify-center items-center py-36 animate-fade-in"
      style={{ backgroundImage: "url('/images/KV.png')" }}
    >
      <div className="container mx-auto mb-24">
        {/* Top row with ФЕСТИВАЛЬ and date box */}
        <div className="flex align-center justify-center pb-7 md:hidden">
          <DateBox />
        </div>

        {/* <div className="flex align-center justify-center pb-7 md:hidden">
          <DateBox />
        </div>
        <div className="flex flex-row items-center space-x-16">
          <CoverHeading>ФЕСТИВАЛЬ</CoverHeading>
          <div className="hidden md:block">
            <DateBox />
          </div>
        </div>

        <CoverHeading textPosition="right">ТЕХНИЧЕСКИХ</CoverHeading>

        <CoverHeading>ВИДОВ СПОРТА</CoverHeading> */}
        <img
          src="/images/cover_text.png"
          alt="Фестиваль технических видов спорта 2025"
          className="w-full max-w-3xl mx-auto hidden md:block animate-slide-in-left"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        />

        <img
          src="/images/cover_text_mobile.png"
          alt="Фестиваль технических видов спорта 2025"
          className="w-full max-w-3xl mx-auto md:hidden animate-slide-in-left"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        />
      </div>

      <div className="flex justify-center items-center">
        {/* <Button
          onClick={() => {
            window.location.href = "/about";
          }}
          className="animate-pulse-glow hover:animate-none transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: "0.8s",
            animationFillMode: "both",
          }}
        >
          смотреть карту
        </Button> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) skewX(-15deg);
          }
          50% {
            transform: scale(1.05) skewX(-15deg);
          }
          70% {
            transform: scale(0.9) skewX(-15deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) skewX(-15deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function CoverSoon() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative justify-center items-center py-36"
      style={{ backgroundImage: "url('/images/KV.png')" }}
    >
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
  );
}

export { CoverSoon };

export default Cover;
