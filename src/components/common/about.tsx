import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex items-center justify-center gap-14">
        <div className="flex flex-col items-center justify-center mr-20">
          <h3 className="text-5xl mb-6 max-w-[500px]">
            BRINGING YOU THE <span className="text-orange-500">BEST</span> GEAR
          </h3>
          <p className="text-gray-500 text-base mb-12 max-w-[500px]">
            Located in the heart of New York City, Commercia is the premiere
            destination for high-end watches, headphones, earphones, speakers,
            and audio accessories. We have a large showroom with luxury
            demonstration rooms available for you to browse and experience a
            wide range of our products. Stop by our store to meet some of the
            fantastic people who make Commercia the best place to buy your
            portable audio equipment.
          </p>
        </div>
        <Image
          src="/pat-taylor.jpg"
          alt="about-image"
          width={450}
          height={400}
          className="rounded-md object-fill"
        />
      </div>
    </div>
  );
};

export default About;
