import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inseramuddin Kazi | Full-Stack Web Developer & Digital Architect",
  description: "Portfolio of Inseramuddin Kazi - Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant, and user-centric digital experiences.",
  keywords: ["Web Developer", "Full-Stack Developer", "React Developer", "Next.js", "Node.js", "Portfolio", "Inseramuddin Kazi", "IK Kazi", "Frontend Developer", "Backend Developer", "JavaScript", "MongoDB", "Tailwind CSS"],
  authors: [{ name: "Inseramuddin Kazi", url: "https://www.linkedin.com/in/inseram-kazi-145261370/" }],
  creator: "Inseramuddin Kazi",
  publisher: "Inseramuddin Kazi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/ik-logo.png",
    shortcut: "/ik-logo.png",
    apple: "/ik-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Inseramuddin Kazi | Full-Stack Web Developer",
    description: "Full-Stack Web Developer specializing in React, Next.js, Node.js. Building scalable, performant digital experiences.",
    siteName: "IK Kazi Portfolio",
    images: [
      {
        url: "/ik kazi img.png",
        width: 1200,
        height: 630,
        alt: "Inseramuddin Kazi - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inseramuddin Kazi | Full-Stack Web Developer",
    description: "Full-Stack Web Developer specializing in React, Next.js, Node.js. Building scalable, performant digital experiences.",
    images: ["/ik kazi img.png"],
    creator: "@ik_kazi",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://ikportfolio.azhka.in",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Inseramuddin Kazi",
    alternateName: "IK Kazi",
    description: "Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://ikportfolio.azhka.in",
    image: "/ik kazi img.png",
    jobTitle: "Full-Stack Web Developer",
    knowsAbout: ["React", "Next.js", "Node.js", "JavaScript", "MongoDB", "Tailwind CSS", "Express", "REST APIs", "Web Development"],
    sameAs: [
      "https://www.linkedin.com/in/inseram-kazi-145261370/",
      "https://github.com/inseram-kazi-8222",
      "https://www.instagram.com/ik_kazi_8222"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${anton.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
