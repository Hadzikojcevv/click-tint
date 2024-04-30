import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  mk: () => import('@/dictionaries/mk.json').then(module => module.default),
  gr: () => import('@/dictionaries/gr.json').then(module => module.default),
  rs: () => import('@/dictionaries/rs.json').then(module => module.default),
  bg: () => import('@/dictionaries/bg.json').then(module => module.default)



}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()