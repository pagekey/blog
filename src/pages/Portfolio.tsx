import { ArrowRight, CheckCircle2, Cpu, FolderKanban, Mail, Server, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const evidenceAreas = [
    {
        title: "Automation and workflow tooling",
        icon: Wrench,
        summary: "We build scripts, utilities, and lightweight systems that replace repetitive manual work with repeatable processes.",
        proof: [
            {
                title: "Convert OneNote to Markdown",
                href: "/blog/2022/01/onenote-to-markdown",
                note: "A practical migration script for getting business notes and knowledge out of a proprietary tool and into plain text."
            },
            {
                title: "KeyDo Python Prototype",
                href: "/blog/2024/05/keydo-python-prototype",
                note: "Prototype work around plain-text driven productivity workflows and command execution."
            },
            {
                title: "PKVid MVP",
                href: "/blog/2023/12/pkvid-mvp",
                note: "Config-driven video production tooling that turns repeated editing steps into a programmable pipeline."
            }
        ],
        businessUseCases: [
            "Office workflow automation",
            "Data/file transformation pipelines",
            "Repeatable content or reporting tasks"
        ]
    },
    {
        title: "Custom internal tools and line-of-business apps",
        icon: FolderKanban,
        summary: "We can take an idea from blank repo to working application, whether the target is the web, desktop-like tooling, or mobile-oriented product work.",
        proof: [
            {
                title: "Django: First Web App",
                href: "/blog/2019/06/django-first-web-app",
                note: "Foundational web application work with backend, routes, and database-backed architecture."
            },
            {
                title: "Workout App from Scratch",
                href: "/blog/2022/02/pagekey-fit-1-initial-setup",
                note: "Early-stage product development for a Flutter-based application with app setup, repo structure, and auth groundwork."
            },
            {
                title: "React from Scratch",
                href: "/blog/2025/02/react-from-scratch",
                note: "Shows fluency with the modern frontend stack at a lower level than copy-paste app generation."
            }
        ],
        businessUseCases: [
            "Scheduling or intake portals",
            "Staff dashboards and admin panels",
            "Purpose-built software for one team"
        ]
    },
    {
        title: "Authentication, integrations, and connected systems",
        icon: Cpu,
        summary: "We work comfortably with third-party APIs, sign-in systems, configuration, and the glue code that connects services together.",
        proof: [
            {
                title: "NextAuth Google & Apple Social Login",
                href: "/blog/2023/09/nextauth",
                note: "End-to-end setup for real authentication providers, credentials, callbacks, and app integration."
            },
            {
                title: "KeyDo Python Prototype",
                href: "/blog/2024/05/keydo-python-prototype",
                note: "Prototype work centered on orchestrating useful actions from structured text input."
            },
            {
                title: "Convert OneNote to Markdown",
                href: "/blog/2022/01/onenote-to-markdown",
                note: "A concrete example of bridging one ecosystem into another with scripts instead of manual copying."
            }
        ],
        businessUseCases: [
            "Customer login and account flows",
            "Moving data between disconnected tools",
            "Replacing manual export/import work"
        ]
    },
    {
        title: "Infrastructure, self-hosting, and deployment",
        icon: Server,
        summary: "We help businesses run software on infrastructure they control, especially when reliability, ownership, or cost matter.",
        proof: [
            {
                title: "Bare-Metal Kubernetes on a NUC",
                href: "/blog/2023/09/nuc-kubernetes",
                note: "Hands-on deployment work with self-hosted Kubernetes on real hardware."
            },
            {
                title: "Qt Using Nix",
                href: "/blog/2024/10/qt-with-nix",
                note: "Environment reproducibility and dependency management for non-trivial software stacks."
            },
            {
                title: "Nix Debug Techniques",
                href: "/blog/2025/02/nix-debug-techniques",
                note: "Evidence of deeper troubleshooting ability around modern build and environment systems."
            }
        ],
        businessUseCases: [
            "Self-hosted internal systems",
            "Developer environment cleanup and standardization",
            "Small-scale deployment strategy"
        ]
    },
    {
        title: "AI-adjacent and technical problem solving",
        icon: Sparkles,
        summary: "We do not treat AI as magic. We treat it like another tool that has to earn its place inside a real workflow.",
        proof: [
            {
                title: "Getting Started with Scikit-Learn",
                href: "/blog/2021/04/getting-started-scikit-learn",
                note: "Solid grounding in practical machine learning tooling, setup, and usage."
            },
            {
                title: "Auto-Captions and MORE - Major PKVid Progress",
                href: "/blog/2023/12/pkvid-auto-captions",
                note: "An example of integrating automation around media processing and captioning workflows."
            },
            {
                title: "ML vs AI",
                href: "/blog/2021/04/ml-vs-ai",
                note: "Evidence of a measured, non-hype understanding of the space."
            }
        ],
        businessUseCases: [
            "Useful AI experiments with low risk",
            "Search, tagging, and summarization workflows",
            "Automation that still keeps humans in control"
        ]
    }
];

const serviceIdeas = [
    "Lead intake and follow-up automations",
    "Scheduling, quoting, or CRM helper tools",
    "Private dashboards for operations or reporting",
    "Legacy data cleanup and migration",
    "Customer portals or lightweight web apps",
    "AI-assisted internal workflows with review gates"
];

export default function PortfolioPage() {
    return (
        <Layout
            title="Portfolio | PageKey"
            description="A practical portfolio of technical work relevant to automation, custom software, integrations, infrastructure, and real business problem-solving."
        >
            <section className="relative overflow-hidden border-b bg-muted/10">
                <div className="absolute top-16 left-1/2 -z-10 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500/12 via-amber-500/10 to-transparent blur-[120px]" />

                <div className="mx-auto max-w-5xl px-6 py-24">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Portfolio</p>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                            Technical work that shows we can solve <span className="text-orange-600">real business problems.</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                            This page is an honest snapshot of the kinds of systems, prototypes, tutorials, and experiments we have already built in public. If you run a local business and need software, automation, integrations, or technical cleanup, this is the evidence behind the pitch.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500" asChild>
                                <a href="mailto:hello@pagekey.io">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Talk About Your Project
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link to="/consulting">See Consulting</Link>
                            </Button>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border bg-background/80 p-4">
                                <div className="text-2xl font-bold">5</div>
                                <p className="text-sm text-muted-foreground">evidence-backed capability areas</p>
                            </div>
                            <div className="rounded-xl border bg-background/80 p-4">
                                <div className="text-2xl font-bold">10+</div>
                                <p className="text-sm text-muted-foreground">public technical posts tied to deliverable skills</p>
                            </div>
                            <div className="rounded-xl border bg-background/80 p-4">
                                <div className="text-2xl font-bold">Local-first</div>
                                <p className="text-sm text-muted-foreground">bias toward practical, understandable solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight">What this portfolio proves</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Not every post is a client case study, but together they show a consistent pattern: we can learn systems quickly, build useful software from scratch, automate repeatable work, and deliver technical solutions that are grounded in reality.
                    </p>
                </div>

                <div className="grid gap-6">
                    {evidenceAreas.map((area) => {
                        const Icon = area.icon;

                        return (
                            <Card key={area.title} className="overflow-hidden border-border/80">
                                <CardHeader className="border-b bg-muted/20">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-xl bg-orange-500/10 p-3 text-orange-600">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-2xl">{area.title}</CardTitle>
                                            <p className="mt-3 max-w-3xl text-muted-foreground">{area.summary}</p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="grid gap-8 p-6 lg:grid-cols-[1.5fr_0.9fr]">
                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Evidence from the blog</h3>
                                        <div className="grid gap-4">
                                            {area.proof.map((item) => (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="group rounded-xl border p-4 transition-colors hover:border-orange-500/50 hover:bg-orange-500/[0.03]"
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <h4 className="font-semibold group-hover:text-orange-600">{item.title}</h4>
                                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                                                        </div>
                                                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Could help with</h3>
                                        <div className="rounded-xl border bg-background p-5">
                                            <ul className="space-y-3">
                                                {area.businessUseCases.map((item) => (
                                                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            <section className="border-t bg-muted/20">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Examples we can credibly pursue next</h2>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            These are the kinds of small-business projects that fit naturally with the work shown above. Some may not have direct public writeups yet, but they are realistic extensions of the skills already demonstrated.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-6">
                            <ul className="space-y-4">
                                {serviceIdeas.map((idea) => (
                                    <li key={idea} className="flex items-start gap-3">
                                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                                        <span>{idea}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-20">
                <div className="rounded-2xl border bg-background p-8 shadow-sm md:p-12">
                    <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">If you own a local business</h2>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                We are especially interested in practical projects where better software can save time, reduce mistakes, or create a cleaner customer experience. If you have a messy process, too many spreadsheets, or a task your team keeps repeating by hand, that is exactly the kind of problem worth discussing.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-muted/30 p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Start simple</p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                A first project does not need to be huge. Often the best starting point is one painful workflow, one missing dashboard, or one manual process that clearly should not be manual anymore.
                            </p>
                            <Button className="mt-6 w-full bg-orange-600 text-white hover:bg-orange-500" asChild>
                                <a href="mailto:hello@pagekey.io">Email hello@pagekey.io</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
