import type { ReactNode } from "react";

export function LegalLayout({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl text-foreground leading-tight">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
      <div className="mt-12 space-y-8 text-foreground/85 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-[15px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-[15px]">
        {children}
      </div>
    </div>
  );
}
