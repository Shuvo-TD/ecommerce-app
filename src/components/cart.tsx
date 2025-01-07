import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearCart } from '../store/cartSlice';

const Cart: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-32 right-4 mb-6 w-96 bg-white shadow-lg z-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-700 font-semibold">Cart</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 overflow-y-auto max-h-[75%]">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center">
                <Image
                  src="/icons8-cart-50.png"
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </div>
              </div>
              <p className="font-medium">
                {' '}
                {item.quantity
                  ? `$${(item.price * item.quantity).toFixed(2)}`
                  : ''}{' '}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link href="/checkout">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
