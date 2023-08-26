import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import AppFooter from "./component/footer/footer";

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
        <AppFooter/>
      </body>
    </html>
  );
}
