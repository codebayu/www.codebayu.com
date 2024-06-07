import { Inter, Roboto_Condensed, Sora } from 'next/font/google'

export const soraSans = Sora({
  variable: '--soraSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const robotoCondensed = Roboto_Condensed({
  variable: '--robotoCondensed-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '700']
})

export const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700']
})
