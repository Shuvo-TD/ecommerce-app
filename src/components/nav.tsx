'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from './cart';
import { useAppSelector } from '../store/hooks';

const Nav: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <nav className=" bg-white min-h-[12vh] shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-gray-800">
            Commercia
          </span>
        </Link>
        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-gray-600 text-md font-semibold hover:text-gray-900"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/watches"
              className="text-gray-600 text-md font-semibold hover:text-gray-900"
            >
              EARPHONES
            </Link>
          </li>
          <li>
            <Link
              href="/earphones"
              className="text-gray-600 text-md font-semibold hover:text-gray-900"
            >
              WATCHES
            </Link>
          </li>
          <li>
            <Link
              href="/headphones"
              className="text-gray-600 text-md font-semibold hover:text-gray-900"
            >
              HEADPHONES
            </Link>
          </li>
        </ul>
        {/* Cart Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCartVisible(!isCartVisible)}
            className=" absolute flex items-center space-x-2 gap-1"
          >
            <Image
              src="/icons8-cart-50.png"
              alt="Cart"
              width={30}
              height={30}
              className="inline-block"
            />
            {cart.length && (
              <span className=" absolute  right-0 left-6 text-gray-800 text-sm rounded-full">
                ({cart.length | 0})
              </span>
            )}
          </button>
        </div>
        {isCartVisible ? <Cart /> : null}
      </div>
    </nav>
  );
};

export default Nav;
