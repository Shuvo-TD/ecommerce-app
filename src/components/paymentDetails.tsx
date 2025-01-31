import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="bg-white p-4 md:p-8 lg:p-16 my-8 md:my-16 w-full lg:w-3/4 mx-auto">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-8">
        Checkout
      </h1>

      <div className="mb-8 md:mb-16">
        <h2 className="text-xl text-[#d87d4a] font-medium mb-4 uppercase">
          Billing Details
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <input
            type="tel"
            placeholder="+1 202-555-0136"
            className="w-full p-3 border rounded-md"
          />
        </div>
      </div>

      <div className="mb-8 md:mb-16">
        <h2 className="text-xl text-[#d87d4a] font-medium mb-4 uppercase">
          Shipping Info
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="123 Baker street"
            className="w-full p-3 border rounded-md"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="11001"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="New York"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 border rounded-md"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl text-[#d87d4a] font-medium mb-4 uppercase">
          Payment Details
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <p>Payment Method</p>
              <div className="flex flex-col space-y-2 mt-2">
                <div className="p-3 border border-gray-300 rounded-md">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="e-money"
                      className="mr-2"
                    />
                    <span>e-Money</span>
                  </label>
                </div>
                <div className="p-3 border border-gray-300 rounded-md">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="cash-on-delivery"
                      className="mr-2"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="238590288"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="6891"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
