'use client';
import React, { useState, useEffect } from 'react';
import Nav from '@/components/nav';
import ProductHeader from '@/components/common/product-header';
import ProductContainer from '@/components/common/product-container';
import CardContainer from '@/components/common/card-container';
import About from '@/components/common/about';
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
    <div>
      <Nav />
      <ProductHeader category={category} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => <ProductContainer item={item} key={item.id} />)
      )}

      <div className="container mx-auto mb-28">
        <CardContainer />
      </div>
      <div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Watches;
