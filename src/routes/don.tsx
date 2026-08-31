import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Lock, Mail, MessageCircle, ShieldCheck, Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactEmail } from "@/components/tri/ContactEmail";
import { PayPalCheckout } from "@/components/tri/PayPalCheckout";
import { WHATSAPP_URL, euro } from "@/lib/tri";

const TITLE = "Finaliser votre don — Tri DFR";
const DESCRIPTION =
  "Récapitulatif de votre don au projet sportif Tri DFR : montant, réduction d'impôt de 60 %, coût réel et paiement en ligne sécurisé.";

const PRESETS = [250, 500, 1000, 2500];

export const Route = createFileRoute("/don")({
  validateSearch: (search: Record<string, unknown>) => ({
    montant: Number(search['montant'] ?? 0) || 0,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tridfr.fr/don" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://tridfr.fr/don" }],
  }),
  component: DonPage,
});

function DonPage() {
  const { montant } = Route.useSearch();
  const [amount, setAmount] = useState(montant > 0 ? montant : 1000);
  const [payOpen, setPayOpen] = useState(false);

  const reduction = Math.round(amount * 0.6);
  const real = amount - reduction;


  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link to="/" className="text-sm text-volt hover:underline">
          ← Retour au site
        </Link>

        <p className="eyebrow mt-8 text-muted-foreground">Étape finale</p>
        <h1 className="mt-2 text-3xl sm:text-4xl">Vérifiez votre don avant paiement</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          Tri DFR est une association loi 1901 dont l'objet est le développement de la pratique
          sportive. Votre soutien finance directement le projet, et 60 % du montant est déduit de
          votre impôt.
        </p>

        <div className="surface-card mt-8 p-6 sm:p-8">
          <span className="eyebrow text-muted-foreground">Montant du don</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(p)}
                className={`h-11 rounded-xl border px-4 font-display text-base transition ${
                  amount === p
                    ? "border-volt bg-volt/10 text-volt"
                    : "border-border bg-surface-2/40 hover:border-volt/50"
                }`}
              >
                {euro(p)}
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
                value={amount > 0 ? amount : ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="h-12 w-full bg-transparent font-display text-xl outline-none"
              />
              <span className="font-display text-lg text-muted-foreground">€</span>
            </div>
          </label>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface-2/40 p-4">
              <p className="eyebrow text-muted-foreground">Montant du don</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl">{euro(amount > 0 ? amount : 0)}</p>
            </div>
            <div className="rounded-xl border border-volt/50 bg-gradient-to-br from-volt/15 to-volt/5 p-4 shadow-[var(--shadow-volt)]">
              <p className="eyebrow text-volt">Réduction d'impôt estimée</p>
              <p className="mt-1 font-display text-3xl text-volt sm:text-4xl">−{euro(reduction)}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2/40 p-4">
              <p className="eyebrow text-muted-foreground">Coût après réduction</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl">{euro(real)}</p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-xl border border-volt/30 bg-gradient-to-r from-volt/10 to-volt/5 p-4 shadow-[var(--shadow-volt)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-volt/20">
              <Mail className="h-5 w-5 text-volt" />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-volt">Reçu fiscal sous 48h</p>
              <p className="mt-0.5 text-sm text-foreground/80">
                Envoyé à l'adresse email renseignée lors du paiement. Conservez-le pour votre
                déclaration de revenus et déduisez 60 % de votre don de votre impôt.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <Button
              variant="volt"
              size="xl"
              className="shine w-full"
              disabled={!(amount > 0)}
              onClick={() => setPayOpen(true)}
            >
              Payer en ligne {euro(amount > 0 ? amount : 0)} <ArrowRight />
            </Button>
            <PayPalCheckout open={payOpen} onOpenChange={setPayOpen} amount={amount} />
            <p className="text-center text-xs text-muted-foreground">
              Le paiement s'ouvre dans une fenêtre sécurisée, sans quitter le site. Le montant est
              déjà pré-rempli.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <ContactEmail variant="line" size="xl" label="Demander le RIB" />
              <Button asChild variant="line" size="xl" className="w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-volt" /> Paiement sécurisé / CB
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-volt" /> Reçu fiscal pour les dons éligibles
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Undo2 className="h-3.5 w-3.5 text-volt" /> Don ponctuel, sans engagement
            </span>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Calcul indicatif. Le bénéfice fiscal dépend de l'éligibilité du don, de la situation
            fiscale du donateur et des plafonds applicables (art. 238 bis CGI). Virement ou chèque
            possible sur demande du RIB.
          </p>
        </div>
      </div>
    </main>
  );
}
