import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ZXkSpeaker = () => {
  return (
    <div className=" mx-auto mt-28 items-center justify-center">
      <div className="flex flex-row-reverse gap-20 ">
        <div className="w-full">
          <Image src="/zk7.jpg" alt="zk7-Speaker" width={800} height={300} />
        </div>

        <div className=" w-full  flex flex-col justify-center bg-gray-200 p-10 max-w-lg">
          <h4 className="text-4xl mb-4 text-gray-400">ZX7 SPEAKER</h4>
          <Link
            href="/zk7-speaker"
            className="inline-block bg-transparent max-w-40 text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZXkSpeaker;
