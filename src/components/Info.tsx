/* eslint-disable @next/next/no-img-element */
import { gothampro } from "@/utils/fonts";
import Button from "./Button";

function Info() {
  return (
    <div id="info" className={gothampro.className}>
      <div
        className="bg-[#161616] relative overflow-hidden px-4"
        style={{
          backgroundImage: `url('/images/noise.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto pt-36">
          <div className="flex flex-row">
            <div className="flex-1 basis-1/3">
              <p className="text-white opacity-60 text-sm md:text-base uppercase font-medium">
                [ о нас ]
              </p>
            </div>

            <div className="flex-col max-w-2/3">
              <p className="text-white text-base md:text-4xl font-normal">
                Фестиваль технических видов спорта 2025 — это седьмой{" "}
                <span className="text-[#1068B0]">год драйва и эмоций</span>!
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 basis-2/12"></div>

            <div className="flex-col max-w-10/12">
              <p className="text-white text-base md:text-4xl font-normal">
                Организованный Департаментом спорта Москвы и РАФ,
                он объединяет фанатов скорости и семьи.
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-8">
            <div className="flex-1 basis-1/3"></div>

            <div className="flex-col max-w-2/3">
              <p className="text-white text-base md:text-base font-normal md:max-w-2/5">
                В этом году, помимо традиционной «Битвы за Москву» по дрифту,
                вас ждут абсолютно новые для фестиваля соревнования:{" "}
                <span className="text-[#1068B0]">
                  YUKA Джимхана и Кубок ШОС по Мотокроссу.
                </span>
                А также масса активностей: выставки авто/мото, квест,
                граффити-контест, детская зона и киберкафе. <br />
                <br />
                Благодаря новым партнерам, праздник будет еще ярче. Приходите
                всей семьей и получите незабываемые впечатления!
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-8">
            <div className="flex-1 basis-1/3"></div>

            <div className="flex-col md:min-w-2/3 justify-start items-start">
              <Button
                onClick={() => {
                  console.log("test");
                }}
                shadowEnabled={false}
                variant="blue"
              >
                смотреть весь фотоотчёт
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row pt-12 md:pt-24 pb-28 md:pb-56 gap-4 md:gap-0">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/images/info/moto.png"
              alt="moto"
              className="w-3/4 md:w-1/2 h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/images/info/podium.jpg"
              alt="car"
              className="w-3/4 md:w-full h-auto object-cover"
            />
          </div>
          <div className="flex w-full md:w-1/3 justify-center md:justify-start">
            <div className="w-0 md:w-1/3"></div>
            <div className="w-3/4 md:w-2/3">
              <img
                src="/images/info/jump.png"
                alt="jump"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
