import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — Beena Collections" }] }),
  component: ForgotPage,
});

function ForgotPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="eyebrow text-center">Forgot password</p>
      <h1 className="mt-3 font-serif text-4xl text-center">Reset your password</h1>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Enter your email and we'll send you a reset link.
      </p>
      <form
        onSubmit={(e) => { e.preventDefault(); alert("Demo only."); }}
        className="mt-10 space-y-5"
      >
        <label className="block">
          <span className="eyebrow">Email</span>
          <input type="email" required className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
        </label>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors">
          Send reset link
        </button>
      </form>
      <p className="mt-8 text-center text-sm">
        <Link to="/login" className="text-primary hover:underline">← Back to sign in</Link>
      </p>
    </div>
  );
}
