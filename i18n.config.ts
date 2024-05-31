export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'mk', 'gr', 'rs', 'bg', 'hr', 'br', 'nl']
} as const

export type Locale = (typeof i18n)['locales'][number]