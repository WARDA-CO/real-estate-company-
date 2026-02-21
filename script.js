const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_properties: "Properties",
        nav_why: "Why Us",
        nav_contact: "Contact",
        footer_desc: "Defining luxury real estate across the UAE with trust and elegance.",
        hero_tagline: "Your Gateway to Luxury Living in the UAE",
        hero_cta: "View Properties",
        about_title: "Elegance in Every Detail",
        about_desc: "Baytak is the UAE's premier luxury real estate agency. We specialize in curated properties that define modern luxury. Trust and transparency are at the core of everything we do.",
        prop_title: "Featured Projects",
        prop_desc: "Explore our exclusive selection of high-end residences across the Emirates.",
        p1_name: "The Royal Residences",
        p1_desc: "Luxury penthouse with panoramic city views.",
        p2_name: "Emerald Waterfront",
        p2_desc: "Breathtaking seaside villas in the capital.",
        p3_name: "Gardenia Estate",
        p3_desc: "Minimalist villas surrounded by lush greenery.",
        p4_name: "Azure Heights",
        p4_desc: "Modern apartment complex with stunning Gulf views.",
        p5_name: "Peak View Villas",
        p5_desc: "Traditional design meets modern luxury in the mountains.",
        p6_name: "Oasis Retreat",
        p6_desc: "A serene desert estate blending luxury with tradition.",
        why_title: "Why Baytak?",
        why_1_title: "Quality Assurance",
        why_1_desc: "Only the most premium properties enter our portfolio.",
        why_2_title: "Trust & Transparency",
        why_2_desc: "No hidden fees. Full disclosure on every transaction.",
        why_3_title: "Speed & Efficiency",
        why_3_desc: "Fast-track processing for all luxury acquisitions.",
        contact_title: "Contact Us",
        placeholder_name: "Name",
        placeholder_email: "Email",
        placeholder_message: "Message",
        contact_btn: "Send Message"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عن الشركة",
        nav_properties: "العقارات",
        nav_why: "لماذا نحن",
        nav_contact: "تواصل معنا",
        footer_desc: "نحدد معايير العقارات الفاخرة في جميع أنحاء الإمارات بالثقة والأناقة.",
        hero_tagline: "بوابتك للحياة الفاخرة في دولة الإمارات",
        hero_cta: "عرض العقارات",
        about_title: "الأناقة في كل التفاصيل",
        about_desc: "بيتك هي الوكالة العقارية الأكثر تميزاً في الإمارات. نحن متخصصون في العقارات الفاخرة التي تعيد تعريف مفهوم الرقي. الثقة والشفافية هما أساس تعاملنا.",
        prop_title: "مشاريع متميزة",
        prop_desc: "استكشف مجموعتنا الحصرية من المساكن الفاخرة في جميع أنحاء الإمارات.",
        p1_name: "رويال ريزيدنس",
        p1_desc: "بنتهاوس فاخر بإطلالات بانورامية على المدينة.",
        p2_name: "إيميرالد ووترفرونت",
        p2_desc: "فلل ساحلية خلابة في قلب العاصمة.",
        p3_name: "جاردينيا إستيت",
        p3_desc: "فلل عصرية محاطة بالمساحات الخضراء الخصبة.",
        p4_name: "أزور هايتس",
        p4_desc: "مجمع سكني حديث بإطلالات خلابة على الخليج.",
        p5_name: "بيك فيو فيلاز",
        p5_desc: "التصميم التقليدي يلتقي بالفخامة الحديثة في الجبال.",
        p6_name: "منتجع الواحة",
        p6_desc: "عقار صحراوي هادئ يجمع بين الفخامة والتقاليد.",
        why_title: "لماذا تختار بيتك؟",
        why_1_title: "ضمان الجودة",
        why_1_desc: "فقط العقارات الأكثر تميزاً تدخل ضمن محفظتنا العقارية.",
        why_2_title: "الثقة والشفافية",
        why_2_desc: "لا توجد رسوم خفية. إفصاح كامل في كل صفقة.",
        why_3_title: "السرعة والكفاءة",
        why_3_desc: "معالجة سريعة لجميع التداولات العقارية الفاخرة.",
        contact_title: "تواصل معنا",
        placeholder_name: "الاسم",
        placeholder_email: "البريد الإلكتروني",
        placeholder_message: "الرسالة",
        contact_btn: "إرسال الرسالة"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Update form placeholders
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageArea = document.querySelector('textarea');
    const submitBtn = document.querySelector('#contact-form button');

    if (nameInput) nameInput.placeholder = translations[currentLang].placeholder_name;
    if (emailInput) emailInput.placeholder = translations[currentLang].placeholder_email;
    if (messageArea) messageArea.placeholder = translations[currentLang].placeholder_message;
    if (submitBtn) submitBtn.innerText = translations[currentLang].contact_btn;

    document.getElementById('lang-btn').innerText = currentLang === 'en' ? 'AR' : 'EN';
}

document.getElementById('lang-btn').addEventListener('click', toggleLanguage);

// Sticky Navbar logic
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.innerHTML = navLinks.classList.contains('nav-active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
