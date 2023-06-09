import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2023 Cumhurbaşkanı seçimi çetelesi",
  description: "2023 Cumhurbaşkanı seçimi çetelesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ height: "-webkit-fill-available" }}
        className={`flex flex-col h-screen overflow-hidden ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
