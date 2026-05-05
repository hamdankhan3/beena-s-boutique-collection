import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/_layout/returns")({
  head: () => ({ meta: [{ title: "Return & Exchange Policy — Beena Collections" }] }),
  component: () => (
    <LegalLayout eyebrow="Help" title="Return & Exchange Policy" updated="May 5, 2026">
      <p>We want you to love what you buy. If something isn't right, here's how returns and exchanges work.</p>

      <h2>Eligibility</h2>
      <ul>
        <li>Returns must be requested within <strong>7 days</strong> of delivery.</li>
        <li>Items must be unused, unwashed, and in original packaging with all tags attached.</li>
        <li>You will need your order number and proof of purchase.</li>
      </ul>

      <h2>Non-returnable items</h2>
      <ul>
        <li>Stitched and made-to-order items.</li>
        <li>Innerwear, undergarments, and intimate apparel (for hygiene reasons).</li>
        <li>Perfumes, once opened or unsealed.</li>
        <li>Items marked "Final Sale".</li>
      </ul>

      <h2>How to request a return</h2>
      <ol className="list-decimal pl-5 space-y-2 text-[15px]">
        <li>Call us at <strong>0314 0961432</strong> or message us within 7 days of delivery.</li>
        <li>Share your order number, the item to return, and the reason.</li>
        <li>We'll confirm and arrange pickup or share the return address.</li>
      </ol>

      <h2>Refunds</h2>
      <p>Once we receive and inspect the item, refunds are processed within 5–7 working days. Cash on Delivery refunds are issued by bank transfer or store credit.</p>

      <h2>Exchanges</h2>
      <p>Exchanges (size or colour) follow the same eligibility rules. Subject to stock availability.</p>

      <h2>Damaged or wrong items</h2>
      <p>If your order arrives damaged or incorrect, contact us within <strong>48 hours</strong> with photos. We'll replace it or refund in full at no cost to you.</p>
    </LegalLayout>
  ),
});
