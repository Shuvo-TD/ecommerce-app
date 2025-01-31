import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col h-[75vh] justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <h3 className="uppercase text-base md:text-xl tracking-[0.5rem] text-gray-600 mb-4">
        New Arrival
      </h3>
      <h1 className="font-semibold mb-8 uppercase text-4xl md:text-6xl lg:text-7xl">
        Aether White Digital
      </h1>
      <p className="text-lg text-gray-500 mb-12 max-w-2xl">
        Embrace minimalist elegance with the Aether White Digital watch. A sleek
        design combined with advanced digital functionality, perfect for the
        modern individual.
      </p>
      <Link
        href="/aether-white-digital"
        className="bg-[#d97d45] text-white py-3 px-6 rounded-md hover:bg-[#c06c38] transition duration-300 w-fit"
      >
        See Product
      </Link>
    </div>
  );
};

export default Hero;
