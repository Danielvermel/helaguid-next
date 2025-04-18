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
