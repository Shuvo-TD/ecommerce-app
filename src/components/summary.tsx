'use client';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import Image from 'next/image';

const Summary = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.count;
    });
    return total.toFixed(2);
  };

  return (
    <div className="bg-white p-8 my-16 ml-8 w-full md:w-1/4 h-auto">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-8">
        Summary
      </h1>

      {cart.map((product) => (
        <div key={product.id} className="flex justify-between mb-4">
          <div className="flex">
            <Image
              src={product.image.desktop}
              width={50}
              height={50}
              alt="product image"
            />
            <div className="ml-4">
              <p className="text-base">{product.name}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs">Count</p>
            <p className="font-bold">{product.count}</p>
          </div>
        </div>
      ))}

      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <p className="text-sm text-gray-600 uppercase font-semibold">Total</p>
          <p className="text-sm">${calculateTotal()}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm text-gray-600 uppercase font-semibold">
            Shipping
          </p>
          <p className="text-sm">$$$</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm text-gray-600 uppercase font-semibold">Tax</p>
          <p className="text-sm">$$$</p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <p className="text-sm text-gray-600 uppercase font-semibold">
          Grand Total
        </p>
        <p className="text-sm">
          ${(parseFloat(calculateTotal()) + 5.0).toFixed(2)}
        </p>
      </div>

      <button className="w-full mt-4 py-3 px-6 bg-[#d87d4a] text-white text-lg font-semibold rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 hover:bg-[#b76c34] active:scale-95 focus:outline-none">
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;
