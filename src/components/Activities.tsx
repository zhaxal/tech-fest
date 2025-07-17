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
        w-12 h-12 
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
      <img src={iconPath} alt="" className={`w-5 h-5`} />
    </button>
  );
}

function Slide({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="flex flex-col bg-[#1068B0] py-6 px-3.5 relative">
      <h2 className={`${fluxgore.className} text-4xl text-white leading-none`}>
        {title}
      </h2>
      <img
        className="w-full h-auto object-cover mt-7"
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
    <div className="bg-[#F4F4F4] relative pt-20 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <h1
            className={`${fluxgore.className} text-7xl text-[#060606] relative`}
          >
            Активности фестиваля
          </h1>

          <div className="flex items-center space-x-5">
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

      <div className="container mx-auto overflow-visible">
        <div className="mt-16 overflow-visible">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            watchOverflow={false}
            className="!overflow-visible"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="Автовыставка"
                imageSrc="/images/activities/car1.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Activities;
