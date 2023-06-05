'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'
import Button from './ui/button'
import ScrollToTopButton from './scroll-to-top'

export default function LocaleSwitcher() {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
            <span>Locale switcher:</span>
            <ul className='flex'>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <Link href={redirectedPathName(locale)}>
                                <Button className='w-4 h-4'>
                                    {locale}
                                </Button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <ScrollToTopButton />
        </div>
    )
}