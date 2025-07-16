import Cover from "@/components/Cover";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-col min-h-full">
        <Cover />
        <Info />
        <Video />
      </main>
    </>
  );
}
