'use client';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import CardContainer from '@/components/common/card-container';
import Nav from '@/components/nav';
import About from '@/components/about';
import { Footer } from '@/components/footer';
import ProductHeader from '@/components/common/product-header';
import ProductContainer from '@/components/common/product-container';
import { APIProduct } from '@/types';

const Headphones: NextPage = () => {
  const category = 'earphones';
  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        const filteredData = response.filter(
          (item: APIProduct) => item.category === category
        );
        setData(filteredData);
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, [category]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col mx-auto">
      <Nav />
      <ProductHeader category={category} />

      {data.map((item) => {
        return <ProductContainer item={item} key={item.id} />;
      })}

      <CardContainer />
      <div className="flex flex-col items-center mt-20  mx-auto">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Headphones;
