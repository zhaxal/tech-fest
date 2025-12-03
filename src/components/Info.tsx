/* eslint-disable @next/next/no-img-element */
import { gothampro } from "@/utils/fonts";
import Button from "./Button";
import Image from "next/image";

function Info() {
  return (
    <div id="info" className={gothampro.className}>
      <div className="bg-[#161616] relative overflow-hidden px-4">
        {/* Background noise pattern */}
        <Image
          src="/images/noise.svg"
          alt=""
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          quality={75}
        />

        <div className="container mx-auto pt-36 relative z-10">
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
                Организованный Департаментом спорта города Москвы, он объединяет
                фанатов скорости и семьи.
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-8">
          </div>

          <div className="flex flex-row mt-8">
            <div className="flex-1 basis-1/3"></div>

            <div className="flex-col md:min-w-2/3 justify-start items-start">
              <Button
                onClick={() => {
                  // open this link in a new tab
                  const url = "https://disk.yandex.ru/d/l8yiw1huY5NU9w";

                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                shadowEnabled={false}
                variant="blue"
              >
                смотреть весь фотоотчёт
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row pt-12 md:pt-24 pb-28 md:pb-56 gap-4 md:gap-0 relative z-10">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-3/4 md:w-1/2 relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/info/moto.png"
                alt="moto"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-3/4 md:w-full relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/info/podium.jpg"
                alt="car"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/3 justify-center md:justify-start">
            <div className="w-0 md:w-1/3"></div>
            <div className="w-3/4 md:w-2/3 relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/info/jump.png"
                alt="jump"
                width={400}
                height={300}
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
