/* eslint-disable @typescript-eslint/no-unused-vars */
import Activities from "@/components/Activities";
import Cover from "@/components/Cover";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Scheme from "@/components/Scheme";
import Video from "@/components/Video";
import Head from "next/head";

export default function Home() {
  const csvData = [
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:30",
      stop: "11:30",
      activity: "Брифинг пилотов",
    },
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "11:30",
      stop: "16:30",
      activity: "Тренировка ДЖИМХАНА",
    },
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "16:30",
      stop: "20:30",
      activity: "Тренировка ДЖИМХАНА",
    },
    {
      date: "5 сентября",
      location: "МФТ",
      start: "9:00",
      stop: "21:00",
      activity: "Размещение сервис-парка",
    },
    {
      date: "5 сентября",
      location: "ЭКСПО-ЗОНА",
      start: "9:00",
      stop: "21:00",
      activity: "Размещение участников выставки",
    },
    {
      date: "5 сентября",
      location: "КАРТИНГ",
      start: "12:00",
      stop: "16:30",
      activity: "Картинг без границ",
    },
    {
      date: "5 сентября",
      location: "КАРТИНГ",
      start: "18:00",
      stop: "21:30",
      activity: "Тренировки гонки 12 часов",
    },
    {
      date: "5 сентября",
      location: "МОТОТРЕК",
      start: "10:00",
      stop: "16:00",
      activity: "Размещение сервис-парка",
    },
    {
      date: "5 сентября",
      location: "МОТОТРЕК",
      start: "16:00",
      stop: "21:00",
      activity: "Регистрация участников",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "9:30",
      stop: "10:15",
      activity: "Брифинг",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:15",
      stop: "11:15",
      activity: "Тренировка ДЖИМХАНА",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "11:15",
      stop: "12:00",
      activity: "G-Такси",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "12:00",
      stop: "12:30",
      activity: "Выступление стант-райдеров",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "12:30",
      stop: "13:30",
      activity: "Парад пилотов",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "13:30",
      stop: "15:30",
      activity: "ДЖИМХАНА Топ-32",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "15:30",
      stop: "16:30",
      activity: "Выступление КАМАЗ-МАСТЕР и G-такси",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "16:30",
      stop: "17:30",
      activity: "ДЖИМХАНА Топ-16",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "17:30",
      stop: "18:30",
      activity: "Выступление КАМАЗ-МАСТЕР и G-такси",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "18:30",
      stop: "18:50",
      activity: "Медиа-заезд",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "18:50",
      stop: "19:20",
      activity: "ДЖИМХАНА Топ-8 и ТОП-4",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "19:20",
      stop: "19:35",
      activity: "ДЖИМХАНА заезд за 3-е место",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "19:35",
      stop: "19:40",
      activity: "ДЖИМХАНА  парад ФИНАЛИСТОВ",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "19:40",
      stop: "19:50",
      activity: "ДЖИМХАНА  Финал",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "19:50",
      stop: "20:00",
      activity: "СуперФинал с Цареградцевым",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "20:00",
      stop: "20:30",
      activity: "Награждение",
    },
    {
      date: "6 сентября",
      location: "МФТ",
      start: "10:00",
      stop: "20:00",
      activity: "Дрифт-такси",
    },
    {
      date: "6 сентября",
      location: "ЭКСПО-ЗОНА",
      start: "10:00",
      stop: "20:00",
      activity: "Активности от партнеров",
    },
    {
      date: "6 сентября",
      location: "КАРТИНГ",
      start: "10:00",
      stop: "14:00",
      activity: "Свободные заезды",
    },
    {
      date: "6 сентября",
      location: "КАРТИНГ",
      start: "14:00",
      stop: "16:00",
      activity: "Мастер-класс для детей",
    },
    {
      date: "6 сентября",
      location: "КАРТИНГ",
      start: "16:00",
      stop: "17:00",
      activity: "Свободные заезды",
    },
    {
      date: "6 сентября",
      location: "КАРТИНГ",
      start: "17:00",
      stop: "19:00",
      activity: "Фиджитал-гонка",
    },
    {
      date: "6 сентября",
      location: "КАРТИНГ",
      start: "19:00",
      stop: "21:00",
      activity: "Свободные заезды",
    },
    {
      date: "6 сентября",
      location: "МОТОТРЕК",
      start: "10:00",
      stop: "20:00",
      activity: "Выездной мотокросс-лагерь",
    },
    {
      date: "6 сентября",
      location: "ЭКШН-СПОРТ",
      start: "11:00",
      stop: "13:30",
      activity: "Тренировочные заезды самокат",
    },
    {
      date: "6 сентября",
      location: "ЭКШН-СПОРТ",
      start: "13:30",
      stop: "20:00",
      activity: "Кубок по самокату",
    },
    {
      date: "6 сентября",
      location: "ДЕТСКАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "20:00",
      activity: "Ретро-машинки, Творческие мастер-классы, Конкурсы, Викторины",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "12:00",
      activity: "Тренировка Битва за Москву",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "12:00",
      stop: "12:30",
      activity: "Выступление КАМАЗ-МАСТЕР",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "12:30",
      stop: "15:00",
      activity: "Битва за Москву Топ-32",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "15:00",
      stop: "15:30",
      activity: "Выступление КАМАЗ-МАСТЕР",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "15:30",
      stop: "18:00",
      activity: "Битва за Москву Топ-16",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "18:00",
      stop: "18:30",
      activity: "Выступление КАМАЗ-Мастер",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "18:30",
      stop: "19:30",
      activity: "Битва за Москву Топ-8, Топ-4",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "19:30",
      stop: "20:00",
      activity: "Битва за Москву Финал",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "20:00",
      stop: "20:30",
      activity: "Награждение",
    },
    {
      date: "7 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "20:30",
      stop: "21:00",
      activity: "Шоу-программа",
    },
    {
      date: "7 сентября",
      location: "МФТ",
      start: "10:00",
      stop: "20:00",
      activity: "Дрифт-такси",
    },
    {
      date: "7 сентября",
      location: "ЭКСПО-ЗОНА",
      start: "10:00",
      stop: "20:00",
      activity: "Активности от партнеров",
    },
    {
      date: "7 сентября",
      location: "КАРТИНГ",
      start: "8:00",
      stop: "20:30",
      activity: "Гонка 12 часов",
    },
    {
      date: "7 сентября",
      location: "МОТОТРЕК",
      start: "10:00",
      stop: "20:00",
      activity: "Выездной мотокросс-лагерь",
    },
    {
      date: "7 сентября",
      location: "ЭКШН-СПОРТ",
      start: "11:00",
      stop: "13:30",
      activity: "Тренировочные заезды BMX",
    },
    {
      date: "7 сентября",
      location: "ЭКШН-СПОРТ",
      start: "13:30",
      stop: "20:00",
      activity: "Кубок по BMX",
    },
    {
      date: "7 сентября",
      location: "ДЕТСКАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "20:00",
      activity: "Ретро-машинки, Творческие мастер-классы, Конкурсы, Викторины",
    },
  ];

  return (
    <>
      <Head>
        <title>Фестиваль технических видов спорта</title>
      </Head>
      <Navbar />
      <main className="flex-col min-h-full">
        <Cover />
        <Info />
        <Video />
        <Scheme scheduleData={csvData} />
        <Events />
        <Activities />
        <Partners />
        <Map />
      </main>
      <Footer />
    </>
  );
}
