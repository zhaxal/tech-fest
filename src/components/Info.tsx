/* eslint-disable @next/next/no-img-element */
import { gothampro } from "@/utils/fonts";
import Button from "./Button";

function Info() {
  return (
    <div className={gothampro.className}>
      <div
        className="bg-[#161616] relative overflow-hidden"
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
              <p className="text-white opacity-60 text-base uppercase font-medium">
                [ о нас ]
              </p>
            </div>

            <div className="flex-col max-w-2/3">
              <p className="text-white text-4xl font-normal">
                Фестиваль технических видов спорта 2025 — это седьмой{" "}
                <span className="text-[#1068B0]">год драйва и эмоций</span>!
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 basis-2/12"></div>

            <div className="flex-col max-w-10/12">
              <p className="text-white text-4xl font-normal">
                Организованный Департаментом спорта Москвы и РАФ в День города,
                он объединяет фанатов скорости и семьи.
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-8">
            <div className="flex-1 basis-1/3"></div>

            <div className="flex-col max-w-2/3">
              <p className="text-white text-base font-normal max-w-2/5">
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

            <div className="flex-col min-w-2/3 justify-start items-start">
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

        <div className="container mx-auto flex flex-row pt-24 pb-56">
          <div className="w-1/3">
            <img
              src="/images/info/moto.png"
              alt="moto"
              className="w-1/2 h-auto object-cover"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/images/info/podium.png"
              alt="car"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex w-1/3">
            <div className="w-1/3"></div>
            <div className="w-2/3">
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
