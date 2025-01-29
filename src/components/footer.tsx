import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] mt-4 text-white py-8">
      {/* Highlight Bar */}
      <div className="bg-[#d87d4a] h-1 w-28 mx-auto mb-8"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 lg:gap-64">
        {' '}
        {/* Adjusted gap for responsiveness */}
        {/* Company Description */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Our company is dedicated to providing top-quality products and
            excellent service to our customers. We strive to innovate and
            deliver the best experiences in e-commerce.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col items-start justify-center md:items-end">
          {' '}
          {/* Align items to the end on medium screens and up */}
          <nav className="mb-6">
            {' '}
            {/* Added margin bottom for spacing */}
            <ul className="flex flex-col sm:flex-row gap-6 text-sm">
              {' '}
              {/* Increased gap for better spacing */}
              <li>
                <Link href="/" className="hover:underline font-bold text-lg">
                  <h2>Home</h2>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline font-bold text-lg"
                >
                  <h2>About</h2>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:underline font-bold text-lg"
                >
                  <h2>Services</h2>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline font-bold text-lg"
                >
                  <h2> Contact</h2>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Social Media Icons */}
          <div className="flex gap-4 text-gray-400 text-lg items-start justify-center">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};
