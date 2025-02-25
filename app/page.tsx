import {NavbarDemo} from '@/components/layout/Header';
import Hero from '@/components/Hero';
import {Footer} from '@/components/layout/Footer';
import { FinalCTA } from '@/components/FinalCTA';
import { InfiniteScroll } from '@/components/infinite-scroll';
import Marquee from '@/components/Marquee';

export default function App() {


  return (
    <div className="min-h-screen bg-black text-white font-space">
      <div className="custom-cursor"/>
      <NavbarDemo />
      <Hero />
      <InfiniteScroll />
      {/* <Marquee /> */}
      <FinalCTA />
      <Footer />
    </div>
  );
}