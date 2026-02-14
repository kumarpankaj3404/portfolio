import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pankaj Kumar | Full-Stack MERN Developer | LPU CSE",
  description: "Portfolio of Pankaj Kumar, a Full-Stack MERN Developer with 8.19 CGPA, AWS Cloud certification, and 150+ LeetCode problems solved.",
  alternates: {
    canonical: "https://pankajkumar.app",
  },
  keywords: ["MERN stack", "Full-Stack Developer", "Pankaj Kumar", "LPU CSE", "AWS Certified", "React", "Next.js", "Portfolio", "Web Developer"],
  openGraph: {
    title: "Pankaj Kumar | Full-Stack MERN Developer",
    description: "Portfolio of Pankaj Kumar, a Full-Stack MERN Developer specializing in React, Next.js, and AWS.",
    url: "https://pankajkumar.app",
    siteName: "Pankaj Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "https://pankajkumar.app/pankaj2.png", // Assuming this image exists and is appropriate
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
    images: ["https://pankajkumar.app/pankaj2.png"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
