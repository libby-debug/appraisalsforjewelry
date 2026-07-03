import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certified Jewelry Appraisals | Diamonds, Estate & Antique Jewelry",
  description:
    "Professional independent jewelry appraisals by John Codianni, Graduate Gemologist and certified diamond and gemstone appraiser, for diamonds, estate jewelry, antique pieces, insurance valuations, and fine collections.",
  keywords: [
    "jewelry appraisal",
    "certified jewelry appraiser",
    "diamond appraisal",
    "antique jewelry appraisal",
    "estate jewelry appraisal",
    "insurance jewelry appraisal",
    "Graduate Gemologist",
    "GIA trained diamonds colored gemstones",
  ],
  metadataBase: new URL("https://appraisalsforjewelry.com"),
  openGraph: {
    title: "Certified Jewelry Appraisals | Diamonds, Estate & Antique Jewelry",
    description:
      "Professional independent jewelry appraisals by John Codianni, Graduate Gemologist and certified diamond and gemstone appraiser, for diamonds, estate jewelry, antique pieces, insurance valuations, and fine collections.",
    url: "https://appraisalsforjewelry.com",
    siteName: "Appraisals for Jewelry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
