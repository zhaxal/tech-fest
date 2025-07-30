/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Фестиваль технических видов спорта" />
        <meta
          property="og:title"
          content="Фестиваль технических видов спорта"
        />
        <meta
          property="og:description"
          content="Ежегодный Фестиваль технических видов спорта в ЦТВС 'Москва'! Дрифт, джимхана, мотокросс, картинг, море адреналина и хорошего настроения!"
        />
        <meta property="og:url" content="https://tech-fest.sport.mos.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.jpg" />
      </Head>
      <body className="antialiased">
        <div
          style={{ display: "none" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">Фестиваль технических видов спорта</span>
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            Адрес:
            <span itemProp="streetAddress">
              Г. МОСКВА, ЦТВС &apos;МОСКВА&apos;
            </span>
          </div>
          <span itemProp="email">info@mossport.online</span>
          <div itemScope itemType="https://schema.org/ImageObject">
            <img
              src="/preview.jpg"
              itemProp="contentUrl"
              alt="Фестиваль технических видов спорта"
            />
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
