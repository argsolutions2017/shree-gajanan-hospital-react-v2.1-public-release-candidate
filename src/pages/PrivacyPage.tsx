import type { Language } from '../data/content'
import Footer from '../components/Footer'

export default function PrivacyPage({ language }: { language: Language }) {
  const mr = language === 'mr'
  return (
    <main className="bg-hospital-bg">
      <section className="section-pad">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl rounded-3xl border border-hospital-line bg-white p-7 shadow-card sm:p-10">
            <a href="/" className="font-black text-hospital-teal">← {mr ? 'होम' : 'Home'}</a>
            <h1 className="mt-6 text-4xl font-black text-hospital-navy">{mr ? 'गोपनीयता सूचना' : 'Privacy Notice'}</h1>
            <p className="mt-5 leading-7 text-hospital-muted">{mr ? 'ही वेबसाइट प्राथमिक अपॉइंटमेंट विनंत्यांसाठी WhatsApp वापरते. अपॉइंटमेंट फॉर्ममध्ये भरलेली माहिती वेबसाइटच्या स्वतःच्या डेटाबेसमध्ये साठवली जात नाही.' : 'This website uses WhatsApp for initial appointment requests. Information entered in the appointment form is not stored in the website’s own database.'}</p>

            <h2 className="mt-8 text-xl font-black text-hospital-navy">{mr ? 'आम्ही कोणती माहिती मागतो' : 'Information we request'}</h2>
            <p className="mt-3 leading-7 text-hospital-muted">{mr ? 'रुग्णाचे नाव, मोबाइल नंबर, निवडलेले डॉक्टर, पसंतीची तारीख/वेळ आणि ऐच्छिक लघु कारण.' : 'Patient name, mobile number, selected doctor, preferred date/time and an optional short reason.'}</p>

            <h2 className="mt-8 text-xl font-black text-hospital-navy">{mr ? 'WhatsApp वर पुढे गेल्यावर' : 'When you continue to WhatsApp'}</h2>
            <p className="mt-3 leading-7 text-hospital-muted">{mr ? 'आपण Continue to WhatsApp निवडल्यानंतर, आपण भरलेली माहिती WhatsApp मध्ये तयार केलेल्या संदेशात स्थानांतरित केली जाते. तो संदेश आपण तपासून पाठवता. WhatsApp द्वारे पाठविलेली माहिती WhatsApp कडून आणि हॉस्पिटलकडून त्यांच्या संबंधित गोपनीयता व नोंद-ठेव पद्धतीनुसार प्रक्रिया किंवा जतन केली जाऊ शकते.' : 'After you choose Continue to WhatsApp, the details you entered are transferred into a prepared WhatsApp message for you to review and send. Information sent through WhatsApp may be processed or retained by WhatsApp and by the hospital according to their respective privacy and record-handling practices.'}</p>

            <h2 className="mt-8 text-xl font-black text-hospital-navy">{mr ? 'संवेदनशील माहिती' : 'Sensitive information'}</h2>
            <p className="mt-3 leading-7 text-hospital-muted">{mr ? 'कृपया या सार्वजनिक फॉर्मद्वारे तपशीलवार वैद्यकीय रिपोर्ट, तपासणी निकाल, प्रिस्क्रिप्शन, ओळखपत्रे किंवा आपत्कालीन माहिती पाठवू नका. वैद्यकीय आपत्कालीन स्थितीत थेट हॉस्पिटलशी संपर्क करा किंवा जवळच्या आपत्कालीन सेवेकडे जा.' : 'Please do not send detailed medical reports, diagnostic results, prescriptions, identity documents or emergency information through this public form. For a medical emergency, contact the hospital directly or go to the nearest emergency service.'}</p>

            <h2 className="mt-8 text-xl font-black text-hospital-navy">{mr ? 'संपर्क' : 'Contact'}</h2>
            <p className="mt-3 leading-7 text-hospital-muted">+91 95270 59133 · Shree Gajanan Hospital & Critical Care Center, Warud.</p>
          </div>
        </div>
      </section>
      <Footer language={language} />
    </main>
  )
}
