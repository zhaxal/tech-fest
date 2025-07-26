/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";

function Partners() {
  return (
    <div
      className="bg-[#161616] relative py-16 sm:py-32 lg:py-52"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`${fluxgore.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white relative`}
        >
          партнеры
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-16">
          <img
            src="/logos/dep.svg"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain"
            alt="Dep Logo"
          />
          <img
            src="/logos/mos.svg"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain"
            alt="Mos Logo"
          />
          <img
            src="/logos/raf.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain"
            alt="Raf Logo"
          />
          <img
            src="/logos/ctvs.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain"
            alt="Ctvs Logo"
          />
          <img
            src="/logos/smp.png"
            className="w-auto h-16 sm:h-20 lg:h-24 object-contain"
            alt="SMP Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
