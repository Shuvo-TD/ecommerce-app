import Link from 'next/link';
import React from 'react';

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  slug: string;
}

const ProductDescription = ({ isNew, name, description, slug }: Props) => {
  return (
    <div className="flex flex-col h-96 w-64 justify-center">
      {isNew && (
        <h3 className="text-orange-500 uppercase text-lg font-semibold tracking-widest mb-4">
          New Product
        </h3>
      )}
      <h1 className="font-medium mb-8 text-3xl uppercase">{name}</h1>
      <p className="text-lg mb-12">{description}</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-3">
        <Link href={`/${slug}`}>See Product</Link>
      </button>
    </div>
  );
};

export default ProductDescription;
