import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProjectStyles from "./ProjectStyles";
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

  return {
    title: `${config.name} - ${config.description}`,
    description: config.description,
    icons: {
      icon: '/favicon.png',
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
