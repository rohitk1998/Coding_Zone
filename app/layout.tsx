import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import {
  BackgroundAnimation,
  ScrollUpButton,
  Navbar,
  AppFooter,
} from "./component";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Zone",
  description: "Software Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <AppFooter />
        <ScrollUpButton />
        <BackgroundAnimation />
      </body>
    </html>
  );
}
