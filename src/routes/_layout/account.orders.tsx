import { createFileRoute, Link } from "@tanstack/react-router";
import { formatPKR } from "@/store/cart";

export const Route = createFileRoute("/_layout/account/orders")({
  head: () => ({ meta: [{ title: "My Orders — Beena Collections" }] }),
  component: OrdersPage,
});

const demoOrders = [
  { id: "BC8K2L9P", date: "Apr 28, 2026", status: "Delivered", total: 8900, items: 2 },
  { id: "BC2H7N3M", date: "Apr 12, 2026", status: "Shipped", total: 3500, items: 1 },
  { id: "BC9F4Q1X", date: "Mar 30, 2026", status: "Processing", total: 12300, items: 4 },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-primary/10 text-primary",
  Shipped: "bg-accent text-accent-foreground",
  Processing: "bg-secondary text-secondary-foreground",
};

function OrdersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link to="/account" className="text-xs eyebrow hover:text-primary">← Account</Link>
      <h1 className="mt-6 font-serif text-5xl mb-12">Your orders</h1>

      <div className="border-y border-border divide-y divide-border">
        {demoOrders.map((o) => (
          <div key={o.id} className="py-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            <div>
              <p className="eyebrow">Order</p>
              <p className="mt-1 font-mono text-sm">#{o.id}</p>
            </div>
            <div>
              <p className="eyebrow">Date</p>
              <p className="mt-1 text-sm">{o.date}</p>
            </div>
            <div>
              <p className="eyebrow">Items</p>
              <p className="mt-1 text-sm">{o.items}</p>
            </div>
            <div>
              <p className="eyebrow">Total</p>
              <p className="mt-1 text-sm">{formatPKR(o.total)}</p>
            </div>
            <div className="md:text-right">
              <span className={`inline-block px-3 py-1 text-xs ${statusColor[o.status]}`}>{o.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
