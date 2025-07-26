/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";
import { ReactNode, useState } from "react";

interface SchemeSelectProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function SchemeSelect({
  children,
  active = false,
  onClick,
}: SchemeSelectProps) {
  const baseClasses = `${fluxgore.className} leading-none cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 transform hover:scale-105`;
  const activeClasses = "text-[#1E1E1E] text-2xl md:text-4xl";
  const inactiveClasses = "text-[#0D0D0D] text-base md:text-xl opacity-50 self-end";

  return (
    <p
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

interface SchemeItemProps {
  time: string;
  title: string;
}

function SchemeItem({ time, title }: SchemeItemProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2.5">
      <span
        className={`${gothampro.className} text-white bg-[#1068B0] text-base md:text-xl px-4 md:px-7 py-1.5 md:py-2.5 text-center`}
      >
        {time}
      </span>
      <span
        className={`${gothampro.className} text-[#0D0D0D] text-base md:text-xl font-medium`}
      >
        {title}
      </span>
    </div>
  );
}

function Scheme() {
  const [activeVenue, setActiveVenue] = useState("главная площадка");

  const venues = [
    { name: "главная площадка" },
    { name: "мотокросс" },
    { name: "картинг" },
    { name: "Детская площадка" },
    { name: "выставка" },
    { name: "мфт" },
  ];

  return (
    <div className="bg-[#F4F4F4] relative pt-10 md:pt-20 pb-16 md:pb-32 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <h1
            className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative`}
          >
            схема фестиваля
          </h1>

          <p
            className={`${gothampro.className} text-[#060606] text-base md:text-xl max-w-full md:max-w-[354px] leading-normal md:leading-none md:self-end`}
          >
            [Выберите площадку, чтобы увидеть расписание]
          </p>
        </div>

        <img
          src="/images/scheme/map.png"
          alt="Festival Map"
          className="mt-10 md:mt-20 w-full h-auto"
        />

        <div className="flex flex-col md:flex-row mt-10 md:mt-40 space-y-3 md:space-y-0 md:space-x-5 items-center justify-center">
          <Button shadowEnabled={false} variant="blue">
            5 сентября
          </Button>
          <Button shadowEnabled={false} variant="blue_alt">
            5 сентября
          </Button>
          <Button shadowEnabled={false} variant="blue_alt">
            5 сентября
          </Button>
        </div>

        <div className="flex flex-wrap md:flex-row mt-8 md:mt-14 gap-3 md:gap-0 md:space-x-12 justify-center min-h-10">
          {venues.map((venue) => (
            <SchemeSelect
              key={venue.name}
              active={venue.name === activeVenue}
              onClick={() => setActiveVenue(venue.name)}
            >
              {venue.name}
            </SchemeSelect>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-20 max-w-4xl mx-auto">
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
          <SchemeItem time="10:00-10:30" title="Открытие фестиваля" />
        </div>
      </div>
    </div>
  );
}

export default Scheme;
