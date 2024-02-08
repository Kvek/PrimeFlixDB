import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";

import type { WrapperComponentType } from "@types";

import { ReduxProvider } from "@providers/ReduxProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

import { Navbar } from "@wrappers/Navbar";

import { cn } from "@lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "PrimeflixDB",
  };
}

const notoSans = NotoSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const RootLayout: WrapperComponentType = ({ children }) => (
  <html suppressHydrationWarning lang="en">
    <body
      className={cn(
        "flex min-h-screen flex-col bg-background font-sans antialiased",
        notoSans.variable,
      )}
    >
      <ReduxProvider>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <Navbar />
          <section>{children}</section>
        </ThemeProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
