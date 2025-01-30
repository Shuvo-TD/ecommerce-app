'use client';
import React, { useState, useEffect } from 'react';
import Nav from '@/components/nav';
import ProductHeader from '@/components/common/product-header';
import ProductContainer from '@/components/common/product-container';
import CardContainer from '@/components/common/card-container';
import About from '@/components/about';
import { Footer } from '@/components/footer';
import { APIProduct } from '@/types';

const Watches = () => {
  const category = 'watches';
  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(
          data.filter(
            (item: { category: string }) => item.category === category
          )
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const products = data;

  return (
    <div className="flex flex-col mx-auto">
      <Nav />
      <ProductHeader category={category} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => <ProductContainer item={item} key={item.id} />)
      )}
      <h3 className="text-center text-3xl font-semibold mt-20">
        You may also like
      </h3>
      <CardContainer />
      <div className="items-center mt-20  mx-auto">
        <About />
      </div>

      <Footer />
    </div>
  );
};

export default Watches;
