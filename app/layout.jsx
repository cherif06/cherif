import { JetBrains_Mono as jetBrainsMono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/SideNav";
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";
import "@/lib/localStorage";
import Script from "next/script";

const jetBrainsMonoFont = jetBrainsMono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Cherif",
  description: "Mon site portfolio",
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
        <Header/>
        <SideNav />
        {/* <StairTransition /> */}
        {/* <PageTransition>{children}</PageTransition> */}
        {children}
      </body>
    </html>
  );
}
