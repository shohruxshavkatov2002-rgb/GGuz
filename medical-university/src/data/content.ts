/* Central content for Meridian Medical University.
   Section structure mirrors Generic-Medical-University-Project.csv. */

export const SITE = {
  name: "Meridian",
  full: "Meridian Medical University",
  tagline: "Where medicine meets the future.",
  email: "admissions@meridian.edu",
  phone: "+1 (415) 555-0142",
  address: "1 Helix Avenue, Bay Health District",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Blog", to: "/blog" },
];

/* ---------------- HOME ---------------- */
export const HERO = {
  badge: "Accredited · Research-Intensive",
  title: "Medicine,",
  titleAccent: "reimagined in 3D.",
  lead: "Meridian Medical University blends immersive 3D learning, world-renowned faculty, and frontier research facilities to shape the clinicians and scientists of the next century.",
  ctaPrimary: "Explore Programs",
  ctaSecondary: "Book a Campus Visit",
  stats: [
    { value: "98%", label: "Residency match rate" },
    { value: "1:6", label: "Faculty to student" },
    { value: "120+", label: "Active research labs" },
  ],
};

export const FEATURES = {
  eyebrow: "Why Meridian",
  title: "Three things you won't find anywhere else",
  lead: "A learning model built around immersion, mentorship, and discovery.",
  items: [
    {
      icon: "cube",
      title: "3D Interactive Learning",
      text: "Dissect, rotate and explore living anatomy in real-time WebGL. Our spatial labs turn abstract systems into tangible understanding.",
    },
    {
      icon: "star",
      title: "Renowned Faculty",
      text: "Learn beside Nobel laureates, practicing surgeons and principal investigators who treat teaching as a calling.",
    },
    {
      icon: "atom",
      title: "Advanced Research Facilities",
      text: "BSL-3 labs, a genomics core and a simulation hospital give you the tools to ask — and answer — bigger questions.",
    },
  ],
};

export const ABOUT = {
  eyebrow: "Our Story",
  title: "A mission written in every heartbeat",
  paragraphs: [
    "Founded in 1921, Meridian began as a small clinical college with a radical belief: that great physicians are made through curiosity, compassion, and relentless rigor.",
    "A century later, that belief powers a research university where students publish, innovate, and care for real communities from their very first year.",
  ],
  values: [
    { title: "Compassion", text: "Patient dignity guides every decision." },
    { title: "Evidence", text: "We follow the data, wherever it leads." },
    { title: "Access", text: "Health is a right, not a privilege." },
  ],
};

export const SERVICES = {
  eyebrow: "What We Offer",
  title: "Programs designed for every stage",
  lead: "From your first lecture to your final fellowship, a continuum of learning.",
  items: [
    {
      title: "Undergraduate Programs",
      text: "BSc pathways in Medicine, Biomedical Science and Public Health with early clinical exposure.",
      tag: "4–6 years",
    },
    {
      title: "Graduate Programs",
      text: "MD, PhD and dual MD-PhD tracks supervised inside funded research groups.",
      tag: "Masters / Doctoral",
    },
    {
      title: "Continuing Education",
      text: "CME-accredited modules and micro-credentials for working clinicians.",
      tag: "Flexible",
    },
    {
      title: "Research Opportunities",
      text: "Paid lab placements, summer fellowships and global field studies.",
      tag: "Year-round",
    },
  ],
};

export const TIMELINE = {
  eyebrow: "Milestones",
  title: "A century of medical firsts",
  lead: "Moments that defined medical education at Meridian.",
  items: [
    { year: "1921", title: "Founded", text: "Meridian Clinical College opens with 48 students." },
    { year: "1967", title: "First Transplant Program", text: "Pioneers one of the earliest academic organ transplant units." },
    { year: "1994", title: "Genomics Institute", text: "Launches a sequencing core decades ahead of its peers." },
    { year: "2015", title: "Simulation Hospital", text: "Opens a 40-bed fully simulated teaching hospital." },
    { year: "2024", title: "Immersive 3D Labs", text: "Becomes the first faculty to teach anatomy entirely in WebGL." },
  ],
};

export const TEAM = {
  eyebrow: "People",
  title: "Faculty who move the field forward",
  lead: "Mentors, clinicians and principal investigators.",
  members: [
    { name: "Dr. Amara Okafor", role: "Dean of Medicine", focus: "Cardiothoracic surgery", hue: "#0891B2" },
    { name: "Prof. Liam Chen", role: "Director, Genomics", focus: "Computational biology", hue: "#22D3EE" },
    { name: "Dr. Sofia Reyes", role: "Head of Neuroscience", focus: "Neural regeneration", hue: "#0f766e" },
    { name: "Dr. Noah Bennett", role: "Lead, Simulation", focus: "Emergency medicine", hue: "#16a34a" },
  ],
};

export const REVIEWS = {
  eyebrow: "Voices",
  title: "What our community says",
  lead: "Students and alumni on the Meridian experience.",
  items: [
    {
      quote:
        "The 3D anatomy labs changed how I understand the human body. I walked into clinicals already fluent in spatial reasoning.",
      name: "Priya N.",
      role: "4th-year MD candidate",
    },
    {
      quote:
        "I co-authored two papers before graduating. Meridian treats undergraduates like real scientists.",
      name: "Marcus T.",
      role: "Alumnus, '22 · now at Stanford",
    },
    {
      quote:
        "The faculty know your name and your goals. That mentorship is rare and it shaped my entire career.",
      name: "Elena V.",
      role: "Resident, Internal Medicine",
    },
  ],
};

export const CTA = {
  title: "Your white coat starts here",
  lead: "Discover the program that fits your ambition, or visit campus and feel it for yourself.",
  primary: "Explore Programs",
  secondary: "Schedule a Visit",
};

export const NEWSLETTER = {
  title: "Stay in the loop",
  lead: "University news, research breakthroughs and admissions deadlines — once a month, no noise.",
  placeholder: "you@example.com",
  button: "Subscribe",
};

export const FAQ = {
  eyebrow: "Questions",
  title: "Frequently asked questions",
  items: [
    {
      q: "What are the admission requirements?",
      a: "A strong science background, competitive entrance scores, references, and a statement of purpose. International applicants need English proficiency certification.",
    },
    {
      q: "Do you offer scholarships and financial aid?",
      a: "Yes. Merit and need-based scholarships, research stipends, and federal aid are available. Over 60% of students receive some form of support.",
    },
    {
      q: "Can I visit the campus before applying?",
      a: "Absolutely — weekly guided tours and monthly open days are open to prospective students and their families.",
    },
    {
      q: "Is the 3D learning available remotely?",
      a: "Core WebGL modules run in any modern browser, so admitted students can revise anatomy and simulations from anywhere.",
    },
  ],
};

/* ---------------- ABOUT US ---------------- */
export const ABOUT_PAGE = {
  header: {
    badge: "Established 1921",
    title: "A legacy of healing,",
    titleAccent: "a vision for tomorrow",
    lead: "For over a century, Meridian has trained physicians and scientists who define the standard of care worldwide.",
  },
  stats: [
    { value: "103", label: "Years of excellence" },
    { value: "42,000+", label: "Graduates worldwide" },
    { value: "310", label: "Research breakthroughs" },
    { value: "57", label: "Partner hospitals" },
  ],
  awards: ["WHO Collaborating Centre", "AAMC Accredited", "Carnegie R1", "JCI Gold Seal", "Athena SWAN"],
  partners: ["Bay General", "Helix Children's", "NorthStar Clinics", "Coastal Cancer Inst.", "Unity Health", "Aurora Labs"],
};

/* ---------------- ACADEMICS ---------------- */
export const ACADEMICS = {
  header: {
    badge: "Academics",
    title: "Excellence in education",
    titleAccent: "and discovery",
    lead: "A rigorous, research-driven curriculum supported at every step — from advising to career placement.",
  },
  features: [
    { icon: "cube", title: "Undergraduate", text: "Foundational sciences with early patient contact and small-group labs." },
    { icon: "atom", title: "Graduate", text: "MD, PhD and MD-PhD programs embedded in funded research." },
    { icon: "star", title: "Continuing Education", text: "Lifelong CME modules and specialist micro-credentials." },
  ],
  support: {
    eyebrow: "Student Support",
    title: "We've got your back",
    items: [
      { title: "Academic Advising", text: "Dedicated mentors map your degree and milestones each term." },
      { title: "Tutoring", text: "Peer and faculty-led tutoring across every preclinical subject." },
      { title: "Career Guidance", text: "Residency coaching, interview prep and a global alumni network." },
    ],
  },
  projects: {
    eyebrow: "Research in Motion",
    title: "Ongoing projects & initiatives",
    items: [
      { field: "Oncology", title: "Targeted Immunotherapy Trial", text: "Phase II study on T-cell engineering for solid tumors." },
      { field: "Neuroscience", title: "Neural Regeneration Map", text: "Charting axon regrowth pathways after spinal injury." },
      { field: "Public Health", title: "Equity Data Commons", text: "Open platform tracking health outcomes across communities." },
      { field: "Bioengineering", title: "Printed Vascular Tissue", text: "Bioprinting perfusable micro-vasculature for transplants." },
    ],
  },
  pricing: {
    eyebrow: "Tuition & Aid",
    title: "Invest in your future",
    lead: "Transparent tuition with generous aid — over 60% of students receive support.",
    tiers: [
      {
        name: "Undergraduate",
        price: "$18,400",
        period: "/ year",
        features: ["Foundational sciences", "Early clinical exposure", "Lab access", "Need-based aid eligible"],
        featured: false,
      },
      {
        name: "Graduate (MD/PhD)",
        price: "$0–$32,000",
        period: "/ year",
        features: ["Funded research stipends", "Tuition waivers (PhD)", "Conference travel grants", "Dedicated PI mentor"],
        featured: true,
      },
      {
        name: "Continuing Ed",
        price: "$640",
        period: "/ module",
        features: ["CME-accredited", "Self-paced online", "Specialist credentials", "Employer billing"],
        featured: false,
      },
    ],
  },
};

/* ---------------- BLOG ---------------- */
export const BLOG = {
  header: {
    eyebrow: "The Meridian Journal",
    title: "Ideas from the frontier of medicine",
    lead: "Research notes, student stories and perspectives from our faculty.",
  },
  featured: {
    category: "Research",
    title: "How real-time 3D is rewriting the anatomy curriculum",
    excerpt:
      "Inside the WebGL labs where first-year students learn to navigate the body in space — and why retention jumps when they do.",
    author: "Dr. Sofia Reyes",
    date: "May 28, 2026",
    read: "8 min read",
  },
  posts: [
    { category: "Research", title: "The genome at the bedside", excerpt: "Bringing sequencing into routine clinical decisions.", author: "Prof. Liam Chen", date: "May 21, 2026", read: "6 min" },
    { category: "Student Life", title: "A week in the simulation hospital", excerpt: "What it's like to run a code on a high-fidelity manikin.", author: "Priya N.", date: "May 14, 2026", read: "5 min" },
    { category: "Faculty", title: "Why compassion is a clinical skill", excerpt: "Teaching empathy with the same rigor as pharmacology.", author: "Dr. Amara Okafor", date: "May 7, 2026", read: "7 min" },
    { category: "Innovation", title: "Bioprinting blood vessels", excerpt: "The lab printing perfusable tissue, one layer at a time.", author: "Dr. Noah Bennett", date: "Apr 30, 2026", read: "9 min" },
    { category: "Public Health", title: "Mapping health equity with open data", excerpt: "An open commons for community health outcomes.", author: "Elena V.", date: "Apr 23, 2026", read: "6 min" },
    { category: "Admissions", title: "Writing a statement that stands out", excerpt: "Admissions readers share what actually moves them.", author: "Office of Admissions", date: "Apr 16, 2026", read: "4 min" },
  ],
  faq: {
    eyebrow: "About the Journal",
    title: "Blog FAQ",
    items: [
      { q: "Can I submit a guest post?", a: "Yes — students, alumni and faculty can pitch via the editorial form. We review submissions monthly." },
      { q: "How often do you publish?", a: "New articles go live every week, with a featured deep-dive at the start of each month." },
      { q: "Can I republish an article?", a: "Most posts are CC-BY with attribution. Check the footer of each article for its specific license." },
    ],
  },
};

/* ---------------- BLOG POST ---------------- */
export const BLOG_POST = {
  category: "Research",
  title: "How real-time 3D is rewriting the anatomy curriculum",
  author: "Dr. Sofia Reyes",
  role: "Head of Neuroscience",
  date: "May 28, 2026",
  read: "8 min read",
  body: [
    { type: "p", text: "For two hundred years, learning anatomy meant memorizing static images and hoping they would reassemble themselves correctly in the operating room. At Meridian, we decided that was no longer good enough." },
    { type: "h", text: "From flat pages to living space" },
    { type: "p", text: "Our WebGL labs let students rotate, dissect and re-layer every system in real time. The body stops being a diagram and becomes a place you can move through — and that spatial fluency carries directly into the clinic." },
    { type: "quote", text: "When students can walk around a beating heart, they stop memorizing and start understanding." },
    { type: "h", text: "What the data shows" },
    { type: "p", text: "In our first cohort, retention of complex structures rose 41% versus traditional instruction, and time-to-confidence in clinical reasoning dropped by nearly a third. The effect was strongest among students who had previously struggled with 2D representations." },
    { type: "p", text: "The next step is haptics: pairing the visual model with force feedback so that learners feel resistance as they navigate tissue planes. That work begins next semester." },
  ],
  reviews: [
    { quote: "This mirrors exactly what I felt as a student. The 3D labs are transformative.", name: "Marcus T.", role: "Alumnus '22" },
    { quote: "Wonderful read — the retention numbers are remarkable.", name: "Dr. Elena V.", role: "Internal Medicine" },
  ],
  related: ["The genome at the bedside", "A week in the simulation hospital", "Bioprinting blood vessels"],
};
