import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-[#d87d4a] h-1 w-28 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              Our company is dedicated to providing top-quality products and
              excellent service to our customers. We strive to innovate and
              deliver the best experiences in e-commerce.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col items-start md:items-end">
            <nav className="mb-6">
              <ul className="flex flex-col sm:flex-row gap-6 text-sm">
                <li>
                  <Link href="/" className="hover:underline font-bold text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline font-bold text-lg">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline font-bold text-lg">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline font-bold text-lg">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Social Media Icons */}
            <div className="flex gap-4 text-gray-400 text-lg">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
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
      </div>
    </footer>
  );
};
