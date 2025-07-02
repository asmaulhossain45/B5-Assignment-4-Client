// src/constants/links.ts

import { siteConfig } from "@/lib/siteConfig";
import {
  ChevronsRight,
  Facebook,
  House,
  Instagram,
  Linkedin,
  MailOpen,
  MapPin,
  MessageCircle,
  PhoneCall,
  Twitter,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "All Books", href: "/books", icon: House },
  { label: "Add Book", href: "/create-book", icon: House },
  { label: "Borrow Summary", href: "/borrow-summary", icon: House },
];

export const dashNavLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "All Books", href: "/books", icon: House },
  { label: "Add Book", href: "/create-book", icon: House },
  { label: "Borrow Summary", href: "/borrow-summary", icon: House },
];

export const footerQuickLinks = [
  { label: "Home", href: "/", icon: ChevronsRight },
  { label: "All Books", href: "/books", icon: ChevronsRight },
  { label: "Add Book", href: "/create-book", icon: ChevronsRight },
  { label: "Borrow Summary", href: "/borrow-summary", icon: ChevronsRight },
];

export const contactInfos = [
  {
    label: siteConfig.contactInfos.phone,
    href: `tel:${siteConfig.contactInfos.phone}`,
    icon: PhoneCall,
  },
  {
    label: siteConfig.contactInfos.whatsapp,
    href: `https://wa.me/${siteConfig.contactInfos.whatsapp}`,
    icon: MessageCircle,
  },
  {
    label: siteConfig.contactInfos.email,
    href: `mailto:${siteConfig.contactInfos.email}`,
    icon: MailOpen,
  },
  {
    label: siteConfig.contactInfos.address,
    href: `https://maps.google.com/?q=${siteConfig.contactInfos.address}`,
    icon: MapPin,
  },
];

export const SocialLinks = [
  { label: "Facebook", href: siteConfig.socialLinks.facebook, icon: Facebook },
  { label: "Twitter", href: siteConfig.socialLinks.twitter, icon: Twitter },
  { label: "Linkedin", href: siteConfig.socialLinks.linkedin, icon: Linkedin },
  {
    label: "Instagram",
    href: siteConfig.socialLinks.instagram,
    icon: Instagram,
  },
];
