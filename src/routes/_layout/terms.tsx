import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/_layout/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Beena Collections" }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="May 5, 2026">
      <p>Welcome to Beena Collections. By accessing or using our website, you agree to be bound by these Terms & Conditions. Please read them carefully.</p>

      <h2>1. Use of the website</h2>
      <p>You may browse, place orders, and create an account. You agree to provide accurate information and not to misuse the site (no fraudulent orders, scraping, or interference with services).</p>

      <h2>2. Orders & acceptance</h2>
      <p>An order is an offer to buy. We reserve the right to accept or decline any order — for example if a product is out of stock, mispriced, or we suspect fraud. Confirmation of an order does not guarantee acceptance.</p>

      <h2>3. Pricing & payment</h2>
      <p>All prices are in Pakistani Rupees (PKR) and include applicable taxes unless stated otherwise. We accept Cash on Delivery and Bank Transfer. Online card payments may be added in the future.</p>

      <h2>4. Shipping</h2>
      <p>See our <a href="/shipping" className="text-primary underline">Shipping Policy</a> for delivery times and charges across Pakistan.</p>

      <h2>5. Returns</h2>
      <p>See our <a href="/returns" className="text-primary underline">Return Policy</a>. Made-to-order, stitched, and intimate items are non-returnable.</p>

      <h2>6. Intellectual property</h2>
      <p>All content on this site — text, images, logos — is owned by Beena Collections and may not be copied, reproduced, or used commercially without permission.</p>

      <h2>7. Limitation of liability</h2>
      <p>Beena Collections is not liable for indirect or consequential losses arising from use of the site or our products. Our maximum liability is limited to the value of the order in question.</p>

      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of the Islamic Republic of Pakistan. Disputes shall be resolved in the courts of Islamabad.</p>

      <h2>9. Contact</h2>
      <p>Questions about these terms? Reach us at 0314 0961432 or visit our <a href="/contact" className="text-primary underline">Contact page</a>.</p>
    </LegalLayout>
  ),
});
