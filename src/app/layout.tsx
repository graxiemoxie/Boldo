import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import NavBar from "./components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boldo App",
  description: "Save time by building fast with Boldo Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="bg-[#1C3D5B] -z-10 w-[1293px] h-[1293px] rounded-full absolute -top-[850px] -right-[600px]"></div>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
