import { JetBrains_Mono as jetBrainsMono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/SideNav";
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";
import "@/lib/localStorage";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";

const jetBrainsMonoFont = jetBrainsMono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Cherif",
  description: "Mon site portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7XFCGB069Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7XFCGB069Y');
        `}
      </Script>
      <body className={`${jetBrainsMonoFont.variable} `}>
        <CustomCursor />
        <Header/>
        <SideNav />
        {/* <StairTransition /> */}
        {/* <PageTransition>{children}</PageTransition> */}
        {children}
      </body>
    </html>
  );
}
