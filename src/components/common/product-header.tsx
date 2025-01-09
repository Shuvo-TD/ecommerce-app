import React from 'react';

interface Props {
  category: string;
}

const ProductPageHeader = ({ category }: Props) => {
  return (
    <div className="bg-gray-900 text-white h-48 flex justify-center items-center">
      <h1 className="text-4xl font-bold uppercase">{category}</h1>
    </div>
  );
};

export default ProductPageHeader;
