import { HOSPITAL_MAPS_URL, type Language } from '../data/content'
import Hero from '../components/Hero'
import Doctors from '../components/Doctors'
import Services from '../components/Services'
import Facilities from '../components/Facilities'
import AppointmentForm from '../components/AppointmentForm'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <main>
      <Hero language={language} />

      <section className="relative z-10 -mt-5 pb-5">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          <a className="card flex items-center gap-4 p-5 transition hover:-translate-y-1" href="tel:+919527059133"><span className="grid h-11 w-11 place-items-center rounded-xl bg-hospital-tealSoft text-xl text-hospital-teal">☎</span><div><strong className="block text-hospital-navy">{mr ? 'आत्ताच कॉल करा' : 'Call Now'}</strong><small className="text-hospital-muted">+91 95270 59133</small></div></a>
          <a className="card flex items-center gap-4 p-5 transition hover:-translate-y-1" href="#appointment"><span className="grid h-11 w-11 place-items-center rounded-xl bg-hospital-pinkSoft text-xl text-hospital-pink">◷</span><div><strong className="block text-hospital-navy">{mr ? 'अपॉइंटमेंट' : 'Appointment'}</strong><small className="text-hospital-muted">{mr ? 'सल्ल्यासाठी वेळ मागवा' : 'Request a consultation slot'}</small></div></a>
          <a className="card flex items-center gap-4 p-5 transition hover:-translate-y-1" href={HOSPITAL_MAPS_URL} target="_blank" rel="noreferrer"><span className="grid h-11 w-11 place-items-center rounded-xl bg-hospital-tealSoft text-xl text-hospital-teal">⌖</span><div><strong className="block text-hospital-navy">{mr ? 'अचूक दिशा' : 'Exact Directions'}</strong><small className="text-hospital-muted">{mr ? 'वरुड, अमरावती' : 'Warud, Amravati'}</small></div></a>
        </div>
      </section>

      <Doctors language={language} />
      <Services language={language} />
      <Facilities language={language} />
      <AppointmentForm language={language} />
      <Education language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}
