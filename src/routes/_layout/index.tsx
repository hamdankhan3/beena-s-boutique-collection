import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-woman.jpg";
import { categoryMeta, featuredCategories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Beena Collections — Stitched, Unstitched, Perfumes & More" },
      { name: "description", content: "Curated stitched & unstitched wear, nighty, perfumes and accessories for women and men. Order online or via our Daraz shop." },
      { property: "og:title", content: "Beena Collections" },
      { property: "og:description", content: "Curated wear, perfumes & accessories from Islamabad." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 8);
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <div className="flex items-center px-6 md:px-16 py-20 order-2 md:order-1">
            <div className="max-w-lg">
              <p className="eyebrow">SS · Collection</p>
              <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-foreground">
                Quiet luxury,<br />
                <span className="italic text-primary">crafted with care.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Stitched and unstitched wear, nighty, perfumes and accessories — thoughtfully curated for women and men.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Shop the collection <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.daraz.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3 text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  Visit Daraz shop
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-secondary">
            <img
              src={heroImg}
              alt="Editorial fashion shot of woman in emerald embroidered suit"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">Shop by category</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCategories.map((c) => (
            <Link
              key={c}
              to="/shop"
              search={{ category: c }}
              className="group relative overflow-hidden bg-secondary aspect-[4/5]"
            >
              <img
                src={categoryMeta[c].image}
                alt={categoryMeta[c].label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background">
                <h3 className="font-serif text-2xl">{categoryMeta[c].label}</h3>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12">
          <p className="eyebrow">Featured</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground">New arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* DARAZ BANNER */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-primary-foreground/70">Also available on</p>
            <h2 className="mt-3 font-serif text-4xl">Find us on Daraz</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md leading-relaxed">
              Prefer Daraz? You'll find our full catalogue there with cash on delivery and nationwide shipping.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="https://www.daraz.pk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-sm tracking-wide hover:bg-background/90 transition-colors"
            >
              Open Daraz shop <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
