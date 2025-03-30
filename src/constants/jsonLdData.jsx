export const jsonLdHeader = {
    logo: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "HealGuid Logo",
        url: "https://www.healguid.com/images/logos/healGuid.png",
        description: "The official logo of HealGuid, connecting patients with holistic health solutions.",
        contentUrl: "https://www.healguid.com/images/logos/healGuid.png",
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
};

export const jsonLdHero = {
    conversation: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Patient and Practitioner Conversation Illustration",
        description:
            "Illustration of a patient and a holistic practitioner having a conversation, symbolizing trust and care.",
        contentUrl: "https://www.healguid.com/videos/hero/patient-practitioner-conversation.webm",
        thumbnailUrl: "https://www.healguid.com/images/hero/patient-practitioner-conversation.png",
        uploadDate: "2024-12-23",
        duration: "PT06S", // Example duration (1 minute 30 seconds)
        author: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            logo: {
                "@type": "ImageObject",
                url: "https://www.healguid.com/images/logos/healGuid.png",
            },
        },
        encodingFormat: "video/webm",
    },
};

export const jsonLdWhyUs = {
    doctor: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Integrative Medicine Illustration",
        description: "Image of a doctor holding a herbal cup and a stethoscope, symbolizing integrative medicine.",
        contentUrl: "https://www.healguid.com/images/why-us/doctor-conventional.webp",
        url: "https://www.healguid.com/images/why-us/doctor-conventional.webp",
        encodingFormat: "image/webp",
        height: "160", // Assuming height in pixels (class h-40 is roughly 160px in Tailwind)
        width: "auto", // If width is known, replace "auto" with the pixel value
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
};

export const jsonLdCauses = {
    search: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Feeling Overlooked Icon",
        description: "Magnifying glass icon representing feeling overlooked by traditional healthcare.",
        url: "https://www.healguid.com/images/icons/search.svg",
        contentUrl: "https://www.healguid.com/images/icons/search.svg",
        alternateName: "Feeling Overlooked",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "1 in 2 patients with chronic conditions feel unsupported by their healthcare providers.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
    lock: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Limited Access to Holistic Experts Icon",
        description: "Lock icon representing limited access to holistic experts.",
        url: "https://www.healguid.com/images/icons/lock.svg",
        contentUrl: "https://www.healguid.com/images/icons/lock.svg",
        alternateName: "Limited Access to Holistic Experts",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "Only 32% can easily find holistic practitioners in their area, and 75% do not pay attention to credentials.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
    calendar: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Endless Appointments Without Answers Icon",
        description: "Calendar icon symbolizing endless appointments without solutions.",
        url: "https://www.healguid.com/images/icons/calendar.svg",
        contentUrl: "https://www.healguid.com/images/icons/calendar.svg",
        alternateName: "Endless Appointments Without Answers",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "73% of chronic illness patients are frustrated with treatments focused only on managing symptoms.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
    cog: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Time and Cost Burden Icon",
        description: "Gear icon depicting the time and cost burden of managing chronic illness.",
        url: "https://www.healguid.com/images/icons/cog.svg",
        contentUrl: "https://www.healguid.com/images/icons/cog.svg",
        alternateName: "Time and Cost Burden",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "Patients spend 12 hours monthly coordinating appointments, facing unpredictable costs.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    growth: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Difficult Growing a Sustainable Practice Icon",
        description: "Growth icon representing the difficulty in growing a sustainable holistic care practice.",
        url: "https://www.healguid.com/images/icons/growth.svg",
        contentUrl: "https://www.healguid.com/images/icons/growth.svg",
        alternateName: "Difficult Growing a Sustainable Practice",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "The demand for holistic care is growing 30% yearly, but practitioners lack the tools to scale.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    handShake: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Lack of Advocacy & Tools for Holistic Care Icon",
        description: "Handshake icon representing the lack of advocacy and tools for holistic care.",
        url: "https://www.healguid.com/images/icons/handShake.svg",
        contentUrl: "https://www.healguid.com/images/icons/handShake.svg",
        alternateName: "Lack of Advocacy & Tools for Holistic Care",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Supporting Fact",
            value: "Traditional platforms aren't built for the unique needs of holistic care.",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
};

export const jsonLdHowItWorks = {
    explore: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Take Control Icon",
        description:
            "Illustration of diverse individuals interacting with a touchscreen, representing taking control of health through digital tools.",
        url: "https://www.healguid.com/images/icons/explore.webp",
        contentUrl: "https://www.healguid.com/images/icons/explore.webp",
        alternateName: "Take Control",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Step",
            value: "Step 1",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
    meet: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Connect & Plan Icon",
        description:
            "Illustration of a patient discussing a personalized plan with a practitioner, symbolizing collaboration in holistic care.",
        url: "https://www.healguid.com/images/icons/meet.webp",
        contentUrl: "https://www.healguid.com/images/icons/meet.webp",
        alternateName: "Connect & Plan",
        additionalProperty: {
            "@type": "PropertyValue",
            name: "Step",
            value: "Step 2",
        },
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    bestHealth: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Your Best Health Icon",
        description:
            "Illustration of a woman surrounded by nature and healing symbols, representing progress and balance through holistic care.",
        url: "https://www.healguid.com/images/icons/best-health.webp",
        contentUrl: "https://www.healguid.com/images/icons/best-health.webp",
        alternateName: "Your Best Health",
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    join: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Join Our Network Icon",
        description: "Illustration symbolizing joining a network of holistic healthcare professionals and patients.",
        url: "https://www.healguid.com/images/icons/join.webp",
        contentUrl: "https://www.healguid.com/images/icons/join.webp",
        alternateName: "Join Our Network",
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    connect: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Guide Patients Icon",
        description: "Illustration symbolizing guiding patients through personalized holistic care plans.",
        url: "https://www.healguid.com/images/icons/connect.webp",
        contentUrl: "https://www.healguid.com/images/icons/connect.webp",
        alternateName: "Guide Patients",
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    community: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Expand Your Impact Icon",
        description: "Illustration symbolizing expanding your impact in holistic care by joining a trusted network.",
        url: "https://www.healguid.com/images/icons/community.webp",
        contentUrl: "https://www.healguid.com/images/icons/community.webp",
        alternateName: "Expand Your Impact",
        creator: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
};

export const jsonLdAbout = {
    believe: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "We Believe Healing Should Feel Human Again",
        description:
            "A person reaching forward, symbolizing effort and progress in healthcare reform. Imagine a world where finding trusted healthcare isn't a struggle. Where practitioners are more than providers— they're partners. Where patients aren't just numbers or prescriptions, but individuals with unique stories and boundless potential to heal and thrive.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/believe.jpg", // Replace with a thumbnail image URL if available
        contentUrl: "https://www.healguid.com/videos/about-us/believe.webm",
        uploadDate: "2024-12-23", // Adjust to the actual upload date
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    trust: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Trust is our most powerful medicine",
        description:
            "A woman seated, smiling, representing healing and hope. This video embodies the essence of trust as the cornerstone of healing.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/trust.jpg", // Replace with a valid thumbnail image URL
        contentUrl: "https://www.healguid.com/videos/about-us/trust.webm",
        uploadDate: "2024-12-23", // Replace with the actual upload date
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    patients: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "For Patients: Your health is back in your hands",
        description:
            "A man and woman shaking hands, representing patient-practitioner collaboration and partnership. This video highlights the importance of empowering patients in their healthcare journey.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/patients.jpg",
        contentUrl: "https://www.healguid.com/videos/about-us/patients.webm",
        uploadDate: "2024-12-23",
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    practitioners: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "For Practitioners: Your calling, simplified",
        description:
            "A practitioner sitting at a desk with checklists, symbolizing simplified and professional healthcare support for practitioners. This video emphasizes the tools and resources available to streamline their practice.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/practitioners.jpg", // Replace with an actual thumbnail image URL
        contentUrl: "https://www.healguid.com/videos/about-us/practitioners.webm",
        uploadDate: "2024-12-23", // Update with the correct date
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    healthcare: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "The healthcare revolution starts here",
        description:
            "A captivating visual of a person playing the saxophone, symbolizing harmony, creativity, and the start of a revolution in healthcare.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/healthcare.jpg", // Replace with the actual thumbnail URL
        contentUrl: "https://www.healguid.com/videos/about-us/healthcare.webm",
        uploadDate: "2024-12-23",
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    celebrate: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Celebrate Progress and Collaboration in Holistic Healthcare",
        description:
            "A visual of people climbing steps with gears, symbolizing progress, teamwork, and collaboration in the journey toward holistic healthcare.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/celebrate.jpg", // Replace with a thumbnail URL
        contentUrl: "https://www.healguid.com/videos/about-us/celebrate.webm",
        uploadDate: "2024-12-23", // Adjust as needed
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },

    cog: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Innovative Collaboration in Holistic Healthcare",
        description:
            "A dynamic animation of gears turning, symbolizing innovation, collaboration, and the interconnected processes in holistic healthcare.",
        thumbnailUrl: "https://www.healguid.com/images/about-us/cog.jpg",
        contentUrl: "https://www.healguid.com/videos/about-us/cog.webm",
        uploadDate: "2024-12-23",
        encodingFormat: "video/webm",
        inLanguage: "en",
        publisher: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightHolder: {
            "@type": "Organization",
            name: "HealGuid",
            url: "https://www.healguid.com/",
        },
        copyrightYear: 2024,
    },
};
