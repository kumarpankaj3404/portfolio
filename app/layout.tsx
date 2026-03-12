import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pankajkumar.app"),
  title: {
    default: "Pankaj Kumar | Full-Stack MERN Developer | LPU CSE",
    template: "%s | Pankaj Kumar",
  },
  description: "Portfolio of Pankaj Kumar, a Full-Stack MERN Developer with 8.19 CGPA, AWS Cloud certification, and 150+ LeetCode problems solved.",
  authors: [{ name: "Pankaj Kumar", url: "https://pankajkumar.app" }],
  creator: "Pankaj Kumar",
  publisher: "Pankaj Kumar",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MERN stack",
    "Full-Stack Developer",
    "Pankaj Kumar",
    "LPU CSE",
    "AWS Certified",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Pankaj Kumar | Full-Stack MERN Developer",
    description: "Portfolio of Pankaj Kumar, a Full-Stack MERN Developer specializing in React, Next.js, and AWS.",
    url: "https://pankajkumar.app",
    siteName: "Pankaj Kumar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pankaj2.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Kumar | Full-Stack MERN Developer",
    description: "Check out my portfolio! I build scalable MERN stack applications.",
    images: ["/pankaj2.png"],
    creator: "@kumarpankaj3404", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon2.png", // Ensure you add this file to public/
    shortcut: "/favicon2.png",
    apple: "/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",      
        "name": "Pankaj Kumar",
        "url": "https://pankajkumar.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://pankajkumar.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "name": "Pankaj Kumar",
        "url": "https://pankajkumar.app",
        "email": "kumarpankaj3404@gmail.com",
        "sameAs": [
          "https://github.com/kumarpankaj3404",
          "https://www.linkedin.com/in/pankaj-kumar-513a10298/"
        ],
        "jobTitle": "Full-Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open to Work"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Lovely Professional University"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "Pankaj Kumar - Web Development",
        "url": "https://pankajkumar.app",
        "description": "Professional web development services specializing in MERN stack applications.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
