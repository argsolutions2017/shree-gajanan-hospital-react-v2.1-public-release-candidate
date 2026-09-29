import { education, type Language } from '../data/content'

export default function Education({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <section className="section-pad bg-white" id="education">
      <div className="container-shell">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <span className="eyebrow">{mr ? 'रुग्ण मार्गदर्शन' : 'Patient Education'}</span>
          <h2 className="text-3xl font-black tracking-[-0.035em] text-hospital-navy sm:text-4xl lg:text-5xl">{mr ? 'दैनंदिन आरोग्यासाठी उपयुक्त सूचना' : 'Helpful health information for everyday care'}</h2>
          <p className="mt-4 text-hospital-muted">{mr ? 'ही सामान्य माहिती आहे. औषधे, आहार व उपचार डॉक्टरांच्या सल्ल्यानुसारच घ्या.' : 'General information only. Individual treatment, medicines and diet should follow your doctor’s advice.'}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <article key={item.title.en} className="card p-6">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-hospital-teal to-hospital-pink" />
              <h3 className="text-xl font-black text-hospital-navy">{item.title[language]}</h3>
              <p className="mt-3 text-sm leading-7 text-hospital-muted">{item.text[language]}</p>
              <span className="mt-5 inline-block text-xs font-black text-hospital-teal/60">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
