import { ArrowRight, BookOpen, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomepageContent() {
  return (
    <main>
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
              <Server className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">HexBox</h3>
              <p className="text-muted-foreground">
                A local-first automation platform for makers, homelabs, and
                small businesses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="mb-4 h-8 w-8" />
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
              {/* <Github className="mb-4 h-8 w-8" /> */}
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
    </main>
  );
}