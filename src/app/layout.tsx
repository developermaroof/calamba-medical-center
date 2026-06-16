import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ZEISS Frutiger Next — body (regular family)
const frutiger = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/ZEISSFrutigerNextW1G-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-Reg.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-Heavy.ttf", weight: "800", style: "normal" },
  ],
});

// ZEISS Frutiger Next Condensed — headings/display
const frutigerCondensed = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "./fonts/ZEISSFrutigerNextW1G-RgCn.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-MdCn.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ZEISSFrutigerNextW1G-BoldCn.ttf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calamba-medical-center.vercel.app"),
  title: "Calamba Eye Center | Laser Vision Correction",
  description:
    "Flapless, bladeless, minimally invasive laser vision correction at Calamba Eye Center — short laser time, a 2–4mm incision, and fast recovery. See clearly, live freely.",
  keywords: [
    "laser vision correction",
    "laser eye surgery",
    "LASIK alternative",
    "flapless laser eye surgery",
    "eyesight operation",
    "Calamba Eye Center",
    "eye surgery Laguna",
    "Calamba Medical Center",
  ],
  openGraph: {
    title: "Calamba Eye Center — Laser Vision Correction",
    description:
      "See clearly, live freely. Flapless, minimally invasive laser vision correction at Calamba Eye Center.",
    type: "website",
    images: ["/images/zeiss/kv-landscape-1600.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frutiger.variable} ${frutigerCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
