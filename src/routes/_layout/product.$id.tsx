import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products, categoryMeta } from "@/data/products";
import { useCart, formatPKR } from "@/store/cart";
import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/_layout/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Beena Collections` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-block text-primary">← Back to shop</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <Link to="/shop" className="text-xs eyebrow hover:text-primary">← Shop</Link>
      <div className="mt-6 grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="bg-secondary aspect-[4/5] overflow-hidden">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="md:py-8">
          <p className="eyebrow">{categoryMeta[product.category as keyof typeof categoryMeta].label}</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-foreground leading-tight">{product.name}</h1>
          <p className="mt-6 text-2xl text-foreground">{formatPKR(product.price)}</p>
          <p className="mt-8 leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={onAdd}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
            </button>
            <a
              href="https://www.daraz.pk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Buy on Daraz
            </a>
          </div>

          <dl className="mt-12 border-t border-border pt-8 grid grid-cols-2 gap-y-4 text-sm">
            <dt className="text-muted-foreground">Shipping</dt><dd>Pakistan-wide, 2–4 days</dd>
            <dt className="text-muted-foreground">Payment</dt><dd>Cash on delivery available</dd>
            <dt className="text-muted-foreground">Returns</dt><dd>7-day exchange policy</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
