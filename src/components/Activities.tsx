/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const iconPath = "/icons/swiper.svg";

function SwiperButton({
  onClick,
  direction = "next",
  disabled = false,
}: {
  onClick: () => void;
  direction?: "next" | "prev";
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-10 h-10 sm:w-12 sm:h-12 
        border border-gray-200 
        transition-colors duration-200
        flex items-center justify-center
        ${direction === "prev" ? "rotate-180" : ""}
        ${
          disabled
            ? "bg-[#0e5a9c] cursor-not-allowed opacity-50"
            : "bg-[#0e5a9c] hover:bg-[#0c4f87] active:bg-[#0a4373] hover:shadow-md"
        }
      `}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    >
      <img src={iconPath} alt="" className={`w-4 h-4 sm:w-5 sm:h-5`} />
    </button>
  );
}

function Slide({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="flex flex-col bg-[#1068B0] py-4 px-3 sm:py-6 sm:px-3.5 relative">
      <h2 className={`${fluxgore.className} text-2xl sm:text-3xl lg:text-4xl text-white leading-none`}>
        {title}
      </h2>
      <img
        className="w-full h-auto object-cover mt-4 sm:mt-7"
        src={imageSrc}
        alt="Slide Image"
      />

      <img
        className="absolute top-full left-0 w-full h-auto object-cover"
        src="/images/activities/paper_tear.png"
        alt="Background Tear"
      />
    </div>
  );
}

function Activities() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div id="activities" className="bg-[#F4F4F4] relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex space-y-6 flex-row sm:justify-between sm:items-center sm:space-y-0">
          <h1
            className={`${fluxgore.className} text-3xl sm:text-5xl lg:text-7xl text-[#060606] relative max-w-2xs md:max-w-full`}
          >
            Активности фестиваля
          </h1>

          <div className="flex items-center justify-center space-x-3 sm:space-x-5">
            <SwiperButton
              onClick={handlePrevious}
              direction="prev"
              disabled={isBeginning}
            />
            <SwiperButton
              onClick={handleNext}
              direction="next"
              disabled={isEnd}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 overflow-visible">
        <div className="mt-8 sm:mt-12 lg:mt-16 overflow-visible">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            watchOverflow={false}
            className="!overflow-visible"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="дрифт такси"
                imageSrc="/images/activities/taxi.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="SMP Race такси"
                imageSrc="/images/activities/race_taxi.png"
              />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Activities;
