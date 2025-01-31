import { NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET(request: Request,  {params }: { params: Promise<{ slug: string }> }) {
  const { slug } = (await params) || {};
  if (!slug) {
    return new NextResponse(JSON.stringify({ message: 'Product not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return new NextResponse(JSON.stringify({ message: 'Product not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return NextResponse.json(product);
}
