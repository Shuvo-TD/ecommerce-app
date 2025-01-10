'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { APIProduct } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

interface ProductProps {
  product: APIProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, count }));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-10">
      {' '}
      <div className="w-full md:w-1/2">
        {' '}
        <Image
          src={product?.image?.desktop}
          width={500}
          height={500}
          alt="headphones"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col ">
        {' '}
        <div>
          {' '}
          <h3 className="text-lg md:text-xl font-bold text-gray-800  mb-4">
            NEW PRODUCT
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-[500px]">
            {product.description}
          </p>
        </div>
        <div className="flex gap-5 items-center">
          {' '}
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-0 ">
            ${product.price}
          </p>
          <div className="flex items-center">
            {' '}
            <div className="flex items-center mr-4">
              <button
                className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setCount(Math.max(0, count - 1))}
              >
                -
              </button>
              <span className="mx-2 text-gray-600">{count}</span>
              <button
                className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-[#d97d45] p-4 rounded-lg hover:bg-sky-500"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
