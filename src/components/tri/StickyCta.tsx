import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0">
          <p className="truncate font-display text-sm">500 € donnés = 200 € de coût réel</p>
          <p className="truncate text-xs text-muted-foreground">Mécénat d'entreprise · sous conditions</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button asChild variant="line" size="sm">
            <a href="#simulateur">Calculer</a>
          </Button>
          <Button asChild variant="volt" size="sm">
            <Link to="/don" search={{ montant: 0 }}>
              Je soutiens
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
