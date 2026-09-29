import { useEffect, useState } from 'react'
import Header from './components/Header'
import MobileActionBar from './components/MobileActionBar'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import { SITE_URL, type Language } from './data/content'

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('clinic-lang')
    return saved === 'mr' ? 'mr' : 'en'
  })

  const isPrivacy = window.location.pathname.replace(/\/$/, '') === '/privacy'

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
    localStorage.setItem('clinic-lang', language)
  }, [language])

  useEffect(() => {
    const canonicalUrl = isPrivacy ? `${SITE_URL}/privacy` : `${SITE_URL}/`
    const title = isPrivacy
      ? 'Privacy Notice | Shree Gajanan Hospital & Critical Care Center'
      : 'Shree Gajanan Hospital & Critical Care Center | Warud'
    const description = isPrivacy
      ? 'Privacy notice for appointment requests made through the Shree Gajanan Hospital website and WhatsApp.'
      : 'Shree Gajanan Hospital & Critical Care Center, Warud. General medicine, diabetes, critical care, anaesthesia, pain care and 24×7 emergency care.'

    document.title = title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  }, [isPrivacy])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-hospital-navy">Skip to content</a>
      <Header language={language} onToggleLanguage={() => setLanguage((current) => current === 'en' ? 'mr' : 'en')} />
      <div id="main-content">{isPrivacy ? <PrivacyPage language={language} /> : <HomePage language={language} />}</div>
      <MobileActionBar language={language} />
    </>
  )
}
