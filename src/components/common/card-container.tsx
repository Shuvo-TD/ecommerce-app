import React from 'react';
import Card from './card';

const CardContainer = () => {
  return (
    <div className="mx-48">
      {' '}
      {/* Margin top and bottom */}
      <div className="mx-auto flex justify-between items-center">
        {' '}
        {/* Container and flexbox */}
        <Card category="bruno-van-der-preview" />
        <Card category="pat-taylor-preview" />
        <div className=" p-4 mt-28">
          <Card category="headphones" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
