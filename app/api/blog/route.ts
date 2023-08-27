import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const DEV_TO_URL = 'https://dev.to/api/articles/me';
  const headers = {
    'api-key': process.env.DEVTO_KEY,
  };
  try {
    const response = await axios.get(DEV_TO_URL, {
      headers,
    });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
