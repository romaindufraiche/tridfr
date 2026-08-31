import { Link } from "@tanstack/react-router";
import { Bike, Footprints, Target, Timer, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/tri/Reveal";
import athleteAsset from "@/assets/romain-velo.png.asset.json";

const PERFS = [
  { icon: Footprints, label: "10 km", value: "39'57", note: "Vincennes" },
  { icon: Timer, label: "Semi-marathon", value: "1h32:36", note: "Joinville, avril 2026" },
  { icon: Bike, label: "Triathlon L", value: "5h12:16", note: "OpenLakes Lyon, mai 2026" },
  { icon: Waves, label: "Natation (Tri L)", value: "34'21", note: "1,9 km en eau libre" },
];

const OBJECTIFS = [
  { label: "Semi-marathon — hiver 2026", value: "< 1h30" },
  { label: "Semi-marathon — printemps 2027", value: "< 1h25" },
  { label: "Triathlon L — saison 2027", value: "< 5h00" },
  { label: "Ambition long terme Triathlon L / — Ironman 70.3", value: "≈ 4h15" },
];

export function WhyMe() {
  return (
    <section id="pourquoi" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <Reveal className="h-full">
            <div className="surface-card relative h-full overflow-hidden">
              <img
                src={athleteAsset.url}
                alt="Romain Dufraiche en position aéro sur son vélo de triathlon"
                loading="lazy"
                width={1246}
                height={1688}
                className="aspect-[3/4] w-full object-cover object-center lg:h-full"
              />
            </div>
          </Reveal>

          <div>
            <p className="eyebrow text-volt">Pourquoi soutenir mon projet&nbsp;?</p>
            <h2 className="mt-3 text-3xl sm:text-5xl">
              Un projet sportif porté depuis l'âge de 8 ans.
            </h2>
            <p className="mt-4 text-muted-foreground">
              J'ai commencé le triathlon à 8 ans au Triathlon Sannois Franconville, puis j'ai mis ma
              pratique en pause le temps de mes études d'ingénieur. Depuis 2024, je me suis remis à
              un entraînement structuré, encadré par un coach, en parallèle de mon travail :
              natation, vélo et course à pied chaque semaine, tôt le matin et le week-end.
            </p>
            <p className="mt-3 text-muted-foreground">
              La saison 2026/2027 est une étape charnière : progresser en course à pied cet hiver
              (le triathlon est à l'arrêt partout, l'eau est trop froide pour organiser des
              épreuves), revenir à la compétition en triathlon au printemps, puis préparer la longue
              distance. Votre soutien transforme un investissement personnel en véritable projet
              sportif.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <p className="eyebrow text-muted-foreground">Mes chronos</p>
                <ul className="mt-3 grid gap-3">
                  {PERFS.map((p) => (
                    <li key={p.label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                      <p.icon className="h-4 w-4 shrink-0 text-blaze" />
                      <span className="min-w-0 text-sm">
                        <span className="block">{p.label}</span>
                        <span className="block text-xs text-muted-foreground">{p.note}</span>
                      </span>
                      <span className="font-display text-lg text-foreground">{p.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card p-5">
                <p className="eyebrow text-muted-foreground">Mes objectifs</p>
                <ul className="mt-3 grid gap-3">
                  {OBJECTIFS.map((o) => (
                    <li key={o.label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                      <Target className="h-4 w-4 shrink-0 text-volt" />
                      <span className="min-w-0 text-sm">{o.label}</span>
                      <span className="font-display text-lg text-volt">{o.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="volt" size="xl" className="w-full sm:w-auto">
                <Link to="/don" search={{ montant: 0 }}>
                  Soutenir mon projet
                </Link>
              </Button>
              <Button asChild variant="line" size="xl" className="w-full sm:w-auto">
                <a href="#athlete">Voir le calendrier de la saison</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
