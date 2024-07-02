import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import CustomHeader from "@/components/custom_header/custom_header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcozsh's Blog",
  description: "Blog creado por marcozsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div>
            <CustomHeader/>
          </div>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
