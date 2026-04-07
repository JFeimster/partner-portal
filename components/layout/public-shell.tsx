import { ReactNode } from 'react';
import { Button } from '../ui/button';

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Moonshine Capital</h1>
          <Button href="/login">Login</Button>
        </header>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
