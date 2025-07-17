/* eslint-disable @next/next/no-img-element */
import { fluxgore } from "@/utils/fonts";

function Partners() {
  return (
    <div
      className="bg-[#161616] relative py-52"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto">
        <h1 className={`${fluxgore.className} text-7xl text-white relative`}>
          партнеры
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-24 mt-16">
          <img
            src="/logos/dep.svg"
            className="w-auto h-24 object-contain"
            alt="Dep Logo"
          />
          <img
            src="/logos/mos.svg"
            className="w-auto h-24 object-contain"
            alt="Mos Logo"
          />
          <img
            src="/logos/raf.png"
            className="w-auto h-24 object-contain"
            alt="Raf Logo"
          />
          <img
            src="/logos/ctvs.png"
            className="w-auto h-24 object-contain"
            alt="Ctvs Logo"
          />
          <img
            src="/logos/smp.png"
            className="w-auto h-24 object-contain"
            alt="SMP Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
