'use client';
import { NextPage } from 'next';
import React from 'react';
import Nav from '@/components/nav';
import { Footer } from '@/components/footer';
import PaymentDetails from './paymentDetails';
import Summary from './summary';

const Checkout: NextPage = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <Nav />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          <PaymentDetails />
          <Summary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
