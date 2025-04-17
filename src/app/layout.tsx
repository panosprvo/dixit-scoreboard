import type { Metadata } from "next";
import { Calistoga } from "next/font/google";
import "./globals.css";

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dixit Scoreboard",
  description: "track scores for your Dixit games with ease",
  icons: {
    icon: "/dixit-favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calistoga.className}`}>
      <div className="background" />
        {children}
      </body>
    </html>
  );
}
