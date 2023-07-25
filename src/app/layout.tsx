import "./globals.css";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, Indie_Flower } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});
const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-indie-flower",
});


export const metadata: Metadata = {
  title: "Marin Kitagawa",
  description: "Marin Kitagawa's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://www.marinkitagawa.com/_next/image?url=%2Fmarin.png&w=3840&q=75"
        />
        <meta property="og:title" content="Marin Kitagawa's Website" />
        <meta
          property="og:description"
          content="Marin Kitagawa's website"
        />
        <meta property="og:url" content="https://marinkitagawa.com"></meta>
        <title>Marin is the cutest!</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans  ${plexSans.variable} font-ple ${indieFlower.variable} font-plex`}
      >
        <div className="absolute bottom-0 text-[12px] text-black z-50 right-24">
          Designed and Developed by{" "}
          <Link href="https://github.com/a-me-lia" className="underline">
            Marin Kurokawa
          </Link>{" "}
          ©2023
        </div>
        {children}
      </body>
    </html>
  );
}
