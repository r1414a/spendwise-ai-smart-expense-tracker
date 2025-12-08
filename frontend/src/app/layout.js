import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpendWise",
  description: "AI Smart Expense Tracker",
  openGraph: {
    title: "",
    description: "",
    images: [],   // 🚨 IMPORTANT: prevents default site logo being used
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512" },
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {/* <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
