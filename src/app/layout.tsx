import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "~/app/providers";
import { cn } from "~/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoodFood",
  description: "GoodFood",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-[#F5F7F9]",
          inter.className,
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
