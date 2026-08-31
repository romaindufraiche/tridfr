import { Link } from "@tanstack/react-router";
import { FileCheck2, Landmark, Lock, PieChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/tri/Reveal";
import { euro } from "@/lib/tri";

const LEVELS = [
  {
    amount: 250,
    name: "Coup de pouce",
    detail: "Inscription à une compétition, nutrition, consommables.",
  },
  {
    amount: 500,
    name: "Partenaire",
    detail: "Une partie de la préparation sportive de la saison.",
  },
  {
    amount: 1000,
    name: "Grand mécène",
    detail: "Une contribution majeure à la saison 2026/2027.",
    featured: true,
  },
  {
    amount: 2500,
    name: "Partenaire principal",
    detail: "Une part importante du financement de la saison.",
  },
];

const REASSURANCE = [
  { icon: Lock, t: "Paiement sécurisé" },
  { icon: FileCheck2, t: "Reçu fiscal" },
  { icon: Landmark, t: "Association loi 1901" },
  { icon: PieChart, t: "Financement transparent" },
];

export function Levels() {
  return (
    <section id="niveaux" className="scroll-mt-16 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-volt">Combien coûte réellement votre soutien&nbsp;?</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">
            Pour 200 € de coût réel, vous financez 500 € de projet sportif.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Le mécénat ouvre droit, sous conditions, à une réduction d'impôt de 60 % du don. Le
            reste à charge de votre entreprise correspond donc à 40 % du montant versé.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEVELS.map((l, i) => (
            <Reveal key={l.amount} delay={i * 0.07} className="h-full">
              <div
                className={`flex h-full flex-col border p-6 ${
                  l.featured
                    ? "border-volt bg-volt/5"
                    : "border-border bg-surface/40"
                }`}
              >
                {l.featured ? (
                  <span className="eyebrow mb-2 text-volt">Le plus choisi</span>
                ) : (
                  <span className="eyebrow mb-2 text-muted-foreground">Niveau</span>
                )}
                <p className="font-display text-lg">{l.name}</p>
                <p className="mt-2 font-display text-4xl">{euro(l.amount)}</p>
                <dl className="mt-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Réduction d'impôt</dt>
                    <dd className="font-display text-volt">− {euro(l.amount * 0.6)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Coût réel</dt>
                    <dd className="font-display">{euro(l.amount * 0.4)}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-muted-foreground">{l.detail}</p>
                <Button
                  asChild
                  variant={l.featured ? "volt" : "line"}
                  size="lg"
                  className="mt-5 w-full"
                >
                  <Link to="/don" search={{ montant: l.amount }}>
                    Je soutiens
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {REASSURANCE.map((r) => (
            <li key={r.t} className="flex items-center gap-2">
              <r.icon className="h-4 w-4 text-volt" /> {r.t}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          Montants indicatifs. Le bénéfice fiscal dépend de l'éligibilité du don et de la situation
          fiscale du donateur.{" "}
          <a href="#simulateur" className="text-volt hover:underline">
            Simuler un autre montant
          </a>
        </p>
      </div>
    </section>
  );
}
