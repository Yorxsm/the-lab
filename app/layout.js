import { Roboto, Roboto_Mono } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-mono'
});

export const metadata = {
  title: "eXhibot | Africa's Hardware Innovation Studio",
  description: "Connecting elite engineering talent to real-world opportunities. eXhibot builds robotics, IoT, and hardware solutions for enterprises and governments.",
  keywords: ["Robotics", "Hardware", "Africa", "Innovation", "IoT", "Engineering", "Tech Studio", "Nigeria", "Exhibit"],
  authors: [{ name: "eXhibot" }],
  openGraph: {
    title: "eXhibot | Africa's Hardware Innovation Studio",
    description: "Events are the pipeline. Products are the business. We build the future of African hardware.",
    url: "https://exhibot.ng",
    siteName: "eXhibot",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'eXhibot - Building the Future. Made in Africa.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "eXhibot | Africa's Hardware Innovation Studio",
    description: "We are building the operating system for African hardware innovation.",
    images: ['/og-image.png'],
    creator: '@exhibotng',
  },
  icons: {
    icon: '/logo_icon.png',
    shortcut: '/logo_icon.png',
    apple: '/logo_icon.png',
  },
  themeColor: '#0a0a0c',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}