import { HOSPITAL_MAPS_URL, HOSPITAL_PHONE_DISPLAY, HOSPITAL_PHONE_TEL, hospitalAddress, type Language } from '../data/content'

export default function Contact({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <section id="contact" className="section-pad bg-hospital-bg">
      <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card p-7 sm:p-8">
          <span className="eyebrow">{mr ? 'आम्हाला भेटा' : 'Visit Us'}</span>
          <h2 className="text-3xl font-black text-hospital-navy">Shree Gajanan Hospital & Critical Care Center</h2>
          <address className="mt-4 not-italic leading-7 text-hospital-muted">{hospitalAddress[language]}</address>
          <div className="mt-6 grid gap-2">
            <a href={`tel:${HOSPITAL_PHONE_TEL}`} className="font-black text-hospital-teal">☎ {HOSPITAL_PHONE_DISPLAY}</a>
            <span className="font-semibold text-hospital-muted">{mr ? 'ओपीडी: सकाळी 11 ते 4 व सायं. 6 ते 9' : 'OPD: 11:00 AM–4:00 PM & 6:00 PM–9:00 PM'}</span>
            <span className="font-semibold text-hospital-pink">{mr ? 'अत्यावश्यक सेवा: 24×7' : 'Emergency care: 24×7'}</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href={`tel:${HOSPITAL_PHONE_TEL}`}>{mr ? 'कॉल करा' : 'Call Hospital'}</a>
            <a className="btn-secondary" href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer">{mr ? 'अचूक दिशा पहा' : 'Get Exact Directions'}</a>
          </div>
        </div>

        <a className="card group overflow-hidden" href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer" aria-label={mr ? 'Google Maps मध्ये अचूक स्थान उघडा' : 'Open exact hospital location in Google Maps'}>
          <div className="relative h-72 overflow-hidden bg-[#e9f4ef]">
            <div className="absolute -left-16 top-28 h-16 w-[130%] -rotate-[12deg] border border-[#d8e4df] bg-white" />
            <div className="absolute left-[55%] -top-10 h-[130%] w-16 rotate-[10deg] border border-[#d8e4df] bg-white" />
            <div className="absolute left-[55%] top-[48%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[50%_50%_50%_0] bg-hospital-pink text-2xl text-white shadow-soft [transform:translate(-50%,-50%)_rotate(-45deg)] transition group-hover:scale-105">
              <span className="[transform:rotate(45deg)]">⌖</span>
            </div>
          </div>
          <div className="p-6">
            <strong className="block text-lg font-black text-hospital-navy">{mr ? 'वरुड येथे अचूक स्थान' : 'Exact location in Warud'}</strong>
            <span className="mt-1 block text-sm leading-6 text-hospital-muted">{mr ? 'Google Maps वर हॉस्पिटलचे सत्यापित स्थान उघडा.' : 'Open the hospital listing in Google Maps for directions and travel time.'}</span>
          </div>
        </a>
      </div>
    </section>
  )
}
