/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";

function Scheme() {
  return (
    <div className="bg-[#F4F4F4] relative pt-20">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <h1
            className={`${fluxgore.className} text-7xl text-[#060606] relative`}
          >
            схема фестиваля
          </h1>

          <p
            className={`${gothampro.className} text-[#060606] text-xl max-w-[354px] leading-none self-end`}
          >
            [Выберите площадку, чтобы увидеть расписание]
          </p>
        </div>

        <img
          src="/images/scheme/map.png"
          alt="Festival Map"
          className="mt-20 w-full h-auto"
        />

        <div className="flex flex-row mt-40 space-x-5 justify-center">
          <Button shadowEnabled={false} variant="blue">
            5 сентября
          </Button>
          <Button shadowEnabled={false} variant="blue_alt">
            5 сентября
          </Button>
          <Button shadowEnabled={false} variant="blue">
            5 сентября
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Scheme;
