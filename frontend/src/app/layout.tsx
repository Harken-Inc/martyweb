import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProjectStyles from "./ProjectStyles";
import StructuredData from "./StructuredData";
import { getProjectConfig, getProjectName } from "../../shared/utils/markdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getProjectConfig();
  const projectName = getProjectName();
  const siteUrl = `https://${config.domain}`;

  // Shorter title for SEO (under 60 chars)
  const title = config.tagline
    ? `${config.name} - ${config.tagline}`
    : config.name;

  return {
    title,
    description: config.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: `/projects/${projectName}/favicon.png`,
      shortcut: `/projects/${projectName}/favicon.png`,
      apple: `/projects/${projectName}/favicon.png`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      siteName: config.name,
      title,
      description: config.description,
      images: [
        {
          url: `/projects/${projectName}/og-image.png`,
          width: 1200,
          height: 630,
          alt: config.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: config.description,
      images: [`/projects/${projectName}/og-image.png`],
      creator: config.social?.twitter,
    },
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
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getProjectConfig();
  const projectName = getProjectName();

  // Inject theme colors as CSS custom properties
  const themeStyles = {
    "--color-primary": config.theme.primaryColor,
    "--color-secondary": config.theme.secondaryColor,
    "--color-accent": config.theme.accentColor || config.theme.primaryColor,
    "--font-family-theme": config.theme.fontFamily,
  } as React.CSSProperties;

  return (
    <html lang="en" style={themeStyles} data-project={projectName}>
      <head>
        <ProjectStyles />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
