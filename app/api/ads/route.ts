import { NextResponse } from 'next/server'

import { getRunningTextAdsServices } from '@/services/ads'

export const GET = async () => {
  try {
    const data = await getRunningTextAdsServices()
    return NextResponse.json({ status: true, data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 })
  }
}
