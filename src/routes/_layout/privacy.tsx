import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/_layout/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Beena Collections" }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="May 5, 2026">
      <p>Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have.</p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you provide: name, phone, email, delivery address.</li>
        <li>Order details: products purchased, payment method, order notes.</li>
        <li>Technical data: IP address, browser type, pages visited (via cookies).</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To process and deliver your orders.</li>
        <li>To contact you about an order or respond to enquiries.</li>
        <li>To improve our website, products, and customer service.</li>
        <li>To send promotional updates — only if you opt in.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>We never sell your data. We share only with trusted partners who help us operate (delivery couriers, payment processors). All partners are bound to handle your data securely.</p>

      <h2>Cookies</h2>
      <p>We use minimal cookies for cart functionality, login sessions, and basic analytics. You can disable cookies in your browser, though some features may not work as expected.</p>

      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by writing to us.</p>

      <h2>Security</h2>
      <p>We use industry-standard practices to protect your information. No system is perfectly secure, but we work hard to keep your data safe.</p>

      <h2>Contact</h2>
      <p>Privacy questions? Call 0314 0961432 or visit our <a href="/contact" className="text-primary underline">Contact page</a>.</p>
    </LegalLayout>
  ),
});
