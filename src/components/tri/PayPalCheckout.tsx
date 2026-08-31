import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PAYPAL_CLIENT_ID, euro } from "@/lib/tri";

declare global {
  interface Window {
    paypal?: any;
  }
}

let sdkPromise: Promise<void> | null = null;

function loadPayPalSdk() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.paypal) return Promise.resolve();
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR&intent=capture&locale=fr_FR&components=buttons`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error("paypal-sdk"));
    };
    document.head.appendChild(script);
  });

  return sdkPromise;
}

interface PayPalCheckoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
}

export function PayPalCheckout({ open, onOpenChange, amount }: PayPalCheckoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const amountRef = useRef(amount);
  const [status, setStatus] = useState<"loading" | "ready" | "error" | "done">("loading");

  amountRef.current = amount;

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setStatus("loading");

    loadPayPalSdk()
      .then(() => {
        if (cancelled || !containerRef.current || !window.paypal) return;
        containerRef.current.innerHTML = "";
        window.paypal
          .Buttons({
            style: { layout: "vertical", color: "gold", shape: "pill", label: "paypal" },
            createOrder: (_data: unknown, actions: any) =>
              actions.order.create({
                purchase_units: [
                  {
                    description: "Don — Tri DFR",
                    amount: {
                      currency_code: "EUR",
                      value: String(Math.max(1, Math.round(amountRef.current))),
                    },
                  },
                ],
              }),
            onApprove: async (_data: unknown, actions: any) => {
              await actions.order.capture();
              if (!cancelled) setStatus("done");
            },
            onError: () => {
              if (!cancelled) setStatus("error");
            },
          })
          .render(containerRef.current);
        if (!cancelled) setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {status === "done" ? "Merci pour votre soutien !" : `Don de ${euro(amount)}`}
          </DialogTitle>
          <DialogDescription>
            {status === "done"
              ? "Votre paiement a bien été reçu. Un reçu fiscal vous sera transmis sous 48h à l'adresse email renseignée lors du paiement."
              : "Paiement sécurisé par carte bancaire ou compte PayPal, sans quitter le site. Le reçu fiscal sera envoyé sous 48h à l'adresse email renseignée."}
          </DialogDescription>
        </DialogHeader>

        {status !== "done" && (
          <div className="min-h-32">
            {status === "loading" && (
              <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Chargement du paiement…
              </div>
            )}
            {status === "error" && (
              <p className="py-4 text-sm text-muted-foreground">
                Le module de paiement n'a pas pu se charger. Réessayez ou demandez-nous le RIB pour
                un virement.
              </p>
            )}
            <div ref={containerRef} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
