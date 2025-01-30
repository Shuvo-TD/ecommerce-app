'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from './cart';
import { useAppSelector } from '../store/hooks';

const Nav: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <nav className="bg-white min-h-[12vh] shadow-md z-50 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <Link href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-gray-800">
            Commercia
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'Earphones', 'Headphones', 'Watches'].map((item) => (
            <li key={item}>
              <Link
                href={`/${
                  item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                }`}
                className="text-gray-600 text-md font-semibold hover:text-gray-900 transition-colors duration-300"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-24 left-0 right-0 bottom-0 bg-white z-50 p-8">
            <ul className="flex flex-col space-y-6">
              {['Home', 'Earphones', 'Headphones', 'Watches'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                    }`}
                    className="text-2xl font-semibold text-gray-800 hover:text-[#d87d4a]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cart Button */}
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => setIsCartVisible(!isCartVisible)}
            className="flex items-center space-x-2 gap-1"
          >
            <Image
              src="/icons8-cart-50.png"
              alt="Cart"
              width={30}
              height={30}
              className="inline-block"
            />
            {cart.length > 0 && (
              <span className="absolute  right-0 left-6 text-gray-800 text-sm rounded-full p-2">
                ({cart.length})
              </span>
            )}
          </button>
        </div>
        {isCartVisible && <Cart />}
      </div>
    </nav>
  );
};

export default Nav;
