import { Inter,Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "NORDTEC",
  description: "Dein Partner für Elektrotechnik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="font-sans">{children}</body>
    </html>
  );
}
