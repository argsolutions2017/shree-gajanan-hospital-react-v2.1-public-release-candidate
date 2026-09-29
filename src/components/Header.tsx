import { useState } from 'react'
import type { Language } from '../data/content'

type Props = { language: Language; onToggleLanguage: () => void }

export default function Header({ language, onToggleLanguage }: Props) {
  const [open, setOpen] = useState(false)
  const mr = language === 'mr'
  const close = () => setOpen(false)

  return (
    <>
      <div className="bg-hospital-navy text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-xs sm:text-sm">
          <span className="font-semibold">{mr ? '24×7 अत्यावश्यक सेवा उपलब्ध' : '24×7 emergency care available'}</span>
          <a href="tel:+919527059133" className="font-extrabold text-white hover:text-[#d6fffa]">☎ +91 95270 59133</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-hospital-teal/10 bg-white/95 backdrop-blur-xl">
        <div className="container-shell flex min-h-[82px] items-center justify-between gap-5">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Shree Gajanan Hospital home">
            <div className="brand-mark shrink-0">
              <img src="/images/gajanan-maharaj.webp" alt="Gajanan Maharaj" width="480" height="721" className="h-full w-full object-cover object-[50%_18%]" />
            </div>
            <div className="min-w-0">
              <strong className="block truncate text-base font-black leading-tight text-hospital-navy sm:text-lg">Shree Gajanan Hospital</strong>
              <small className="block truncate text-xs font-bold text-hospital-teal sm:text-sm">& Critical Care Center</small>
            </div>
          </a>

          <button
            type="button"
            className="rounded-xl border border-hospital-line px-3 py-2 text-xl font-bold text-hospital-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-[82px] flex-col gap-1 border-b border-hospital-line bg-white p-5 shadow-soft lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
            <a onClick={close} href="#doctors" className="rounded-lg px-3 py-2 font-bold text-[#48616d] hover:bg-hospital-tealSoft hover:text-hospital-teal">{mr ? 'डॉक्टर्स' : 'Doctors'}</a>
            <a onClick={close} href="#services" className="rounded-lg px-3 py-2 font-bold text-[#48616d] hover:bg-hospital-tealSoft hover:text-hospital-teal">{mr ? 'उपचार' : 'Services'}</a>
            <a onClick={close} href="#facilities" className="rounded-lg px-3 py-2 font-bold text-[#48616d] hover:bg-hospital-tealSoft hover:text-hospital-teal">{mr ? 'सुविधा' : 'Facilities'}</a>
            <a onClick={close} href="#contact" className="rounded-lg px-3 py-2 font-bold text-[#48616d] hover:bg-hospital-tealSoft hover:text-hospital-teal">{mr ? 'संपर्क' : 'Contact'}</a>
            <button onClick={onToggleLanguage} type="button" className="rounded-lg px-3 py-2 text-left font-extrabold text-hospital-pink hover:bg-hospital-pinkSoft">
              {mr ? 'English' : 'मराठी'}
            </button>
            <a onClick={close} href="#appointment" className="btn-primary min-h-11 px-4 py-2 text-sm">{mr ? 'अपॉइंटमेंट घ्या' : 'Book Appointment'}</a>
          </nav>
        </div>
      </header>
    </>
  )
}
