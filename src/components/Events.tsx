/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "./Button";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: React.ReactNode;
  link: string;
  disabled: boolean;
}

function EventCard(props: EventCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!props.disabled) {
      // Check if it's an external link
      if (props.link.startsWith("http")) {
        window.open(props.link, "_blank");
      } else {
        router.push(props.link);
      }
    }
  };

  return (
    <div
      id={props.id}
      className="flex flex-col md:flex-row bg-[#272727] py-5 px-2.5 md:py-5 md:px-2.5 p-4"
    >
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          className="w-full md:w-2/3 h-auto object-cover rounded"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-4">
        <h2
          className={`${fluxgore.className} text-2xl md:text-4xl text-white leading-tight md:leading-none uppercase`}
        >
          {props.title}
        </h2>
        <div
          className={`${gothampro.className} text-[#E6E6E6] text-sm md:text-base mt-4 md:mt-6 leading-relaxed md:leading-none`}
        >
          {props.description}
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-1/3">
        {!props.disabled && (
          <Button onClick={handleClick} variant="blue" shadowEnabled={false}>
            регистрация
          </Button>
        )}
      </div>
    </div>
  );
}

function Events() {
  return (
    <div
      id="events"
      className="bg-[#161616] relative pt-32 md:pt-64 pb-16 md:pb-32"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <img
        className="absolute top-0 w-full object-cover"
        src="/images/events/paper_tear.png"
        alt="Paper tear"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <h1
            className={`${fluxgore.className} text-4xl md:text-7xl text-white relative uppercase`}
          >
            что вас ждет
          </h1>

          <p
            className={`${gothampro.className} text-[#E6E6E6] opacity-90 text-base md:text-xl max-w-full md:max-w-[536px] leading-relaxed md:leading-none md:self-end`}
          >
            [Для участия в соревнованиях нажмите кнопку регистрация]
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-7 mt-16 md:mt-36">
          <EventCard
            disabled={false}
            id="yuka"
            image="/events/yuka.png"
            title="YUKA Drive Fest Джимхана"
            description={
              <>
                <p>
                  YUKA Drive Fest Джимхана впервые врывается в Москву, и местом
                  его дебюта станет наш Фестиваль технических видов спорта!
                </p>
                <br />

                <p>
                  Это не просто гонки, это настоящий танец на асфальте, где
                  мастерство водителя и мощь автомобиля сливаются воедино.
                </p>
                <br />

                <p>
                  Под чутким руководством и вдохновляющим присутствием
                  легендарного Аркадия Цареградцева, амбассадора и супер-босса
                  соревнований, лучшие джимханисты страны покажут невероятные
                  трюки, демонстрируя виртуозное владение машиной. Скорость,
                  точность, дым из-под колес и филигранные маневры в
                  ограниченном пространстве – вот что такое Джимхана.
                </p>
              </>
            }
            link="https://yukafest.ru/pilots/"
          />
          <EventCard
            disabled={false}
            id="moscow_fight"
            image="/events/moscow_fight.png"
            title="Дрифт «Битва за Москву»"
            description={
              <>
                <p>
                  Любительский турнир по дрифту, который вырос из проекта
                  «Дорога в дрифт», созданного в 2021 году для поиска новых
                  талантов. За три года он превратился в полноценные
                  соревнования с привлекательным призовым фондом.
                </p>
                <br />

                <p>
                  Во второй день фестиваля, 8 сентября, пройдет дрифт-гонка.
                </p>
                <br />

                <p>
                  Соревнования проводятся по традиционной олимпийской системе.
                  Чтобы принять участие, необходимо подать заявку на сайте и
                  дождаться приглашения от организаторов.
                </p>

                <Link
                  href="/reglament.pdf"
                  target="_blank"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Регламент
                </Link>
              </>
            }
            link="/forms/fight"
          />
          <EventCard
            disabled={false}
            id="exhibition"
            image="/images/activities/car1.png"
            title="Автовыставка"
            description={
              <>
                <p>
                  ...Уникальные машины, дрифт-кары, кастом и тюнинг — в одном
                  месте. От ретро до hi-tech, от stance до muscle. Приходи
                  посмотреть, сфотографировать и пообщаться с владельцами.
                </p>
                <br />

                <p>
                  А если хочешь стать участником и побороться за главный приз -
                  подавай заявку!
                </p>
              </>
            }
            link="/forms/exhibition"
          />
          <EventCard
            disabled={true}
            id="moto"
            image="/events/moto.png"
            title="КуБок ШОС по Мотокроссу"
            description={
              <>
                <p>
                  Уникальная возможность увидеть настоящую битву моторов и
                  мастерства на трассе.
                </p>
                <br />

                <p>
                  Лучшие гонщики со всего мира соберутся, чтобы
                  продемонстрировать невероятные прыжки, головокружительные
                  виражи и бескомпромиссную борьбу за победу.
                </p>
                <br />

                <p>
                  Приготовьтесь к взрыву адреналина и незабываемым эмоциям, ведь
                  Кубок ШОС по Мотокроссу обещает стать одним из самых ярких
                  зрелищ фестиваля!
                </p>
              </>
            }
            link="#"
          />
          <EventCard
            disabled={true}
            image="/events/cart.png"
            title="Кубок по Фиджитал картингу"
            description={
              <>
                <p>
                  На Фестивале технических видов спорта 2025 впервые состоится
                  Кубок по Фиджитал Картингу!
                </p>
                <br />

                <p>
                  Это уникальное состязание, где виртуальная реальность
                  встречается с реальной трассой.
                </p>
                <br />

                <p>
                  Участники будут сражаться на симуляторах, а затем переносить
                  свои навыки на настоящий картинг, демонстрируя невероятную
                  адаптивность и мастерство.
                </p>
              </>
            }
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
