import { fluxgore } from "@/utils/fonts";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "blue";
}

export default function Button(props: ButtonProps) {
  const { variant = "default" } = props;

  const getButtonStyles = () => {
    switch (variant) {
      case "blue":
        return "bg-[#1068B0] text-white hover:bg-[#0e5a9c]";
      default:
        return "bg-white text-black hover:bg-gray-100";
    }
  };

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
          className={`${getButtonStyles()} inline-block relative transition-all duration-150 ease-in-out active:translate-x-1 active:translate-y-1 ${props.className}`}
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
