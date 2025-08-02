import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Smart Telegram Management, Unleashed - Telemaster",
  keywords: [
    "Telegram bot management",
    "Telegram group management",
    "Telegram channel management",
    "Telegram automation",
    "Telegram analytics",
    "Telegram bot tools",
    "Telegram group tools", 
    "Telegram channel tools",
    "Telegram bot analytics",
    "Telegram group analytics",
    "Telegram channel analytics",
    "Telegram bot automation",
    "Telegram group automation",
    "Telegram channel automation",
    "Telegram bot management tool",
    "Telegram group management tool",
    "Telegram channel management tool",],
  description: "All-in-one Telegram bot management tool to streamline group and channel operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
