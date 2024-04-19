import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arch Showcase",
  description: "Website to showcase some architecture projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
