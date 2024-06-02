import crypto from 'crypto'
import { format, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

import { IRequestHeader } from '../types'

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5)

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  const formattedDate = format(utcToZonedTime(parseISO(date), 'Asia/Jakarta'), type)
  return formattedDate
}

export function getRequestHeader(): IRequestHeader {
  const apiKey = process.env.API_KEY || ''
  const apiSecret = process.env.API_SECRET || ''
  const unixTimestamp = Math.floor(new Date().getTime() / 1000)

  const signature = getSignature({ apiKey, apiSecret, unixTimestamp })
  const header = { ['x-datetime']: unixTimestamp, ['x-signature']: signature }
  return header
}

export function getSignature({
  apiKey,
  apiSecret,
  unixTimestamp
}: {
  apiKey: string
  apiSecret: string
  unixTimestamp: number
}) {
  const hmac = crypto.createHmac('sha256', apiKey + unixTimestamp)
  hmac.update(apiSecret)
  const signature = hmac.digest('hex')
  return signature
}
