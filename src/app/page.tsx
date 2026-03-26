import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import Press from "@/components/Press";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Bio />
      <Music />
      <Videos />
      <Press />
      <Booking />
      <Footer />
    </main>
  );
}
