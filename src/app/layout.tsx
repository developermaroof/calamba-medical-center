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
  title: "ZEISS SMILE pro at Calamba Eye Center | Freedom of Vision",
  description:
    "Experience Freedom of Vision with ZEISS SMILE pro — flapless, bladeless laser vision correction at Calamba Eye Center. Less than 10 seconds of laser time per eye, a 2–4mm incision, and fast recovery.",
  keywords: [
    "ZEISS SMILE pro",
    "laser eye surgery",
    "LASIK alternative",
    "laser vision correction",
    "eyesight operation",
    "Calamba Eye Center",
    "eye surgery Laguna",
    "SMILE Philippines",
  ],
  openGraph: {
    title: "ZEISS SMILE pro at Calamba Eye Center — Freedom of Vision",
    description:
      "Flapless, bladeless laser vision correction. Unlock your visual freedom in just seconds.",
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
