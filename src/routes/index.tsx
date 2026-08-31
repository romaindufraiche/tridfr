import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/tri/Hero";
import { Levels } from "@/components/tri/Levels";
import { WhyMe } from "@/components/tri/WhyMe";
import { Simulator } from "@/components/tri/Simulator";
import { Athlete } from "@/components/tri/Athlete";
import { Trust } from "@/components/tri/Trust";
import { ProofBar } from "@/components/tri/ProofBar";
import { MecenatSponsoring } from "@/components/tri/MecenatSponsoring";
import { Faq } from "@/components/tri/Faq";
import { SiteFooter } from "@/components/tri/SiteFooter";



const TITLE = "Tri DFR — Financez une saison de triathlon en mécénat (95)";
const DESCRIPTION =
  "Romain, triathlète du Val-d'Oise, cherche 5 000 € pour sa saison 2026/2027. Votre entreprise donne 1 000 € : 600 € de réduction d'impôt, 400 € de coût net, sous conditions.";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Tri DFR",
          description: DESCRIPTION,
          email: "romain.dufraiche@gmail.com",
          address: {
            "@type": "PostalAddress",
            postalCode: "95110",
            addressLocality: "Sannois",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProofBar />
      <Levels />
      <WhyMe />
      <Simulator />
      <MecenatSponsoring />
      <Athlete />
      <Trust />
      <Faq />
      <SiteFooter />
    </main>
  );
}
