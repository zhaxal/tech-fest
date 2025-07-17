import { fluxgore } from "@/utils/fonts";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "blue" | "blue_alt";
  shadowEnabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { variant = "default", shadowEnabled = true } = props;

  const getButtonStyles = () => {
    switch (variant) {
      case "blue":
        return "bg-[#1068B0] text-white hover:bg-[#0e5a9c]";
      case "blue_alt":
        return "bg-[#1068B0] text-black hover:bg-[#0e5a9c]";
      default:
        return "bg-white text-black hover:bg-gray-100";
    }
  };

  return (
    <div className={`${fluxgore.className} relative inline-block`}>
      {/* Shadow element */}
      {shadowEnabled && (
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
      )}
      {/* Button */}
      <button
        className={`${getButtonStyles()} inline-block relative transition-all duration-150 ease-in-out ${
          shadowEnabled
            ? "active:translate-x-1 active:translate-y-1"
            : "hover:scale-105 active:scale-95"
        } ${props.className}`}
        onClick={props.onClick}
        style={{
          fontSize: "18px",
          lineHeight: "1.2",
          padding: "20px 40px",
          minWidth: "280px",
          clipPath:
            "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
          border: "none",
          zIndex: 1,
        }}
        onMouseEnter={
          shadowEnabled
            ? (e) => {
                const shadow = e.currentTarget
                  .previousElementSibling as HTMLElement;
                if (shadow) {
                  shadow.style.top = "6px";
                  shadow.style.left = "6px";
                  shadow.style.right = "-6px";
                  shadow.style.bottom = "-6px";
                }
              }
            : undefined
        }
        onMouseLeave={
          shadowEnabled
            ? (e) => {
                const shadow = e.currentTarget
                  .previousElementSibling as HTMLElement;
                if (shadow) {
                  shadow.style.top = "8px";
                  shadow.style.left = "8px";
                  shadow.style.right = "-8px";
                  shadow.style.bottom = "-8px";
                }
              }
            : undefined
        }
        onMouseDown={
          shadowEnabled
            ? (e) => {
                const shadow = e.currentTarget
                  .previousElementSibling as HTMLElement;
                if (shadow) {
                  shadow.style.top = "4px";
                  shadow.style.left = "4px";
                  shadow.style.right = "-4px";
                  shadow.style.bottom = "-4px";
                }
              }
            : undefined
        }
        onMouseUp={
          shadowEnabled
            ? (e) => {
                const shadow = e.currentTarget
                  .previousElementSibling as HTMLElement;
                if (shadow) {
                  shadow.style.top = "6px";
                  shadow.style.left = "6px";
                  shadow.style.right = "-6px";
                  shadow.style.bottom = "-6px";
                }
              }
            : undefined
        }
      >
        {props.children}
      </button>
    </div>
  );
}
