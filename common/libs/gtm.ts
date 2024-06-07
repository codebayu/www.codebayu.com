'use client'

import { sendGTMEvent } from '@next/third-parties/google'

export const sendPageView = (url: string) => {
  sendGTMEvent({ event: 'page_viewed', url })
}

export const sendDataLayer = (data: Record<string, unknown>) => {
  sendGTMEvent(data)
}
