import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const KiranCk = () => {
  return (
    <div className="container mx-auto m-20">
      {' '}
      <div className="bg-[#d87d4a] relative flex items-center overflow-hidden">
        {' '}
        <div className="absolute left-[-150px] top-0 bottom-0 w-[400px] bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-left"></div>
        <div className="pl-20 pr-10">
          {' '}
          <Image
            src="/images/kiran-ck.png"
            alt="zx9-speaker"
            width={400}
            height={500}
            className="relative z-10"
          />
        </div>
        <div className="pr-24">
          {' '}
          <h2 className="font-semibold uppercase text-5xl mb-8 text-white leading-tight">
            {' '}
            KiranCK Headphone
          </h2>
          <p className="text-lg text-white mb-12">
            {' '}
            Upgrade to premium haedphone that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black p-5 rounded-md hover:bg-sky-600 transition-all ">
            {' '}
            {/* button */}
            <Link href="/zx9-speaker" className="text-white">
              {' '}
              {/* Link Styling */}
              SEE PRODUCT
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KiranCk;
