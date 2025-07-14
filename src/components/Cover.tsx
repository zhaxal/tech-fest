import localfont from "next/font/local";

const fluxgore = localfont({
  src: "../fonts/FLUXGORE/fluxgore_italic.otf",
  weight: "400",
  style: "italic",
});

interface CoverHeadingProps {
  children: React.ReactNode;
  textPosition?: "left" | "right";
}

function CoverHeading({ children, textPosition }: CoverHeadingProps) {
  const textAlign = textPosition || "left";

  return (
    <div className={fluxgore.className}>
      <h1
        className="text-white relative"
        style={{
          textAlign: textAlign,
          fontSize: "130px",
          lineHeight: "1",
        }}
      >
        {/* Shadow layer */}
        {textAlign === "left" && (
          <span
            className="absolute top-0 left-0 text-black"
            style={{
              transform: `translate(18px, 11px)`,
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
            className="absolute top-0 right-0 text-black"
            style={{
              transform: `translate(18px, 11px)`,
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
            WebkitTextStroke: "12px black",
            paintOrder: "stroke fill",
          }}
        >
          {children}
        </span>
      </h1>
    </div>
  );
}

function DateBox() {
  return (
    <div className={fluxgore.className}>
      <div
        className="bg-white text-black px-6 py-2 inline-block"
        style={{
          transform: "skewX(-15deg)",
          fontSize: "40px",
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
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function CoverButton(props: ButtonProps) {
  return (
    <div className={fluxgore.className}>
      <div className="relative inline-block">
        {/* Shadow element */}
        <div
          className="absolute bg-black transition-all duration-150 ease-in-out"
          style={{
            top: "8px",
            left: "8px",
            right: "-8px",
            bottom: "-8px",
            clipPath:
              "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            zIndex: 0,
          }}
        />
        {/* Button */}
        <button
          className={`bg-white text-black inline-block relative transition-all duration-150 ease-in-out hover:bg-gray-100 active:translate-x-1 active:translate-y-1 ${props.className}`}
          onClick={props.onClick}
          style={{
            fontSize: "18px",
            lineHeight: "1.2",
            padding: "20px 40px",
            clipPath:
              "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            border: "none",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            const shadow = e.currentTarget
              .previousElementSibling as HTMLElement;
            if (shadow) {
              shadow.style.top = "6px";
              shadow.style.left = "6px";
              shadow.style.right = "-6px";
              shadow.style.bottom = "-6px";
            }
          }}
          onMouseLeave={(e) => {
            const shadow = e.currentTarget
              .previousElementSibling as HTMLElement;
            if (shadow) {
              shadow.style.top = "8px";
              shadow.style.left = "8px";
              shadow.style.right = "-8px";
              shadow.style.bottom = "-8px";
            }
          }}
          onMouseDown={(e) => {
            const shadow = e.currentTarget
              .previousElementSibling as HTMLElement;
            if (shadow) {
              shadow.style.top = "4px";
              shadow.style.left = "4px";
              shadow.style.right = "-4px";
              shadow.style.bottom = "-4px";
            }
          }}
          onMouseUp={(e) => {
            const shadow = e.currentTarget
              .previousElementSibling as HTMLElement;
            if (shadow) {
              shadow.style.top = "6px";
              shadow.style.left = "6px";
              shadow.style.right = "-6px";
              shadow.style.bottom = "-6px";
            }
          }}
        >
          {props.children}
        </button>
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
      <div className="container mx-auto max-w-5/6 mb-24">
        {/* Top row with ФЕСТИВАЛЬ and date box */}
        <div className="flex items-center" style={{ gap: "40px" }}>
          <CoverHeading>ФЕСТИВАЛЬ</CoverHeading>
          <DateBox />
        </div>

        <CoverHeading textPosition="right">ТЕХНИЧЕСКИХ</CoverHeading>

        <CoverHeading>ВИДОВ СПОРТА</CoverHeading>
      </div>

      <div className="flex justify-center items-center">
        <CoverButton
          onClick={() => {
            window.location.href = "/about";
          }}
        >
          смотреть карту
        </CoverButton>
      </div>
    </div>
  );
}

export default Cover;
