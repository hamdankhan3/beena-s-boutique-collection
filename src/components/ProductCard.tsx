import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPKR } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground capitalize">
            {product.category.replace(/-/g, " ")}
          </p>
        </div>
        <p className="text-sm font-medium text-foreground whitespace-nowrap">
          {formatPKR(product.price)}
        </p>
      </div>
    </Link>
  );
}
