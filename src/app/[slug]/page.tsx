'use client';
import React, { useEffect, useState } from 'react';
import Nav from '@/components/nav';
import Product from '@/components/common/product';
import { Footer } from '@/components/footer';
import { APIProduct } from '@/types';
import Recommendations from '@/components/common/recommendation';

const ProductDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<APIProduct>({} as APIProduct);

  useEffect(() => {
    const fetchData = async () => {
      const slug = (await params).slug;
      try {
        const response = await fetch(`/api/data`);
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        const matchingProduct = data.find(
          (item: APIProduct) => item.slug === slug
        );
        setProduct(matchingProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d87d4a]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Product product={product} />

          <Recommendations recommendations={product.others} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
