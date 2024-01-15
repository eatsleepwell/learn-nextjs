import Footer from "@/components/footer";
import Header from "@/components/header";
import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js",
    template: "%s | Rizky",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}