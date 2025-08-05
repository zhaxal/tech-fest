import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";

function Map() {
  return (
    <div className="bg-[#272727] relative pt-14 pb-32">
      <div className="container mx-auto flex flex-col lg:flex-row px-4">
        <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1
            className={`${fluxgore.className} text-4xl md:text-5xl lg:text-7xl text-white relative uppercase`}
          >
            как нас найти
          </h1>

          <h2
            className={`${fluxgore.className} text-2xl md:text-3xl lg:text-4xl text-[#1068B0] mt-10 lg:mt-20 uppercase`}
          >
            5-7 сентября 2025
          </h2>

          <p
            className={`${gothampro.className} text-lg md:text-xl lg:text-3xl text-[#E6E6E6] mt-5 font-medium lg:max-w-2/3`}
          >
            г. Москва парк Технических видов спорта, МЦД2 станция Курьяново
          </p>

          <div className="flex flex-col justify-end flex-grow mt-6 lg:mt-10">
            <Button shadowEnabled={false}>схема проезда</Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A226a8e42b9987ad9a2b81d08d3da22c826d6209926040115001a9f9962fe7ea8&amp;source=constructor"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
