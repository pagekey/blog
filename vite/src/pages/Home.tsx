import { ArrowRight, BookOpen, Server, Code2, Mail, Video, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function HomePage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Subtle Background Glow effect */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-5xl px-6 py-28 text-center">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1 text-sm font-medium tracking-wide"
                    >
                        Building Understandable Technology
                    </Badge>

                    <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                        Take Back <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Your Tech</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                        We build local-first software, hardware, and educational content that
                        help people understand and control the systems they depend on.
                    </p>

                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white transition-colors" asChild>
                            <a href="https://tryhexbox.com" target="_blank" rel="noreferrer">
                                Explore HexBox
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="hover:bg-muted transition-colors" asChild>
                            <a href="/blog" target="_blank" rel="noreferrer">Read the Blog</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">What We Build</h2>
                    <p className="mt-3 text-muted-foreground">
                        Products, education, and open-source tools for resilient computing.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="transition-all hover:border-orange-500/30 hover:shadow-sm">
                        <CardContent className="p-6">
                            <Server className="mb-4 h-8 w-8 text-orange-500" />
                            <h3 className="mb-2 text-xl font-semibold">HexBox</h3>
                            <p className="text-muted-foreground">
                                A local-first automation platform for makers, homelabs, and
                                small businesses.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="transition-all hover:border-orange-500/30 hover:shadow-sm">
                        <CardContent className="p-6">
                            <BookOpen className="mb-4 h-8 w-8 text-orange-500" />
                            <h3 className="mb-2 text-xl font-semibold">Educational Content</h3>
                            <p className="text-muted-foreground">
                                Videos and guides covering Linux, self-hosting, automation,
                                networking, and open-source software.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="transition-all hover:border-orange-500/30 hover:shadow-sm">
                        <CardContent className="p-6">
                            <Code2 className="mb-4 h-8 w-8 text-orange-500" />
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
                <Card className="overflow-hidden border-orange-500/20 bg-gradient-to-br from-card to-orange-500/[0.02]">
                    <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <Badge className="mb-4 bg-orange-600 hover:bg-orange-600 text-white">Flagship Project</Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Meet HexBox</h2>
                            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                                HexBox turns local-first infrastructure into something tangible.
                                Build automations, run services, and keep critical systems under
                                your control.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white transition-colors" asChild>
                                <a href="https://tryhexbox.com" target="_blank" rel="noreferrer">
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
                <h2 className="text-3xl font-bold tracking-tight">Why Local-First?</h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                    We believe technology should remain understandable, inspectable, and
                    operational even when cloud services fail. Local-first systems are
                    easier to learn, easier to repair, and easier to trust.
                </p>
            </section>

            {/* Contact & Social Section */}
            <section className="border-t bg-muted/30">
                <div className="mx-auto max-w-4xl px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                    <p className="mt-3 text-muted-foreground">
                        Follow along, review the code, or reach out directly.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <a
                            href="https://youtube.com/@PageKey"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-red-500/50 hover:shadow-sm"
                        >
                            <Video className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-red-500" />
                            <span className="mt-3 font-semibold group-hover:text-red-500 transition-colors">YouTube</span>
                            <span className="mt-1 text-sm text-muted-foreground">Watch tutorials</span>
                        </a>

                        <a
                            href="https://github.com/pagekey"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-orange-500/50 hover:shadow-sm"
                        >
                            <Code className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-orange-500" />
                            <span className="mt-3 font-semibold group-hover:text-orange-500 transition-colors">GitHub</span>
                            <span className="mt-1 text-sm text-muted-foreground">Explore code repos</span>
                        </a>

                        <a
                            href="mailto:hello@pagekey.io"
                            className="group flex flex-col items-center rounded-xl border bg-card p-6 transition-all hover:border-green-500/50 hover:shadow-sm"
                        >
                            <Mail className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-green-500" />
                            <span className="mt-3 font-semibold group-hover:text-green-500 transition-colors">Email</span>
                            <span className="mt-1 text-sm text-muted-foreground">Send a message</span>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
