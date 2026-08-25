import { BookOpen, Users, Settings, Cpu, Video, Code, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <Layout title="PageKey — Take Back Tech" description="PageKey builds software, hardware, education, and consulting services to help you take back control of your technology.">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-5xl px-6 py-28 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl mb-6">
                        Take Back <span className="text-orange-600">Tech.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                        Technology should be something you can understand, control, and build yourself.
                    </p>
                    
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        PageKey builds software, hardware, education, and consulting services around that idea.
                    </p>

                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white transition-colors text-base" asChild>
                            <Link to="/consulting">
                                Work With Us
                            </Link>
                        </Button>

                        <Button variant="outline" size="lg" className="hover:bg-muted transition-colors text-base" asChild>
                            <Link to="/portfolio">See Portfolio</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Four Paths */}
            <section id="explore" className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-2">
                    
                    {/* Consulting */}
                    <Card className="border-orange-500/30 bg-orange-500/5 transition-all hover:border-orange-500/50">
                        <CardHeader>
                            <Settings className="mb-2 h-8 w-8 text-orange-600" />
                            <CardTitle className="text-2xl">Consulting</CardTitle>
                            <CardDescription className="text-base text-foreground font-medium">Have a technology problem?</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-[calc(100%-100px)] justify-between gap-6">
                            <p className="text-muted-foreground">
                                We help businesses solve practical technology problems. From automating workflows and integrating systems to building custom internal tools, applying AI, and modernizing infrastructure.
                            </p>
                            <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
                                <Button className="bg-orange-600 hover:bg-orange-500 text-white w-full sm:w-auto" asChild>
                                    <Link to="/consulting">
                                        Work With Us
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto" asChild>
                                    <Link to="/portfolio">
                                        See Portfolio
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Products */}
                    <Card className="transition-all hover:border-border/80">
                        <CardHeader>
                            <Cpu className="mb-2 h-8 w-8 text-orange-500" />
                            <CardTitle className="text-2xl">Products</CardTitle>
                            <CardDescription className="text-base">Build technology you actually own.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-[calc(100%-100px)] justify-between gap-6">
                            <p className="text-muted-foreground">
                                Discover hardware and software designed for ownership. Learn about HexBox, our local-first automation platform, and other practical tools built by PageKey.
                            </p>
                            <div className="mt-auto pt-4">
                                <Button variant="outline" className="w-full sm:w-auto" asChild>
                                    <Link to="/products">
                                        Explore Products
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Blog */}
                    <Card className="transition-all hover:border-border/80">
                        <CardHeader>
                            <BookOpen className="mb-2 h-8 w-8 text-orange-500" />
                            <CardTitle className="text-2xl">Blog</CardTitle>
                            <CardDescription className="text-base">Ideas, experiments, builds, and lessons.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-[calc(100%-100px)] justify-between gap-6">
                            <p className="text-muted-foreground">
                                The canonical home for PageKey's ongoing writing, devlogs, technical articles, educational posts, and open-source experiments.
                            </p>
                            <div className="mt-auto pt-4">
                                <Button variant="outline" className="w-full sm:w-auto" asChild>
                                    <a href="/blog">
                                        Read the Blog
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Events */}
                    <Card className="transition-all hover:border-border/80">
                        <CardHeader>
                            <Users className="mb-2 h-8 w-8 text-orange-500" />
                            <CardTitle className="text-2xl">Events</CardTitle>
                            <CardDescription className="text-base">Meet other people building the future.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-[calc(100%-100px)] justify-between gap-6">
                            <p className="text-muted-foreground">
                                Join local Take Back Tech events to connect with builders, engineers, and curious people who want to understand and control their technology.
                            </p>
                            <div className="mt-auto pt-4">
                                <Button variant="outline" className="w-full sm:w-auto" asChild>
                                    <Link to="/events">
                                        See Events
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </section>

            {/* Why PageKey? */}
            <section className="border-t bg-muted/20">
                <div className="mx-auto max-w-4xl px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Why PageKey?</h2>
                    <p className="mx-auto max-w-2xl text-xl text-foreground font-medium mb-12">
                        Technology has become increasingly opaque and centralized. PageKey exists to make it understandable again.
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Ownership</h3>
                            <p className="text-muted-foreground">You should control the systems you rely on, not rent them from a platform that can disappear.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Simplicity</h3>
                            <p className="text-muted-foreground">Complex problems don't always need complex solutions. We favor straightforward, resilient engineering.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Education</h3>
                            <p className="text-muted-foreground">Knowledge shouldn't be gatekept. We build in public and share what we learn along the way.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-t">
                <div className="mx-auto max-w-5xl px-6 py-24 pb-12">
                    <div className="grid gap-12 md:grid-cols-2 rounded-2xl bg-muted/30 p-8 md:p-12 border">
                        <div className="flex flex-col items-start justify-center gap-4">
                            <h2 className="text-3xl font-bold tracking-tight">Have a tech problem?</h2>
                            <p className="text-muted-foreground text-lg mb-2">
                                We help businesses solve practical technology problems with sensible, well-engineered solutions.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white" asChild>
                                    <Link to="/consulting">
                                        Learn about consulting
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/portfolio">
                                        See portfolio
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-start justify-center gap-4 border-t pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12">
                            <h2 className="text-3xl font-bold tracking-tight">Want to take back tech?</h2>
                            <p className="text-muted-foreground text-lg mb-2">
                                Sign up for the mailing list to receive new PageKey videos, devlogs, and content directly to your inbox.
                            </p>
                            <Button variant="outline" size="lg" asChild>
                                <Link to="/signup">
                                    Join the mailing list
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Subtle Social Links */}
                    <div className="mt-16 flex justify-center gap-6">
                        <a href="https://youtube.com/@PageKey" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors" aria-label="YouTube">
                            <Video className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/pagekey" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors" aria-label="GitHub">
                            <Code className="h-5 w-5" />
                        </a>
                        <a href="https://discord.gg/5m5yFgDPF5" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#5865F2] transition-colors" aria-label="Discord">
                            <MessageSquare className="h-5 w-5" />
                        </a>
                        <a href="mailto:hello@pagekey.io" className="text-muted-foreground hover:text-green-500 transition-colors" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
