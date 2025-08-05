/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import { useEffect, useRef } from "react";

interface VideoStatsProps {
  number: string;
  label: string;
}

function VideoStats(props: VideoStatsProps) {
  const { number, label } = props;
  return (
    <div className="flex flex-col">
      <h1
        className={`${fluxgore.className} text-4xl md:text-8xl text-[#1068B0] relative`}
      >
        {number}
      </h1>

      <p
        className={`${gothampro.className} text-[#E6E6E6] text-sm md:text-xl max-w-[536px] leading-normal uppercase`}
      >
        {label}
      </p>
    </div>
  );
}

function Video() {
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
      className="bg-[#161616] relative overflow-hidden pt-10 md:pt-20"
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

      <img
        className="absolute top-0 right-0 object-cover"
        src="/images/video/arrows.svg"
        alt="Lines"
      />

      <div className="container mx-auto px-4">
        <div
          ref={addToRefs}
          className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h1
            className={`${fluxgore.className} text-4xl md:text-7xl text-white relative`}
          >
            как это Было
          </h1>

          <p
            className={`${gothampro.className} text-[#E6E6E6] opacity-90 text-base md:text-xl max-w-full md:max-w-[536px] leading-relaxed md:leading-none`}
          >
            Прошлый фестиваль технических видов спорта стал незабываемым
            праздником скорости и мастерства, собрав рекордное количество
            участников и зрителей.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="flex mt-8 md:mt-14 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          <iframe
            src="https://vkvideo.ru/video_ext.php?oid=-23293707&id=456242039&hd=2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-auto aspect-video hover:scale-[1.02] transition-transform duration-300"
            style={{
              clipPath:
                "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
            }}
          ></iframe>
        </div>

        <div
          ref={addToRefs}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 mt-16 md:mt-36 pb-32 md:pb-64 opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          <div className="hover:scale-105 transition-transform duration-300">
            <VideoStats number="260" label="[ единиц техники ]" />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <VideoStats
              number="11"
              label="[ дисциплин технических видов спорта ]"
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <VideoStats number="24 K" label="[ л.с. суммарной мощности ]" />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <VideoStats
              number="350+"
              label="[ спортсменов-участников соревнований ]"
            />
          </div>
        </div>
      </div>

      <img
        className="absolute bottom-0 object-cover w-full"
        src="/images/video/paper_tear.png"
        alt="Paper tear"
      />
    </div>
  );
}

export default Video;
