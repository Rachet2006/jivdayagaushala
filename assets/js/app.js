const PAGE_TS = Date.now();

/* ---------- i18n dictionary ---------- */
const i18n = {
  en: {
    /* Nav */
    nav_home: "Home",
    nav_about: "About",
    nav_work: "Our Work",
    nav_donate: "Donate",
    nav_visit: "Visit",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_legal: "Legal",
    lang_label_en: "EN",
    lang_label_hi: "हिन्दी",

    /* Hero */
    hero_title: "Welcome to Shri Jivdaya Gaushala, Bhinmal",
    hero_intro:
      "For over 80 years, Rajasthan’s sanctuary of compassion. As the first Gaushala in Jalore district, we provide lifelong care to 2,150+ animals across vast shelters and green landscapes — ensuring every being receives medical attention, nourishing feed, and dignity.",
    hero_cta_donate: "Donate Now",
    hero_cta_visit: "Visit",

    /* Hero stats (uses siteData where possible) */
    stat_animals_value: "~{animals_total}",
    stat_animals_label: "animals cared for",
    stat_wards_value: "{wards}",
    stat_wards_label: "animal wards",
    stat_hospital_value: "{hospital}",
    stat_hospital_label: "animal hospital",
    stat_fodder_value: "{fodder_halls}",
    stat_fodder_label: "dry-fodder halls",
    stat_trees_value: "~{trees}",
    stat_trees_label: "shade-giving trees",
    stat_cost_value: "₹1.05L",
    stat_cost_label: "daily running cost",

    /* Fast Facts block */
    fastfacts_title: "Fast Facts",
    fact_years: "80+ years of service",
    fact_animals: "2,150+ animals in care",
    fact_cost: "₹1.05L daily running cost",

    fastfacts_infra_title: "Infrastructure",
    fastfacts_infra_points1: "15 animal wards • 1 on-site hospital • 3 fodder halls",
    fastfacts_infra_points2: "2 borewells + 1 dharam-kanta (weighbridge)",

    fastfacts_green_title: "Green Drive",
    fastfacts_green_points1: "~1,000 shade-giving trees on campus",
    fastfacts_green_points2: "Goal: +100 trees/year • ~250 planted in 2024–25",

    fastfacts_feed_title: "Feeding",
    fastfacts_feed_points1:
      "Dry fodder + 1–2 truckloads of green fodder daily; lapsi on auspicious days",

    /* About */
    about_title: "About Us",
    about_history:
      "Shri Jivdaya Gaushala, established in the holy town of Bhinmal (Marwar, Rajasthan), is the first Gaushala of Jalore district. For over 80 years, we have sheltered mute, abandoned, and injured animals — giving them safety, care, and dignity.",
    about_campuses: "Campuses & Scale",
    about_mirpura: "Mirpura Gaushala: ~500 bigha",
    about_panch: "Panch Kuwa Gaushala: ~180 bigha",
    about_residents:
      "Residents: ~2,150 animals (cows, bulls, buffaloes, goats, sheep, mares)",
    about_facilities:
      "15 animal wards • on-site hospital • fodder halls • staff quarters • saints’ stay • birdhouse & chabutra • water infrastructure (2 borewells) • dharam-kanta (weighbridge)",

    /* Work */
    work_title: "Our Work",
    work_care: "Animal Care",
    work_care_desc:
      "Rescue and lifelong shelter for abandoned or at-risk animals in a peaceful habitat.",
    work_medical: "Medical & Hospital",
    work_medical_desc:
      "On-site treatment, recovery, and ongoing care for injured or sick animals.",
    work_feed: "Feeding & Nutrition",
    work_feed_desc:
      "Daily dry + green fodder; lapsi prepared on auspicious days and festivals.",
    work_green: "Green Drive",
    work_green_desc:
      "~1,000 shade-giving trees; target of +100 new trees every year; 250 planted in 2024–25.",
    work_infra: "Infrastructure",
    work_infra_desc:
      "Wards, hospital, fodder halls, borewells, and a dharam-kanta to manage feed logistics.",

    /* Donate */
    donate_title: "Donate",
    donate_intro:
      "Your support sustains lives. During sacred days like Paryushan and throughout the year, your contributions safeguard over 2,000 animals. Our daily running cost is approximately ₹1.05 lakh.",
    donate_disclaimer:
      "Receipt (80G): To receive an 80G receipt, please provide your full name, email, phone number, and address in the donation form.",
    donate_options: "Donation Options",
    donate_one_time: "One-time",
    donate_monthly: "Monthly",
    donate_sponsor: "Sponsor a Cow",
    donate_feed: "Feed for a Day",
    donate_medical: "Medical Care",
    donate_tree: "Plant a Tree",
    donate_bank: "Bank Transfer Details",
    donate_form_title: "Donation Intent Form",
    donate_name: "Name",
    donate_email: "Email",
    donate_phone: "Phone",
    donate_address: "Address",
    donate_pan: "PAN (optional)",
    donate_amount: "Amount (₹)",
    donate_purpose: "Purpose",
    donate_submit: "Submit",
    donate_success:
      "Thank you! We have saved your intent. The team will contact you.",

    /* Visit / Volunteer */
    visit_title: "Visit",
    visit_hours: "Visiting hours: 9:00 AM – 5:00 PM",
    visit_guidelines:
      "Please follow safety and hygiene guidelines during your visit and kindly follow staff instructions around animal wards.",
    map_placeholder: "Map placeholder",

    /* Gallery */
    gallery_title: "Gallery",

    /* Contact */
    contact_title: "Contact",
    contact_form_title: "Contact Form",
    contact_success: "Thanks for reaching out! We'll respond soon.",

    /* Legal */
    legal_title: "Legal",
    privacy_policy: "Privacy Policy",
    terms_conditions: "Terms & Conditions",
    refund_policy: "Refund/Cancellation",
    compliance: "Compliance",
    documents_pending: "Documents pending upload by NGO.",

    /* Footer / misc */
    footer_motto: "Made with ♥ for animals",
    footer_address: "Office: Khari Road, Bhinmal • Branch: Panch Kuwa, Karda Road",
    footer_quick_links: "Quick Links",
    footer_social: "Connect",
    copy: "Copy",
    copied: "Copied!",
    form_message: "Message",
    cta_whatsapp: "WhatsApp",
    role_president: "President",
    role_vpresident: "Vice President",
    role_secretary: "Secretary",
    role_treasurer: "Treasurer",
    role_joint_secretary: "Joint Secretary",
    
    offices_access_title: "Offices & Access",
    office_main: "Office: Khari Road, Bhinmal city",
    office_branch: "Branch office: Panch Kuwa, Karda Road",
    access_city_panch: "From city: Panch Kuwa – ~5 km",
    access_city_mirpura: "From city: Mirpura – ~8 km",
    campuses_scale_title: "Campuses & Scale",
    campus_mirpura_new: "Mirpura Gaushala: ~{mirpura_bigha} bigha",
    campus_panch_new: "Panch Kuwa Gaushala: ~{panch_bigha} bigha",
    development_title: "Development Status",
    dev_panch: "Panch Kuwa branch: fully developed",
    dev_mirpura: "Mirpura side: under development",
    infra_util_title: "Water & Utilities",
    infra_tube_panch: "{tube_panch} tube wells in Panch Kuwa",
    infra_tube_mirpura: "{tube_mirpura} tube well in Mirpura",
    infra_boundary: "Boundary wall ~{boundary_wall_km} km (in progress)",
    facilities_title_plus: "Facilities",
    facilities_points_plus: "{staff_quarters} staff quarters • Kabutro ka chabutara (bird platform) • {rest_rooms_main_road} rest rooms on main road",
    how_to_reach_title: "How to Reach",
    how_to_reach_points_1: "Office: Khari Road, Bhinmal city",
    how_to_reach_points_2: "Branch: Panch Kuwa, Karda Road",
    how_to_reach_points_3: "Distance from city: Panch Kuwa ~5 km; Mirpura ~8 km"

  },

  hi: {
    /* Nav */
    nav_home: "होम",
    nav_about: "परिचय",
    nav_work: "हमारा कार्य",
    nav_donate: "दान",
    nav_visit: "भेंट",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क",
    nav_legal: "कानूनी",
    lang_label_en: "EN",
    lang_label_hi: "हिन्दी",

    /* Hero */
    hero_title: "श्री जीवदया गौशाला, भीनमाल में आपका स्वागत है",
    hero_intro:
      "पिछले 80+ वर्षों से करुणा की शरणस्थली। जालौर ज़िले की पहली गौशाला के रूप में, हम 2,150+ पशुओं को विशाल आश्रयों और हरित प्रांगणों में आजीवन देखभाल प्रदान करते हैं—जहाँ हर प्राणी को उपचार, पौष्टिक आहार और गरिमा मिले।",
    hero_cta_donate: "अभी दान करें",
    hero_cta_visit: "भेंट / सेवा",

    /* Hero stats */
    stat_animals_value: "~{animals_total}",
    stat_animals_label: "पशु देखरेख में",
    stat_wards_value: "{wards}",
    stat_wards_label: "पशु वार्ड",
    stat_hospital_value: "{hospital}",
    stat_hospital_label: "पशु अस्पताल",
    stat_fodder_value: "{fodder_halls}",
    stat_fodder_label: "सूखा चारा हॉल",
    stat_trees_value: "~{trees}",
    stat_trees_label: "छायादार वृक्ष",
    stat_cost_value: "₹1.05लाख",
    stat_cost_label: "दैनिक व्यय",

    /* Fast Facts block */
    fastfacts_title: "त्वरित तथ्य",
    fact_years: "80+ वर्षों की सेवा",
    fact_animals: "2,150+ पशु देखरेख में",
    fact_cost: "₹1.05लाख दैनिक व्यय",

    fastfacts_infra_title: "बुनियादी ढांचा",
    fastfacts_infra_points1: "15 पशु वार्ड • 1 स्थल पर अस्पताल • 3 चारा हॉल",
    fastfacts_infra_points2: "2 बोरवेल + 1 धर्मकांटा (वेजब्रिज)",

    fastfacts_green_title: "हरित अभियान",
    fastfacts_green_points1: "~1,000 छायादार वृक्ष परिसर में",
    fastfacts_green_points2: "लक्ष्य: +100 वृक्ष/वर्ष • 2024–25 में ~250 लगाए",

    fastfacts_feed_title: "भोजन",
    fastfacts_feed_points1:
      "प्रतिदिन सूखा चारा + 1–2 ट्रक हरा चारा; शुभ दिनों में लापसी",

    /* About */
    about_title: "हमारे बारे में",
    about_history:
      "श्री जीवदया गौशाला, पवित्र नगरी भीनमाल (मारवाड़, राजस्थान) में स्थापित, जालौर ज़िले की प्रथम गौशाला है। 80+ वर्षों से हम अबोल, परित्यक्त और घायल पशुओं को सुरक्षा, देखभाल और गरिमा प्रदान कर रहे हैं।",
    about_campuses: "परिसर व विस्तार",
    about_mirpura: "मीरपुरा गौशाला: ~500 बीघा",
    about_panch: "पाँच कुआँ गौशाला: ~180 बीघा",
    about_residents:
      "निवासी: ~2,150 पशु (गाय, बैल, भैंस, बकरी, भेड़, घोड़ी)",
    about_facilities:
      "15 पशु वार्ड • स्थल पर अस्पताल • चारा हॉल • स्टाफ क्वार्टर • संत निवास • पक्षीघर व चबूतरा • जल संरचना (2 बोरवेल) • धर्मकांटा (वेजब्रिज)",

    /* Work */
    work_title: "हमारा कार्य",
    work_care: "पशु देखभाल",
    work_care_desc:
      "परित्यक्त या जोखिमग्रस्त पशुओं का बचाव और शांत वातावरण में आजीवन आश्रय।",
    work_medical: "चिकित्सा व अस्पताल",
    work_medical_desc:
      "घायल/बीमार पशुओं का स्थल पर उपचार, रिकवरी और सतत देखभाल।",
    work_feed: "भोजन व पोषण",
    work_feed_desc:
      "दैनिक सूखा + हरा चारा; त्योहारों/शुभ दिनों पर लापसी।",
    work_green: "हरित अभियान",
    work_green_desc:
      "~1,000 छायादार वृक्ष; हर वर्ष +100 नए वृक्ष का लक्ष्य; 2024–25 में 250 लगाए।",
    work_infra: "बुनियादी ढांचा",
    work_infra_desc:
      "वार्ड, अस्पताल, चारा हॉल, बोरवेल और चारा लॉजिस्टिक्स हेतु धर्मकांटा।",

    /* Donate */
    donate_title: "दान",
    donate_intro:
      "आपका सहयोग जीवन बचाता है। पर्युषण जैसे पावन दिनों सहित पूरे वर्ष, आपके योगदान 2,000+ पशुओं की रक्षा करते हैं। दैनिक व्यय लगभग ₹1.05 लाख है।",
    donate_disclaimer:
      "रसीद (80G): 80G रसीद हेतु कृपया फॉर्म में अपना पूरा नाम, ईमेल, फ़ोन और पता अवश्य भरें।",
    donate_options: "दान विकल्प",
    donate_one_time: "एकमुश्त",
    donate_monthly: "मासिक",
    donate_sponsor: "एक गाय गोद लें",
    donate_feed: "एक दिन का भोजन",
    donate_medical: "चिकित्सा सहायता",
    donate_tree: "वृक्ष लगाएँ",
    donate_bank: "बैंक ट्रांसफर विवरण",
    donate_form_title: "दान अभिरुचि फॉर्म",
    donate_name: "नाम",
    donate_email: "ईमेल",
    donate_phone: "फ़ोन",
    donate_address: "पता",
    donate_pan: "PAN (वैकल्पिक)",
    donate_amount: "राशि (₹)",
    donate_purpose: "उद्देश्य",
    donate_submit: "जमा करें",
    donate_success:
      "धन्यवाद! आपकी अभिरुचि सहेज ली गई है। टीम शीघ्र संपर्क करेगी।",

    /* Visit / Volunteer */
    visit_title: "भेंट",
    visit_hours: "भेंट समय: सुबह 9:00 – शाम 5:00",
    visit_guidelines:
      "भेंट के दौरान सुरक्षा व स्वच्छता निर्देशों का पालन करें और पशु वार्डों के पास स्टाफ के निर्देशों का सम्मान करें।",
    volunteer_roles:
      "सेवा भूमिकाएँ: पशु देखभाल, वृक्षारोपण, चारा वितरण और जागरूकता अभियान।",
    volunteer_form_title: "सेवक फॉर्म",
    volunteer_success: "रुचि के लिए धन्यवाद! हम संपर्क करेंगे।",
    map_placeholder: "मानचित्र",

    /* Gallery */
    gallery_title: "गैलरी",

    /* Contact */
    contact_title: "संपर्क",
    contact_form_title: "संपर्क फॉर्म",
    contact_success: "धन्यवाद! हम शीघ्र उत्तर देंगे।",

    /* Legal */
    legal_title: "कानूनी",
    privacy_policy: "गोपनीयता नीति",
    terms_conditions: "नियम व शर्तें",
    refund_policy: "रिफंड/रद्द",
    compliance: "अनुपालन",
    documents_pending: "दस्तावेज़ अपलोड लंबित हैं।",

    /* Footer / misc */
    footer_motto: "जानवरों के लिए प्रेम से बनाया गया",
    footer_address: "कार्यालय: खारी रोड, भीनमाल • शाखा: पांच कुआ, करड़ा रोड",
    footer_quick_links: "त्वरित लिंक",
    footer_social: "सोशल",
    copy: "कॉपी",
    copied: "कॉपी हो गया!",
    form_message: "संदेश",
    cta_whatsapp: "व्हाट्सऐप",
    role_president: "अध्यक्ष",
    role_vpresident: "उपाध्यक्ष",
    role_secretary: "सचिव",
    role_treasurer: "कोषाध्यक्ष",
    role_joint_secretary: "संयुक्त सचिव",

    offices_access_title: "कार्यालय व पहुँच",
    office_main: "कार्यालय: खारी रोड, भीनमाल शहर",
    office_branch: "शाखा कार्यालय: पांच कुआ, करड़ा रोड",
    access_city_panch: "शहर से दूरी: पांच कुआ ~5 किमी",
    access_city_mirpura: "शहर से दूरी: मीरपुरा ~8 किमी",
    campuses_scale_title: "परिसर व पैमाना",
    campus_mirpura_new: "मीरपुरा गौशाला: ~{mirpura_bigha} बीघा",
    campus_panch_new: "पांच कुआ गौशाला: ~{panch_bigha} बीघा",
    development_title: "विकास स्थिति",
    dev_panch: "पांच कुआ शाखा: पूर्ण विकसित",
    dev_mirpura: "मीरपुरा पक्ष: विकासाधीन",
    infra_util_title: "जल व उपयोगिताएँ",
    infra_tube_panch: "पांच कुआ में {tube_panch} ट्यूबवेल",
    infra_tube_mirpura: "मीरपुरा में {tube_mirpura} ट्यूबवेल",
    infra_boundary: "सीमा दीवार ~{boundary_wall_km} किमी (प्रगति पर)",
    facilities_title_plus: "सुविधाएँ",
    facilities_points_plus: "{staff_quarters} स्टाफ क्वार्टर • कबूतरों का चबूतरा • मेन रोड पर {rest_rooms_main_road} विश्राम कक्ष",
    how_to_reach_title: "कैसे पहुँचें",
    how_to_reach_points_1: "कार्यालय: खारी रोड, भीनमाल शहर",
    how_to_reach_points_2: "शाखा: पांच कुआ, करड़ा रोड",
    how_to_reach_points_3: "शहर से दूरी: पांच कुआ ~5 किमी; मीरपुरा ~8 किमी"

  }
};


/* ---------- globals ---------- */
let currentLang = "en";
let siteData = {
  animals_total: "2150+",
  wards: "15",
  hospital: "1",
  fodder_halls: "3",
  trees: "1000+",
  borewells: "2",
  dharam_kanta: "1",
  trees_goal_per_year: "100",
  trees_planted_2024_2025: "250"
};

/* --- Mobile nav hardening for Android/iOS --- */
function enhanceMobileNav(){
  const menuBtn = document.querySelector(".menu-toggle");
  const links   = document.getElementById("primary-links");
  if (!menuBtn || !links) return;

  const mq = window.matchMedia("(min-width: 769px)");

  function closeMenu() {
    links.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  function toggleMenu() {
    const isOpen = links.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  }

  // Toggle on click
  menuBtn.addEventListener("click", toggleMenu);

  // Close on link click (nice for phones)
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && links.classList.contains("active")) {
      closeMenu();
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!links.classList.contains("active")) return;
    const withinNav = e.target.closest(".nav");
    if (!withinNav) closeMenu();
  }, { passive: true });

  // Close on Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close when entering desktop breakpoint
  mq.addEventListener("change", (ev) => {
    if (ev.matches) closeMenu();
  });
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeaderFooter();
  enhanceMobileNav();
  
  // Load dynamic site data if available
  fetch("assets/data/site.json")
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (data) siteData = { ...siteData, ...data };
    })
    .finally(() => {
      currentLang = localStorage.getItem("lang") || "en";
      setLanguage(currentLang);
      setActiveNav();
    });

  // Event delegation
  document.body.addEventListener("click", handleClicks);

  // Forms + year
  setupForms();
  updateYear();
});

/* ---------- header + footer injection ---------- */
function renderHeaderFooter() {
  const header = document.getElementById("site-header");
  if (header) {
   header.innerHTML = `
   <nav class="nav container" aria-label="Primary">
      <button class="menu-toggle" aria-label="Toggle menu" aria-controls="primary-links" aria-expanded="false">☰</button>
    
      <!-- DESKTOP: left group -->
      <div class="nav-group nav-left">
        <a href="index.html" data-i18n="nav_home">Home</a>
        <a href="about-work.html" data-i18n="nav_about">About</a>
        <a href="gallery.html" data-i18n="nav_gallery">Gallery</a>
        <a href="donate.html" data-i18n="nav_donate">Donate</a>
      </div>
    
      <!-- Center logo (desktop & mobile) -->
      <a href="index.html" class="logo" aria-label="Home">
        <span class="logo-mark" aria-hidden="true"></span>
        <span class="sr-only">Home</span>
      </a>
    
      <!-- DESKTOP: right group -->
      <div class="nav-group nav-right">
        <a href="visit.html" data-i18n="nav_visit">Visit</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
        <a href="legal.html" data-i18n="nav_legal">Legal</a>
      </div>
    
      <!-- Always on the absolute right -->
      <div class="lang-switch" aria-label="Language">
        <button class="lang-toggle" data-lang="en" data-i18n="lang_label_en">EN</button> |
        <button class="lang-toggle" data-lang="hi" data-i18n="lang_label_hi">हिन्दी</button>
      </div>
    
      <!-- MOBILE: the drawer that opens under the bar -->
      <div class="nav-links" id="primary-links">
        <a href="index.html" data-i18n="nav_home">Home</a>
        <a href="about-work.html" data-i18n="nav_about">About</a>
        <a href="gallery.html" data-i18n="nav_gallery">Gallery</a>
        <a href="donate.html" data-i18n="nav_donate">Donate</a>
        <a href="visit.html" data-i18n="nav_visit">Visit</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
        <a href="legal.html" data-i18n="nav_legal">Legal</a>
      </div>
    </nav>
  `;
  }
  
  // Mobile menu toggle

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <img src="assets/img/logo.svg" alt="Logo" width="80" height="80" />
          <p>Shri Jivdaya Gaushala, Bhinmal</p>
          <p data-i18n="footer_address">Address: Mirpura Road, Bhinmal, Rajasthan (placeholder)</p>
        </div>
        <div>
          <h3 data-i18n="footer_quick_links">Quick Links</h3>
          <ul>
            <li><a href="index.html" data-i18n="nav_home">Home</a></li>
            <li><a href="about-work.html" data-i18n="nav_about">About</a></li>
            <li><a href="donate.html" data-i18n="nav_donate">Donate</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <p>&copy; <span id="year"></span> Shri Jivdaya Gaushala, Bhinmal. <span data-i18n="footer_motto">Made with ♥ for animals</span></p>
      </div>
    `;
  }
}

/* ---------- active nav ---------- */
function setActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav .nav-links a, .nav .nav-group a").forEach((a) => {
    a.toggleAttribute("aria-current", a.getAttribute("href") === current);
  });
}


/* ---------- language ---------- */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  // toggle active state
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // fill all [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    let text = (i18n[lang] && i18n[lang][key]) || "";
    // placeholder subst.
    text = text.replace(/\{(\w+)\}/g, (_, k) => (siteData[k] ?? ""));
    el.textContent = text;
  });
}

/* ---------- event delegation ---------- */
function handleClicks(e) {
  const t = e.target;

  // language
  if (t.classList.contains("lang-toggle")) {
    setLanguage(t.dataset.lang);
    return;
  }

  // copy (span id target)
  if (t.matches(".btn.btn-outline.small, .btn.btn-outline, .copy-btn") && (t.getAttribute("onclick") || t.dataset.copy)) {
    // If using data-copy: copy that, else fall back to selector in inline onclick
    const dataCopy = t.dataset.copy;
    if (dataCopy) {
      navigator.clipboard.writeText(dataCopy).then(() => showToast(i18n[currentLang].copied));
    }
    return;
  }

  // simple accordion pattern
  if (t.classList.contains("accordion-button")) {
    const content = t.nextElementSibling;
    if (content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  }
}

/* ---------- utility copy helper (selector form) ---------- */
function copy(sel) {
  const el = typeof sel === "string" ? document.querySelector(sel) : sel;
  if (!el) return;
  const text = (el.textContent || "").trim();
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => showToast(i18n[currentLang].copied));
}

/* ---------- forms (keep only Volunteer on localStorage) ---------- */
function setupForms() {
  const id = "volunteer-form";
  const form = document.getElementById(id);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const storeKey = "volunteerSubmissions";
    const arr = JSON.parse(localStorage.getItem(storeKey) || "[]");
    arr.push({ date: new Date().toISOString(), data });
    localStorage.setItem(storeKey, JSON.stringify(arr));

    showToast(i18n[currentLang].volunteer_success || "Saved.");
    form.reset();
  });
}


/* ---------- toast ---------- */
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("aria-live", "polite");
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

/* ---------- year in footer ---------- */
function updateYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

const MAKE_WEBHOOK_URL = '/api/submit';  // Vercel serverless proxy
const FORM_SECRET = 'shrigaushalabhinmal2025';                 // also add a filter for this in Make


async function postToMake(payload) {
  const res = await fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  // Make webhooks return 200/202 with no JSON by default
  if (!res.ok) throw new Error('Network error');
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const cf = document.getElementById('contactForm');
  if (cf) {
    cf.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('contactStatus');
      status.textContent = 'Sending...';
      try {
        await postToMake({
          secret: FORM_SECRET,
          formType: 'contact',
          name:  document.getElementById('c_name').value.trim(),
          email: document.getElementById('c_email').value.trim(),
          phone: document.getElementById('c_phone').value.trim(),
          message: document.getElementById('c_message').value.trim(),
          hp:    document.getElementById('c_hp').value.trim(), // honeypot
          origin: window.location.origin,
        });
        status.textContent = 'Thanks! We will contact you soon.';
        cf.reset();
      } catch (err) {
        status.textContent = 'Failed to send. Please try again.';
      }
    });
  }

  const df = document.getElementById('donateForm');
  if (df) {
    df.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('donateStatus');
      status.textContent = 'Saving...';
      try {
        await postToMake({
          secret: FORM_SECRET,
          formType: 'donation',
          name:   document.getElementById('d_name').value.trim(),
          email:  document.getElementById('d_email').value.trim(),
          amount: document.getElementById('d_amount').value.trim(),
          purpose:document.getElementById('d_purpose').value.trim(),
          notes:  document.getElementById('d_notes').value.trim(),
          hp:     document.getElementById('d_hp').value.trim(),
          origin: window.location.origin,
        });
        status.textContent = 'Thank you! We’ve recorded your pledge.';
        df.reset();
      } catch (err) {
        status.textContent = 'Failed to save. Please try again.';
      }
    });
  }
});


