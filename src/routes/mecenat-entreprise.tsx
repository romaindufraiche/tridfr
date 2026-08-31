import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, Landmark, Lock, PieChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Levels } from "@/components/tri/Levels";
import { MecenatSponsoring } from "@/components/tri/MecenatSponsoring";
import { Faq } from "@/components/tri/Faq";
import { SiteFooter } from "@/components/tri/SiteFooter";
import { ContactEmail } from "@/components/tri/ContactEmail";
import { GOAL_AMOUNT, RAISED_AMOUNT, euro } from "@/lib/tri";
import athleteAsset from "@/assets/romain-velo.png.asset.json";

const TITLE = "Mécénat sportif entreprise — 60 % de réduction d'impôt | Tri DFR";
const DESCRIPTION =
  "Votre entreprise soutient un athlète local du Val-d'Oise : 500 € de don = 200 € de coût réel après réduction d'impôt de 60 %. Reçu fiscal, association loi 1901.";

export const Route = createFileRoute("/mecenat-entreprise")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mecenat-entreprise" }],
  }),
  component: MecenatEntreprise,
});

const PROGRESS = Math.round((RAISED_AMOUNT / GOAL_AMOUNT) * 100);

function MecenatEntreprise() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div>
            <p className="eyebrow text-volt">Mécénat sportif d'entreprise</p>
            <h1 className="mt-3 text-4xl sm:text-5xl">
              Financez un athlète local et déduisez 60 % de votre don
            </h1>
            <p className="mt-4 text-muted-foreground">
              Tri DFR, association loi 1901 du Val-d'Oise, porte le projet sportif de Romain
              Dufraiche pour la saison 2026/2027. Votre entreprise donne 500 € : après réduction
              d'impôt, le coût réel est de 200 €.
            </p>

            <div className="mt-6 max-w-md border border-border bg-background p-4">
              <div className="flex items-baseline justify-between">
                <p className="font-display text-sm">
                  {euro(RAISED_AMOUNT)} collectés sur {euro(GOAL_AMOUNT)}
                </p>
                <p className="font-display text-sm text-volt">{PROGRESS} %</p>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full bg-[image:var(--gradient-volt)]"
                  style={{ width: `${PROGRESS}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="volt" size="xl">
                <Link to="/don" search={{ montant: 500 }}>
                  Je soutiens le projet <ArrowRight />
                </Link>
              </Button>
              <ContactEmail variant="line" size="xl" label="Échanger avant de donner" />
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-volt" /> Paiement sécurisé
              </li>
              <li className="flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-volt" /> Reçu fiscal
              </li>
              <li className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-volt" /> Association loi 1901
              </li>
              <li className="flex items-center gap-2">
                <PieChart className="h-4 w-4 text-volt" /> Financement transparent
              </li>
            </ul>
          </div>

          <img
            src={athleteAsset.url}
            alt="Romain Dufraiche, triathlète du Val-d'Oise, en compétition à vélo"
            width={1246}
            height={1688}
            className="w-full border border-border object-cover"
          />
        </div>
      </header>

      <Levels />
      <MecenatSponsoring />
      <Faq />
      <SiteFooter />
    </main>
  );
}
