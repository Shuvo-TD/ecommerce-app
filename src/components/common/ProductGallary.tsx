import Image from 'next/image';
import React from 'react';

interface Props {
  gallery: {
    first: { desktop: string };
    second: { desktop: string };
    third: { desktop: string };
  };
}

const ProductGallery = ({ gallery }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="relative h-[275px] w-[500px]">
            <Image
              src={gallery.first.desktop.replace('.', '')}
              alt="product-image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[275px] w-[500px]">
            <Image
              src={gallery.second.desktop.replace('.', '')}
              alt="product-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative h-[600px] w-[600px]">
          <Image
            src={gallery.third.desktop.replace('.', '')}
            alt="product-image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
