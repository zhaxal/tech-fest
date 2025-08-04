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

        {/* Cookie Banner */}
        <div
          id="cookie-banner"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#f0f0f0",
            color: "#000",
            padding: "15px",
            fontSize: "14px",
            display: "none",
            zIndex: 1000,
            boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ marginRight: "15px" }}>
              Мы используем cookie для повышения удобства работы с сайтом.
              Подробнее — в{" "}
              <a
                href="https://tech-fest.sport.mos.ru/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                политике конфиденциальности
              </a>
              .
            </div>
            <button
              id="cookie-accept"
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                background: "#eb3333",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Хорошо
            </button>
          </div>
        </div>

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

        {/* Cookie Banner Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                if (!localStorage.getItem("cookieAccepted")) {
                  document.getElementById("cookie-banner").style.display = "block";
                }

                document.getElementById("cookie-accept").addEventListener("click", function () {
                  localStorage.setItem("cookieAccepted", "true");
                  document.getElementById("cookie-banner").style.display = "none";
                });
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
