import { Link } from "@tanstack/react-router";
import { Building2, HeartHandshake, Landmark, MapPinned, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactEmail } from "@/components/tri/ContactEmail";

const BENEFITS = [
  {
    icon: Building2,
    t: "Un projet sportif comme support d'engagement",
    d: "Le triathlon réunit trois disciplines et impose une préparation exigeante sur le long terme. Au-delà de la performance, le projet repose sur des valeurs universelles : discipline, régularité, dépassement de soi, persévérance et progression.",
  },
  {
    icon: HeartHandshake,
    t: "Vous êtes un particulier ?",
    d: "Vous pouvez également soutenir le projet sportif par un don. Pour les dons éligibles, les particuliers peuvent bénéficier d'une réduction d'impôt de 66 %, dans la limite de 20 % du revenu imposable. Exemple : 300 € de don → 198 € de réduction d'impôt → 102 € de coût après réduction. Sous réserve de remplir les conditions applicables.",
  },
  {
    icon: MapPinned,
    t: "Vous êtes indépendant ou entrepreneur individuel ?",
    d: "Le mécénat peut également concerner les entrepreneurs individuels selon leur situation fiscale. Les modalités dépendent notamment du statut et du régime fiscal de l'entreprise. En cas de doute, rapprochez-vous de votre expert-comptable ou de votre conseil fiscal.",
  },
];

export function Trust() {
  return (
    <section id="particuliers" className="scroll-mt-16 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div id="transparence" className="scroll-mt-16">
            <p className="eyebrow text-volt">Transparence</p>
            <h2 className="mt-3 text-3xl sm:text-5xl">Une utilisation transparente des fonds.</h2>
            <p className="mt-4 text-muted-foreground">
              Tri DFR souhaite garantir une utilisation claire et transparente des fonds collectés.
              Les dons contribuent au financement du projet sportif : équipement, préparation,
              inscriptions et déplacements en compétition. Les dépenses liées au projet sont suivies
              afin de permettre une présentation claire de l'utilisation des fonds collectés.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                { icon: Landmark, t: "Association loi 1901 déclarée en préfecture" },
                { icon: ShieldCheck, t: "Reçu fiscal délivré pour les dons éligibles" },
                { icon: MapPinned, t: "Siège à Sannois, Val-d'Oise (95)" },
              ].map((i) => (
                <li
                  key={i.t}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 p-4 text-sm"
                >
                  <i.icon className="h-5 w-5 shrink-0 text-volt" />
                  <span className="min-w-0">{i.t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="volt" size="xl" className="w-full sm:w-auto">
                <Link to="/don" search={{ montant: 0 }}>
                  Faire un don
                </Link>
              </Button>
              <ContactEmail variant="line" size="xl" className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="grid gap-4 self-start">
            {BENEFITS.map((b) => (
              <div key={b.t} className="surface-card hover-lift p-6">
                <b.icon className="h-6 w-6 text-blaze" />
                <p className="mt-3 font-display text-lg">{b.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
