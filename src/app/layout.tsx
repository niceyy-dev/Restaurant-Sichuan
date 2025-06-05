import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Sichuan Paris",
  description:
    "Welcome to Restaurant Sichuan Paris, where you can experience the authentic flavors of Sichuan cuisine.",
  icons: {
    icon: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div
          className="relative w-full mt-20"
          style={{ height: "calc(100vh - 80px)" }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
