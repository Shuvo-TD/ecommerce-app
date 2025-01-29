import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  name: string;
}

const ProductItemImage = ({ src, name }: Props) => {
  return <Image src={src} alt={name} width={450} height={550} />;
};

export default ProductItemImage;
