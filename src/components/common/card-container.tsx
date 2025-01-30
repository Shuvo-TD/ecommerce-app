import React from 'react';
import Card from './card';

const CardContainer = () => {
  return (
    <div className=" flex flex-row justify-center">
      {' '}
      {/* Margin top and bottom */}
      <div className="flex gap-4 items-center justify-center mx-auto ">
        {' '}
        {/* Container and flexbox */}
        <div>
          <Card category="bruno-van-der-preview" />
        </div>
        <div>
          <Card category="pat-taylor-preview" />
        </div>
        <div className=" p-4 mt-28">
          <Card category="headphones" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
