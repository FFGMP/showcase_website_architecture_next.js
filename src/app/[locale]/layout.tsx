import { Nav } from "./components/nav";
import { Inter } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={inter.className + " min-h-screen"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
