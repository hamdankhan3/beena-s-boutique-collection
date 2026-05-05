import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-woman.jpg";

export const Route = createFileRoute("/_layout/about")({
  head: () => ({
    meta: [
      { title: "About — Beena Collections" },
      { name: "description", content: "About Beena Collections — curated wear, perfumes and accessories from Islamabad." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="eyebrow">Our story</p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
        A quiet little label, <span className="italic text-primary">made with love in Islamabad.</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
        <img src={heroImg} alt="Beena Collections" className="aspect-[4/5] object-cover" />
        <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:pt-8">
          <p>
            Beena Collections began with a simple idea — beautiful, well-made everyday pieces that don't
            shout for attention. From stitched and unstitched suits to nighty, perfumes and accessories,
            every piece in our shop is hand-picked.
          </p>
          <p>
            We believe in honest pricing, careful packaging, and treating every customer like family.
            Order through our website or our trusted Daraz shop — whichever you prefer.
          </p>
          <p className="text-muted-foreground text-sm pt-4 border-t border-border">
            Beena · Islamabad, I-14/3 · 0314 0961432
          </p>
        </div>
      </div>
    </div>
  );
}
