import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEGIS Gate Test — Build validation",
  description:
    "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
  openGraph: {
    title: "AEGIS Gate Test — Build validation",
    description:
      "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
    type: "website",
    images: [
      {
        url: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/auditgatetest-1779653850/cleo/1779654557932-hero.png",
        width: 1200,
        height: 630,
        alt: "AEGIS Gate Test — Build validation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEGIS Gate Test — Build validation",
    description:
      "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
    images: [
      "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/auditgatetest-1779653850/cleo/1779654557932-hero.png",
    ],
  },
  metadataBase: new URL("https://auditgatetest-1779653850.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
