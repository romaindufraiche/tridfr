import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactEmail } from "@/components/tri/ContactEmail";
import { WHATSAPP_URL } from "@/lib/tri";

const FIGURES = [
  { v: "3", l: "disciplines sportives" },
  { v: "2026/2027", l: "saison sportive" },
  { v: "Val-d'Oise", l: "ancrage territorial" },
  { v: "Triathlon", l: "discipline principale" },
];

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow text-volt">Le projet en quelques chiffres</p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FIGURES.map((f) => (
            <div key={f.l} className="surface-card hover-lift p-5 text-center">
              <p className="font-display text-2xl text-volt">{f.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.l}</p>
            </div>
          ))}
        </div>

        <div className="surface-card mt-12 flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">
              Et si votre entreprise devenait mécène du projet&nbsp;?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Vous souhaitez soutenir un projet sportif local et comprendre concrètement ce que cela
              représente pour votre entreprise&nbsp;? Échangeons simplement sur votre projet de
              soutien.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button asChild variant="volt" size="xl">
              <Link to="/don" search={{ montant: 0 }}>
                Je soutiens le projet
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href="#simulateur">Calculer mon coût</a>
            </Button>
            <ContactEmail variant="line" size="xl" />
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Vous préférez échanger de vive voix&nbsp;?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-volt hover:underline"
          >
            Écrivez-nous sur WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
