import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_layout/login")({
  head: () => ({ meta: [{ title: "Sign in — Beena Collections" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="eyebrow text-center">Welcome back</p>
      <h1 className="mt-3 font-serif text-4xl text-center">Sign in</h1>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Sign in to view orders and check out faster.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Demo only — connect backend to enable sign in."); }}
        className="mt-10 space-y-5"
      >
        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block">
          <div className="flex items-center justify-between">
            <span className="eyebrow">Password</span>
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors">
          Sign in
        </button>
      </form>

      <div className="my-8 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
      </div>

      <button className="w-full border border-border py-3 text-sm hover:border-primary transition-colors">
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        New here? <Link to="/signup" className="text-primary hover:underline">Create an account</Link>
      </p>
    </div>
  );
}
