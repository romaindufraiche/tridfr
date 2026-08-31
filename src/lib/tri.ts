export const DONATION_URL = "https://www.paypal.com/ncp/payment/9LAKXT7CCFZGG";

export const PAYPAL_CLIENT_ID =
  "BAArEhrFG7tc91_AQQC4piXzozIWEviT76EcwLfdlF4RgbgWmoi4wqQAeMpXTfNi3LI_qmrslcgOjtUg40";

export const CONTACT_EMAIL = "romain.dufraiche@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/romain-dufraiche/";
export const GOAL_AMOUNT = 5000;
export const RAISED_AMOUNT = 1450;

export const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

export const WHATSAPP_NUMBER = "0651280191";
export const WHATSAPP_URL =
  "https://wa.me/33651280191?text=" +
  encodeURIComponent("Bonjour, je souhaite en savoir plus sur le mécénat Tri DFR.");
