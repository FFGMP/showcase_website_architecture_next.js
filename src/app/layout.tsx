import type { Metadata } from "next";
import "./globals.css";
import { unstable_setRequestLocale } from "next-intl/server";

const locales = ["pt", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
  unstable_setRequestLocale(locale);
  return (
    <>
      <>{children}</>
    </>
  );
}
