import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecommendationType } from '../../types';

interface Props {
  recommendations: RecommendationType[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center my-32">
        <h2 className="text-3xl font-medium uppercase mb-16">
          You May Also Like
        </h2>
        <div className="flex justify-between w-full">
          {recommendations.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-[350px] h-[350px]">
                <Image
                  src={product.image.desktop}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-medium uppercase my-8">
                {product.name}
              </h3>
              <button className="bg-[#d87d4a] p-3 rounded-lg">
                <Link href={`/${product.slug}`}>See Product</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
