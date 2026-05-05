import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/_layout/faq")({
  head: () => ({ meta: [{ title: "FAQ — Beena Collections" }] }),
  component: FAQPage,
});

const faqs = [
  { q: "How do I place an order?", a: "Browse the shop, add items to your cart, and proceed to checkout. You can pay by Cash on Delivery or Bank Transfer." },
  { q: "Do you offer Cash on Delivery?", a: "Yes — COD is available across Pakistan." },
  { q: "How long does delivery take?", a: "1–2 days in Islamabad/Rawalpindi, 2–4 days in other major cities. See our Shipping Policy for details." },
  { q: "Can I return or exchange an item?", a: "Yes, within 7 days of delivery for unused items. See our Return Policy for full details and exclusions." },
  { q: "Is my payment information secure?", a: "Absolutely. We use secure payment partners and never store card details on our servers." },
  { q: "Can I order through Daraz instead?", a: "Yes! You'll find our full catalogue on Daraz. Look for the 'Buy on Daraz' link on any product page." },
  { q: "Do you ship internationally?", a: "Currently we ship within Pakistan only. Contact us directly for international enquiries." },
  { q: "How do I track my order?", a: "Once shipped, you'll receive a tracking number by SMS or call." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="eyebrow">Help center</p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl">Frequently asked questions</h1>
      <p className="mt-4 text-muted-foreground">Can't find what you're looking for? <a href="/contact" className="text-primary underline">Get in touch</a>.</p>

      <ul className="mt-12 border-t border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full py-6 flex items-center justify-between gap-6 text-left hover:text-primary transition-colors"
              >
                <span className="font-serif text-lg md:text-xl">{f.q}</span>
                {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
              </button>
              {isOpen && <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
