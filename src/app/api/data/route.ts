import { NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET() {
  console.log('API data:', data);
  return NextResponse.json(data);
}
