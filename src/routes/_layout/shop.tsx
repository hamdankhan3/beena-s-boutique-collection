import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { categoryMeta, products, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const searchSchema = z.object({
  category: z
    .enum([
      "women-stitched",
      "women-unstitched",
      "nighty",
      "men-stitched",
      "men-unstitched",
      "perfumes",
      "women-accessories",
      "women-undergarments",
      "men-undergarments",
    ])
    .optional(),
});

export const Route = createFileRoute("/_layout/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop — Beena Collections" },
      { name: "description", content: "Browse the full Beena Collections catalogue: stitched, unstitched, nighty, perfumes, accessories." },
    ],
  }),
  component: ShopPage,
});

const allCats = Object.keys(categoryMeta) as Category[];

function ShopPage() {
  const search = Route.useSearch();
  const category = search.category as Category | undefined;
  const filtered = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground">
          {category ? categoryMeta[category].label : "All products"}
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
        <Link
          to="/shop"
          search={{}}
          className={`px-4 py-1.5 text-xs tracking-wide border transition-colors ${
            !category ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
          }`}
        >
          All
        </Link>
        {allCats.map((c) => (
          <Link
            key={c}
            to="/shop"
            search={{ category: c }}
            className={`px-4 py-1.5 text-xs tracking-wide border transition-colors ${
              category === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
            }`}
          >
            {categoryMeta[c].label}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-20 text-center">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
