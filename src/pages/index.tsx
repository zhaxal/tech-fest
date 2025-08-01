/* eslint-disable @typescript-eslint/no-unused-vars */
import Activities from "@/components/Activities";
import Cover, { CoverSoon } from "@/components/Cover";
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
  return (
    <>
      <Head>
        <title>Фестиваль технических видов спорта</title>
      </Head>
      <CoverSoon />
    </>
  );
}
