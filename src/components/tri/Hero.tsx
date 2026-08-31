import { Link } from "@tanstack/react-router";
import { ArrowDown, BadgeCheck, FileCheck2, Footprints, MapPin, Target, Waves } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import videoAsset from "@/assets/athlete-video.mp4.asset.json";
import athleteAsset from "@/assets/romain-velo.png.asset.json";
import { GOAL_AMOUNT, RAISED_AMOUNT as RAISED, euro } from "@/lib/tri";

const PROGRESS = Math.round((RAISED / GOAL_AMOUNT) * 100);

export function Hero() {
  return (
    <header className="relative overflow-hidden text-white">
      <video
        src={videoAsset.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover scale-[1.5]"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="grid-lines absolute inset-0 opacity-[0.08]" />
      <div className="blob -left-20 top-0 h-[24rem] w-[24rem] bg-volt/15" />
      <div className="blob right-0 top-32 h-[26rem] w-[26rem] bg-blaze/10 [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-10">
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-volt)] font-display text-sm font-black text-volt-foreground">
              DFR
            </span>
            <span className="truncate font-display text-lg font-black tracking-tight text-white">
              TRI DFR
              <span className="ml-2 hidden text-xs font-normal text-white/70 sm:inline">
                Association loi 1901
              </span>
            </span>
          </div>
          <Button asChild variant="volt" size="sm" className="hidden sm:inline-flex">
            <Link to="/don" search={{ montant: 0 }}>Soutenir le projet</Link>
          </Button>
        </nav>

        <motion.div
          className="mt-12 max-w-3xl sm:mt-20"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow inline-flex items-center gap-2 rounded-md border border-volt/40 bg-volt/15 px-3 py-1.5 text-volt backdrop-blur-sm">
            <BadgeCheck className="h-3.5 w-3.5" /> Mécénat sportif · 60 % de réduction d'impôt
          </p>

          <h1 className="mt-6 text-4xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Financez un athlète local{" "}
            <span className="text-gradient-volt">Tri DFR</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Je suis Romain, 23 ans, triathlète du Val-d'Oise. Aidez-moi à préparer ma saison 2027 et
            mon objectif longue distance. Votre entreprise donne{" "}
            <span className="font-semibold text-volt">500 €</span> : coût réel après réduction
            fiscale, <span className="font-semibold text-volt">200 €</span>.
          </p>

          <div className="mt-5 max-w-xl rounded-md border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-sm text-white">
                {euro(RAISED)} collectés sur {euro(GOAL_AMOUNT)}
              </p>
              <p className="font-display text-sm text-volt">{PROGRESS} %</p>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full bg-[image:var(--gradient-volt)]"
                initial={{ width: 0 }}
                animate={{ width: `${PROGRESS}%` }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-2 text-xs text-white/75">
              Il reste {euro(GOAL_AMOUNT - RAISED)} à financer pour la saison 2026/2027.
            </p>
          </div>


          <div className="mt-6 flex max-w-xl items-center gap-4 rounded-md border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <img
              src={athleteAsset.url}
              alt="Romain Dufraiche en compétition de triathlon"
              width={1246}
              height={1688}
              className="h-16 w-16 shrink-0 rounded-md border border-volt/60 object-cover object-center sm:h-20 sm:w-20"
            />
            <div className="min-w-0">
              <p className="font-display text-base font-bold text-white sm:text-lg">
                Romain Dufraiche
              </p>
              <p className="text-xs text-white/70 sm:text-sm">
                Triathlète amateur · Val-d'Oise · objectif longue distance
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/90">
                <li className="flex items-center gap-1.5">
                  <Footprints className="h-3.5 w-3.5 text-volt" /> 10 km — 39'57
                </li>
                <li className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-volt" /> Semi — objectif &lt; 1h30
                </li>
                <li className="flex items-center gap-1.5">
                  <Waves className="h-3.5 w-3.5 text-volt" /> Retour au triathlon — 2027
                </li>
              </ul>
            </div>
          </div>

          <div className="hover-lift group relative mt-8 sm:max-w-lg">
            <div className="relative grid gap-6 rounded-xl border border-white/25 bg-white/95 p-6 text-foreground shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-volt/10">
                  <BadgeCheck className="h-6 w-6 text-volt" />
                </div>
                <span className="rounded-full border border-volt/25 bg-volt/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-volt">
                  Mécénat d'entreprise
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h2 className="font-display text-4xl font-bold leading-none tracking-tight text-foreground sm:text-5xl">
                  <span className="text-gradient-volt">60 %</span> de réduction d'impôt
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Pour les dons éligibles au mécénat, l'État prend en charge une partie
                  significative de votre soutien. Votre engagement coûte finalement beaucoup
                  moins cher que son montant réel.
                </p>
              </div>

              {/* Visual breakdown */}
              <div className="space-y-3 rounded-xl bg-muted/50 p-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <span>Coût réel</span>
                  <span>Réduction d'impôt</span>
                </div>
                <div className="flex h-4 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-[40%] border-r border-white bg-[image:var(--gradient-volt)]" />
                  <div className="h-full w-[60%] bg-volt/25" />
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[image:var(--gradient-volt)]" />
                    <span className="text-muted-foreground">40 % de votre poche</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-volt/40" />
                    <span className="font-medium text-foreground">60 % déduits</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button asChild variant="volt" size="xl" className="w-full">
                <Link to="/don" search={{ montant: 0 }}>
                  Je soutiens le projet
                </Link>
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Exemple indicatif sous réserve de l'éligibilité du don et des conditions fiscales
                applicables.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="volt" size="xl" className="w-full sm:w-auto">
              <Link to="/don" search={{ montant: 500 }}>
                Je soutiens le projet
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
              <a href="#pourquoi" className="hover:text-white">
                Voir mes objectifs <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
              <a href="#simulateur" className="hover:text-white">
                Calculer mon coût
              </a>
            </Button>

          </div>

          <p className="mt-3 text-xs text-white/80">
            Association loi 1901 · Reçu fiscal · Don sécurisé · 60 % de réduction d'impôt sous
            conditions
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/80">
            <li className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-volt" /> Reçu fiscal pour les dons éligibles
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-volt" /> Ancrage Val-d'Oise (95)
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-volt" /> Association loi 1901 déclarée
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
