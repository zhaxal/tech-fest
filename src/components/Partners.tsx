/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";
import Button from "./Button";
import { useEffect, useRef } from "react";

function Partners() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div
      id="partners"
      className="bg-[#161616] relative py-16 sm:py-32 lg:py-52"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div
          ref={addToRefs}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <h1
            className={`${fluxgore.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white relative uppercase`}
          >
            партнеры
          </h1>
        </div>

        <div
          ref={addToRefs}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-16 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          <img
            src="/logos/dep.svg"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
            alt="Dep Logo"
          />
          <img
            src="/logos/mos.svg"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
            alt="Mos Logo"
          />
          <img
            src="/logos/raf.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
            alt="Raf Logo"
          />
          <img
            src="/logos/ctvs.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
            alt="Ctvs Logo"
          />
          <img
            src="/logos/smp.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
            alt="SMP Logo"
          />
        </div>

        <div
          ref={addToRefs}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          <Button
            onClick={() => {
              const mail = "mailto:ftvs.partners@yandex.ru";

              window.location.href = mail;
            }}
            variant="blue"
            className="mt-12 sm:mt-16 lg:mt-20"
            shadowEnabled={false}
          >
            стать партнером
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
