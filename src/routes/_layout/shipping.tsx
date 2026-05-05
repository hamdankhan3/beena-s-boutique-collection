import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/_layout/shipping")({
  head: () => ({ meta: [{ title: "Shipping Policy — Beena Collections" }] }),
  component: () => (
    <LegalLayout eyebrow="Help" title="Shipping Policy" updated="May 5, 2026">
      <p>We ship across Pakistan with trusted couriers. Here's what to expect.</p>

      <h2>Delivery time</h2>
      <ul>
        <li>Islamabad &amp; Rawalpindi: 1–2 working days</li>
        <li>Other major cities: 2–4 working days</li>
        <li>Remote areas: 4–7 working days</li>
      </ul>

      <h2>Shipping charges</h2>
      <ul>
        <li>Flat rate of <strong>PKR 200</strong> across Pakistan.</li>
        <li>Free shipping on orders over <strong>PKR 5,000</strong>.</li>
      </ul>

      <h2>Order processing</h2>
      <p>Orders placed before 2 PM are processed the same working day. Orders placed on Sundays or public holidays are processed the next working day.</p>

      <h2>Tracking</h2>
      <p>Once your order is shipped, you'll receive a tracking number by SMS or call.</p>

      <h2>International shipping</h2>
      <p>We currently ship within Pakistan only. For international enquiries, please contact us directly.</p>
    </LegalLayout>
  ),
});
