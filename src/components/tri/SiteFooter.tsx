import { Link } from "@tanstack/react-router";
import { Camera, Code2, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

import { CONTACT_EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/tri";

const NAV = [
  { label: "Le projet", href: "#athlete" },
  { label: "Entreprises", href: "#entreprises" },
  { label: "Particuliers", href: "#particuliers" },
  { label: "Transparence", href: "#transparence" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#simulateur" },
];

export function SiteFooter() {
  return (
    <footer className="pb-28 sm:pb-10">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl">TRI DFR</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Association loi 1901
              <br />
              Projet sportif — Triathlon &amp; performance
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-volt" /> Val-d'Oise, France
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="eyebrow text-muted-foreground">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-volt"
            >
              <Mail className="h-4 w-4 shrink-0" /> <span className="truncate">{CONTACT_EMAIL}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-volt"
            >
              <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-volt"
            >
              <Linkedin className="h-4 w-4 shrink-0" /> LinkedIn
            </a>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="eyebrow text-muted-foreground">Crédits</p>
            <a
              href="https://www.instagram.com/ade.prod/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-volt"
            >
              <Camera className="h-4 w-4 shrink-0" /> Photos : ADEPROD (@ade.prod)
            </a>
            <a
              href="https://glmprime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-volt"
            >
              <Code2 className="h-4 w-4 shrink-0" /> Site réalisé par GLM
            </a>
            <Link to="/mecenat-entreprise" className="text-muted-foreground hover:text-volt">
              Mécénat entreprise
            </Link>
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-volt">
              Mentions légales
            </Link>
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-volt">
              {n.label}
            </a>
          ))}
        </nav>

        <p className="mt-6 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tri DFR — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
