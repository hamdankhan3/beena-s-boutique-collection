import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart, formatPKR } from "@/store/cart";
import { Minus, Plus, X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_layout/cart")({
  head: () => ({ meta: [{ title: "Your Cart — Beena Collections" }] }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const total = useCart((s) => s.items.reduce((n, i) => n + i.qty * i.product.price, 0));

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow">Cart</p>
        <h1 className="mt-4 font-serif text-5xl">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">Discover something to love.</p>
        <Link to="/shop" className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm">
          Browse the shop <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Cart</p>
      <h1 className="mt-3 font-serif text-5xl mb-12">Your bag</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-12">
        <ul className="divide-y divide-border border-y border-border">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="py-6 flex gap-5">
              <div className="w-24 h-32 bg-secondary overflow-hidden shrink-0">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg">{product.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize mt-1">
                      {product.category.replace(/-/g, " ")}
                    </p>
                  </div>
                  <p className="text-sm">{formatPKR(product.price * qty)}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center border border-border">
                    <button onClick={() => setQty(product.id, qty - 1)} className="px-3 py-2 hover:bg-secondary"><Minus className="h-3 w-3" /></button>
                    <span className="px-4 text-sm">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="px-3 py-2 hover:bg-secondary"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(product.id)} className="text-muted-foreground hover:text-destructive inline-flex items-center gap-1 text-xs">
                    <X className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="bg-secondary p-8 h-fit">
          <h2 className="font-serif text-2xl">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatPKR(total)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>Calculated at checkout</dd></div>
          </dl>
          <div className="mt-6 pt-6 border-t border-border flex justify-between text-base">
            <span>Total</span>
            <span className="font-medium">{formatPKR(total)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Proceed to checkout <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
