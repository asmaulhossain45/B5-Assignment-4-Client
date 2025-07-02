// src/config/siteConfig.ts

export const siteConfig = {
  name: "BookHut",
  title: "Library Management System",
  description:
    "BookHut is a sleek and intuitive Library Management System for organizing books, managing users, and streamlining library operations.",
  url: "https://nxtflare.com",
  siteIcon: "/src/assets/BookHut.png",

  socialLinks: {
    facebook: "https://facebook.com/BookHut",
    twitter: "https://twitter.com/BookHut",
    instagram: "https://instagram.com/BookHut",
    linkedin: "https://linkedin.com/company/BookHut",
  },

  contactInfos: {
    email: "contact@BookHut.com",
    phone: "+234 80 000 0000",
    whatsapp: "+234 80 000 0000",
    address: "Chapainawabgang, Rajshahi",
  },
} as const;
