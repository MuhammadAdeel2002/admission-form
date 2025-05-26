import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sardar Group of Companies',
    default: 'Sardar Group of Companies | Leading Business Conglomerate',
  },
  description: 'Sardar Group of Companies (SGC) - A leading business conglomerate providing exceptional services in construction, trade, and investments globally.',
  keywords: ['SGC', 'Sardar Group', 'construction', 'business solutions', 'global trade', 'investments'],
  authors: [{ name: 'Sardar Group of Companies' }],
  creator: 'Sardar Group of Companies',
  metadataBase: new URL('https://sardargroup.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sardargroup.com',
    title: 'Sardar Group of Companies | Leading Business Conglomerate',
    description: 'A leading business conglomerate providing exceptional services in construction, trade, and investments globally.',
    siteName: 'Sardar Group of Companies',
    images: [{ url: '/images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sardar Group of Companies | Leading Business Conglomerate',
    description: 'A leading business conglomerate providing exceptional services in construction, trade, and investments globally.',
    images: ['/images/og-image.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon.png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: '#003366',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 