import { ArrowRight, Video, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function PhotosPage() {
    // const youtubeVideoId = "dQw4w9WgXcQ";
    const stripeCheckoutUrl = "https://buy.stripe.com/fZu8wQ6yu7BYckP8pDgEg08";

    return (
        <Layout>
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-20">

                {/* Hero Section */}
                <section className="text-center max-w-3xl mx-auto space-y-6">
                    <Badge
                        variant="outline"
                        className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-3 py-1 text-sm font-medium animate-pulse"
                    >
                        <Sparkles className="mr-1.5 h-3.5 w-3.5 inline text-amber-500" />
                        Ultra-Limited Run: Only 1 Unit Available
                    </Badge>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-none">
                        Your Photos. <br />
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                            Zero Cloud Fees.
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Immich is the ultimate self-hosted Google Photos alternative. Learn how to build your own, or skip the configuration headache and buy our exclusive, pre-built plug-and-play flagship hardware.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white" asChild>
                            <a href="#buy-now">
                                Secure the Only Unit
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="#tutorial">
                                <Video className="mr-2 h-4 w-4" />
                                Watch Build Guide
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Video Tutorial Section (The "Do It Yourself" Path) */}
                <section id="tutorial" className="space-y-6 scroll-mt-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight">The DIY Guide</h2>
                        <p className="mt-2 text-muted-foreground">
                            We believe in open, understandable tech. Here is the exact blueprint to install Immich on your own server or laptop for free.
                        </p>
                    </div>

                    <div className="text-center text-gray-500">Video coming soon.</div>
                    {/* 16:9 Responsive Video Container */}
                    {/* <div className="relative aspect-video rounded-2xl overflow-hidden border border-muted bg-black shadow-xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                            title="How to install Immich on your own server"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div> */}
                </section>

                {/* The Pivot / "Do It For Me" Pitch */}
                <section id="buy-now" className="scroll-mt-20">
                    <div className="grid gap-8 md:grid-cols-5 items-center">

                        {/* Value Prop Columns */}
                        <div className="md:col-span-3 space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Don't want the hassle? <br />
                                <span className="text-orange-500">Meet HexBox Photos.</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Setting up Docker, configuring reverse proxies, managing persistent storage storage, and tuning hardware acceleration can take hours.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We've done all the heavy lifting. This is a pristine, premium hardware build, meticulously optimized for rapid photo indexing and facial recognition, shipped straight to your door.
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    "Pre-installed Immich production build",
                                    "Plug & Play local network setup",
                                    "Local-first data privacy",
                                    "No monthly subscription cloud traps",
                                    "Hand-assembled single unit batch",
                                    "Local, private machine learning",
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing / Stripe Conversion Card */}
                        <div className="md:col-span-2">
                            <Card className="relative border-2 border-orange-500/50 shadow-xl bg-gradient-to-b from-card to-orange-500/[0.01]" style={{ overflow: "visible" }}>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                    Batch #1
                                </div>

                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold">HexBox Photos Ed. 1</CardTitle>
                                    <CardDescription>Complete hardware setup</CardDescription>
                                    <div className="mt-4 flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-extrabold tracking-tight">$349</span>
                                        <span className="text-sm font-semibold text-muted-foreground">USD</span>
                                    </div>
                                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-2">
                                        Free US Shipping
                                    </span>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <hr className="border-muted" />

                                    <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/20 flex gap-2.5 items-start text-xs text-amber-800 dark:text-amber-300">
                                        <ShieldAlert className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500 mt-0.5" />
                                        <div>
                                            <p className="font-semibold">Strict Availability</p>
                                            <p className="mt-0.5 opacity-90">There is literally only 1 unit of this configuration sitting on my desk. When clicked, checkout will lock.</p>
                                        </div>
                                    </div>

                                    <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-500 text-white text-base font-semibold transition-all group shadow-md" asChild>
                                        <a href={stripeCheckoutUrl}>
                                            Buy Now via Stripe
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>

                                    <p className="text-center text-xs text-muted-foreground">
                                        Secure transaction processed by Stripe.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Quick Micro-FAQ for Skepical Buyers */}
                <section className="border-t pt-16 max-w-3xl mx-auto space-y-8">
                    <h3 className="text-2xl font-bold tracking-tight text-center">Frequently Asked Questions</h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <h4 className="font-semibold text-base flex items-center gap-2">
                                <HelpCircle className="h-4 w-4 text-orange-500" /> What hardware is it?
                            </h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                                It runs on a low-power, high-efficiency mini-PC node equipped with local flash storage for immediate, snappy lookups and background face tagging.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-base flex items-center gap-2">
                                <HelpCircle className="h-4 w-4 text-orange-500" /> Can I expand storage?
                            </h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Absolutely. It features high-speed USB ports, allowing you to easily map external external hard drives or network shares (NAS) via the web UI.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
