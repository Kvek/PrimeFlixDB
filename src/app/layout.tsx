import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";

import type { WrapperComponentType } from "@types";

import { ReduxProvider } from "@providers/ReduxProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

import { cn } from "@lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: "Flux 2.0",
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
        "min-h-screen bg-background font-sans antialiased",
        notoSans.variable,
      )}
    >
      <ThemeProvider
        disableTransitionOnChange
        enableSystem
        attribute="class"
        defaultTheme="system"
      >
        <ReduxProvider>{children}</ReduxProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
