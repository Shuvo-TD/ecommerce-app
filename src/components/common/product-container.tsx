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
    <div className="container mx-auto px-10">
      <div className="flex items-center justify-between p-40">
        {isEven && (
          <ProductItemImage src={item.image.desktop} name={item.name} />
        )}
        <ProductDescription
          isNew={item.new}
          name={item.name}
          description={item.description}
          slug={item.slug}
        />
        {!isEven && (
          <ProductItemImage src={item.image.desktop} name={item.name} />
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
