import { Clock3, Lock, PiggyBank, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Lock, t: "Paiement sécurisé", d: "En ligne / CB — aucune donnée bancaire stockée" },
  { icon: ShieldCheck, t: "Reçu fiscal", d: "Délivré pour les dons éligibles" },
  { icon: PiggyBank, t: "Financement transparent", d: "Fonds affectés au projet sportif présenté" },
  { icon: Clock3, t: "Sans engagement", d: "Don ponctuel, en quelques minutes" },
];

export function ProofBar() {
  return (
    <section aria-label="Garanties" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {ITEMS.map((i) => (
          <div key={i.t} className="group flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-volt transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <i.icon className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm">{i.t}</p>
              <p className="text-xs text-muted-foreground">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
