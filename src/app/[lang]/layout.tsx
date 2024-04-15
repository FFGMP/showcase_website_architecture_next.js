import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arch Showcase",
  description: "Website to showcase some architecture projects",
};

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className + " min-h-screen"}>
        <Nav dict={dict} lang={lang} />
        {children}
      </body>
    </html>
  );
}
