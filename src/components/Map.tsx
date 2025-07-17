import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";

function Map() {
  return (
    <div className="bg-[#272727] relative pt-14 pb-32">
      <div className="container mx-auto flex flex-row">
        <div className="flex flex-col w-1/2">
          <h1 className={`${fluxgore.className} text-7xl text-white relative`}>
            как нас найти
          </h1>

          <h2 className={`${fluxgore.className} text-4xl text-[#1068B0] mt-20`}>
            5-7 сентября 2025
          </h2>

          <p
            className={`${gothampro.className} text-3xl text-[#E6E6E6] mt-5 font-medium max-w-2/3`}
          >
            г. Москва парк Технических видов спорта, МЦД2 станция Курьяново
          </p>

          <div className="flex flex-col justify-end flex-grow mt-10">
            <Button shadowEnabled={false}>схема проезда</Button>
          </div>
        </div>

        <div className="w-1/2">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3Ad4445ea405fa54c9148340a7de87f7a4b9df164b35ff2fe504cf79adc1fab55c&amp;source=constructor"
            className="w-full h-[500px]"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
