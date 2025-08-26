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
import { act } from "react";

export default function Home() {
  const csvData = [
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "10:30",
      activity: "Репетиция шоу",
    },
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "11:00",
      stop: "11:30",
      activity: "Открытие фестиваля",
    },
    {
      date: "5 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "12:00",
      stop: "13:00",
      activity: "Показательные выступления",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "10:30",
      activity: "Репетиция шоу",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "10:30",
      activity: "Репетиция шоу",
    },
    {
      date: "6 сентября",
      location: "ГЛАВНАЯ ПЛОЩАДКА",
      start: "10:00",
      stop: "10:30",
      activity: "Репетиция шоу",
    },
    // ... more data
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
