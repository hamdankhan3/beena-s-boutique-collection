import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, MapPin, Heart, Settings, LogOut, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_layout/account")({
  head: () => ({ meta: [{ title: "My Account — Beena Collections" }] }),
  component: AccountPage,
});

const sections = [
  { icon: Package, title: "Orders", desc: "Track and manage your orders", to: "/account/orders" as const },
  { icon: MapPin, title: "Addresses", desc: "Saved delivery addresses", to: "/account" as const },
  { icon: Heart, title: "Wishlist", desc: "Pieces you saved for later", to: "/account" as const },
  { icon: Settings, title: "Profile", desc: "Personal details & password", to: "/account" as const },
];

function AccountPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="eyebrow">My account</p>
          <h1 className="mt-3 font-serif text-5xl">Hello, Beena</h1>
        </div>
        <button className="text-sm text-muted-foreground hover:text-destructive inline-flex items-center gap-2">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Link
            key={s.title}
            to={s.to}
            className="group flex items-center gap-5 border border-border p-6 hover:border-primary transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
