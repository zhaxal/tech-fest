/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";
import { ReactNode, useState, useMemo } from "react";

interface ScheduleData {
  date: string;
  location: string;
  start: string;
  stop: string;
  activity: string;
}

interface SchemeProps {
  scheduleData?: ScheduleData[];
}

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
  const baseClasses = `${fluxgore.className} leading-none cursor-pointer uppercase`;
  const activeClasses = "text-[#1E1E1E] text-2xl md:text-4xl";
  const inactiveClasses =
    "text-[#0D0D0D] text-base md:text-xl opacity-50 self-end";

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

function Scheme({ scheduleData = [] }: SchemeProps) {
  // Extract unique dates and venues from schedule data
  const { uniqueDates, uniqueVenues } = useMemo(() => {
    const dates = [...new Set(scheduleData.map((item) => item.date))];
    const venues = [
      ...new Set(scheduleData.map((item) => item.location.toLowerCase())),
    ];

    return {
      uniqueDates: dates,
      uniqueVenues: venues.length > 0 ? venues : ["главная площадка"],
    };
  }, [scheduleData]);

  const [activeVenue, setActiveVenue] = useState(
    uniqueVenues[0] || "главная площадка"
  );
  const [activeDate, setActiveDate] = useState(uniqueDates[0] || "5 сентября");

  // Filter schedule items based on active venue and date
  const filteredSchedule = useMemo(() => {
    return scheduleData.filter(
      (item) =>
        item.location.toLowerCase() === activeVenue && item.date === activeDate
    );
  }, [scheduleData, activeVenue, activeDate]);

  // Fallback data if no schedule provided
  const fallbackSchedule = [
    { start: "10:00", stop: "10:30", activity: "Открытие фестиваля" },
    { start: "10:30", stop: "11:00", activity: "Приветственная речь" },
    { start: "11:00", stop: "12:00", activity: "Основная программа" },
  ];

  const displaySchedule =
    filteredSchedule.length > 0
      ? filteredSchedule.map((item) => ({
          time: `${item.start}-${item.stop}`,
          title: item.activity,
        }))
      : fallbackSchedule.map((item) => ({
          time: `${item.start}-${item.stop}`,
          title: item.activity,
        }));

  return (
    <div className="bg-[#F4F4F4] relative pt-10 md:pt-20 pb-16 md:pb-32 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <h1
            className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative uppercase`}
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

        {/* Date Selection */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-40 space-y-3 md:space-y-0 md:space-x-5 items-center justify-center">
          {uniqueDates.map((date) => (
            <Button
              key={date}
              shadowEnabled={false}
              variant={date === activeDate ? "blue" : "blue_alt"}
              onClick={() => setActiveDate(date)}
            >
              {date}
            </Button>
          ))}
        </div>

        {/* Venue Selection */}
        <div className="flex flex-wrap md:flex-row mt-8 md:mt-14 gap-3 md:gap-0 md:space-x-12 justify-center min-h-10">
          {uniqueVenues.map((venue) => (
            <SchemeSelect
              key={venue}
              active={venue === activeVenue}
              onClick={() => setActiveVenue(venue)}
            >
              {venue}
            </SchemeSelect>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-20 max-w-4xl mx-auto">
          {displaySchedule.map((item, index) => (
            <SchemeItem key={index} time={item.time} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scheme;
