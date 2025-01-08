import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="mx-auto py-32">
      <div className="flex flex-row gap-28 items-center justify-center space-x-16">
        <div className="flex flex-col justify-center max-w-lg">
          <h4 className="text-3xl font-semibold mb-6">
            BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
            GEAR
          </h4>
          <p className="text-gray-500 text-base mb-12">
            Nestled in the heart of New York City, Audiophile is your ultimate
            destination for premium audio gear. Whether you&apos;re looking for
            high-end headphones, earphones, speakers, or accessories, we have
            something to elevate your listening experience. Explore our
            expansive showroom, designed with luxury demonstration rooms to let
            you experience the best in sound technology. Our knowledgeable team
            is always available to help you find the perfect audio equipment
            that fits your needs.
          </p>
        </div>
        <div className="w-full">
          <Image src="/about.jpg" alt="about-image" height={700} width={800} />
        </div>
      </div>
    </div>
  );
};

export default About;
