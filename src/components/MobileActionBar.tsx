import { HOSPITAL_PHONE_TEL, WHATSAPP_NUMBER, type Language } from '../data/content'

export default function MobileActionBar({ language }: { language: Language }) {
  const mr = language === 'mr'
  const text = encodeURIComponent(mr
    ? 'नमस्कार, मला श्री गजानन हॉस्पिटलमध्ये अपॉइंटमेंटची विनंती करायची आहे.'
    : 'Hello, I would like to request an appointment at Shree Gajanan Hospital.')

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-hospital-line bg-white/95 p-2 shadow-[0_-8px_30px_rgba(18,54,74,0.12)] backdrop-blur md:hidden" aria-label={mr ? 'झटपट संपर्क' : 'Quick contact'}>
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
        <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-hospital-navy px-4 py-3 text-sm font-black text-white">
          <span aria-hidden="true">☎</span>{mr ? 'कॉल करा' : 'Call Hospital'}
        </a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-hospital-teal px-4 py-3 text-sm font-black text-white">
          <span aria-hidden="true">✆</span>WhatsApp
        </a>
      </div>
    </div>
  )
}
