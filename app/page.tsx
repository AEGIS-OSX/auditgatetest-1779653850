import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEGIS Gate Test — Build validation",
  description:
    "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
  openGraph: {
    title: "AEGIS Gate Test — Build validation",
    description:
      "Single-purpose build gate page. Confirms a successful build by rendering the exact H1 'AEGIS Gate Test' and an accessibility validation string for CI checks.",
  },
};

export default function Home() {
  return (
    <main
      id="top"
      className="page--wrapper"
    >
      <div className="container--auditgate">
        <h1 className="gate-heading">AEGIS Gate Test</h1>
        <p className="sr-only">Build validated: AEGIS gate test successful.</p>
      </div>
    </main>
  );
}
