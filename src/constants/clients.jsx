export const banner = {
    text: "| Be one of our founding practitioners • Shape the future of holistic care • Early access benefits |",
};

// 0. Header
export const menus = [
    {
        id: "0",
        title: "Why Us",
        url: "#why-us",
        titleAttribute: "Learn why you should choose us",
    },
    {
        id: "1",
        title: "Our Offer",
        url: "#our-offer",
        titleAttribute: "Explore our range of services and offerings",
    },
    {
        id: "2",
        title: "How It Works",
        url: "#how-it-works",
        titleAttribute: "Understand how our platform works",
    },
    {
        id: "3",
        title: "About",
        url: "#about",
        titleAttribute: "Learn more about our company and mission",
    },
    {
        id: "4",
        title: "For Partners",
        url: "/partners",
        titleAttribute: "For businesses interested in partnering with us",
    },
];
// 1. Hero
export const hero = {
    accentColor: "bg-b11",
    newsletter: {
        alt: "HealGuid logo - connecting patients with holistic health solutions",
        altTitle: "HealGuid - Holistic Health Connection Platform",
        title: "Get Your Health Back In Your Hands",
        privacyPolicy: "By joining, you agree to our Privacy Policy",
        class: "bg-b11 p-6 rounded-2xl lg:mr-10 tracking-2",
    },
    alt: "Illustration of a patient and a holistic practitioner having a conversation",
    image: "images/hero/patient-practitioner-v2.webp",
    altTitle: "Patient-Practitioner Holistic Connection",
    imageMobile: "images/hero/patient-practitioner-v2-mobile.webp",
    altTitleMobile: "Patient-Practitioner Mobile Connection",
    imageClass: "",
    title: "Where Health Challenges Finally Meet Understanding",
    description: "Connect With Certified Holistic Experts Specialising in Chronic Conditions.",
    secondDescription:
        "We connect you with experts near you who truly listen, look beyond standard bloodwork, and understand chronic fatigue, autoimmunity, digestive issues, long covid, and many more.",

    buttons: {
        id: "1",
        label: "See How It Works",
        href: "#our-offer",
        jumpTo: "our-offer",
        alt: "Button to learn more about HealGuid's approach to holistic care.",
        action: "scroll",
        containerClass:
            "cursor-pointer bg-transparent border-2 border-s1 tracking-2 px-4 sm:h-12 rounded-3xl relative flex justify-center items-center cursor-pointer",
        textClass: "tracking-wide font-medium max-md:text-base md:text-lg",
    },

    benefits: [
        {
            id: "0",
            icon: "/images/hero/focus.svg",
            title: "Root Cause Focus",
            width: "32px",
            height: "33px",
            alt: "Icon representing a comprehensive understanding of a patient's health story.",
            altTitle: "Root Cause Analysis",
            text: "Understanding your complete health story",
        },
        {
            id: "1",
            icon: "/images/hero/expertise.svg",
            title: "Verified Expertise",
            width: "29px",
            height: "44px",
            alt: "Icon showcasing verified practitioners with trusted qualifications.",
            altTitle: "Verified Practitioner Expertise",
            text: "Every practitioner carefully selected",
        },
        {
            id: "2",
            icon: "/images/hero/care.svg",
            width: "29px",
            height: "29px",
            title: "Personalised Care",
            alt: "Icon highlighting personalized and adaptable healthcare.",
            altTitle: "Personalized Holistic Care",
            text: "Healthcare that adapts to you",
        },
    ],

    review: {
        comment:
            "As someone who struggled with unexplained symptoms for years navigating conventional medicine, I'm advising HealGuid to create what patients truly need—a trusted bridge to certified holistic practitioners.",
        profile: {
            image: "/images/hero/profile.webp",
            title: "Dr. Emily Carter, MD",
            altTitle: "Dr. Emily Carter - Health Advisor Profile",
            work: "Health Advisor",
        },
    },

    expertise: {
        title: "Built on Real Experience",
        class: "bg-b11 z-5 w-full py-3 max-lg:hidden transition-all duration-300 ease-in-out order-4 absolute bottom-3 left-0",
        points: [
            {
                id: "0",
                text: "Shaped by insights from 100+ patients",
            },
            {
                id: "1",
                text: "Co-designed with holistic healthcare leaders",
            },
            {
                id: "2",
                text: "Every practitioner carefully selected and verified",
            },
        ],
    },
};

// 2. Causes
export const causes = {
    title: "Struggling to Find Real Solutions for Your Health?",
    secondDescription:
        "We understand that the current healthcare system often overlooks chronic illness, leaving patients searching for answers.",
    description: "You're not alone in this journey.",
    subDescription:
        "We're building HealGuid to change this - connecting you with verified practitioners who understand complex conditions and focus on root causes.",
    buttonText: "Find Your Path to Healing",
    buttonArialLabelText: "Button encouraging users to find their path to healing with HealGuid.",
    jumpToNext: "our-offer",
    points: [
        {
            id: "0",
            icon: "search.svg",
            jsonLdProperty: "search",
            alt: "Magnifying glass icon representing feeling overlooked by traditional healthcare.",
            altTitle: "Healthcare Oversight Challenge",
            text: "Feeling Overlooked",
            description: "1 in 2 patients with chronic conditions feel unsupported by their healthcare providers",
        },
        {
            id: "1",
            icon: "lock.svg",
            jsonLdProperty: "lock",
            alt: "Lock icon representing limited access to holistic experts.",
            altTitle: "Limited Holistic Care Access",
            text: "Limited Access to Holistic Experts",
            description:
                "Only 32% can easily find holistic practitioners in their area, and 75% do not pay attention to credentials",
        },
        {
            id: "2",
            icon: "calendar.svg",
            jsonLdProperty: "calendar",
            alt: "Calendar icon symbolizing endless appointments without solutions.",
            altTitle: "Ineffective Treatment Cycle",
            text: "Endless Appointments Without Answers",
            description:
                "73% of chronic illness patients are frustrated with treatments focused only on managing symptoms",
        },
        {
            id: "3",
            icon: "cog.svg",
            jsonLdProperty: "cog",
            alt: "Gear icon depicting the time and cost burden of managing chronic illness.",
            altTitle: "Healthcare Management Burden",
            text: "Time and Cost Burden",
            description: "Patients spend 12 hours monthly coordinating appointments, facing unpredictable costs",
        },
    ],
};

//  3. Why Us
export const whyUs = {
    title: "Why Trust HealGuid?",
    tableTitle: "The HealGuid Difference",
    company: "HealGuid's Vision",
    competitor: "Mainstream Approach",
    exclusiveBenefits: {
        title: "A Different Approach to Holistic Healthcare",
        majorPoints: [
            {
                id: "1",
                subTitle: "Care That Adapts to You",
                points: [
                    {
                        id: "0",
                        text: "Flexible consultation options",
                    },
                    {
                        id: "1",
                        text: "Direct practitioner communication",
                    },
                    {
                        id: "2",
                        text: "Ongoing support and guidance",
                    },
                ],
            },

            {
                id: "2",
                subTitle: "Result-driven Healing Journeys",
                points: [
                    {
                        id: "0",
                        text: "Comprehensive health assessment",
                    },
                    {
                        id: "1",
                        text: "Systematic root cause assessment",
                    },
                    {
                        id: "2",
                        text: "Personalized healing pathways",
                    },
                ],
            },
            {
                id: "0",
                subTitle: "Evidence-Based and Verified Excellence",
                points: [
                    {
                        id: "0",
                        text: "Research-backed holistic approaches",
                    },
                    {
                        id: "1",
                        text: "Verified practitioners using proven protocols",
                    },
                    {
                        id: "2",
                        text: "Two-way review system ensuring quality care",
                    },
                ],
            },
        ],
    },

    buttonText: "Join HealGuid Today",
    buttonArialText: "Call-to-action button inviting users to join HealGuid.",
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
};

export const comparisonTable = [
    {
        id: "0",
        feature: "Treatment Philosophy",
        companyInfo: "Holistic: Focus on your whole history",
        conventionMedicineInfo: "Specialized: focuses on treating symptoms",
    },
    {
        id: "1",
        feature: "Care Options",
        companyInfo: "Personalized: Natural & holistic treatments",
        conventionMedicineInfo: "Standardized: Primarily conventional treatments",
    },
    {
        id: "2",
        feature: "Practitioner Access",
        companyInfo: "Virtual + flexible in-person options",
        conventionMedicineInfo: "Often long wait times and limited to office hours",
    },
    {
        id: "3",
        feature: "Appointment Style",
        companyInfo: "Longer sessions, whole-person focus",
        conventionMedicineInfo: "Typically brief, focused visits",
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
    pageTitle: "Your Healing Journey",
    pageTitleColor: "text-p1",
    subTitle: "Your Health in Your Hands, Our Mission.",
    mainDescription:
        "HealGuid connects you with trusted holistic experts who treat the whole person — offering personalised, science-backed care that fits your lifestyle. This is where health challenges finally meet understanding.",
    buttonAction: "client",
    buttonTitle: "Find My Health Partner",
    buttonArialLabel:
        "Clickable button labeled 'See Verification Process,' providing details on practitioner verification steps.",

    buttonColor: "bg-s1",
    sideImage: "images/how-it-works/verification.png",
    sideVideo: "videos/how-it-works/verification.webm",
    sideAlt:
        "Illustration of a practitioner presenting a patient network chart, symbolizing transparency and trust in the verification process.",
    sideAltTitle: "Practitioner Verification System",
    steps: [
        {
            id: "0",
            icon: "explore.webp",
            jsonLdProperty: "explore",
            alt: "Illustration of diverse individuals interacting with a touchscreen, representing taking control of health through digital tools.",
            altTitle: "Health Exploration Interface",
            iconColor: "bg-amber-300",
            textColor: "text-orange-600",
            bgColor: "bg-amber-100",
            title: "Take Control",
            caption: "Step 1",
            reasons: [
                {
                    id: "0",
                    description: "Take our health assessment",
                },
                {
                    id: "1",
                    description: "Browse specialist categories",
                },
                {
                    id: "2",
                    description: "Explore practitioner profiles",
                },
                {
                    id: "3",
                    description: "Read success stories",
                },
            ],
        },
        {
            id: "1",
            icon: "meet.webp",
            jsonLdProperty: "meet",
            alt: "Illustration of a patient discussing a personalized plan with a practitioner, symbolizing collaboration in holistic care.",
            altTitle: "Patient-Practitioner Connection",
            iconColor: "bg-orange-200",
            textColor: "text-green-600",
            bgColor: "bg-orange-100",
            title: "Connect & Plan",
            caption: "Step 2",
            reasons: [
                {
                    id: "0",
                    description: "Book your first consultation",
                },
                {
                    id: "1",
                    description: "Share your health history securely",
                },
                {
                    id: "2",
                    description: "Get a personalized treatment plan",
                },
                {
                    id: "3",
                    description: "Access support resources",
                },
            ],
        },
        {
            id: "2",
            icon: "best-health.webp",
            jsonLdProperty: "best-health",
            alt: "Illustration of a woman surrounded by nature and healing symbols, representing progress and balance through holistic care.",
            altTitle: "Holistic Health Achievement",
            iconColor: "bg-orange-300",
            textColor: "text-orange-600",
            bgColor: "bg-orange-200",
            title: "Your Best Health",
            caption: "Step 3",
            reasons: [
                {
                    id: "0",
                    description: "Begin your personalized program",
                },
                {
                    id: "1",
                    description: "Track your progress regularly",
                },
                {
                    id: "2",
                    description: "Access ongoing support",
                },
                {
                    id: "3",
                    description: "Stay connected with your practitioner",
                },
            ],
        },
    ],
};

//  5. What We Offer
export const offers = {
    title: "What We Offer",
    subTitle: "Your Health, Treated from Every Angle",
    description:
        "Connect with verified holistic practitioners who understand your complete health journey and focus on finding real solutions.",
    buttonTitle: "Find Your Health Partner",
    buttonArialLabel: "Button encouraging users to find their personalized health partner.",
    buttonColor: "bg-s1",
    sideVideo: "videos/how-it-works/tech.webm",
    list: [
        {
            id: "0",
            type: "Your Journey With Us",
            containerClass: "",
            points: [
                {
                    id: "0",
                    image: "/images/offers/access.png",
                    alt: "Icon representing personalized care with interconnected circles symbolizing holistic health.",
                    altTitle: "Personalized Holistic Care System",
                    bgColor: "bg-lime-100",
                    bgTitleColor: "bg-lime-200",
                    title: "Personalized Care",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Move beyond",
                            description: "symptom management",
                        },
                        {
                            id: "1",
                            boldText: "Get comprehensive assessments",
                            description: "over your full health story",
                        },
                        {
                            id: "2",
                            boldText: "Address the underlying",
                            description: "causes of chronic conditions",
                        },
                    ],
                },
                {
                    id: "1",
                    image: "/images/offers/professional.png",
                    alt: "Award ribbon icon symbolizing verified expertise in holistic health.",
                    altTitle: "Verified Practitioner Excellence",
                    bgColor: "bg-sky-100",
                    bgTitleColor: "bg-sky-200",
                    title: "Verified Expertise",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Find verified practitioners",
                            description: "focused on natural healing",
                        },
                        {
                            id: "1",
                            boldText: "Access real patient reviews",
                            description: "and success stories",
                        },
                        {
                            id: "2",
                            boldText: "Evidence-based",
                            description: "natural approaches",
                        },
                    ],
                },
                {
                    id: "2",
                    image: "/images/offers/manage.png",
                    alt: "Gear icon symbolizing flexible and patient-focused care options.",
                    altTitle: "Customizable Healthcare Options",
                    bgColor: "bg-yellow-100",
                    bgTitleColor: "bg-yellow-200",
                    title: "Care On Your Terms",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Book appointments easily",
                            description: "at your convenience",
                        },
                        {
                            id: "1",
                            boldText: "Choose flexible,",
                            description: "virtual or in-person sessions",
                        },
                        {
                            id: "2",
                            boldText: "Communicate directly",
                            description: "with your practitioner",
                        },
                    ],
                },
                {
                    id: "3",
                    image: "/images/offers/support.png",
                    alt: "Two-person figure icon representing support and collaboration in healthcare journeys.",
                    altTitle: "Collaborative Healing Support",
                    bgColor: "bg-orange-100",
                    bgTitleColor: "bg-orange-200",
                    title: "Supported Journey",
                    benefits: [
                        {
                            id: "0",
                            boldText: "Structured healing journeys",
                            description: "tailored to you",
                        },
                        {
                            id: "1",
                            boldText: "Track your progress",
                            description: "with easy-to-use tools",
                        },
                        {
                            id: "2",
                            boldText: "Evidence-based",
                            description: "natural approaches",
                        },
                    ],
                },
            ],
        },
        {
            id: "1",
            type: "Explore Our Specialties",
            containerClass: "",
            points: [
                {
                    id: "0",
                    image: "/images/offers/digestive.png",
                    alt: "Stomach icon representing care for digestive and gut health.",
                    altTitle: "Digestive Health Solutions",
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
                    altTitle: "Integrative Medicine Approach",
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
                    altTitle: "Mental Wellbeing Support",
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
                    altTitle: "Holistic Hormone Balance",
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
                    altTitle: "Physical Recovery & Pain Management",
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
                    altTitle: "Sleep & Stress Optimization",
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
                    altTitle: "Autoimmune Support System",
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
                    altTitle: "Holistic Health Balance",
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
            id: "2",
            type: "Your Trust",
            containerClass: "xl:min-h-56 lg:min-h-64 md:min-h-44",
            points: [
                {
                    id: "0",
                    image: "/images/offers/shield.png",
                    alt: "Shield icon representing verified practitioner licensing for patient trust.",
                    altTitle: "Practitioner Credentialing Shield",
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
                    alt: "Magnifying glass with checkmark icon symbolizing comprehensive background checks for practitioners",
                    altTitle: "Comprehensive Background Verification",
                    bgColor: "bg-emerald-100",
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
                    altTitle: "Professional Excellence Recognition",
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
                    altTitle: "Insurance & Standards Compliance",
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
        icon: "images/socials/instagram-white.svg",
        alt: "Instagram icon to follow HealGuid for updates.",
        altTitle: "Follow HealGuid on Instagram",
        url: "https://www.instagram.com/healguid",
    },
    {
        id: "1",
        title: "facebook",
        icon: "images/socials/facebook-white.svg",
        alt: "facebook",
        altTitle: "Join HealGuid's Facebook Community",
        url: "https://www.facebook.com/HealGuid",
    },
    {
        id: "2",
        title: "linkedin",
        icon: "/images/socials/linkedin-white.svg",
        alt: "LinkedIn icon to connect with HealGuid's professional network.",
        altTitle: "Connect with HealGuid on LinkedIn",
        url: "https://www.linkedin.com/company/healguid",
    },
    {
        id: "3",
        title: "email",
        icon: "images/socials/email-white.svg",
        alt: "email",
        altTitle: "Contact HealGuid via Email",
        url: "mailto:info@healguid.com",
    },
];
