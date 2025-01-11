import React from 'react';
import Link from 'next/link';

const ZX7Speaker = () => {
  return (
    <div className="container mx-auto">
      <div
        className="bg-cover bg-no-repeat h-80 w-full flex flex-col justify-center"
        style={{
          backgroundImage: 'url(./zx7speaker.jpg)',
          backgroundSize: '60%',
          color: 'white',
        }}
      >
        <div className="ml-16">
          <h4 className="text-4xl mb-4 text-gray-300">ZX7 SPEAKER</h4>
          <Link
            href="/zx7-speaker"
            className="inline-block bg-transparent text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZX7Speaker;
