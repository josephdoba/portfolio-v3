import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import BlogLatest from "@/components/BlogLatest";

export default function Home() {
  return (
    <div className="w-full">
       {/* px-[15%] */}

      {/* <canvas class="vanta-canvas" "></canvas> */}
      <HeroBanner/>
      <ServicesSection/>
      <BlogLatest/>

    </div>
  );
}
