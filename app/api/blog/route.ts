import { NextRequest, NextResponse } from 'next/server';

import axios from 'axios';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const DEV_TO_URL = 'https://dev.to/api/articles/me';
  const headers = {
    'api-key': process.env.DEVTO_KEY
  };
  try {
    const response = await axios.get(DEV_TO_URL, {
      headers
    });
    return NextResponse.json({ status: true, data: response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 });
  }
};
