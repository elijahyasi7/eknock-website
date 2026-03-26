import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-KNOCK | Where Faith Meets Flow",
  description:
    "E-Knock — Traditional Catholic rapper. Born in Iraq, raised in San Diego. 5 albums, 3.1M+ streams. Book E-Knock for your next event.",
  keywords: [
    "E-Knock",
    "Catholic rapper",
    "Christian hip hop",
    "Syriac Catholic",
    "Traditional Latin Mass",
    "Catholic music",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
