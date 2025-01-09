import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  category: string;
}

const Card = ({ category }: Props) => {
  const imageUrl = `/images/thumbnail/${category}.png`;

  return (
    <div className="flex flex-col items-center min-w-[20rem] relative ">
      {' '}
      <Image
        src={imageUrl}
        width={250}
        height={220}
        alt={category}
        className="object-cover z-30"
      />
      <h4 className="uppercase text-xl  font-medium"> {category}</h4>
      <Link
        href={`/${category}`}
        className="text-gray-600 hover:text-gray-800 transition duration-300"
      >
        {' '}
        SHOP
      </Link>
      <div className="bg-gray-100 w-full h-[18rem] rounded-xl absolute bottom-[-90px] z-[-1]"></div>{' '}
    </div>
  );
};

export default Card;
