/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

function EventCard(props: EventCardProps) {
  return (
    <div className="flex flex-row bg-[#272727] py-5 px-2.5">
      <div className="w-1/3">
        <img
          className="w-2/3 h-auto object-cover"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="w-1/3">
        <h2
          className={`${fluxgore.className} text-4xl text-white leading-none`}
        >
          {props.title}
        </h2>
        <p
          className={`${gothampro.className} text-[#E6E6E6] text-base mt-6 leading-none`}
        >
          {props.description}
        </p>
      </div>
      <div className="flex justify-end w-1/3">
        <Button variant="blue" shadowEnabled={false}>
          регистрация
        </Button>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div
      className="bg-[#161616] relative pt-64 pb-32"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <img
        className="absolute top-0 object-cover"
        src="/images/events/paper_tear.png"
        alt="Paper tear"
      />

      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className={fluxgore.className}>
            <h1 className="text-7xl text-white relative">что вас ждет</h1>
          </div>

          <p
            className={`${gothampro.className} text-[#E6E6E6] opacity-90 text-xl max-w-[536px] leading-none self-end`}
          >
            [Для участия в соревнованиях нажмите кнопку регистрация]
          </p>
        </div>

        <div className="flex flex-col space-y-7 mt-36">
          <EventCard
            image="/events/yuka.png"
            title="YUKA Drive Fest Джимхана"
            description="YUKA Drive Fest Джимхана впервые врывается в Москву, и местом его дебюта станет наш Фестиваль технических видов спорта!
            Это не просто гонки, это настоящий танец на асфальте, где мастерство водителя и мощь автомобиля сливаются воедино.
            Под чутким руководством и вдохновляющим присутствием легендарного Аркадия Цареградцева, амбассадора и супер-босса соревнований, лучшие джимханисты страны покажут невероятные трюки, демонстрируя виртуозное владение машиной. Скорость, точность, дым из-под колес и филигранные маневры в ограниченном пространстве – вот что такое Джимхана."
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
