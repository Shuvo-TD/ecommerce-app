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
      <div className="flex flex-col items-center my-16 md:my-32">
        <h2 className="text-2xl md:text-3xl font-medium uppercase mb-8 md:mb-16">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {recommendations.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={product.image.desktop}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium uppercase my-4 md:my-8">
                {product.name}
              </h3>
              <Link
                href={`/${product.slug}`}
                className="bg-[#d87d4a] text-white py-2 px-6 rounded-md hover:bg-[#c06c38] transition duration-300"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
