import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCart, formatPKR } from "@/store/cart";
import { useState } from "react";
import { z } from "zod";
import { Check } from "lucide-react";

export const Route = createFileRoute("/_layout/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Beena Collections" }] }),
  component: CheckoutPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  address: z.string().trim().min(8, "Please enter your full address").max(300),
  city: z.string().trim().min(2).max(80),
  notes: z.string().max(400).optional(),
  payment: z.enum(["cod", "bank"]),
});

function CheckoutPage() {
  const navigate = useNavigate();
  const items = useCart((s) => s.items);
  const total = useCart((s) => s.items.reduce((n, i) => n + i.qty * i.product.price, 0));
  const clear = useCart((s) => s.clear);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (items.length === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Your cart is empty</h1>
        <Link to="/shop" className="mt-6 inline-block text-primary">← Back to shop</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <p className="eyebrow mt-8">Order confirmed</p>
        <h1 className="mt-3 font-serif text-5xl">Thank you, {orderId && <span className="italic">we've got it.</span>}</h1>
        <p className="mt-6 text-muted-foreground">
          Your order <span className="text-foreground">#{orderId}</span> has been received.
          We'll call you shortly on the number you provided to confirm.
        </p>
        <Link to="/shop" className="mt-10 inline-block bg-primary text-primary-foreground px-7 py-3 text-sm">
          Continue shopping
        </Link>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const id = "BC" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setSubmitted(true);
    clear();
    setTimeout(() => navigate({ to: "/" }), 8000);
  };

  const field = (label: string, name: string, type = "text", required = true) => (
    <label className="block">
      <span className="text-xs eyebrow">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Checkout</p>
      <h1 className="mt-3 font-serif text-5xl mb-12">Almost there</h1>

      <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_400px] gap-12">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl">Delivery details</h2>
          {field("Full name", "name")}
          <div className="grid sm:grid-cols-2 gap-6">
            {field("Phone", "phone", "tel")}
            {field("Email (optional)", "email", "email", false)}
          </div>
          {field("Street address", "address")}
          {field("City", "city")}
          <label className="block">
            <span className="text-xs eyebrow">Order notes (optional)</span>
            <textarea
              name="notes"
              rows={3}
              className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
            />
          </label>

          <h2 className="font-serif text-2xl mt-10">Payment</h2>
          <div className="space-y-3">
            <label className="flex items-start gap-3 border border-border p-4 cursor-pointer hover:border-primary">
              <input type="radio" name="payment" value="cod" defaultChecked className="mt-1 accent-primary" />
              <span>
                <span className="block text-sm font-medium">Cash on Delivery</span>
                <span className="block text-xs text-muted-foreground mt-1">Pay when your order arrives.</span>
              </span>
            </label>
            <label className="flex items-start gap-3 border border-border p-4 cursor-pointer hover:border-primary">
              <input type="radio" name="payment" value="bank" className="mt-1 accent-primary" />
              <span>
                <span className="block text-sm font-medium">Bank transfer</span>
                <span className="block text-xs text-muted-foreground mt-1">We'll share account details after order placement.</span>
              </span>
            </label>
          </div>
        </div>

        <aside className="bg-secondary p-8 h-fit lg:sticky lg:top-24">
          <h2 className="font-serif text-2xl mb-6">Your order</h2>
          <ul className="space-y-4 text-sm">
            {items.map(({ product, qty }) => (
              <li key={product.id} className="flex justify-between gap-4">
                <span className="flex-1">{product.name} <span className="text-muted-foreground">× {qty}</span></span>
                <span>{formatPKR(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border flex justify-between">
            <span>Total</span>
            <span className="font-medium">{formatPKR(total)}</span>
          </div>
          <button type="submit" className="mt-6 w-full bg-primary text-primary-foreground py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors">
            Place order
          </button>
          <p className="mt-3 text-[11px] text-muted-foreground text-center leading-relaxed">
            By placing your order you agree to be contacted at the phone number provided.
          </p>
        </aside>
      </form>
    </div>
  );
}
