import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";
import { ChatBotProvider } from "@/components/ChatBotContext";
import { DemoPopupProvider } from "@/components/aiviv3/DemoPopupContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIVI - Proactive AI for Customer Experience",
  description: "Transform customer engagement with AI-powered voice, SMS, email, and document intelligence. CRM-agnostic platform + managed service for seamless integration.",
  keywords: ["AI customer engagement", "voice AI", "SMS automation", "email automation", "OCR", "document intelligence", "CRM integration"],
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
        <DemoPopupProvider>
          <ChatBotProvider>
            {children}
            <ScrollToTop />
            <ChatBot />
          </ChatBotProvider>
        </DemoPopupProvider>
      </body>
    </html>
  );
}
