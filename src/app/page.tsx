import { AppCards } from '@/components/app-cards';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col hero-gradient">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                  Three Tools for a Healthier Life
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Intelligent document analysis, smart hydration tracking, and instant blood donation connections – all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AppCards />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-transparent">
        <p className="text-xs text-muted-foreground">&copy; 2026 HealthVerse Portal. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
