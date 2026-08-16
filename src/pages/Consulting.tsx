import { Mail, ArrowRight, Settings, Cpu, Terminal, GitMerge, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

export default function ConsultingPage() {
    return (
        <Layout title="PageKey Consulting" description="Practical technology consulting for businesses. Solutions for automation, AI, internal tools, integrations, and infrastructure.">
            {/* Hero Section */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">
                    Technology consulting for businesses that need things to <span className="text-orange-600">actually work.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    We help businesses solve practical technology problems &mdash; from automation and internal tools to AI, software, infrastructure, and integrations.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white px-8 text-lg h-14" asChild>
                        <a href="mailto:hello@pagekey.io">
                            <Mail className="mr-2 h-5 w-5" />
                            Talk to Us
                        </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                        <a href="mailto:hello@pagekey.io" className="hover:underline">hello@pagekey.io</a> &bull; <a href="tel:609-521-8918" className="hover:underline">(609) 521-8198</a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 hover:underline">

                    </p>
                </div>
            </section>

            {/* What We Can Help With */}
            <section className="border-t bg-muted/10">
                <div className="mx-auto max-w-6xl px-6 py-24">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight">What We Can Help With</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <Settings className="mb-4 h-8 w-8 text-orange-500" />
                                <CardTitle className="text-xl">Automation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Replace repetitive manual processes with reliable software and workflows.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Cpu className="mb-4 h-8 w-8 text-orange-500" />
                                <CardTitle className="text-xl">AI</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Identify useful AI applications and integrate them into real business workflows without the hype.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Terminal className="mb-4 h-8 w-8 text-orange-500" />
                                <CardTitle className="text-xl">Internal Tools</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Build dashboards, utilities, portals, and software that make teams more effective.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <GitMerge className="mb-4 h-8 w-8 text-orange-500" />
                                <CardTitle className="text-xl">Integrations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Connect disparate systems and eliminate manual data movement between them.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2 lg:col-span-1">
                            <CardHeader>
                                <Server className="mb-4 h-8 w-8 text-orange-500" />
                                <CardTitle className="text-xl">Software & Infrastructure</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Architecture, custom applications, deployments, modernization, and technical problem solving.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="mx-auto max-w-5xl px-6 py-24">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A practical, engineering-oriented approach.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-4">
                    <div className="relative">
                        <div className="text-5xl font-black text-orange-500/20 mb-4">1</div>
                        <h3 className="text-xl font-bold mb-2">Talk</h3>
                        <p className="text-muted-foreground">Understand the business, the goals, and the specific problem you are facing.</p>
                    </div>
                    <div className="relative">
                        <div className="text-5xl font-black text-orange-500/20 mb-4">2</div>
                        <h3 className="text-xl font-bold mb-2">Diagnose</h3>
                        <p className="text-muted-foreground">Determine what is actually worth fixing and propose a realistic solution.</p>
                    </div>
                    <div className="relative">
                        <div className="text-5xl font-black text-orange-500/20 mb-4">3</div>
                        <h3 className="text-xl font-bold mb-2">Build</h3>
                        <p className="text-muted-foreground">Implement the solution with a focus on simplicity, reliability, and ownership.</p>
                    </div>
                    <div className="relative">
                        <div className="text-5xl font-black text-orange-500/20 mb-4">4</div>
                        <h3 className="text-xl font-bold mb-2">Improve</h3>
                        <p className="text-muted-foreground">Measure the result, iterate based on feedback, and ensure it creates value.</p>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="border-t bg-muted/10">
                <div className="mx-auto max-w-4xl px-6 py-24">
                    <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Who It's For</h2>
                    <div className="bg-background rounded-xl p-8 border shadow-sm">
                        <ul className="space-y-4 text-lg text-foreground/80">
                            <li className="flex items-start gap-3">
                                <ArrowRight className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                                <span>Businesses with heavy manual or repetitive workflows.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                                <span>Teams relying on complex spreadsheets or disconnected systems.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                                <span>Companies curious about AI but unsure where it practically fits.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                                <span>Organizations that need custom internal software or portals.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                                <span>Anyone with a technology problem that doesn't fit neatly into an off-the-shelf product.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mx-auto max-w-3xl px-6 py-24 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Have a technology problem?</h2>
                <p className="text-xl text-muted-foreground mb-10">Let's talk.</p>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white px-8 text-lg h-14" asChild>
                    <a href="mailto:hello@pagekey.io">
                        <Mail className="mr-2 h-5 w-5" />
                        Email hello@pagekey.io
                    </a>
                </Button>
            </section>
        </Layout>
    );
}
