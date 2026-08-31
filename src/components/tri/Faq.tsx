import { Button } from "@/components/ui/button";
import { ContactEmail } from "@/components/tri/ContactEmail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Quel est l'intérêt pour mon entreprise ?",
    a: "Plusieurs avantages : un impact RSE concret autour du sport et de la performance, une image de marque renforcée auprès de vos clients et collaborateurs, l'intégration dans un réseau de partenaires engagés, et une déduction fiscale de 60 % du don dans le cadre du mécénat d'entreprise (sous conditions). C'est un moyen de donner du sens à votre budget tout en soutenant un athlète local.",
  },
  {
    q: "Combien me coûte réellement un don de 1 000 € ?",
    a: "Dans le cas général du mécénat d'entreprise, un don de 1 000 € peut ouvrir droit à 600 € de réduction d'impôt, soit 400 € de coût après réduction, sous réserve de remplir les conditions applicables.",
  },
  {
    q: "Où va mon argent ?",
    a: "Chaque don finance directement le projet sportif. Concrètement, un dossard de semi-marathon coûte une centaine d'euros, un triathlon L environ 250 €, et les épreuves les plus prestigieuses peuvent monter jusqu'à 600 €. S'ajoutent plusieurs paires de chaussures sur la saison, l'abonnement natation, l'entretien du vélo, la nutrition, et la rémunération du coach. Vos dons couvrent donc des dépenses réelles et suivies.",
  },
  {
    q: "Puis-je faire un don en tant qu'indépendant ?",
    a: "Cela dépend de votre statut et de votre régime fiscal. En cas de doute, nous vous recommandons de consulter votre expert-comptable ou votre conseil fiscal.",
  },
  {
    q: "Puis-je faire un don à titre personnel ?",
    a: "Oui, tout à fait. Les particuliers peuvent soutenir le projet par un don. Dans ce cas, la réduction d'impôt s'élève à 66 % du montant versé, dans la limite de 20 % du revenu imposable.",
  },
  {
    q: "Mon entreprise peut-elle être visible sur le projet ?",
    a: "Oui, tout à fait. Il est tout à fait possible d'inscrire le nom de votre entreprise en tant que sponsor du projet, et nous pouvons également vous fournir des supports de communication à partager sur vos réseaux et en interne dans votre entreprise.",
  },
  {
    q: "Comment recevoir mon reçu fiscal ?",
    a: "Un justificatif fiscal est délivré pour les dons éligibles. Il vous est envoyé sous 48h à l'adresse email indiquée lors de votre don.",
  },
  {
    q: "Puis-je faire un don par virement ou par chèque ?",
    a: "Oui. Tri DFR propose plusieurs moyens de soutenir le projet afin de rendre le don simple et accessible.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow text-volt">Questions fréquentes</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Tout ce qu'il faut savoir avant de soutenir.</h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="surface-card mt-10 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Une autre question&nbsp;? Sinon, vous pouvez estimer votre don en quelques secondes.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button asChild variant="volt" size="lg">
              <a href="#simulateur">Calculer mon don</a>
            </Button>
            <ContactEmail variant="line" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
