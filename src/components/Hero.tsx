import { HOSPITAL_MAPS_URL, type Language } from '../data/content'

export default function Hero({ language }: { language: Language }) {
  const mr = language === 'mr'

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#edf9f7] via-white to-[#fff3f8] section-pad">
      <div className="pointer-events-none absolute -right-28 -top-36 h-96 w-96 rounded-full bg-[#a9e7dd]/35 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ffd5e4]/50 blur-2xl" />

      <div className="container-shell hero-grid relative">
        <div>
          <span className="eyebrow">
            <img src="/images/heartbeat-accent.png" alt="" aria-hidden="true" width="28" height="29" className="h-7 w-7 rounded-lg object-cover" />
            {mr ? 'मेडिसिन • क्रिटिकल केअर • भूल • वेदना' : 'Medicine • Critical Care • Anaesthesia • Pain Care'}
          </span>
          <h1 className="hospital-heartline max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-hospital-navy sm:text-5xl lg:text-6xl">
            {mr ? 'आपल्या कुटुंबासाठी विश्वासार्ह वैद्यकीय सेवा.' : 'Reliable medical care for your family, when it matters most.'}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-hospital-muted sm:text-lg">
            {mr
              ? 'श्री गजानन हॉस्पिटल, वरुड येथे मेडिसिन, मधुमेह, अतिदक्षता, भूल व वेदना व्यवस्थापनासाठी तज्ज्ञ डॉक्टरांचा सल्ला घ्या.'
              : 'Consult experienced physicians for general medicine, diabetes, critical care, anaesthesia and pain management at Shree Gajanan Hospital, Warud.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href="#appointment">{mr ? 'अपॉइंटमेंट घ्या' : 'Book Appointment'}</a>
            <a className="btn-secondary" href="tel:+919527059133">{mr ? 'हॉस्पिटलला कॉल करा' : 'Call Hospital'}</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-9 gap-y-4">
            {[
              ['24×7', mr ? 'अत्यावश्यक सेवा' : 'Emergency Care'],
              ['ICU', mr ? 'क्रिटिकल केअर' : 'Critical Care'],
              ['2', mr ? 'तज्ज्ञ डॉक्टर' : 'Specialist Doctors'],
            ].map(([value, label]) => (
              <div key={value} className="grid">
                <strong className="text-xl font-black text-hospital-navy">{value}</strong>
                <span className="text-sm font-bold text-hospital-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="card overflow-hidden border-hospital-teal/10">
            <div className="bg-gradient-to-br from-[#dff7f3] via-white to-[#fff4f8] p-5 sm:p-7">
              <div className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-sm">
                <img
                  src="/images/hospital-logo-brochure.webp"
                  alt="Shree Gajanan Hospital and Critical Care Center logo"
                  width="320"
                  height="220"
                  decoding="async"
                  className="mx-auto h-auto max-h-[300px] w-full max-w-[430px] object-contain"
                />
              </div>
            </div>
            <div className="grid gap-5 p-6 sm:p-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-hospital-teal">{mr ? 'ओपीडी वेळ' : 'OPD Hours'}</p>
                <h2 className="mt-1 text-xl font-black leading-snug text-hospital-navy">{mr ? 'सकाळी 11 ते 4 व सायं. 6 ते 9' : '11:00 AM–4:00 PM & 6:00 PM–9:00 PM'}</h2>
              </div>
              <div className="h-px bg-hospital-line" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-hospital-teal">{mr ? 'पत्ता' : 'Location'}</p>
                <p className="mt-1 font-semibold text-hospital-muted">{mr ? 'पांढुर्णा चौक, वरुड, जि. अमरावती' : 'Pandhurna Chowk, Warud, Dist. Amravati'}</p>
                <a
                  className="mt-3 inline-block font-black text-hospital-pink hover:underline"
                  href={HOSPITAL_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {mr ? 'Google Maps मध्ये उघडा →' : 'Open exact location in Google Maps →'}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-3 hidden rounded-2xl bg-hospital-pink px-4 py-3 text-sm font-extrabold text-white shadow-soft sm:block">24×7 Emergency</div>
        </div>
      </div>
    </section>
  )
}
