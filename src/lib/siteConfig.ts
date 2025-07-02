// src/config/siteConfig.ts

export const siteConfig = {
  name: "BookHut",
  title: "Library Management System",
  description: "",
  url: "https://nxtflare.com",
  siteIcon: "/src/assets/BookHut.png",

  socialLinks: {
    facebook: "https://facebook.com/nxtflare",
    twitter: "https://twitter.com/nxtflare",
    instagram: "https://instagram.com/nxtflare",
    linkedin: "https://linkedin.com/company/nxtflare",
  },

  contactInfos: [
    {
      title: "Call us",
      description: "+1 234 567 8901",
    },
    {
      title: "Email us",
      description: "VWY0a@example.com",
    },
  ],
} as const;
