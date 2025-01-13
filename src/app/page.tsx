'use client';
import About from '@/components/about';
import CardContainer from '@/components/common/card-container';
import KiranCk from '@/components/common/kiran-ck-LSNJ';
import ZXkSpeaker from '@/components/common/ZxkSpeaker';
import { Footer } from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';

const Home = () => {
  return (
    <div className="flex flex-col sapce-y-4 ">
      <div
        style={{
          backgroundImage: 'url(./background-hero.jpg)',
          height: '100vh',
          backgroundSize: '100%',
          color: 'white',
        }}
      >
        <Nav />
        <Hero />
      </div>
      <div className="container mx-auto mb-28">
        <CardContainer />
      </div>
      <KiranCk />
      <div className="flex flex-col items-center justify-center">
        <ZXkSpeaker />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
