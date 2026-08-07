import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function HelpPage() {
    const topics = [
        {
            title: "Self-hosting",
            description: "Deploy and manage self-hosted services, storage, and media servers.",
        },
        {
            title: "Linux troubleshooting",
            description: "Resolving systemd issues, diagnosing storage bottlenecks, patching kernel configs, and parsing complex application logs.",
        },
        {
            title: "Infrastructure / DevOps",
            description: "Configuring secure reverse proxies, internal DNS, SSL certificates, and automated backups.",
        },
        {
            title: "Docker & Server Setup",
            description: "Writing maintainable docker-compose files, optimizing network configurations, securing permissions, and isolating services.",
        },
    ];

    return (
        <Layout>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1 text-sm font-medium tracking-wide"
                    >
                        Technical Consulting
                    </Badge>

                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                        Get Unstuck With Your Infrastructure <br />
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                            (30 min call)
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Skip hours of reading conflicting documentation or outdated forum threads.
                        Book a focused, engineer-to-engineer session to unblock your setup and resolve your infrastructure issues.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center">
                        <Button
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-500 text-white transition-colors"
                            asChild
                        >
                            <a
                                href="https://cal.com/pagekey/self-hosting-consulting"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Book a 30-minute call — $20 fixed price
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <p className="mt-3 text-sm text-muted-foreground">
                            No subscriptions. One-time session.
                        </p>
                    </div>
                </div>
            </section>

            {/* TOPICS */}
            <section className="mx-auto max-w-4xl px-6 py-12">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold tracking-tight text-center md:text-left">
                        What I Can Help You With
                    </h2>
                    <p className="mt-2 text-muted-foreground text-center md:text-left">
                        Bring broken configs, architecture issues, or terminal errors.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {topics.map((topic, index) => (
                        <Card key={index} className="border-muted bg-card/50">
                            <CardContent className="p-6 flex gap-4 items-start">
                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange-500/10 text-orange-600 dark:text-orange-400">
                                    <Check className="h-3 w-3 stroke-[3]" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-card-foreground">
                                        {topic.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                                        {topic.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mx-auto max-w-4xl px-6 py-16 text-center">
                <Card className="border-orange-500/20 bg-gradient-to-br from-card to-orange-500/[0.02] p-8 md:p-12">
                    <CardContent className="flex flex-col items-center p-0">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Still stuck?
                        </h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
                            After booking, you'll automatically receive a calendar invite and meeting link.
                        </p>

                        <div className="mt-8">
                            <Button
                                size="lg"
                                className="bg-orange-600 hover:bg-orange-500 text-white transition-colors"
                                asChild
                            >
                                <a
                                    href="https://cal.com/pagekey/self-hosting-consulting"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book a 30-minute call — $20 fixed price
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </Layout>
    );
}
