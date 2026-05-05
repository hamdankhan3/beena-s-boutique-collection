import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/_layout/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Beena Collections" },
      { name: "description", content: "Get in touch with Beena Collections. Call us or visit our Daraz shop." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="eyebrow">Get in touch</p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl">We'd love to hear from you.</h1>
      <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
        Questions about an order, a product, or wholesale? Reach out — we usually reply the same day.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <a href="tel:+923140961432" className="group p-8 border border-border hover:border-primary transition-colors">
          <Phone className="h-6 w-6 text-primary" />
          <p className="eyebrow mt-6">Call</p>
          <p className="mt-2 font-serif text-2xl group-hover:text-primary transition-colors">0314 0961432</p>
        </a>
        <div className="p-8 border border-border">
          <MapPin className="h-6 w-6 text-primary" />
          <p className="eyebrow mt-6">Visit</p>
          <p className="mt-2 font-serif text-2xl">Islamabad, I-14/3</p>
        </div>
        <a
          href="https://www.daraz.pk"
          target="_blank"
          rel="noreferrer"
          className="group p-8 border border-border hover:border-primary transition-colors"
        >
          <ShoppingBag className="h-6 w-6 text-primary" />
          <p className="eyebrow mt-6">Shop on Daraz</p>
          <p className="mt-2 font-serif text-2xl group-hover:text-primary transition-colors">Visit store →</p>
        </a>
      </div>
    </div>
  );
}
