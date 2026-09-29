export type Language = 'en' | 'mr'
export type Localized = { en: string; mr: string }

export const HOSPITAL_PHONE_DISPLAY = '+91 95270 59133'
export const HOSPITAL_PHONE_TEL = '+919527059133'
export const WHATSAPP_NUMBER = '919527059133'
export const SITE_URL = 'https://shree-gajanan-hospital.netlify.app'
export const HOSPITAL_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Shree+Gajanan+Hospital+%26+critical+care+centre%2C+Warud&query_place_id=ChIJCVqqNufL1TsREIRbCayCYWY'

export const hospitalAddress: Localized = {
  en: 'C/o Arihant Hospital, Dr. Rupali Jain Clinic, Pandhurna Chowk, Warud, Dist. Amravati, Maharashtra 444906',
  mr: 'अरिहंत हॉस्पिटल, डॉ. रुपाली जैन यांच्या दवाखान्यात, पांढुर्णा चौक, वरुड, जि. अमरावती, महाराष्ट्र 444906',
}

export const doctors = [
  {
    name: 'Dr. Kunal Arunrao Bijwe',
    image: '/images/dr-kunal-bijwe.webp',
    specialty: { en: 'Medicine & Critical Care', mr: 'मेडिसिन व क्रिटिकल केअर' },
    qualifications: 'M.B.B.S., M.D. (Medicine), Nag. • IDCCM (Mumbai) • Fellowship in Diabetes (UK) • CCID (Infection Disease)',
    registration: '2015/05/2847',
    highlights: [
      { en: 'General medicine & chronic disease management', mr: 'सामान्य वैद्यक व दीर्घकालीन आजार' },
      { en: 'Diabetes, hypertension & cardiac risk care', mr: 'मधुमेह, रक्तदाब व हृदयविकार जोखीम' },
      { en: 'Critical care and infectious disease management', mr: 'अतिदक्षता व संसर्गजन्य आजार व्यवस्थापन' },
    ]
  },
  {
    name: 'Dr. Ashwini Kunal Bijwe',
    image: '/images/dr-ashwini-bijwe.webp',
    specialty: { en: 'Anaesthesia • Critical Care • Pain', mr: 'भूल • क्रिटिकल केअर • वेदना' },
    qualifications: 'M.B.B.S., M.D. (Anaesthesia) • Critical Care & Pain • Tata Memorial Hospital, Mumbai',
    registration: '2017/09/4378',
    highlights: [
      { en: 'Pre-anaesthesia evaluation and fitness', mr: 'ऑपरेशनपूर्व तपासणी व फिटनेस' },
      { en: 'Critical care support', mr: 'क्रिटिकल केअर सपोर्ट' },
      { en: 'Pain and perioperative care', mr: 'वेदना व पेरिऑपरेटिव्ह केअर' },
    ]
  }
] satisfies Array<{
  name: string
  image: string
  specialty: Localized
  qualifications: string
  registration: string
  highlights: Localized[]
}>

export const services = [
  { icon: '♥', title: { en: 'Heart & Blood Pressure', mr: 'हृदयरोग व रक्तदाब' }, text: { en: 'Evaluation and treatment support for hypertension and heart-related conditions.', mr: 'रक्तदाब व हृदयविकाराशी संबंधित समस्यांचे मूल्यमापन व उपचार.' } },
  { icon: '◉', title: { en: 'Diabetes Care', mr: 'मधुमेह उपचार' }, text: { en: 'Diabetes consultation, monitoring and ongoing medical management.', mr: 'मधुमेह तपासणी, देखरेख व नियमित उपचार.' } },
  { icon: '⌁', title: { en: 'Chest & Respiratory Care', mr: 'छाती व श्वसन विकार' }, text: { en: 'Care for asthma, TB and other respiratory complaints.', mr: 'दमा, टीबी व इतर श्वसनविकारांसाठी उपचार.' } },
  { icon: '✦', title: { en: 'Neurological Complaints', mr: 'मेंदू व मज्जासंस्था विकार' }, text: { en: 'Assessment for paralysis, epilepsy, dizziness and related symptoms.', mr: 'लकवा, मिरगी, चक्कर व संबंधित लक्षणांचे मूल्यमापन.' } },
  { icon: '＋', title: { en: 'Infections & Fever', mr: 'ताप व संसर्ग' }, text: { en: 'Management of dengue, malaria and other infectious illnesses.', mr: 'डेंग्यू, मलेरिया व इतर संसर्गजन्य आजारांचे व्यवस्थापन.' } },
  { icon: '⚕', title: { en: 'Emergency & Critical Care', mr: 'अत्यावश्यक व अतिदक्षता सेवा' }, text: { en: 'Emergency treatment, ICU support and management of serious illness.', mr: 'आपत्कालीन उपचार, ICU सपोर्ट व गंभीर आजारांचे व्यवस्थापन.' } },
  { icon: '◇', title: { en: 'Thyroid, Kidney & Stomach', mr: 'थायरॉईड, किडनी व पोटाचे विकार' }, text: { en: 'Medical evaluation and treatment for thyroid, renal and gastrointestinal conditions.', mr: 'थायरॉईड, मूत्रपिंड व पोटाशी संबंधित आजारांचे उपचार.' } },
  { icon: '✓', title: { en: 'Health Check & Fitness', mr: 'आरोग्य तपासणी व फिटनेस' }, text: { en: 'General health check-up, HIV-related care and pre-operative medical fitness.', mr: 'संपूर्ण आरोग्य तपासणी, HIV संबंधित सेवा व ऑपरेशनपूर्व फिटनेस.' } },
  { icon: '◌', title: { en: 'Pain & Perioperative Care', mr: 'वेदना व पेरिऑपरेटिव्ह केअर' }, text: { en: 'Anaesthesia consultation, perioperative support and pain management.', mr: 'भूलतज्ज्ञ सल्ला, ऑपरेशनदरम्यानची काळजी व वेदना व्यवस्थापन.' } },
] satisfies Array<{ icon: string; title: Localized; text: Localized }>

export const facilities = [
  ['ICU', { en: 'Well-equipped Intensive Care Unit', mr: 'सुसज्ज अतिदक्षता विभाग' }],
  ['V', { en: 'Ventilator & BiPAP', mr: 'व्हेंटिलेटर व BiPAP' }],
  ['ECG', { en: 'ECG, cardiac monitor & defibrillator', mr: 'ECG, कार्डियाक मॉनिटर व डिफिब्रिलेटर' }],
  ['PFT', { en: 'Computerized pulmonary function testing', mr: 'कॉम्प्युटराइज्ड पल्मोनरी फंक्शन टेस्ट' }],
  ['2D', { en: '2D Echo & Color Doppler', mr: '2D इको व कलर डॉप्लर' }],
  ['TMT', { en: 'Computerized treadmill testing', mr: 'कॉम्प्युटराइज्ड ट्रेडमिल टेस्ट' }],
  ['N', { en: 'Ultrasonic nebulizer', mr: 'अल्ट्रासोनिक नेब्युलायझर' }],
  ['24×7', { en: 'Emergency care availability', mr: '24×7 अत्यावश्यक सेवा' }],
] as const

export const education = [
  {
    title: { en: 'Diabetes', mr: 'मधुमेह' },
    text: { en: 'Take prescribed medicines regularly, keep follow-up appointments, monitor blood sugar as advised, exercise safely and follow your recommended meal plan.', mr: 'डॉक्टरांनी दिलेली औषधे नियमित घ्या, वेळेवर तपासणी करा, सल्ल्यानुसार रक्तातील साखर तपासा व योग्य व्यायाम-आहार पाळा.' }
  },
  {
    title: { en: 'Heart-attack warning signs', mr: 'हृदयविकाराच्या झटक्याची लक्षणे' },
    text: { en: 'Chest pressure or pain, sweating, breathlessness, nausea, dizziness or pain spreading to the arm or jaw can require urgent medical attention.', mr: 'छातीत दडपण किंवा वेदना, घाम, धाप लागणे, मळमळ, चक्कर किंवा हात/जबड्याकडे जाणारी वेदना असल्यास तातडीने वैद्यकीय मदत घ्या.' }
  },
  {
    title: { en: 'Breathing difficulty', mr: 'श्वास घेण्यास त्रास' },
    text: { en: 'Severe breathlessness, inability to speak normally, bluish lips, fainting or rapidly worsening symptoms need urgent medical evaluation.', mr: 'तीव्र धाप, नीट बोलता न येणे, ओठ निळे पडणे, बेशुद्धी किंवा लक्षणे झपाट्याने वाढत असल्यास तातडीने तपासणी आवश्यक आहे.' }
  }
] satisfies Array<{ title: Localized; text: Localized }>
