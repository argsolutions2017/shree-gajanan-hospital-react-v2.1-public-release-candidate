import { FormEvent, useMemo, useState } from 'react'
import { WHATSAPP_NUMBER, type Language } from '../data/content'

export default function AppointmentForm({ language }: { language: Language }) {
  const mr = language === 'mr'
  const today = useMemo(() => {
    const now = new Date()
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    return local.toISOString().split('T')[0]
  }, [])
  const [status, setStatus] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setStatus(mr ? 'कृपया आवश्यक माहिती भरा आणि संमती द्या.' : 'Please complete the required fields and provide consent.')
      form.reportValidity()
      return
    }

    const data = new FormData(form)
    const reason = String(data.get('reason') ?? '').trim()
    const message = [
      'Appointment Request - Shree Gajanan Hospital',
      `Patient: ${String(data.get('patientName') ?? '').trim()}`,
      `Mobile: ${String(data.get('mobile') ?? '').trim()}`,
      `Doctor: ${String(data.get('doctor') ?? '')}`,
      `Preferred Date: ${String(data.get('date') ?? '')}`,
      `Preferred Time: ${String(data.get('time') ?? '')}`,
      ...(reason ? [`Reason: ${reason}`] : []),
    ].join('\n')

    setStatus(mr ? 'WhatsApp उघडत आहे…' : 'Opening WhatsApp…')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="appointment" className="section-pad bg-gradient-to-br from-hospital-teal to-hospital-navy text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-xs font-black uppercase tracking-[0.17em] text-[#c8fff8]">{mr ? 'अपॉइंटमेंट विनंती' : 'Appointment Request'}</span>
          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">{mr ? 'एका मिनिटात अपॉइंटमेंटची विनंती करा' : 'Request an appointment in under a minute'}</h2>
          <p className="mt-5 leading-7 text-[#d2ebe7]">{mr ? 'आपण भरलेली माहिती या वेबसाइटच्या डेटाबेसमध्ये साठवली जात नाही. पुढे गेल्यावर WhatsApp मध्ये तयार केलेला संदेश आपण तपासून हॉस्पिटलला पाठवू शकता.' : 'The details you enter are not stored in a website database. When you continue, WhatsApp opens with a prepared message for you to review and send to the hospital.'}</p>
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-[#e4f7f3]">{mr ? 'कृपया या फॉर्मद्वारे तपशीलवार मेडिकल रिपोर्ट, तपासणी निकाल किंवा आपत्कालीन माहिती पाठवू नका.' : 'Please do not send detailed medical reports, diagnostic results or emergency information through this form.'}</div>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-hospital-ink shadow-soft sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'रुग्णाचे नाव' : 'Patient Name'}
              <input className="field" name="patientName" autoComplete="name" required />
            </label>
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'मोबाइल नंबर' : 'Mobile Number'}
              <input className="field" name="mobile" inputMode="tel" autoComplete="tel" required pattern="[0-9+ -]{10,16}" />
            </label>
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'डॉक्टर निवडा' : 'Select Doctor'}
              <select className="field" name="doctor" required defaultValue="">
                <option value="">{mr ? 'निवडा' : 'Choose'}</option>
                <option>Dr. Kunal Arunrao Bijwe</option>
                <option>Dr. Ashwini Kunal Bijwe</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'पसंतीची तारीख' : 'Preferred Date'}
              <input className="field" name="date" type="date" min={today} required />
            </label>
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'पसंतीची वेळ' : 'Preferred Time'}
              <select className="field" name="time" required defaultValue="">
                <option value="">{mr ? 'निवडा' : 'Choose'}</option>
                <option>11:00 AM – 1:00 PM</option>
                <option>1:00 PM – 4:00 PM</option>
                <option>6:00 PM – 7:30 PM</option>
                <option>7:30 PM – 9:00 PM</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#395763]">
              {mr ? 'थोडक्यात कारण (ऐच्छिक)' : 'Short reason (optional)'}
              <input className="field" name="reason" maxLength={120} placeholder={mr ? 'उदा. ताप / मधुमेह फॉलो-अप' : 'e.g. fever / diabetes follow-up'} />
            </label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-hospital-muted">
            <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-hospital-teal" />
            <span>{mr ? 'अपॉइंटमेंटसाठी ही माहिती WhatsApp द्वारे हॉस्पिटलसोबत शेअर करण्यास मी सहमत आहे. WhatsApp वर पाठविलेली माहिती WhatsApp आणि हॉस्पिटलच्या संबंधित गोपनीयता पद्धतीनुसार हाताळली जाऊ शकते.' : 'I agree to share these appointment details with the hospital via WhatsApp. Information sent through WhatsApp may be processed according to WhatsApp’s and the hospital’s respective privacy practices.'}</span>
          </label>
          <button className="btn-primary mt-5 w-full" type="submit">{mr ? 'WhatsApp वर पुढे जा' : 'Continue to WhatsApp'}</button>
          <p className="mt-3 min-h-5 text-sm font-semibold text-[#b42318]" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}
