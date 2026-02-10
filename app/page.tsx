import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import { FloatingNav } from "@/ui/floating-navbar";
import Grid from "@/ui/Grid";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center overflow-clip items-center flex-col  mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProject/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
