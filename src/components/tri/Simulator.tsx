import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Award,
  Bike,
  CalendarClock,
  FileText,
  Leaf,
  Lock,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Target,
  Undo2,
  Users,
  Wallet,
} from "lucide-react";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { ContactEmail } from "@/components/tri/ContactEmail";
import { Counter } from "@/components/tri/Counter";
import { Reveal } from "@/components/tri/Reveal";
import { GOAL_AMOUNT, RAISED_AMOUNT, WHATSAPP_URL, euro } from "@/lib/tri";

const QUICK = [250, 500, 1000, 2500];

const BUDGET = [
  {
    label: "Équipement & matériel sportif",
    amount: 3500,
    icon: Bike,
    detail: "Matériel nécessaire à la préparation et à la pratique sportive.",
  },
  {
    label: "Préparation & encadrement",
    amount: 1500,
    icon: Target,
    detail: "Préparation sportive, entraînement et accompagnement du projet.",
  },
  {
    label: "Inscriptions & déplacements",
    amount: 2000,
    icon: CalendarClock,
    detail: "Inscriptions aux compétitions, transports et déplacements liés à la saison.",
  },
];

const EXAMPLES = [250, 500, 1000, 2500];

const RAISED = RAISED_AMOUNT;

export function Simulator() {
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState("");

  const { reduction, real } = useMemo(() => {
    const safe = Number.isFinite(amount) && amount > 0 ? amount : 0;
    const r = Math.round(safe * 0.6);
    return { reduction: r, real: safe - r };
  }, [amount]);

  const progress = Math.min(100, Math.round((RAISED / GOAL_AMOUNT) * 100));

  return (
    <section id="simulateur" className="relative scroll-mt-16 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-volt">Simulateur</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">
            Découvrez votre réduction d'impôt immédiate
          </h2>
          <p className="mt-3 text-muted-foreground">
            Indiquez le montant que vous souhaitez consacrer au projet et visualisez d'un coup d'œil
            la réduction d'impôt que vous pouvez obtenir au titre du mécénat.
          </p>
        </div>

        <Reveal className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Calculator */}
          <div className="surface-card p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {QUICK.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setAmount(v);
                    setCustom("");
                  }}
                  className={`rounded-xl border px-2 py-4 font-display text-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:text-xl ${
                    amount === v && custom === ""
                      ? "border-volt bg-volt/5 text-volt"
                      : "border-border bg-surface-2/60 hover:border-volt/60 hover:bg-surface-2"
                  }`}
                >
                  {v} €
                </button>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="eyebrow text-muted-foreground">Montant libre</span>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-4 focus-within:border-volt focus-within:ring-1 focus-within:ring-volt/20">
                <input
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={custom}
                  placeholder="Ex : 750"
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setAmount(Number(e.target.value));
                  }}
                  className="h-12 w-full bg-transparent font-display text-xl outline-none placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground"
                />
                <span className="font-display text-lg text-muted-foreground">€</span>
              </div>
            </label>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col justify-between rounded-xl border border-border bg-surface-2/40 p-4">
                <div>
                  <p className="eyebrow text-muted-foreground">Votre entreprise donne</p>
                  <Counter value={amount > 0 ? amount : 0} className="mt-1 block font-display text-2xl sm:text-3xl" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Votre contribution au projet.</p>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-volt/40 bg-volt/5 p-4">
                <div>
                  <p className="eyebrow text-volt">Réduction d'impôt estimée</p>
                  <motion.p
                    key={reduction}
                    initial={{ scale: 0.92, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    className="mt-1 font-display text-3xl text-volt sm:text-4xl"
                  >
                    <Counter value={-reduction} />
                  </motion.p>
                </div>
                <p className="mt-2 text-xs text-volt/80">
                  60 % du montant de votre don déduit de votre impôt.
                </p>
              </div>
              <div className="flex flex-col justify-between rounded-xl border border-border bg-surface-2/40 p-4">
                <div>
                  <p className="eyebrow text-muted-foreground">Coût net pour l'entreprise</p>
                  <Counter value={real} className="mt-1 block font-display text-2xl sm:text-3xl" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Ce que vous payez réellement.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="volt" size="xl" className="w-full">
                <Link to="/don" search={{ montant: amount }}>
                  <Wallet /> Je soutiens le projet
                </Link>
              </Button>
              <Button asChild variant="line" size="xl" className="w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
              <ContactEmail variant="line" size="xl" label="Demander le RIB" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-volt" /> Paiement sécurisé en ligne / CB
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-volt" /> Reçu fiscal pour les dons éligibles
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Undo2 className="h-3.5 w-3.5 text-volt" /> Don ponctuel, sans engagement
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Calcul indicatif. Le bénéfice fiscal dépend notamment de l'éligibilité du don, de la
              situation fiscale du donateur et des plafonds applicables. Vous préférez le virement ou le chèque ?
              Demandez le RIB, nous vous transmettons les coordonnées et le justificatif CERFA.
            </p>
          </div>

          {/* Objectif + budget */}
          <div className="grid gap-6">
            <div className="surface-card p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <p className="eyebrow min-w-0 text-muted-foreground">Objectif de mécénat 2026/2027</p>
                <p className="font-display text-lg text-volt">{euro(GOAL_AMOUNT)}</p>
              </div>
              <div className="mt-4 h-4 overflow-hidden rounded-full border border-border bg-surface-2">
                <motion.div
                  className="h-full rounded-full bg-[image:var(--gradient-volt)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-display text-foreground">{euro(RAISED)}</span> collectés ·{" "}
                {euro(GOAL_AMOUNT - RAISED)} restants pour financer la saison sportive 2026/2027.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Budget prévisionnel de la saison : {euro(7000)}. Objectif de mécénat :{" "}
                {euro(GOAL_AMOUNT)}. Le solde est financé personnellement par l'athlète.
              </p>


              <div className="mt-6 rounded-xl border border-blaze/40 bg-blaze/10 p-4">
                <p className="eyebrow text-blaze">Une saison construite autour de la performance</p>
                <div className="mt-3 grid grid-cols-3 gap-3 font-display">
                  {[
                    { v: "Hiver", l: "2026/2027 — course à pied" },
                    { v: "1h25", l: "printemps 2027 — semi" },
                    { v: "Tri", l: "printemps/été 2027" },
                  ].map((c) => (
                    <div
                      key={c.l}
                      className="min-w-16 flex-1 rounded-lg border border-border bg-surface-2/60 px-2 py-2 text-center"
                    >
                      <p className="text-2xl">{c.v}</p>
                      <p className="font-sans text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                        {c.l}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Préparation et progression en course à pied cet hiver, objectif semi-marathon en
                  moins de 1 h 25 au printemps 2027, puis retour à la compétition en triathlon.
                </p>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="eyebrow text-volt">Où va votre soutien&nbsp;?</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Budget prévisionnel de la saison 2026/2027 : {euro(7000)}. L'objectif de mécénat est
                de {euro(GOAL_AMOUNT)}, le solde étant financé personnellement par l'athlète.
              </p>

              <ul className="mt-4 grid gap-3">
                {BUDGET.map((b) => (
                  <li
                    key={b.label}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <b.icon className="h-5 w-5 shrink-0 text-blaze" />
                    <span className="min-w-0 text-sm">
                      <span className="block">{b.label}</span>
                      <span className="block text-xs text-muted-foreground">{b.detail}</span>
                    </span>
                    <span className="font-display text-lg">{euro(b.amount)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Les dons collectés sont destinés au financement du projet sportif présenté sur ce
                site.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Pourquoi participer */}
        <div className="mt-14">
          <h3 className="text-2xl sm:text-3xl">
            Pourquoi les entreprises devraient participer et soutenir Tri DFR
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Soutenir un athlète local, c'est donner du sens à votre budget communication tout en
            bénéficiant d'un levier fiscal attractif.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Impact RSE concret",
                text: "Associez votre marque à un projet sportif, local et accessible. Un engagement visible autour de la performance, la santé et la persévérance.",
              },
              {
                icon: Award,
                title: "Image de marque",
                text: "Bénéficiez d'une visibilité auprès du public, des partenaires et des médias sportifs. Votre logo lié à un parcours inspirant.",
              },
              {
                icon: Users,
                title: "Faire partie d'un réseau",
                text: "Rejoignez un écosystème d'entreprises engagées autour du sport. Événements, contenus et rencontres avec d'autres partenaires.",
              },
              {
                icon: Receipt,
                title: "Déduction fiscale",
                text: "60 % de réduction d'impôt sur le don dans le cadre du mécénat d'entreprise. 1 000 € de soutien ne coûtent en réalité que 400 €.",
              },
            ].map((b) => (
              <div key={b.title} className="surface-card hover-lift p-6">
                <b.icon className="h-6 w-6 text-volt" />
                <p className="mt-4 font-display text-lg">{b.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Montants indicatifs basés sur le taux général applicable au mécénat d'entreprise, sous
            réserve des conditions et plafonds fiscaux applicables.
          </p>
        </div>

        {/* Comment ça fonctionne */}
        <div className="mt-14">
          <h3 className="text-2xl sm:text-3xl">Soutenir Tri DFR en quelques étapes</h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                t: "Choisissez votre montant",
                d: "Votre entreprise choisit librement le montant qu'elle souhaite consacrer au projet sportif.",
              },
              {
                icon: Target,
                t: "Votre soutien finance le projet",
                d: "Votre contribution participe directement au financement de la saison sportive 2026/2027.",
              },
              {
                icon: Receipt,
                t: "Recevez votre justificatif",
                d: "Un reçu fiscal est délivré pour les dons éligibles.",
              },
              {
                icon: FileText,
                t: "Bénéficiez de la réduction d'impôt",
                d: "Sous réserve de remplir les conditions applicables, votre don ouvre droit au dispositif fiscal correspondant.",
              },
            ].map((s, i) => (
              <li key={s.t} className="surface-card hover-lift relative p-6">
                <span className="font-display text-5xl text-volt/25">0{i + 1}</span>
                <s.icon className="mt-2 h-5 w-5 text-volt" />
                <p className="mt-3 font-display text-lg">{s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
