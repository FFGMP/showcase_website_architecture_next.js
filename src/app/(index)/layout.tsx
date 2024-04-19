import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import Nav from "./[locale]/components/nav";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export const metadata: Metadata = {
  title: "Arch Showcase",
  description: "Website to showcase some architecture projects",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className + " min-h-screen"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
