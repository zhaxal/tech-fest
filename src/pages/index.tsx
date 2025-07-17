import Activities from "@/components/Activities";
import Cover from "@/components/Cover";
import Events from "@/components/Events";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Scheme from "@/components/Scheme";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-col min-h-full">
        <Cover />
        <Info />
        <Video />
        <Scheme />
        <Events />
        <Activities />
      </main>
    </>
  );
}
