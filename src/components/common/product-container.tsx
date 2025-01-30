import React from 'react';
import ProductDescription from './product-description';
import ProductItemImage from './product-image';
import { APIProduct } from '../../types';

interface Props {
  item: APIProduct;
}

const ProductContainer = ({ item }: Props) => {
  const isEven = item.id % 2 === 0;

  return (
    <div className="mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {isEven && (
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <ProductItemImage src={item.image.desktop} name={item.name} />
          </div>
        )}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex justify-center lg:justify-start">
          <ProductDescription
            isNew={item.new}
            name={item.name}
            description={item.description}
            slug={item.slug}
          />
        </div>
        {!isEven && (
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <ProductItemImage src={item.image.desktop} name={item.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
