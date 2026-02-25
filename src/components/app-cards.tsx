"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileScan, GlassWater, HeartPulse, MoveRight } from 'lucide-react';

const apps = [
  {
    icon: <FileScan className="h-10 w-10 text-healthsense" />,
    title: "HealthSense AI",
    description: "Understand medical bills and documents with professional-grade AI.",
    feature: "Analyze JPG, PNG, & PDF",
    cta: "Visit HealthSense AI",
    href: "https://health-sense-ai-three.vercel.app",
    accentClass: "healthsense",
  },
  {
    icon: <GlassWater className="h-10 w-10 text-hydraweight" />,
    title: "HydraWeight",
    description: "Your personal dashboard for daily hydration and weight management.",
    feature: "Track daily intake",
    cta: "Go to HydraWeight",
    href: "https://hydraweight.vercel.app",
    accentClass: "hydraweight",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-bloodlink" />,
    title: "BloodLink Kerala",
    description: "Find blood donors and blood banks across Kerala instantly.",
    feature: "20+ Donors Available Now",
    cta: "Find Donors",
    href: "https://bloodlink-gamma.vercel.app",
    accentClass: "bloodlink",
  },
];

export function AppCards() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container grid items-stretch justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
        {apps.map((app, index) => (
          <Link key={app.title} href={app.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <Card
              className={`w-full h-full flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center text-center p-6 pb-2">
                {app.icon}
                <CardTitle className="mt-4 text-2xl font-semibold">{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center justify-start text-center p-6 pt-2 space-y-4">
                <CardDescription>{app.description}</CardDescription>
                <Badge variant="secondary" className="font-mono text-xs tracking-wider">{app.feature}</Badge>
              </CardContent>
              <CardFooter className="justify-center p-6 pt-0">
                <Button variant="outline" className={`transition-all duration-300 border-2 bg-transparent text-foreground/80 border-${app.accentClass} group-hover:bg-${app.accentClass} group-hover:text-white group-hover:shadow-lg group-hover:shadow-${app.accentClass}/30`}>
                  {app.cta} <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
