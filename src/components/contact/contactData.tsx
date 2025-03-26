
import { Phone, Mail, Clock } from "lucide-react";
import { ReactNode } from "react";

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  description: string;
  action: string;
  link: string | null;
}

export const getContactInfo = (): ContactInfo[] => [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "For orders and inquiries",
    action: "+91 6291569512 | +91 6386342758",
    link: "tel:+916291569512",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "For quotes and bulk orders",
    action: "anirbandas1616@gmail.com",
    link: "mailto:anirbandas1616@gmail.com",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    description: "When we're serving",
    action: "Mon-Sun: 10AM - 9PM",
    link: null,
  },
];

export const getSocialLinks = () => [
  { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "https://www.instagram.com/biteywitey.club/" },
  { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "https://www.facebook.com/" },
  { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "https://x.com/BiteyWitey" },
];

import { Instagram, Facebook, Twitter } from "lucide-react";
