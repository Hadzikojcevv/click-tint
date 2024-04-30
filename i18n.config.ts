export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'mk', 'gr', 'rs']
} as const

export type Locale = (typeof i18n)['locales'][number]