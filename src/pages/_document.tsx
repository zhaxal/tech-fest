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

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

              ym(90126150, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        {/* Yandex.Metrika noscript fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/90126150"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

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
