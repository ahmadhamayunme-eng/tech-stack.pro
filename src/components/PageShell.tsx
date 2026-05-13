import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="site-background" aria-hidden="true" />
      {children}
    </main>
  );
}
