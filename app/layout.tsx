import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {
  BackgroundAnimation,
  ScrollUpButton,
  Navbar,
  AppFooter,
} from "./component";
import {AppContextProvider} from "./context/context";

const font = Montserrat({ subsets: ["latin"] });

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
        <AppContextProvider >
        <Navbar />
        {children}
        <AppFooter />
        <ScrollUpButton />
        {/* <BackgroundAnimation /> */}
        </AppContextProvider>
      </body>
    </html>
  );
}
