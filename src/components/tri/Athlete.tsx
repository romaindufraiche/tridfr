import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Flag, Instagram, Trophy } from "lucide-react";

import athleteAsset from "@/assets/romain-course.jpg.asset.json";
import finishAsset from "@/assets/romain-arrivee.jpg.asset.json";
import coachAsset from "@/assets/simon-coach.jpg.asset.json";


const CALENDAR = [
  {
    date: "15 novembre 2026",
    name: "Semi-marathon de Deauville",
    status: "Objectif principal · sub 1h30",
    highlight: true,
  },
  {
    date: "11 octobre 2026",
    name: "La Spinassienne — Semi-marathon d'Épinay-sur-Seine",
    status: "Reprise sur route",
  },
  {
    date: "3 octobre 2026",
    name: "Foulées Nocturnes de Franconville — 10 km",
    status: "Objectif intermédiaire · sub 38 min",
  },
  {
    date: "12 juillet 2026",
    name: "Ironman 70.3 Versailles",
    status: "Annulé · fortes chaleurs",
    cancelled: true,
  },
  { date: "16 mai 2026", name: "Triathlon L — OpenLakes Lyon", status: "Terminé" },
  { date: "12 avril 2026", name: "Semi-marathon de Joinville", status: "Terminé" },
];

export function Athlete() {
  const [open, setOpen] = useState(false);

  return (
    <section id="athlete" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="surface-card grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6 text-left transition-colors hover:border-volt/50 sm:p-8"
        >
          <div className="min-w-0">
            <p className="eyebrow text-volt">Présentation du projet</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">
              Derrière le projet : un athlète et des objectifs précis
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Découvrez le parcours sportif, les résultats, les objectifs et le calendrier de la
              saison 2026/2027.
            </p>
          </div>

          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-volt/50 text-volt transition-transform ${open ? "rotate-180" : ""}`}
          >
            <ChevronDown className="h-5 w-5" />
          </span>
        </button>

        {open && (
          <div className="mt-6 grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="grid gap-6">
              <div className="surface-card relative overflow-hidden">
                <img
                  src={athleteAsset.url}
                  alt="L'athlète en course à pied lors d'un triathlon longue distance"
                  loading="lazy"
                  width={800}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover object-center lg:h-full"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[image:var(--gradient-dark)] p-5">
                    <p className="font-display text-xl">L'athlète</p>
                    <p className="text-sm text-muted-foreground">
                      23 ans · Ingénieur informatique · Sannois (95)
                    </p>
                  </div>
                </div>
              </div>


              <div className="surface-card p-6 sm:p-8">
                <p className="eyebrow text-volt">Le projet sportif</p>
                <p className="mt-3 text-muted-foreground">
                  Tri DFR accompagne un projet sportif construit autour de la progression et de la
                  performance. Triathlète depuis l'âge de 8 ans au sein du Triathlon Sannois
                  Franconville, l'athlète a mis sa pratique en pause le temps de ses études et a
                  repris un entraînement structuré depuis 2024. En hiver, la saison de triathlon
                  est à l'arrêt de manière générale : les températures de l'eau ne permettent pas
                  d'organiser d'épreuves de natation. Cette période est consacrée à la préparation
                  et à la progression en course à pied, avant un retour à la compétition en
                  triathlon au printemps/été 2027.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-2/50 p-4">
                    <p className="eyebrow text-muted-foreground">Hiver 2026/2027</p>
                    <p className="mt-1 font-display text-2xl text-volt">Course à pied</p>
                    <p className="text-xs text-muted-foreground">préparation et progression</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2/50 p-4">
                    <p className="eyebrow text-muted-foreground">Printemps 2027</p>
                    <p className="mt-1 font-display text-2xl text-blaze">&lt; 1 h 25</p>
                    <p className="text-xs text-muted-foreground">objectif semi-marathon</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2/50 p-4">
                    <p className="eyebrow text-muted-foreground">Printemps / été 2027</p>
                    <p className="mt-1 font-display text-2xl text-volt">Triathlon</p>
                    <p className="text-xs text-muted-foreground">retour à la compétition</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2/50 p-4">
                    <p className="eyebrow text-muted-foreground">Saison 2027</p>
                    <p className="mt-1 font-display text-2xl text-blaze">&lt; 5h00</p>
                    <p className="text-xs text-muted-foreground">
                      triathlon L, longue distance&nbsp;
                    </p>
                  </div>
                </div>


                <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-xl border border-border bg-surface-2/40 p-5">
                  <img
                    src={coachAsset.url}
                    alt="Simon Retaillou, entraîneur Vision Endurance, à l'arrivée d'un Ironman"
                    loading="lazy"
                    width={1080}
                    height={1080}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="eyebrow text-muted-foreground">Entraîneur</p>
                    <p className="mt-1 font-display text-lg">Simon Retaillou — Vision Endurance</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Entraîneur du CAEN Triathlon, préparateur physique et lui-même finisher Ironman.
                    </p>
                    <a
                      href="https://www.instagram.com/vision.endurance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-volt hover:underline"
                    >
                      <Instagram className="h-4 w-4" /> @vision.endurance
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="surface-card relative overflow-hidden">
              <img
                src={finishAsset.url}
                alt="Passage de la ligne d'arrivée du triathlon OpenLakes Lyon"
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>


            {/* Calendrier */}
            <div className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-blaze" />
                <h3 className="text-xl sm:text-2xl">Calendrier 2026/2027</h3>
              </div>
              <ol className="mt-6 border-l border-border pl-6">
                {CALENDAR.map((c) => (
                  <li key={c.name} className={`relative pb-7 last:pb-0 ${c.cancelled ? "opacity-60" : ""}`}>
                    <span
                      className={`absolute -left-[1.9rem] top-1 grid h-4 w-4 place-items-center rounded-full border ${
                        c.highlight
                          ? "border-volt bg-volt"
                          : c.cancelled
                            ? "border-border bg-surface-2"
                            : "border-border bg-surface-2"
                      }`}
                    />
                    <p className="eyebrow text-muted-foreground">{c.date}</p>
                    <p className="mt-1 font-display text-lg">{c.name}</p>
                    <p
                      className={`text-sm ${c.highlight ? "text-volt" : c.cancelled ? "text-muted-foreground line-through" : "text-muted-foreground"}`}
                    >
                      {c.highlight && <Trophy className="mr-1 inline h-3.5 w-3.5" />}
                      {c.status}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="surface-card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Ce projet se construit saison après saison, avec le soutien d'entreprises locales.
              </p>
              <Button asChild variant="volt" size="lg" className="shrink-0">
                <a href="#simulateur">Soutenir le projet</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
