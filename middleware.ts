import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
function getLocale(request: NextRequest): string | undefined {

  try {
     // Convert the request headers to a format accepted by Negotiator
     const negotiatorHeaders: Record<string, string> = {};
     request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
 
     // @ts-ignore locales are readonly
     const locales: string[] = i18n.locales;
 
 
     // Use Negotiator to get an array of accepted languages from the request headers
     const negotiator = new Negotiator({ headers: negotiatorHeaders });
     const languages = negotiator.languages();

     // Match the accepted languages against the available locales
     const locale = matchLocale(languages, locales, i18n.defaultLocale);
 
     return locale;
  }catch(e) {
    console.error('Error in getLocale function:', e);
    return undefined;
  }
  
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)']
}