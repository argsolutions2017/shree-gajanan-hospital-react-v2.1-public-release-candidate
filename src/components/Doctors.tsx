import { doctors, type Language } from '../data/content'

export default function Doctors({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <section id="doctors" className="section-pad bg-white">
      <div className="container-shell">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <span className="eyebrow">{mr ? 'आमचे डॉक्टर' : 'Our Doctors'}</span>
          <h2 className="text-3xl font-black tracking-[-0.035em] text-hospital-navy sm:text-4xl lg:text-5xl">{mr ? 'मेडिसिन व क्रिटिकल केअरमधील अनुभवी सेवा' : 'Experienced care across medicine and critical care'}</h2>
          <p className="mt-4 text-hospital-muted">{mr ? 'ओपीडी, अतिदक्षता आणि शस्त्रक्रियापूर्व काळजीसाठी दोन तज्ज्ञ डॉक्टर.' : 'Two specialist doctors working together to support outpatient, emergency and perioperative care.'}</p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="card overflow-hidden">
              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className="relative min-h-[310px] bg-hospital-tealSoft sm:min-h-full">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    width="640"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[310px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hospital-navy/45 to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="inline-flex rounded-full bg-hospital-tealSoft px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-hospital-teal">{doctor.specialty[language]}</span>
                  <h3 className="mt-4 text-2xl font-black text-hospital-navy">{doctor.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526b77]">{doctor.qualifications}</p>
                  <p className="mt-2 text-xs font-semibold text-hospital-muted">{mr ? 'नोंदणी क्रमांक' : 'Registration No.'} {doctor.registration}</p>
                  <ul className="mt-5 grid gap-2">
                    {doctor.highlights.map((item) => (
                      <li key={item.en} className="flex gap-3 text-sm leading-6 text-[#48616d]">
                        <span className="font-black text-hospital-teal">✓</span><span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#appointment" className="mt-5 inline-block font-black text-hospital-pink hover:underline">{mr ? 'सल्ल्याची वेळ मागवा →' : 'Request consultation →'}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
