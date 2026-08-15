import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tom Slavonia",
  url: "https://tomslavonia.com",
  image: "https://tomslavonia.com/tom-slavonia.jpg",
  email: "mailto:slavoniatom@gmail.com",
  sameAs: [
    "https://github.com/TommySlavo",
    "https://www.linkedin.com/in/thomas-slavonia-bb472a195",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of California, Los Angeles",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of California, San Diego",
    },
  ],
  knowsAbout: [
    "Robotics",
    "Machine Learning",
    "Control Theory",
    "State Estimation",
    "Motion Planning",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tomslavonia.com"),
  title: "Tom Slavonia | Robotics, Machine Learning & Control",
  description:
    "Tom Slavonia is an electrical engineering graduate researcher building systems for perception, planning, state estimation, and control.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tom Slavonia | Robotics, Machine Learning & Control",
    description:
      "Mathematical rigor applied to robotics, perception, planning, and dynamical systems.",
    url: "https://tomslavonia.com",
    siteName: "Tom Slavonia",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Slavonia | Robotics, Machine Learning & Control",
    description:
      "Mathematical rigor applied to robotics, perception, planning, and dynamical systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
