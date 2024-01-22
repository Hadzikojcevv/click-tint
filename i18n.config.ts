export const i18n = {
  defaultLocale: 'en',
  locales: [{key: 'en', flag: "https://i.imgur.com/x3lVTnH.jpg"}, {key:'mk', flag: "https://i.imgur.com/vRHwjaK.png" }]
} as const

export type Locale = (typeof i18n)['locales'][number]
