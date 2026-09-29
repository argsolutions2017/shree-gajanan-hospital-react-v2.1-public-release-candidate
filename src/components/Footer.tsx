import type { Language } from '../data/content'

export default function Footer({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <footer className="bg-[#102f3c] py-12 text-[#d8e5e9]">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl border border-white/10"><img src="/images/gajanan-maharaj.webp" alt="" aria-hidden="true" width="480" height="721" loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_18%]" /></div>
              <div><strong className="text-xl text-white">Shree Gajanan Hospital</strong><p className="mt-1 text-sm text-[#9eb6bf]">{mr ? 'मेडिसिन • क्रिटिकल केअर • भूल • वेदना व्यवस्थापन' : 'Medicine • Critical Care • Anaesthesia • Pain Management'}</p></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 font-extrabold">
            <a href="#doctors" className="hover:text-white">{mr ? 'डॉक्टर्स' : 'Doctors'}</a>
            <a href="#services" className="hover:text-white">{mr ? 'उपचार' : 'Services'}</a>
            <a href="#appointment" className="hover:text-white">{mr ? 'अपॉइंटमेंट' : 'Appointment'}</a>
            <a href="/privacy" className="hover:text-white">{mr ? 'गोपनीयता' : 'Privacy'}</a>
          </div>
        </div>
        <div className="mt-9 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs text-[#91a9b2] md:flex-row">
          <span>© {new Date().getFullYear()} Shree Gajanan Hospital & Critical Care Center.</span>
          <span className="max-w-2xl md:text-right">{mr ? 'वैद्यकीय आपत्कालीन स्थितीत हॉस्पिटलला थेट संपर्क करा किंवा जवळच्या आपत्कालीन सेवेकडे जा.' : 'For a medical emergency, contact the hospital directly or go to the nearest emergency service.'}</span>
        </div>
      </div>
    </footer>
  )
}
