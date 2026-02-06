import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair", // 👈 We create a CSS variable to use in Tailwind
  display: "swap",
});


const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Single's Sip",
  description: "A playful Valentine's Day drink guide for the single souls. Embrace your independence with our curated selection of beverages that celebrate self-love and good vibes. Whether you're in the Healing Era or Villain Era, we've got the perfect sip for you!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Single's Sip",
    description: "A playful Valentine's Day drink guide for the single souls. Embrace your independence with our curated selection of beverages that celebrate self-love and good vibes. Whether you're in the Healing Era or Villain Era, we've got the perfect sip for you!",
    url: "https://singles-sip.vercel.app/",
    siteName: "Single's Sip",
    images: [
      {
        url: "https://single.aswin.codes/og-image.png",
        width: 1200,
        height: 630,
        alt: "Single's Sip OG Image",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {  
    card: "summary_large_image",
    title: "Single's Sip",
    description: "A playful Valentine's Day drink guide for the single souls. Embrace your independence with our curated selection of beverages that celebrate self-love and good vibes. Whether you're in the Healing Era or Villain Era, we've got the perfect sip for you!",
    images: ["https://single.aswin.codes/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
