import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEGIS Gate Test — Build validation",
  description:
    "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
