import { Gift, Scale, Handshake } from "lucide-react";

import { Reveal } from "@/components/tri/Reveal";
import { ContactEmail } from "@/components/tri/ContactEmail";

export function MecenatSponsoring() {
  return (
    <section id="mecenat-sponsoring" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-volt">Cadre juridique</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Mécénat ou sponsoring&nbsp;?</h2>
          <p className="mt-3 text-muted-foreground">
            Deux façons différentes de soutenir un projet sportif, avec des conséquences fiscales
            distinctes. Tri DFR privilégie le mécénat, mais le sponsoring reste possible si votre
            entreprise recherche des contreparties commerciales.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="surface-card flex h-full flex-col border-volt/40 p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-volt">
                <Gift className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-xl">Mécénat (don)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Votre entreprise soutient le projet sans contrepartie commerciale directe. Une
                association au projet reste possible (citation du nom ou du logo), à condition que
                sa valeur reste nettement disproportionnée par rapport au montant du don.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>· Réduction d'impôt de 60 % du don, sous conditions et plafonds (art. 238 bis CGI)</li>
                <li>· Reçu fiscal délivré pour les dons éligibles</li>
                <li>· Pas de prestation publicitaire, pas de facture</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="surface-card flex h-full flex-col p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-blaze">
                <Handshake className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-xl">Sponsoring (parrainage)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Votre entreprise finance le projet en échange de contreparties commerciales définies
                (visibilité, communication, présence du logo à valeur publicitaire).
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>· Pas de réduction d'impôt : dépense de communication</li>
                <li>· Facture émise, charge déductible du résultat sous conditions</li>
                <li>· Contreparties définies dans une convention</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="surface-card mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 font-display text-lg">
              <Scale className="h-5 w-5 text-volt" /> Le bon cadre pour votre entreprise
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              La qualification (mécénat ou parrainage) dépend des contreparties réellement
              accordées. Nous définissons ensemble les modalités et vous invitons à les valider avec
              votre expert-comptable ou votre conseil fiscal.
            </p>
          </div>
          <ContactEmail variant="line" size="xl" label="En parler avec nous" />
        </div>
      </div>
    </section>
  );
}
