/* eslint-disable @next/next/no-img-element */
import { fluxgore, gothampro } from "@/utils/fonts";

interface VideoStatsProps {
  number: string;
  label: string;
}

function VideoStats(props: VideoStatsProps) {
  const { number, label } = props;
  return (
    <div className="flex flex-col">
      <h1 className={`${fluxgore.className} text-8xl text-[#1068B0] relative`}>
        {number}
      </h1>

      <p
        className={`${gothampro.className} text-[#E6E6E6] text-xl max-w-[536px] leading-normal uppercase`}
      >
        {label}
      </p>
    </div>
  );
}

function Video() {
  return (
    <div
      className="bg-[#161616] relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url('/images/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <img
        className="absolute top-0 object-cover"
        src="/images/video/arrows.svg"
        alt="Lines"
      />

      <div className="container mx-auto">
        <div className="flex flex-row space-x-16">
          <div className={fluxgore.className}>
            <h1 className="text-7xl text-white relative">как это Было</h1>
          </div>

          <div className={gothampro.className}>
            <p className="text-[#E6E6E6] opacity-90 text-xl max-w-[536px] leading-none">
              Прошлый фестиваль технических видов спорта стал незабываемым
              праздником скорости и мастерства, собрав рекордное количество
              участников и зрителей.
            </p>
          </div>
        </div>

        <div className="flex mt-14">
          <iframe
            src="https://www.youtube.com/embed/FVzlAMLPFh0?si=E_EaXkQ3tJYtyf_s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-auto aspect-video"
            style={{
              clipPath:
                "polygon(60px 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%, 0 60px)",
            }}
          ></iframe>
        </div>

        <div className="grid grid-cols-4 gap-24 mt-36 pb-64">
          <VideoStats number="260" label="[ единиц техники ]" />
          <VideoStats
            number="11"
            label="[ дисциплин технических видов спорта ]"
          />
          <VideoStats number="24 K" label="[ л.с. суммарной мощности ]" />
          <VideoStats
            number="350+"
            label="[ спортсменов-участников соревнований ]"
          />
        </div>
      </div>

      <img
        className="absolute bottom-0"
        src="/images/video/paper_tear.png"
        alt="Paper tear"
      />
    </div>
  );
}

export default Video;
