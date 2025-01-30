import React from 'react';
import Card from './card';

const CardContainer = () => {
  return (
    <div className="my-16">
      {/* Margin top and bottom */}
      <div className="container mx-auto px-4">
        {/* Container for centering and padding */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Flex container for cards */}
          <div className="w-full lg:w-1/3">
            <Card category="bruno-van-der-preview" />
          </div>
          <div className="w-full lg:w-1/3">
            <Card category="pat-taylor-preview" />
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-32">
            <Card category="headphones" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
