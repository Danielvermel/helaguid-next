// 1. Newsletter
export const newsletterGeneralData = {
    socialMedia: [
        {
            id: "0",
            icon: "instagram",
            alt: "Instagram icon to follow HealGuid for updates.",
            link: "https://www.instagram.com/healguid",
        },
        {
            id: "1",
            icon: "facebook",
            alt: "Facebook icon to join HealGuid's community",
            link: "https://www.facebook.com/HealGuid",
        },
        {
            id: "2",
            icon: "linkedin",
            alt: "LinkedIn icon to connect with HealGuid's professional network.",
            link: "https://www.linkedin.com/company/healguid",
        },
        {
            id: "3",
            icon: "x",
            alt: "Twitter icon (now X) to stay informed about HealGuid news.",
            link: "https://twitter.com/HealGuid",
        },
        { id: "4", icon: "email", alt: "email", link: "mailto:info@healguid.com" },
    ],
};

export const clientNewsletter = {
    bgColor: "bg-s5",
    bgFormColor: "bg-amber-300",
    title: "Take Charge Of Your Health Today",
    description:
        "Join us for access to verified practitioners and a supporting community of members transforming healthcare with natural and holistic solutions.",

    newsletter: "I’m interested in learning more about joining the HealGuid Partner Network.",

    privacy: {
        text: "By clicking 'Start Your Health Journey,' you agree to receive information about joining the HealGuid Partner Network and accept our",
        link: "/privacy-policy",
    },
    listOfType: [
        "Digestive & Gut Health",
        "Chronic Pain & Recovery",
        "Chronic Fatigue & Energy Issues",
        "Anxiety & Mental Wellbeing",
        "Hormonal Imbalances",
        "Autoimmune Conditions",
        "Sleep & Stress Management",
        "Preventive Health & Optimization",
    ],
    buttonColor: "bg-p1 text-white",
    getTitle: "What You Get With HealGuid:",
    get: [
        { id: "0", desc: "Early access to verified holistic practitioners" },
        { id: "1", desc: "Priority booking soon when we launch" },
        {
            id: "2",
            desc: "Personalized practitioner matching",
        },
        { id: "3", desc: "Exclusive early bird pricing" },
    ],
};

export const partnerNewsletter = {
    bgColor: "bg-s3",
    bgFormColor: "bg-lime-200",
    title: "Grow Your Holistic Practice with HealGuid",
    description: "Join our Founding Partners Program, and be part of transforming holistic healthcare delivery.",

    newsletter: "I’m interested in learning more about joining the HealGuid Partner Network.",

    privacy: {
        text: "By clicking 'Get Early Access,' you agree to receive information about joining the HealGuid Partner Network and accept our",
        link: "/privacy-policy",
    },
    listOfType: [
        "Holistic & Integrative Medicine",
        "Naturopathy",
        "Functional Medicine",
        "Chiropractic & Physical Therapy",
        "Traditional Medicine",
        "Diet & Nutrition",
    ],
    buttonColor: "bg-p1 text-white",
    getTitle: "What You Get With HealGuid:",
    get: [
        { id: "0", desc: "Early access to our platform" },
        { id: "1", desc: "Input on feature development" },
        {
            id: "2",
            desc: "Priority patient matching",
        },
        { id: "3", desc: "Exclusive founding member pricing" },
    ],
};

//  2. Footer
export const footer = {
    newsletter: {
        logo: "/images/logos/healGuid.png",
        alt: "HealGuid logo - connecting patients with holistic health solutions",
        title: "Stay in the loop",
        description: "Be the first to know about our launch and get exclusive updates:",
        privacyPolicy: "By clicking you accept you agree to receive updates and accept our Privacy Policy",
    },
    links: [
        {
            id: "0",
            title: "Company",
            list: [
                { id: "0", title: "Home", url: "#hero" },
                { id: "1", title: "About", url: "#about" },
                { id: "2", title: "Why Us", url: "#why-us" },
                { id: "3", title: "How it Works", url: "#how-it-works" },
                { id: "4", title: "Our Offer", url: "#our-offer" },
            ],
        },

        {
            id: "1",
            title: "Support",
            list: [
                { id: "0", title: "Contact", url: "mailto:info@healguid.com" },
                { id: "1", title: "FAQ", url: "/faq" },
                { id: "2", title: "Privacy Policy", url: "/privacy-policy" },
            ],
        },
        {
            id: "2",
            title: "Social",
            list: [
                {
                    id: "0",
                    title: "Instagram",
                    alt: "Instagram icon to follow HealGuid for updates.",
                    url: "https://www.instagram.com/healguid",
                },
                {
                    id: "1",
                    title: "Linkedin",
                    alt: "LinkedIn icon to connect with HealGuid's professional network.",
                    url: "https://www.linkedin.com/company/healguid",
                },
                {
                    id: "2",
                    title: "Facebook",
                    alt: "Facebook icon to join HealGuid's community.",
                    url: "https://www.facebook.com/HealGuid",
                },
                {
                    id: "3",
                    title: "X",
                    alt: "Twitter icon (now X) to stay informed about HealGuid news.",
                    url: "https://twitter.com/HealGuid",
                },
            ],
        },
    ],
};

//  3. About Us
export const aboutUs = {
    title: "Our Promise To You",
    subTitle: "Building the Future of Holistic Healthcare, Together.",
    mainMessage: "Health Isn't a Transaction. It's a Human Right.",
    description:
        "For too long, healthcare has felt cold, fragmented and impersonal. Patients are oft left alone,bouncing between sterile waiting rooms and rushed consultations, while passionate healers—practitioners who trained for years to make a difference—find themselves buried in paperwork and marketing instead of helping people heal.",
    points: [
        {
            id: "0",
            video: "/videos/about-us/believe.webm",
            img: "/images/about-us/believe.webp",
            jsonLdProperty: "believe",
            title: "Making Healthcare Human Again",
            bgColor: "bg-b5",
            description:
                "Imagine a world where finding trusted healthcare isn't a struggle. Where practitioners are more than providers— they're partners. Where patients aren't just numbers or prescriptions, but individuals with unique stories and boundless potential to heal and thrive.",
        },
        {
            id: "1",
            video: "/videos/about-us/trust.webm",
            img: "/images/about-us/trust.webp",
            jsonLdProperty: "trust",
            title: "Building Trust as Our Foundation",
            bgColor: "bg-b3",
            description:
                "68% of patients seek holistic care but often feel lost and uncertain. At HealGuid, we hear you.",
            points: [
                {
                    id: "0",
                    text: "Our multi-layered accreditation process goes beyond basic credentials—we create a trusted bridge of care.",
                },
                {
                    id: "1",
                    text: "We meticulously select practitioners who blend scientific expertise with compassionate, whole-person healing approaches.",
                },
                {
                    id: "2",
                    text: "Every practitioner is carefully vetted to ensure they provide holistic care of quality and impact.",
                },
            ],
        },
        {
            id: "2",
            video: "/videos/about-us/patients.webm",
            img: "/images/about-us/patients.webp",
            jsonLdProperty: "patients",
            title: "Putting Your Health in Your Hands",
            bgColor: "bg-b7",
            description:
                "No more endless searches. No more uncertainty. HealGuid is the bridge between your health challenges and practitioners who truly see you—fully, deeply, and compassionately. We believe in crafting personalized care journeys that empoweryou to not just survive, but truly thrive.",
            joinButton: {
                text: "Visit Our Client Page",
                containerClass: "bg-s1 xs:w-72 xs:h-10 sm:w-96 sm:h-12",
                textClass: "tracking-wide font-semibold xs:text-base sm:text-xl",
                arial: "Button to find and connect with a trusted health partner.",
                url: "/",
            },
        },
        {
            id: "3",
            video: "/videos/about-us/practitioners-v2.webm",
            img: "/images/about-us/practitioners.webp",
            jsonLdProperty: "practitioners",
            title: "For Practitioners: Your calling, simplified",
            bgColor: "bg-b4",
            description:
                "You didn't train for years to become a social media marketer—you became a healer to transform lives. HealGuid is your comprehensive ally, seamlessly connecting you with patients who deeply value your unique expertise. We handle the complex logistics so you can do what you do best: guide people towards genuine healing.",

            joinButton: {
                text: "Visit HealGuid for Partners",
                containerClass: "bg-s1 xs:w-72 xs:h-10 sm:w-96 sm:h-12",
                textClass: "tracking-wide font-semibold xs:text-base sm:text-xl",
                arial: "Button to find and connect with a trusted health partner.",
                url: "/partners",
            },
        },
        {
            id: "4",
            video: "/videos/about-us/healthcare.webm",
            img: "/images/about-us/healthcare.webp",
            jsonLdProperty: "healthcare",
            title: "The healthcare revolution starts here",
            bgColor: "bg-b8",
            description:
                "HealGuid isn't just a platform—it's a movement. As healthcare evolves, we're leading the transformation:",
            points: [
                {
                    id: "0",
                    text: "Championing evidence-based, holistic approaches that respect both science and human complexity",
                },
                {
                    id: "1",
                    text: "Empowering practitioners to focus on their healing craft",
                },
                {
                    id: "2",
                    text: "Equipping patients with tools to take meaningful charge of their wellness",
                },
                {
                    id: "3",
                    text: "Creating a community where healing is a collaborative, deeply human experience",
                },
            ],
        },
    ],
    endInfo: {
        videoStart: "/videos/about-us/celebrate.webm",
        imageStart: "/images/about-us/celebrate.webp",
        altStart: "People climbing steps with gears, symbolizing progress and collaboration in holistic healthcare.",
        videoEnd: "/videos/about-us/cog.webm",
        imageEnd: "/images/about-us/cog.webp",
        altEnd: "A dynamic animation of gears turning, symbolizing innovation, collaboration, and the interconnected processes in holistic healthcare.",
        title: "Our Promise: Humanity First, Always",
        subTitle: "We will keep pushing forward...",
        description:
            "...Until evidence-based holistic care becomes accessible to all. \n Until healthcare is driven by patient needs and practitioner expertise. \n Until practitioners can breathe easier and patients feel truly seen, supported, and hopeful.",
        text: "This isn't just our mission—it's our life's work.",
    },
};

// 4. Faq
export const faqs = {
    menus: [
        {
            id: "0",
            title: "For Patients",
            url: "/",
        },
        {
            id: "1",
            title: "For Partners",
            url: "/partners",
        },
        {
            id: "2",
            title: "Privacy Policy",
            url: "/privacy-policy",
        },
    ],
    title: "FAQs",
    description: "Get quick answers to the most frequently asked questions about HealGuid.",
    questionGroups: [
        {
            id: "0",
            title: "🌿 The Basics",
            questions: [
                {
                    id: "0",
                    question: "What is HealGuid and how does it help with chronic health conditions?",
                    answer: "✨ Think of us as your wellness matchmaker! We connect you with trusted holistic practitioners who truly understand your unique health journey. Whether you're managing chronic fatigue, fibromyalgia, autoimmune issues, or simply exploring natural approaches to wellness, we make finding the right practitioner simple and secure.\n\nFor you, this means:\n- Access to verified experts in functional medicine, naturopathy, and integrative health\n- Practitioners experienced with chronic conditions like yours\n- Simple booking for both virtual and in-person consultations\n- A supportive community that understands what you're going through",
                    button: {
                        label: "Find a Practitioner →",
                        href: "",
                        hasButton: true,
                        alt: "button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "1",
                    question: "When is HealGuid launching and how can I get early access?",
                    answer: "🚀 The excitement is building! We're launching in March 2025, and we'd love for you to be part of our founding community. Join our waitlist today for some pretty amazing early access perks and help shape the future of holistic healthcare.\n\nEarly members receive:\n- Priority access to our network of verified holistic practitioners\n- Exclusive early-bird pricing and special offers\n- First access to new features and educational resources\n- The chance to help shape a platform that's changing holistic healthcare",
                    button: {
                        label: "Join the Waitlist →",
                        href: "",
                        hasNewsletter: true,
                        newsletterType: "client",
                        hasButton: true,
                        alt: "button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "2",
                    question: "Why should I choose HealGuid for finding holistic healthcare?",
                    answer: "💚 Because your wellness journey shouldn't be complicated! We're creating a space where:\n\n- Finding the right holistic practitioner for chronic conditions feels as natural as talking to a friend\n- Every practitioner can focus on what matters most - your personalized care\n- You're part of a community that understands and supports your path to wellness\n- You can easily find practitioners specializing in functional medicine, naturopathy, Traditional Chinese Medicine, and more",
                    button: {
                        label: "Learn How It Works →",
                        href: "/#how-it-works",
                        hasButton: true,
                        alt: "button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "3",
                    question: "What makes HealGuid different from conventional healthcare platforms?",
                    answer: "⭐ We're reimagining holistic healthcare to work better for you:\n\n- Your wellness journey evolves, and so do our AI-powered care plans\n- We focus on root causes and whole-person approaches, not just symptom management\n- You'll join a community that truly gets it - because sometimes you just need to talk to someone who understands\n- Every practitioner is verified and experienced with evidence-based holistic approaches\n- We specialize in supporting those with chronic fatigue syndrome, fibromyalgia, autoimmune disorders, and long COVID",
                    button: {
                        label: "Discover Our Approach →",
                        href: "/#how-it-works",
                        hasButton: true,
                        alt: "button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
            ],
        },
        {
            id: "1",
            title: "👩‍⚕️ For Holistic Healthcare Practitioners",
            questions: [
                {
                    id: "0",
                    question: "What benefits do I get as a founding practitioner member?",
                    answer: "We're so excited to have you! As one of our first practitioners, you'll get:\n\n- Priority platform access with reduced fees for your first year\n- A say in how we grow and what features we build\n- Premium features before anyone else\n- A spotlight position when we launch\n- A chance to shape the future of holistic care\n- Connection with patients specifically seeking your expertise",
                    button: {
                        label: "Apply As A Practitioner →",
                        href: "",
                        hasNewsletter: true,
                        newsletterType: "partner",
                        hasButton: true,
                        alt: "Find a Practitioner button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "1",
                    question: "How can I get early access to HealGuid as a practitioner?",
                    answer: "Joining HealGuid's founding community is simple!\n\n1. **Sign up** using our Early Access form.\n2. **Share your expertise** and practice focus.\n3. **Once verified**, you'll gain priority access to:\n   - Reduced first-year platform fees\n   - Premium features before launch\n   - Input on feature development\n   - Early patient connections",
                    button: {
                        label: "Join Our Practitioner Network →",
                        href: "",
                        hasNewsletter: true,
                        newsletterType: "partner",
                        hasButton: true,
                        alt: "Find Our Practitioner Network button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "2",
                    question: "What tools will HealGuid offer to help my holistic practice thrive?",
                    answer: "HealGuid offers tools designed with holistic practitioners in mind:\n\n- Smart AI tools that help you create personalized care plans\n- Always-on virtual consultations for your patients' convenience\n- Secure ways to stay connected with your patients\n- Insights to help your practice thrive with patients seeking functional medicine and holistic care\n- Scheduling that works like a dream, reducing administrative burden",
                    button: {
                        label: "See Our Practice Tools →",
                        href: "",
                        hasButton: true,
                        alt: "See Our Practice Tools button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "3",
                    question: "How does HealGuid verify holistic practitioners?",
                    answer: "We're here to showcase your expertise and build trust with patients! Our thorough verification process ensures you stand out as a trusted holistic care provider:\n\n- Credential verification specific to your holistic specialties\n- Professional background checks and licensing confirmation\n- Gain a verified badge that sets you apart from the competition\n- Build credibility through ongoing feedback and professional development opportunities\n- Stay ahead with regular quality reviews designed to support your growth",
                    button: {
                        label: "Learn About Verification →",
                        href: "/partners#trust",
                        hasButton: true,
                        alt: "Learn About Verification → button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
            ],
        },
        {
            id: "2",
            title: "🌱 For Patients Seeking Holistic Care",
            questions: [
                {
                    id: "0",
                    question: "What types of holistic practitioners will I find on HealGuid?",
                    answer: "We're bringing together amazing practitioners in:\n\n- Functional Medicine\n- Naturopathic Medicine\n- Traditional Chinese Medicine\n- Ayurvedic Practice\n- Nutrition & Wellness\n- Integrative Medicine\n- Mind-Body Specialists\n- Herbalists & Botanical Medicine\n\nEvery practitioner is verified and ready to support your journey with chronic fatigue, fibromyalgia, autoimmune conditions, digestive issues, hormonal imbalances, and more.",
                    button: {
                        label: "Find Your Perfect Match →",
                        href: "",
                        hasButton: true,
                        alt: "Find Your Perfect Match button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "1",
                    question: "How does booking a holistic consultation work on HealGuid?",
                    answer: "Finding and booking your perfect practitioner is easy:\n\n- Find your perfect practitioner match using our intuitive search\n- Pick virtual or in-person care based on your preference and location\n- Book an appointment instantly, even at 3 AM!\n- Receive preparation guidance before your session\n- Start your personalized wellness journey with a practitioner who understands your needs",
                    button: {
                        label: "Book a Consultation →",
                        href: "",
                        hasButton: true,
                        alt: "Book a Consultation button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "2",
                    question: "What about the cost of holistic healthcare through HealGuid?",
                    answer: "We believe everyone deserves access to holistic care:\n\n- Explore our basics for free\n- Book a trial consultation before committing to anything\n- See transparent pricing for all consultations (typically £75-£150 per session, depending on the practitioner and service)",
                    button: {
                        label: "View Pricing Options →",
                        href: "",
                        hasButton: true,
                        alt: "View Pricing Options button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "3",
                    question:
                        "How can HealGuid help with specific conditions like chronic fatigue or autoimmune issues?",
                    answer: "HealGuid specializes in connecting you with practitioners who understand complex conditions:\n\n- Find experts in your specific health challenges\n- Access holistic approaches that address root causes\n- Receive personalized care plans that evolve with your progress\n- Connect with a community facing similar health journeys\n- Discover educational resources specific to conditions like chronic fatigue, fibromyalgia, and autoimmune disorders",
                    button: {
                        label: "Explore Condition-Specific Care →",
                        href: "",
                        hasButton: true,
                        alt: "Explore Condition-Specific Care  button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
            ],
        },
        {
            id: "3",
            title: "💫 Privacy and Support",
            questions: [
                {
                    id: "0",
                    question: "Is my health information safe with HealGuid?",
                    answer: "Your privacy means everything to us! We've built HealGuid with bank-level security:\n\n- HIPAA-compliant systems (the gold standard in healthcare privacy)\n- Everything's encrypted (like having a super-secure digital vault)\n- Safe and secure messaging with your practitioner\n- Only verified practitioners can access your information\n- Regular security updates to keep everything protected",
                    button: {
                        label: "Read Our Privacy Policy →",
                        href: "/privacy-policy",
                        hasButton: true,
                        alt: "Read Our Privacy Policy button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "1",
                    question: "Tell me more about the HealGuid community!",
                    answer: "Think of it as your wellness circle! Here you can:\n\n- Share your journey and celebrate wins with others who understand\n- Connect with others on similar paths managing chronic conditions\n- Join moderated support groups and healing challenges\n- Access expert-created resources tailored to your holistic health needs\n- Learn from others who have successfully navigated similar health challenges",
                    button: {
                        label: "Join Our Community →",
                        href: "",
                        hasButton: true,
                        alt: "Join Our Community button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
                {
                    id: "2",
                    question: "What if I need help using HealGuid?",
                    answer: "We've got your back! You'll have access to:\n\n- Friendly support available 24/7\n- Clear guides and tutorials to get you started\n- Quick responses to your questions\n- Community managers ready to assist you\n- Helpful resources for navigating your holistic health journey",
                    button: {
                        label: "Contact Support →",
                        href: "mailto:info@healguid.com",
                        hasButton: true,
                        alt: "Contact Support button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },

                {
                    id: "3",
                    question: "Can HealGuid help me transition from conventional to holistic healthcare?",
                    answer: "Absolutely! Many HealGuid users are seeking to complement or transition from conventional care:\n\n- Find practitioners who understand how to bridge conventional and holistic approaches\n- Access resources explaining integrative healthcare approaches\n- Connect with others who have successfully navigated this transition\n- Learn how functional medicine and other holistic methods address root causes\n- Discover how to communicate effectively with your entire healthcare team",
                    button: {
                        label: "Start Your Holistic Journey →",
                        href: "",
                        hasButton: true,
                        alt: "Start Your Holistic Journey button",
                        containerClass:
                            "cursor-pointer bg-transparent hover:bg-s1 hover:text-white border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
                        textClass: "tracking-wide font-medium text-base",
                    },
                },
            ],
        },
    ],
};
