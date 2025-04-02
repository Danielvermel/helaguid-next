//  Banner

export const banner = {
    text: "| Be one of our founding practitioners • Shape the future of holistic care • Early access benefits |",
};

// 0. Header
export const menus = [
    {
        id: "0",
        title: "Why Us",
        url: "#why-us",
    },
    {
        id: "1",
        title: "Our Offer",
        url: "#our-offer",
    },
    {
        id: "2",
        title: "How It Works",
        url: "#how-it-works",
    },
    {
        id: "3",
        title: "About",
        url: "#about",
    },
    {
        id: "4",
        title: "For Patients",
        url: "/",
    },
];

// 1. Hero

export const hero = {
    accentColor: "bg-b12",
    newsletter: {
        alt: "HealGuid logo - connecting patients with holistic health solutions",
        title: "Join our Founding Circle - Limited Early Access Available:",
        privacyPolicy: "By joining, you agree to our Privacy Policy",
        class: "bg-b12 p-6 rounded-2xl lg:mr-10 tracking-2",
    },
    image: "/images/hero/patient-practitioner-v2.webp",
    imageMobile: "/images/hero/patient-practitioner-v2-mobile.webp",
    imageClass:
        "hero-image rounded-2xl mb-2 max-md:mt-28 2xl:w-11/12 max-lg:w-10/12 max-md:w-full max-lg:mx-auto scale-x-[-1]",
    title: "Heal Your Patients, Guide Your Practice",
    description:
        "Join our community of holistic professionals and grow your holistic practice. We’re building a better way for you to connect with more patients, simplify your practice, significantly cut admin time, and focus on what matters most—healing",

    buttons: {
        id: "1",
        label: "Learn About Early Access",
        action: "scroll",
        href: "#why-us",
        jumpTo: "why-us",
        containerClass:
            "cursor-pointer bg-transparent border-2 border-s1 xs:h-10 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
        textClass: "tracking-wide font-medium max-md:text-base md:text-lg",
    },

    expertise: {
        title: "Built on Real Expertise",
        class: "bg-b12 z-5 w-full py-3 max-lg:hidden transition-all duration-300 ease-in-out order-4 absolute bottom-3 left-0",
        points: [
            {
                id: "0",
                text: "Built on insights from 100+ practitioners",
            },
            {
                id: "1",
                text: "Co-designed with holistic healthcare leaders",
            },
            {
                id: "2",
                text: "Developed with tech, patients and practitioner input",
            },
        ],
    },

    review: {
        comment:
            "As a holistic practitioner, I didn't train for years to become an influencer. I collaborate with HealGuid because we deserve a platform dedicated to uplift holistic care, connect us with patients, and offer tailor-made tools for our practice.",
        profile: {
            image: "/images/hero/profile.webp",
            title: "Dr. Emily Carter, MD",
            work: "Health Advisor",
        },
    },
};

// 2. Causes

export const causes = {
    title: "Ready for a Better Way  \r\n to Reach and Help Patients?",
    description: "We understand the unique challenges in holistic care and are here to help you overcome:",
    subDescription: "We’re building HealGuid to change this—and we want your input as a founding member.",
    buttonText: "Help Shape the Future of Holistic Practice",
    jumpToNext: "our-offer",
    points: [
        {
            id: "0",
            icon: "search.svg",
            jsonLdProperty: "search",
            alt: "Magnifying glass icon representing feeling overlooked by traditional healthcare.",
            text: "Limited Patient Reach",
            description:
                "68% of patients are open to holistic care but claim not to know where to find trusted practitioners",
        },
        {
            id: "1",
            icon: "growth.svg",
            jsonLdProperty: "growth",
            text: "Difficult Growing a Sustainable Practice",
            alt: "Growth icon representing the difficulty in growing a sustainable holistic care practice.",
            description:
                "The demand for holistic care is growing 30% yearly, but practitioners lack the tools to scale",
        },
        {
            id: "2",
            icon: "calendar.svg",
            jsonLdProperty: "calendar",
            alt: "Calendar icon symbolizing endless appointments without solutions.",
            text: "Overwhelming Admin Work",
            description: "Healthcare practitioners spend up to 20 hours weekly on administrative tasks",
        },
        {
            id: "3",
            icon: "handShake.svg",
            jsonLdProperty: "handShake",
            text: "Lack of Advocacy & Tools for Holistic Care",
            alt: "Handshake icon representing the lack of advocacy and tools for holistic care.",
            description: "Traditional platforms aren't built for the unique needs of holistic care",
        },
    ],
};

//  3. Why Us

export const whyUs = {
    title: "Why Join HealGuid Early?",
    tableTitle: "The HealGuid Difference",
    company: "HealGuid's Vision",
    competitor: "Mainstream Approach",
    exclusiveBenefits: {
        title: "Founding Member Exclusive Benefits",
        majorPoints: [
            {
                id: "0",
                subTitle: "Lock in These Unique Advantages:",
                points: [
                    {
                        id: "0",
                        text: "Get Early-Bird Pricing",
                        strong: "Pricing",
                    },
                    {
                        id: "1",
                        text: "Receive Priority Patient Matching",
                        strong: "Priority",
                    },
                    {
                        id: "2",
                        text: "Display Founding Member Badge",
                        strong: "Badge",
                    },
                ],
            },
            {
                id: "1",
                subTitle: "Grow and Shape the Future of Holistic Care:",
                points: [
                    {
                        id: "0",
                        text: "Be a Spotlight in Launch Marketing",
                        strong: "Spotlight",
                    },
                    {
                        id: "1",
                        text: "Shape Platform Development",
                        strong: "Development",
                    },
                    {
                        id: "2",
                        text: "Access Premium Support",
                        strong: "Premium",
                    },
                ],
            },
        ],
    },

    buttonText: "Join HealGuid today",
    buttonColor: "bg-s1",
    expertiseTitle: "Built on Real Expertise",
    expertise: [
        {
            id: "0",
            title: "Built on 100+ practitioner interviews",
        },
        {
            id: "1",
            title: "Designed with leading holistic healthcare professionals",
        },
        {
            id: "2",
            title: "Developed by healthcare and tech experts",
        },
    ],

    reviews: [
        {
            id: "0",
            name: "Nick Dale",
            avatarUrl: "/images/testimonials/jessica-saunders.webp",
            comment:
                "As a holistic practitioner, I’ve struggled to bring my message across to the general public, and I didn’t train for years to become an influencer. I collaborate with HealGuid because I believe there is power in unity, and we deserve a platform dedicated to uplift holistic care, connecting us with more  patients, and offering us tailor made tools.",
        },
    ],
};

export const comparisonTable = [
    {
        id: "0",
        feature: "Treatment Approach",
        companyInfo: "Holistic: Body, mind, and environment",
        conventionMedicineInfo: "Specialized: focuses on treating isolated symptoms",
    },
    {
        id: "1",
        feature: "Access to Practitioners",
        companyInfo: " 24/7 virtual and in-person consultations worldwide",
        conventionMedicineInfo: " Often long wait times for in-person visits",
    },
    {
        id: "2",
        feature: "Personalized Plans",
        companyInfo: "Personalized plans tailored to your needs",
        conventionMedicineInfo: "Standardized treatments due to general protocols",
    },
    {
        id: "3",
        feature: "Remedies",
        companyInfo: "Natural medicines, vitamins, supplements",
        conventionMedicineInfo: "Pharmaceutical chemical interventions",
    },
    {
        id: "4",
        feature: "Preventative Care",
        companyInfo: "Main focus on lifestyle, diet, and prevention",
        conventionMedicineInfo: "Mostly reactive, focused on managing diseases",
    },
];

//  4. How it Works

export const howItWorks = {
    pageTitle: "How It Works",
    pageTitleColor: "text-p1",
    subTitle: "Your Practice, Enhanced by Our Platform",
    mainDescription:
        "HealGuid is more than a platform—it’s a movement to make holistic care accessible and impactful. As a founding partner, you’ll help shape the future of integrative healthcare.",
    buttonAction: "partner",
    buttonTitle: "Join as a Founding Partner",
    buttonColor: "bg-s1",
    sideVideo: "/videos/how-it-works/tech.webm",
    sideImage: "/images/how-it-works/tech.png",
    sideAlt: "healthcare platform",
    steps: [
        {
            id: "0",
            icon: "join.webp",
            alt: "Illustration symbolizing joining a network of holistic healthcare professionals and patients.",
            jsonLdProperty: "join",
            iconColor: "bg-lime-200",
            textColor: "text-orange-600",
            bgColor: "bg-lime-100",
            title: "Join Our Network",
            caption: "Step 1",
            reasons: [
                {
                    id: "0",
                    point: "Create your professional profile",
                    description: "to highlight your unique expertise",
                },
                {
                    id: "1",
                    point: "Get Verified",
                    description: "to build patient trust and visibility",
                },
                {
                    id: "2",
                    point: "Be among the first",
                    description: "to shape our practitioner experience",
                },
            ],
        },
        {
            id: "1",
            icon: "connect.webp",
            jsonLdProperty: "connect",
            alt: "Illustration symbolizing guiding patients through personalized holistic care plans.",
            iconColor: "bg-green-200",
            textColor: "text-yellow-600",
            bgColor: "bg-green-100",
            title: "Guide Patients",
            caption: "Step 2",
            reasons: [
                {
                    id: "0",
                    point: "Offer care your way—",
                    description: "virtual or in-person",
                },
                {
                    id: "1",
                    point: "Access tools",
                    description: "tools designed to simplify patient management",
                },
                {
                    id: "2",
                    point: "Connect with patients",
                    description: "seeking holistic care",
                },
            ],
        },
        {
            id: "2",
            icon: "community.webp",
            jsonLdProperty: "community",
            alt: "Illustration symbolizing expanding your impact in holistic care by joining a trusted network.",
            iconColor: "bg-teal-200",
            textColor: "text-blue-600",
            bgColor: "bg-teal-100",
            title: "Expand Your Impact",
            caption: "Step 3",
            reasons: [
                {
                    id: "0",
                    point: "Expand your reach",
                    description: "in a thriving holistic community.",
                },
                {
                    id: "1",
                    point: "Focus on healing",
                    description: "while we handle the tech and logistics",
                },
                {
                    id: "2",
                    point: "Help shape features",
                    description: "that matter to your practice",
                },
            ],
        },
    ],

    jumpToNext: "trust",
    buttonArialLabelText: "A button called verification process that jumps you to the trust information",
};

//  5. What We Offer

export const offers = {
    title: "What We Offer",
    subTitle: "Powerful Tools and Support to Grow Your Practice",
    description:
        "Join HealGuid to expand your reach, connect with new patients, and simplify practice management—all in one intuitive platform.",
    buttonTitle: "Join our Partner Network",
    buttonColor: "bg-s1",
    list: [
        {
            id: "0",
            containerClass: "",
            type: "Core Benefits",
            points: [
                {
                    id: "0",
                    image: "/images/offers/access.png",
                    alt: "Icon representing personalized care with interconnected circles symbolizing holistic health.",
                    bgColor: "bg-lime-100",
                    bgTitleColor: "bg-lime-200",
                    title: "Access to New Patients",
                    description:
                        "Connect with a growing holistic health community eager to find practitioners they trust",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Expand your reach",
                            description: "by connecting with patients who value holistic care.",
                        },
                        {
                            id: "1",
                            boldText: "Build credibility",
                            description: "through verified reviews and a trusted community.",
                        },
                    ],
                },
                {
                    id: "1",
                    image: "/images/offers/manage.png",
                    alt: "Gear icon symbolizing flexible and patient-focused care options.",
                    bgColor: "bg-sky-100",
                    bgTitleColor: "bg-sky-200",
                    title: "Manage Patients Easily",
                    description: "Stay engaged with your patients’ journeys and celebrate their milestones",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Simplify scheduling and billing",
                            description: "with automation",
                        },
                        {
                            id: "1",
                            boldText: "Reduce no-shows",
                            description: "through personalized appointment reminders.",
                        },
                    ],
                },
                {
                    id: "2",
                    image: "/images/offers/professional.png",
                    alt: "Ribbon icon representing practitioner membership in recognized healthcare associations",
                    bgColor: "bg-yellow-100",
                    bgTitleColor: "bg-yellow-200",
                    title: "Professional Profile & Accreditation",
                    description: "Showcase your expertise and gain patient trust with our accreditation",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Use a website-like profile",
                            description: "highlighting your skills and expertise",
                        },
                        {
                            id: "1",
                            boldText: "Earn trust",
                            description: "with HealGuid accreditation and a practitioner badge.",
                        },
                    ],
                },
                {
                    id: "3",
                    image: "/images/offers/patient.png",
                    alt: "Chart icon with an arrow going up",
                    bgColor: "bg-orange-100",
                    bgTitleColor: "bg-orange-200",
                    title: "Patient Progress Tracking",
                    description: "Gather personalized information that matters most to your care",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Share health reports",
                            description: "easily and effectively to keep patients engaged",
                        },
                        {
                            id: "1",
                            boldText: "Log milestones",
                            description: "to celebrate successes together",
                        },
                    ],
                },
            ],
        },
        {
            id: "integrative",
            containerClass: "lg:min-h-48 max-lg:min-h-36",
            type: "Treatment Solutions",
            points: [
                {
                    id: "0",
                    image: "/images/offers/digestive.png",
                    alt: "Stomach icon representing care for digestive and gut health.",
                    bgColor: "bg-green-100",
                    bgTitleColor: "bg-green-200",
                    title: "Digestive & Gut Health",
                    categories: {
                        description:
                            "Experiencing digestive issues, food sensitivities, or gut-related problems? Our practitioners help restore your digestive balance naturally.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "IBS and digestive discomfort",
                                    },
                                    {
                                        id: "1",
                                        text: "Bloating and gas",
                                    },
                                    {
                                        id: "2",
                                        text: "Food sensitivities",
                                    },
                                    {
                                        id: "3",
                                        text: "Acid reflux",
                                    },
                                    {
                                        id: "4",
                                        text: "Irregular bowel movements",
                                    },
                                    {
                                        id: "4",
                                        text: "Chronic stomach pain",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Comprehensive gut health assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Food sensitivity testing",
                                    },
                                    {
                                        id: "2",
                                        text: "Microbiome analysis",
                                    },
                                    {
                                        id: "3",
                                        text: "Personalized diet planning",
                                    },
                                    {
                                        id: "4",
                                        text: "Digestive healing protocols",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Gut healing protocols",
                                    },
                                    {
                                        id: "1",
                                        text: "Elimination diets",
                                    },
                                    {
                                        id: "2",
                                        text: "Herbal medicine",
                                    },
                                    {
                                        id: "3",
                                        text: "Digestive support supplements",
                                    },
                                    {
                                        id: "4",
                                        text: "Stress reduction techniques",
                                    },
                                    {
                                        id: "5",
                                        text: "Nutritional therapy",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional Medicine Doctors",
                                    },
                                    {
                                        id: "1",
                                        text: "Nutritionists",
                                    },
                                    {
                                        id: "2",
                                        text: "Naturopaths",
                                    },
                                    {
                                        id: "3",
                                        text: "Herbalists",
                                    },
                                    {
                                        id: "4",
                                        text: "Digestive Health Specialists",
                                    },
                                    {
                                        id: "5",
                                        text: "Health Coaches",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "1",
                    image: "/images/offers/integrative.png",
                    alt: "DNA strand icon symbolizing energy and chronic fatigue care.",
                    bgColor: "bg-slate-100",
                    bgTitleColor: "bg-slate-200",
                    title: "Chronic Fatigue & Energy Issues",
                    categories: {
                        description:
                            "Dealing with per exhaustion, brain fog, or post-viral fatigue? Our practitioners help restore your vitality naturally.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Persistent exhaustion and low energy",
                                    },
                                    {
                                        id: "1",
                                        text: "Brain fog and difficulty concentrating",
                                    },
                                    {
                                        id: "2",
                                        text: "Post-viral fatigue",
                                    },
                                    {
                                        id: "3",
                                        text: "Unexplained energy crashes",
                                    },
                                    {
                                        id: "4",
                                        text: "Sleep disturbances",
                                    },
                                    {
                                        id: "4",
                                        text: "Muscle weakness",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Comprehensive testing and assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Root cause analysis",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural energy restoration",
                                    },
                                    {
                                        id: "3",
                                        text: "Lifestyle modification support",
                                    },
                                    {
                                        id: "4",
                                        text: "Ongoing progress monitoring",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional medicine protocols",
                                    },
                                    {
                                        id: "1",
                                        text: "Nutritional therapy",
                                    },
                                    {
                                        id: "2",
                                        text: "Traditional Chinese Medicine",
                                    },
                                    {
                                        id: "3",
                                        text: "Mind-body techniques",
                                    },
                                    {
                                        id: "4",
                                        text: "Herbal medicine support",
                                    },
                                    {
                                        id: "5",
                                        text: "Stress management strategies",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional Medicine Doctors",
                                    },
                                    {
                                        id: "1",
                                        text: "Naturopaths",
                                    },
                                    {
                                        id: "2",
                                        text: "Nutritionists",
                                    },
                                    {
                                        id: "3",
                                        text: "Traditional Medicine",
                                    },
                                    {
                                        id: "4",
                                        text: "Practitioners",
                                    },
                                    {
                                        id: "5",
                                        text: "Health Coaches",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "2",
                    image: "/images/offers/mind.png",
                    alt: "Brain icon symbolizing mental health and anxiety support.",
                    bgColor: "bg-amber-100",
                    bgTitleColor: "bg-amber-200",
                    title: "Anxiety & Mental Wellbeing",
                    categories: {
                        description:
                            "Looking for natural support for anxiety, stress, or emotional balance? Our practitioners offer holistic approaches to mental wellness.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Anxiety and overthinking",
                                    },
                                    {
                                        id: "1",
                                        text: "Mood fluctuations",
                                    },
                                    {
                                        id: "2",
                                        text: "Stress-related symptoms",
                                    },
                                    {
                                        id: "3",
                                        text: "Depression",
                                    },
                                    {
                                        id: "4",
                                        text: "Emotional overwhelm",
                                    },
                                    {
                                        id: "4",
                                        text: "Sleep disruption",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Mind-body connection assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Stress response evaluation",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural mood support",
                                    },
                                    {
                                        id: "3",
                                        text: "Lifestyle modification",
                                    },
                                    {
                                        id: "4",
                                        text: "Ongoing emotional support",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Mind-body techniques",
                                    },
                                    {
                                        id: "1",
                                        text: "Natural anxiety support",
                                    },
                                    {
                                        id: "2",
                                        text: "Nutritional psychology",
                                    },
                                    {
                                        id: "3",
                                        text: "Stress management tools",
                                    },
                                    {
                                        id: "4",
                                        text: "Herbal medicine",
                                    },
                                    {
                                        id: "5",
                                        text: "Meditation and mindfulness",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Holistic Psychologists",
                                    },
                                    {
                                        id: "1",
                                        text: "Mind-Body Specialists",
                                    },
                                    {
                                        id: "2",
                                        text: "Nutritional Therapists",
                                    },
                                    {
                                        id: "3",
                                        text: "Meditation Teachers",
                                    },
                                    {
                                        id: "4",
                                        text: "Traditional Practitioners",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "3",
                    image: "/images/offers/holistic.png",
                    alt: "Hormone diagram icon representing hormonal health support.",
                    bgColor: "bg-indigo-100",
                    bgTitleColor: "bg-indigo-200",
                    title: "Hormonal Imbalances",
                    categories: {
                        description:
                            "Experiencing hormonal issues, thyroid problems, or reproductive health concerns? Our practitioners help restore your natural balance.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Irregular cycles",
                                    },
                                    {
                                        id: "1",
                                        text: "Thyroid dysfunction",
                                    },
                                    {
                                        id: "2",
                                        text: " Weight fluctuations",
                                    },
                                    {
                                        id: "3",
                                        text: " Mood swings",
                                    },
                                    {
                                        id: "4",
                                        text: "Fertility challenges",
                                    },
                                    {
                                        id: "4",
                                        text: "Energy inconsistency",
                                    },
                                    {
                                        id: "5",
                                        text: "Sleep disruptions",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Comprehensive hormone testing",
                                    },
                                    {
                                        id: "1",
                                        text: "Root cause identification",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural mood support",
                                    },
                                    {
                                        id: "3",
                                        text: "Natural hormone balancing",
                                    },
                                    {
                                        id: "4",
                                        text: "Lifestyle optimization",
                                    },
                                    {
                                        id: "5",
                                        text: "Long-term balance restoration",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Natural hormone support",
                                    },
                                    {
                                        id: "1",
                                        text: "Nutritional therapy",
                                    },
                                    {
                                        id: "2",
                                        text: "Stress management",
                                    },
                                    {
                                        id: "3",
                                        text: "Herbal medicine",
                                    },
                                    {
                                        id: "4",
                                        text: "Lifestyle modifications",
                                    },
                                    {
                                        id: "5",
                                        text: "Traditional medicine practices",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional Medicine Doctors",
                                    },
                                    {
                                        id: "1",
                                        text: "Hormone Specialists",
                                    },
                                    {
                                        id: "2",
                                        text: "Women's Health Experts",
                                    },
                                    {
                                        id: "3",
                                        text: "Traditional Medicine Practitioners",
                                    },
                                    {
                                        id: "4",
                                        text: "Nutritionists",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "4",
                    image: "/images/offers/bodywork.png",
                    alt: "Spine icon symbolizing chronic pain management and recovery.",
                    bgColor: "bg-fuchsia-100",
                    bgTitleColor: "bg-fuchsia-200",
                    title: "Chronic Pain & Recovery",
                    categories: {
                        description:
                            "Dealing with persistent pain, inflammation, or recovery challenges? Our practitioners  offer natural approaches to pain management and healing.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Persistent body pain",
                                    },
                                    {
                                        id: "1",
                                        text: "Joint stiffness",
                                    },
                                    {
                                        id: "2",
                                        text: "Muscle tension",
                                    },
                                    {
                                        id: "3",
                                        text: "Inflammation",
                                    },
                                    {
                                        id: "4",
                                        text: "Limited mobility",
                                    },
                                    {
                                        id: "4",
                                        text: "Post-injury challenges",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Pain pattern assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Root cause analysis",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural pain management",
                                    },
                                    {
                                        id: "3",
                                        text: "Movement optimization",
                                    },
                                    {
                                        id: "4",
                                        text: "Healing support strategies",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Manual therapies",
                                    },
                                    {
                                        id: "1",
                                        text: "Movement therapy",
                                    },
                                    {
                                        id: "2",
                                        text: "Acupuncture",
                                    },
                                    {
                                        id: "3",
                                        text: "Natural anti-inflammatory support",
                                    },
                                    {
                                        id: "4",
                                        text: "Mind-body techniques",
                                    },
                                    {
                                        id: "5",
                                        text: "Nutritional support",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Osteopaths",
                                    },
                                    {
                                        id: "1",
                                        text: "Physical Therapists",
                                    },
                                    {
                                        id: "2",
                                        text: "Acupuncturists",
                                    },
                                    {
                                        id: "3",
                                        text: "Pain Management Specialists",
                                    },
                                    {
                                        id: "4",
                                        text: "Movement Specialists",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "5",
                    image: "/images/offers/sleep.png",
                    alt: "Moon and stars icon symbolizing sleep and stress management",
                    bgColor: "bg-blue-100",
                    bgTitleColor: "bg-blue-200",
                    title: "Sleep & Stress Management",
                    categories: {
                        description:
                            "Struggling with sleep issues or overwhelming stress? Our practitioners help restore your natural rhythms and resilience.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Sleep difficulties",
                                    },
                                    {
                                        id: "1",
                                        text: "Chronic stress",
                                    },
                                    {
                                        id: "2",
                                        text: "Anxiety patterns",
                                    },
                                    {
                                        id: "3",
                                        text: "Daytime fatigue",
                                    },
                                    {
                                        id: "4",
                                        text: "Mood changes",
                                    },
                                    {
                                        id: "5",
                                        text: "Physical tension",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Sleep pattern analysis",
                                    },
                                    {
                                        id: "1",
                                        text: "Stress response assessment",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural rhythm restoration",
                                    },
                                    {
                                        id: "3",
                                        text: "Lifestyle optimization",
                                    },
                                    {
                                        id: "4",
                                        text: "Relaxation training",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Sleep hygiene protocols",
                                    },
                                    {
                                        id: "1",
                                        text: "Stress management techniques",
                                    },
                                    {
                                        id: "2",
                                        text: "Herbal medicine",
                                    },
                                    {
                                        id: "3",
                                        text: "Mind-body practices",
                                    },
                                    {
                                        id: "4",
                                        text: "Nutritional support",
                                    },
                                    {
                                        id: "5",
                                        text: "Traditional medicine approaches",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Sleep Specialists",
                                    },
                                    {
                                        id: "1",
                                        text: "Mind-Body Practitioners",
                                    },
                                    {
                                        id: "2",
                                        text: "Traditional Medicine Experts",
                                    },
                                    {
                                        id: "3",
                                        text: "Holistic Health Coaches",
                                    },
                                    {
                                        id: "4",
                                        text: "Stress Management Experts",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "6",
                    image: "/images/offers/autoimune.png",
                    alt: "Paw print icon symbolizing care for autoimmune conditions.",
                    bgColor: "bg-red-100",
                    bgTitleColor: "bg-red-200",
                    title: "Autoimmune Conditions",
                    categories: {
                        description:
                            "Living with autoimmune conditions or unexplained symptoms? Our practitioners help support your immune system naturally.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Unexplained inflammation",
                                    },
                                    {
                                        id: "1",
                                        text: "Fatigue and weakness",
                                    },
                                    {
                                        id: "2",
                                        text: "Joint or muscle pain",
                                    },
                                    {
                                        id: "3",
                                        text: "Skin issues",
                                    },
                                    {
                                        id: "4",
                                        text: "Digestive problems",
                                    },
                                    {
                                        id: "5",
                                        text: "Temperature sensitivity",
                                    },
                                    {
                                        id: "6",
                                        text: "Brain fog",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Immune system assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Trigger identification",
                                    },
                                    {
                                        id: "2",
                                        text: "Natural immune support",
                                    },
                                    {
                                        id: "3",
                                        text: "Environmental optimization",
                                    },
                                    {
                                        id: "4",
                                        text: "Personalized healing protocols",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional medicine protocols",
                                    },
                                    {
                                        id: "1",
                                        text: "Anti-inflammatory nutrition",
                                    },
                                    {
                                        id: "2",
                                        text: "Gut health optimization",
                                    },
                                    {
                                        id: "3",
                                        text: "Stress reduction techniques",
                                    },
                                    {
                                        id: "4",
                                        text: "Environmental modification",
                                    },
                                    {
                                        id: "5",
                                        text: "Lifestyle medicine",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Functional Medicine Doctors",
                                    },
                                    {
                                        id: "1",
                                        text: "Autoimmune Specialists",
                                    },
                                    {
                                        id: "2",
                                        text: "Nutritionists",
                                    },
                                    {
                                        id: "3",
                                        text: "Naturopaths",
                                    },
                                    {
                                        id: "4",
                                        text: "Health Coaches",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    id: "7",
                    image: "/images/offers/balance.png",
                    alt: "Leaf and heart icon symbolizing preventive health strategies.",
                    bgColor: "bg-green-100",
                    bgTitleColor: "bg-green-200",
                    title: "Preventive Health & Optimization",
                    categories: {
                        description:
                            "Want to optimize your health and prevent future issues? Our practitioners help you build a strong foundation for lasting wellness.",
                        offers: [
                            {
                                id: "0",
                                title: "Common Symptoms & Signs:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Health optimization",
                                    },
                                    {
                                        id: "1",
                                        text: "Disease prevention",
                                    },
                                    {
                                        id: "2",
                                        text: "Energy enhancement",
                                    },
                                    {
                                        id: "3",
                                        text: "Cognitive performance",
                                    },
                                    {
                                        id: "4",
                                        text: "Aging well",
                                    },
                                    {
                                        id: "5",
                                        text: "Immune strengthening",
                                    },
                                ],
                            },
                            {
                                id: "1",
                                title: "Our Approach:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Comprehensive health assessment",
                                    },
                                    {
                                        id: "1",
                                        text: "Personalized wellness planning",
                                    },
                                    {
                                        id: "2",
                                        text: "Proactive health strategies",
                                    },
                                    {
                                        id: "3",
                                        text: "Performance optimization",
                                    },
                                    {
                                        id: "4",
                                        text: "Ongoing health monitoring",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                title: "Core Treatment Options:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Lifestyle medicine",
                                    },
                                    {
                                        id: "1",
                                        text: "Nutritional optimization",
                                    },
                                    {
                                        id: "2",
                                        text: "Preventive protocols",
                                    },
                                    {
                                        id: "3",
                                        text: "Biohacking techniques",
                                    },
                                    {
                                        id: "4",
                                        text: "Longevity practices",
                                    },
                                    {
                                        id: "5",
                                        text: "Health coaching",
                                    },
                                ],
                            },
                            {
                                id: "3",
                                title: "Our Practitioners:",
                                points: [
                                    {
                                        id: "0",
                                        text: "Preventive Medicine Doctors",
                                    },
                                    {
                                        id: "1",
                                        text: "Health Optimization Experts",
                                    },
                                    {
                                        id: "2",
                                        text: "Nutritionists",
                                    },
                                    {
                                        id: "3",
                                        text: "Longevity Specialists",
                                    },
                                    {
                                        id: "4",
                                        text: "Wellness Coaches",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            id: "trust",
            type: "Your Trust",
            containerClass: "xl:min-h-56 lg:min-h-64 md:min-h-44",
            points: [
                {
                    id: "0",
                    image: "/images/offers/shield.png",
                    alt: "Shield icon representing verified practitioner licensing for patient trust.",
                    bgColor: "bg-yellow-100",
                    bgTitleColor: "bg-yellow-200",
                    title: "1 - License Verification",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Verify",
                            description: "professional credentials through official channels",
                        },
                        {
                            id: "1",
                            boldText: "Cross-check",
                            description: "qualifications with recognized institutions",
                        },
                        {
                            id: "2",
                            boldText: "Track",
                            description: "ongoing education and development",
                        },
                    ],
                },
                {
                    id: "1",
                    image: "/images/offers/magnifying.png",
                    bgColor: "bg-emerald-100",
                    alt: "Magnifying glass with checkmark icon symbolizing comprehensive background checks for practitioners",
                    bgTitleColor: "bg-emerald-200",
                    title: "2 - Background Checks",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Review",
                            description: "comprehensive professional history",
                        },
                        {
                            id: "1",
                            boldText: "Ensure",
                            description: "clean professional records",
                        },
                        {
                            id: "2",
                            boldText: "Screen",
                            description: "for continuous good standing",
                        },
                    ],
                },
                {
                    id: "2",
                    image: "/images/offers/professional.png",
                    alt: "Ribbon icon representing practitioner membership in recognized healthcare associations",
                    bgColor: "bg-cyan-100",
                    bgTitleColor: "bg-cyan-200",
                    title: "3 - Association Membership",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Confirm",
                            description: "active membership in recognized professional bodies",
                        },
                        {
                            id: "1",
                            boldText: "Assess",
                            description: "leadership roles and contributions",
                        },
                        {
                            id: "2",
                            boldText: "Connect",
                            description: "with professional regulatory boards",
                        },
                    ],
                },
                {
                    id: "3",
                    image: "/images/offers/checkList.png",
                    alt: "Clipboard icon representing practitioner coverage with professional insurance.",
                    bgColor: "bg-lime-100",
                    bgTitleColor: "bg-lime-300",
                    title: "4 - Professional Insurance",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Require",
                            description: "active liability insurance coverage",
                        },
                        {
                            id: "1",
                            boldText: "Maintain",
                            description: "high professional practice standards",
                        },
                        {
                            id: "2",
                            boldText: "Protect",
                            description: "patient interests through coverage verification",
                        },
                    ],
                },
            ],
        },
    ],

    foundingPartnerTitle: "Founding Partner Benefits",
    foundingPartner: [
        {
            id: "0",
            text: "Lock in exclusive early-access benefits",
        },
        {
            id: "1",
            text: "Get priority patient matching when we launch",
        },
        {
            id: "2",
            text: "Influence platform development",
        },
    ],
};

export const socials = [
    {
        id: "0",
        title: "instagram",
        icon: "/images/socials/instagram-white.svg",
        alt: "instagram",
        url: "https://www.instagram.com/healguid",
    },
    {
        id: "1",
        title: "facebook",
        icon: "/images/socials/facebook-white.svg",
        alt: "facebook",
        url: "https://www.facebook.com/HealGuid",
    },
    {
        id: "2",
        title: "linkedin",
        icon: "/images/socials/linkedin-white.svg",
        alt: "linkedin",
        url: "https://www.linkedin.com/company/healguid",
    },
    { id: "3", title: "email", icon: "/images/socials/email-white.svg", alt: "email", url: "mailto:info@healguid.com" },
];
