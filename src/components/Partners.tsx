/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";
import Button from "./Button";
import Image from "next/image";

function Partners() {
  return (
    <div id="partners" className="bg-[#161616] relative py-16 sm:py-32 lg:py-52">
      {/* Background noise pattern */}
      <Image
        src="/images/noise.svg"
        alt=""
        fill
        className="object-cover opacity-50 mix-blend-overlay"
        quality={75}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h1
            className={`${fluxgore.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white relative uppercase`}
          >
            партнеры
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-16">
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/dep.svg"
              alt="Dep Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/mos.svg"
              alt="Mos Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/raf.png"
              alt="Raf Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/ctvs.png"
              alt="Ctvs Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/xenum.svg"
              alt="Xenum Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/GNVOil.svg"
              alt="GNVOil Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/Q8oils.svg"
              alt="Q8oils Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-auto h-16 sm:h-20 lg:h-24 relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/logos/IMG_3601.png"
              alt="Partner Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
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
