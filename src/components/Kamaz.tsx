/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";
import { useEffect, useRef } from "react";

function Kamaz() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div
      className="bg-[#161616] relative md:pt-64 pb-16 md:pb-32"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="flex-shrink-0">
            <h1
              className={`${fluxgore.className} text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-tight`}
            >
              КАМАЗ-МАСТЕР
            </h1>
          </div>
        </div>

        <div
          ref={imageRef}
          className="mt-12 md:mt-16 opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out"
        >
          <div className="relative group">
            <img
              src="/images/kamaz.webp"
              alt="Tech Festival - Previous Event Highlights"
              className="w-full h-auto max-h-[600px] object-cover shadow-2xl"
              style={{
                clipPath:
                  "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg" />
          </div>
        </div>

        <div className="container mx-auto pt-36">
          <div
            ref={addToRefs}
            className="flex flex-row opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="flex-1 basis-1/3">
              <p className="text-white opacity-60 text-sm md:text-base uppercase font-medium"></p>
            </div>
            <div className="flex-col max-w-2/3">
              <p className="text-white text-base md:text-4xl font-normal">
                Команда &quot;КАМАЗ-мастер&quot; с удовольствием принимает
                участие в фестивале технических видов спорта, который проходит в
                Москве. Это мероприятие собирает ведущие команды и специалистов
                в области автоспорта, технических инноваций и инженерных
                решений. Участие &quot;КАМАЗ-мастер&quot; подчеркивает их статус
                лидеров в мире ралли-рейдов и их приверженность развитию
                технологий и профессионального мастерства. Посетители фестиваля
                имеют уникальную возможность ознакомиться с техникой команды,
                пообщаться с пилотами и инженерами, а также получить вдохновение
                от ярких выступлений и демонстраций. Такое участие способствует
                популяризации технических видов спорта и укреплению позиций
                российской команды на международной арене.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kamaz;
