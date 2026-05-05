import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/signup")({
  head: () => ({ meta: [{ title: "Create account — Beena Collections" }] }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="eyebrow text-center">Join us</p>
      <h1 className="mt-3 font-serif text-4xl text-center">Create account</h1>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Demo only — connect backend to enable signup."); }}
        className="mt-10 space-y-5"
      >
        <label className="block">
          <span className="eyebrow">Full name</span>
          <input required className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input type="email" required className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
        </label>
        <label className="block">
          <span className="eyebrow">Password</span>
          <input type="password" required className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
        </label>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors">
          Create account
        </button>
      </form>

      <div className="my-8 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
      </div>

      <button className="w-full border border-border py-3 text-sm hover:border-primary transition-colors">
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
      </p>
      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        By signing up you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
