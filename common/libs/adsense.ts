type WindowWithGoogleAdsense = Window & {
  adsbygoogle: Record<string, unknown>[]
}

declare const window: WindowWithGoogleAdsense

export const pushGoogleAdsense = () => {
  ;(window.adsbygoogle = window.adsbygoogle || []).push({})
}
