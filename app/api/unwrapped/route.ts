import { NextResponse } from 'next/server'

import { getUnwrappedServices } from '@/services/unwrapped'

export const GET = async () => {
  try {
    const data = await getUnwrappedServices()
    return NextResponse.json({ status: true, data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 })
  }
}
