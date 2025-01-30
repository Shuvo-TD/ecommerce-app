'use client';
import React, { useEffect, useState } from 'react';
import Nav from '@/components/nav';
import Product from '@/components/common/product';
import { Footer } from '@/components/footer';
import { APIProduct } from '@/types';
import Recommendations from '@/components/common/recommendation';

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<APIProduct>({
    id: 0,
    slug: '',
    name: '',
    image: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    category: '',
    new: true,
    price: 0,
    description: '',
    features: '',
    includes: [
      {
        quantity: 0,
        item: '',
      },
      {
        quantity: 0,
        item: '',
      },
      {
        quantity: 0,
        item: '',
      },
      {
        quantity: 0,
        item: '',
      },
      {
        quantity: 0,
        item: '',
      },
    ],
    gallery: {
      first: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
      second: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
      third: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
    },
    others: [
      {
        slug: '',
        name: '',
        image: {
          mobile: '',
          tablet: '',
          desktop: '',
        },
      },
      {
        slug: '',
        name: '',
        image: {
          mobile: '',
          tablet: '',
          desktop: '',
        },
      },
      {
        slug: '',
        name: '',
        image: {
          mobile: '',
          tablet: '',
          desktop: '',
        },
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { slug } = await params;
      try {
        const response = await fetch(`/api/data`);
        if (!response.ok) {
          console.error('Error fetching product:', response.statusText);
          return;
        }

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <Product product={product} />
      <Recommendations recommendations={product.others} />
      <Footer />
    </>
  );
};

export default ProductDetails;
