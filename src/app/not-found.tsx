import "./globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default function NotFound() {
  return (
    <html>
      <body className={inter.className + " min-h-screen"}>
        <h1>Not Found</h1>
      </body>
    </html>
  );
}
