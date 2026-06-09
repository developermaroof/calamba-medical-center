import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Calamba Medical Center | The Healthcare City of the South",
  description:
    "Calamba Medical Center — ACI Gold accredited hospital in Laguna with 27 specialty centers, 24/7 emergency care, and world-class medical services.",
  keywords: [
    "Calamba Medical Center",
    "hospital Laguna",
    "healthcare Calamba",
    "emergency room Laguna",
    "cancer center Laguna",
  ],
  openGraph: {
    title: "Calamba Medical Center",
    description: "The Healthcare City of the South",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
