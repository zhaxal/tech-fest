import React from "react";
import Head from "next/head";

import { fluxgore, gothampro } from "@/utils/fonts";
import Button from "@/components/Button";
import { useRouter } from "next/router";

function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="relative p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center h-full">
      <Head>
        <title>Фестиваль технических видов спорта</title>
      </Head>

      <h1
        className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative mb-8 md:mb-12 uppercase`}
      >
        СПАСИБО!
      </h1>

      <p
        className={`${gothampro.className} text-lg md:text-2xl text-center text-[#060606] mb-8 md:mb-12`}
      >
        Ваша заявка отправлена. Если её одобрят, мы свяжемся с Вами!
      </p>

      <Button
        onClick={() => {
          router.push("/");
        }}
        variant="blue"
      >
        Вернуться на сайт
      </Button>
    </div>
  );
}

export default ThankYouPage;
