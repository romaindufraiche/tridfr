import { createFileRoute, Link } from "@tanstack/react-router";

import { CONTACT_EMAIL } from "@/lib/tri";

const TITLE = "Mentions légales — Tri DFR";
const DESCRIPTION =
  "Mentions légales du site Tri DFR : éditeur, hébergement, propriété intellectuelle, données personnelles, cookies et reçus fiscaux CERFA.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: LegalPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 grid gap-3 text-sm text-muted-foreground">{children}</div>
    </section>
  );
}

function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Link to="/" className="text-sm text-volt hover:underline">
          ← Retour à l'accueil
        </Link>
        <h1 className="mt-6 text-3xl sm:text-4xl">Mentions légales</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>

        <Section title="Éditeur du site">
          <p>
            Tri DFR — association régie par la loi du 1<sup>er</sup> juillet 1901, déclarée en
            préfecture, dont l'objet est le développement de la pratique du sport et notamment du
            triathlon.
          </p>
          <p>Siège : 95110 Sannois, France.</p>
          <p>
            Contact :{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-volt hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>Directeur de la publication : le président de l'association Tri DFR.</p>
        </Section>

        <Section title="Conception et réalisation">
          <p>
            Site conçu et réalisé par{" "}
            <a
              href="https://glmprime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-volt hover:underline"
            >
              GLM
            </a>
            .
          </p>
          <p>Crédits photos : ADEPROD (@ade.prod).</p>
        </Section>

        <Section title="Hébergement">
          <p>
            Le site est hébergé par Lovable (Lovable Labs Incorporated) — https://lovable.dev. Les
            contenus sont diffusés via un réseau de distribution mondial.
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble des contenus présents sur ce site (textes, photographies, vidéos, logos,
            éléments graphiques et code) est protégé par le droit d'auteur. Toute reproduction,
            représentation ou réutilisation, totale ou partielle, sans autorisation écrite
            préalable est interdite.
          </p>
        </Section>

        <Section title="Dons et reçus fiscaux">
          <p>
            Les dons versés à l'association ouvrent droit à une réduction d'impôt de 66 % du montant
            versé pour les particuliers (art. 200 du CGI), dans la limite de 20 % du revenu
            imposable, et de 60 % pour les entreprises (art. 238 bis du CGI), dans les limites
            légales en vigueur.
          </p>
          <p>
            Un reçu fiscal CERFA n°11580*05 est adressé par email pour chaque don. Les fonds
            collectés sont exclusivement affectés à l'objet associatif : développement de la
            pratique sportive et financement du projet sportif présenté sur ce site.
          </p>
          <p>
            Les paiements en ligne sont traités par le prestataire de paiement, qui est seul
            destinataire des données bancaires. L'association ne collecte ni ne conserve aucune
            donnée de carte bancaire.
          </p>
        </Section>

        <Section title="Données personnelles (RGPD)">
          <p>
            Les données transmises volontairement (nom, email, téléphone, entreprise, montant du
            don) sont utilisées uniquement pour traiter le don, émettre le reçu fiscal et répondre
            aux demandes de contact. Elles ne sont ni vendues ni cédées à des tiers à des fins
            commerciales.
          </p>
          <p>
            Les données comptables liées aux dons sont conservées pendant la durée légale
            applicable ; les autres données sont conservées au maximum 3 ans après le dernier
            contact.
          </p>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit
            d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité.
            Pour l'exercer :{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-volt hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Ce site ne dépose aucun cookie publicitaire ni traceur de mesure d'audience. Seuls des
            cookies strictement nécessaires au fonctionnement du site peuvent être utilisés ; ils ne
            requièrent pas de consentement préalable.
          </p>
        </Section>

        <Section title="Responsabilité">
          <p>
            L'association s'efforce d'assurer l'exactitude des informations publiées mais ne peut
            garantir l'absence d'erreurs. Les liens vers des sites tiers sont fournis à titre
            informatif ; l'association n'est pas responsable de leur contenu.
          </p>
        </Section>
      </div>
    </main>
  );
}
