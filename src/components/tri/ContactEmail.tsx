import { useState, type ReactNode } from "react";
import { Mail, Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/tri";

interface ContactEmailProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "volt" | "line";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  className?: string;
  label?: string;
  children?: ReactNode;
}

export function ContactEmail({
  variant = "line",
  size = "xl",
  className,
  label = "Nous contacter",
  children,
}: ContactEmailProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className={className}>
      {!open ? (
        <Button variant={variant} size={size} className="w-full gap-2" onClick={() => setOpen(true)}>
          {children || (
            <>
              <Mail className="h-4 w-4" />
              {label}
            </>
          )}
        </Button>
      ) : (
        <div className="rounded-xl border border-border bg-surface-2/60 p-4 text-center">
          <p className="text-sm text-muted-foreground">Notre adresse email</p>
          <p className="mt-1 break-all font-display text-lg">{CONTACT_EMAIL}</p>
          <div className="mt-3 flex gap-2">
            <Button variant="line" size="sm" className="w-full gap-2" onClick={handleCopy}>
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copié
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copier
                </>
              )}
            </Button>
            <Button variant="line" size="sm" className="w-full" onClick={() => setOpen(false)}>
              Fermer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
