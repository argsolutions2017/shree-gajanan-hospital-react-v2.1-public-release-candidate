import { facilities, type Language } from '../data/content'

export default function Facilities({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <section id="facilities" className="section-pad bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <div>
          <span className="eyebrow">{mr ? 'उपलब्ध सुविधा' : 'Facilities'}</span>
          <h2 className="text-3xl font-black tracking-[-0.035em] text-hospital-navy sm:text-4xl lg:text-5xl">{mr ? 'तपासणी व क्रिटिकल केअर सुविधा एकाच ठिकाणी' : 'Diagnostic and critical-care support under one roof'}</h2>
          <p className="mt-4 max-w-xl leading-7 text-hospital-muted">{mr ? 'रुग्ण तपासणी, मॉनिटरिंग आणि अतिदक्षता सेवांसाठी आवश्यक सुविधा उपलब्ध.' : 'Essential facilities for patient evaluation, monitoring and critical-care support.'}</p>
          <a href="#contact" className="btn-secondary mt-7">{mr ? 'हॉस्पिटलशी संपर्क करा' : 'Contact Hospital'}</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {facilities.map(([code, item]) => (
            <div key={code} className="card flex items-center gap-4 p-4">
              <b className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-hospital-tealSoft text-xs font-black text-hospital-teal">{code}</b>
              <span className="font-bold leading-6 text-[#415f6a]">{item[language]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
