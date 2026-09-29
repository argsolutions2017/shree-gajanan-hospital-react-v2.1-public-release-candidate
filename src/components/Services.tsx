import { services, type Language } from '../data/content'

export default function Services({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <section id="services" className="section-pad bg-hospital-bg">
      <div className="container-shell">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <span className="eyebrow">{mr ? 'वैद्यकीय सेवा' : 'Clinical Services'}</span>
          <h2 className="text-3xl font-black tracking-[-0.035em] text-hospital-navy sm:text-4xl lg:text-5xl">{mr ? 'सामान्य, दीर्घकालीन व तातडीच्या आजारांसाठी उपचार' : 'Care for common, chronic and urgent medical needs'}</h2>
          <p className="mt-4 text-hospital-muted">{mr ? 'रुग्णांच्या गरजेनुसार वैद्यकीय तपासणी, उपचार आणि फॉलो-अप सेवा.' : 'Medical evaluation, treatment and follow-up care tailored to patient needs.'}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title.en} className="card p-6 transition hover:-translate-y-1 hover:border-hospital-teal/35 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hospital-pinkSoft text-xl font-black text-hospital-pink">{service.icon}</div>
              <h3 className="mt-5 text-lg font-black text-hospital-navy">{service.title[language]}</h3>
              <p className="mt-2 text-sm leading-6 text-hospital-muted">{service.text[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
