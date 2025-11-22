import { JetBrains_Mono as jetBrainsMono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/SideNav";
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";
import "@/lib/localStorage";

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
