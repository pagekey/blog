import { ArrowRight, BookOpen, Server, Code2, Mail, Video, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pageKeyLogo from './assets/logo_dark.svg';

export default function HomepageContent() {
  const currentYear = new Date().getFullYear();

  return (
    // Added bg-background and text-foreground to ensure the core theme colors are applied
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <img
              src={pageKeyLogo}
              alt="PageKey Logo"
              className="h-8 w-8 block object-contain"
            />
            <span className="leading-none" style={{ marginBottom: "0.2rem" }}>PageKey</span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/blog" className="transition-colors hover:text-primary">
              Blog
            </a>
            <a href="https://tryhexbox.com" className="transition-colors hover:text-primary">
              HexBox
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content wrapper to push footer down if needed */}
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Badge variant="secondary" className="mb-4">
            Building Understandable Technology
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Take Back Your Tech
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We build local-first software, hardware, and educational content that
            help people understand and control the systems they depend on.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="https://tryhexbox.com">
                Explore HexBox
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="/blog">Read the Blog</a>
            </Button>
          </div>
        </section>

        {/* What We Build */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">What We Build</h2>
            <p className="mt-3 text-muted-foreground">
              Products, education, and open-source tools for resilient computing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Server className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">HexBox</h3>
                <p className="text-muted-foreground">
                  A local-first automation platform for makers, homelabs, and
                  small businesses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BookOpen className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">
                  Educational Content
                </h3>
                <p className="text-muted-foreground">
                  Videos and guides covering Linux, self-hosting, automation,
                  networking, and open-source software.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Code2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Open Source</h3>
                <p className="text-muted-foreground">
                  Tools, experiments, and infrastructure projects built in public.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* HexBox Spotlight */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <Card>
            <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge className="mb-4">Flagship Project</Badge>

                <h2 className="text-3xl font-bold">Meet HexBox</h2>

                <p className="mt-4 max-w-2xl text-muted-foreground">
                  HexBox turns local-first infrastructure into something tangible.
                  Build automations, run services, and keep critical systems under
                  your control.
                </p>
              </div>

              <div>
                <Button size="lg" asChild>
                  <a href="https://tryhexbox.com">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Philosophy */}
        <section className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Why Local-First?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            We believe technology should remain understandable, inspectable, and
            operational even when cloud services fail. Local-first systems are
            easier to learn, easier to repair, and easier to trust.
          </p>
        </section>

        {/* Contact & Social Section */}
        <section className="border-t bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-3 text-muted-foreground">
              Follow along, review the code, or reach out directly.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="https://youtube.com/@PageKey"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
              >
                <Video className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-red-500" />
                <span className="mt-3 font-semibold">YouTube</span>
                <span className="mt-1 text-sm text-muted-foreground">Watch tutorials</span>
              </a>

              <a
                href="https://github.com/pagekey"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
              >
                <Code className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-blue-500" />
                <span className="mt-3 font-semibold">GitHub</span>
                <span className="mt-1 text-sm text-muted-foreground">Explore code repos</span>
              </a>

              <a
                href="mailto:hello@pagekey.io"
                className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
              >
                <Mail className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-green-500" />
                <span className="mt-3 font-semibold">Email</span>
                <span className="mt-1 text-sm text-muted-foreground">Send a message</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6 text-sm text-muted-foreground">
          <p>© {currentYear} PageKey Solutions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
