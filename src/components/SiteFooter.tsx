import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-foreground">Beena Collections</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Curated stitched & unstitched wear, nighty, perfumes and accessories — for women and men.
            Crafted with care in Islamabad.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-primary">All products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/account" className="hover:text-primary">My account</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Help</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-primary">Returns &amp; exchanges</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Islamabad, I-14/3</li>
            <li><a href="tel:+923140961432" className="hover:text-primary">0314 0961432</a></li>
            <li>
              <a
                href="https://www.daraz.pk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Visit our Daraz shop →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Beena Collections. All rights reserved.
      </div>
    </footer>
  );
}
