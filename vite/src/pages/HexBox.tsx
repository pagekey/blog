import { useState, useEffect } from "react";
import {
    ArrowRight,
    Play,
    HardDrive,
    Image,
    GitGraph,
    Network,
    PlugZap,
    Globe,
    HardDriveDownload,
    ShieldCheck,
    Box,
    Zap,
    Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import OrderCard from "@/components/OrderCard";
import FloatingHexBox from "@/components/FloatingHexBox";
import YamlPreview from "@/components/YamlPreview";

const features = [
    {
        id: "backups",
        title: "Deterministic Backups",
        description: "Pull files and documents directly from legacy platforms onto your bare metal. Every payload transfer is a verifiable execution node, meaning zero corrupted files.",
        icon: <HardDrive className="w-6 h-6 text-orange-500" />,
        className: "md:col-span-2",
        status: "MVP Feature",
        statusColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
    },
    {
        id: "photos",
        title: "Self-Hosted Photos",
        description: "An isolated, secure media gallery operating entirely out of your local storage. High-speed indexing without giving megacorps an ML training license to your memories.",
        icon: <Image className="w-6 h-6 text-orange-500" />,
        className: "md:col-span-1",
        status: "MVP Feature",
        statusColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
    },
    {
        id: "dag",
        title: "Visual DAG Studio",
        description: "Coming Soon: Stop writing YAML by hand. Arrange, connect, and deploy workflows using a node graph designer that turns complex scripting into clean data paths.",
        icon: <GitGraph className="w-6 h-6 text-orange-500" />,
        className: "md:col-span-1",
        status: "In Development",
        statusColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
    },
    {
        id: "vpn",
        title: "VPN Traffic Tunneling",
        description: "Coming Soon: The ultimate physical firewall. Encrypt external communication and audit your home network in real-time to watch exactly where 'smart' tech tries to leak your metadata.",
        icon: <Network className="w-6 h-6 text-orange-500" />,
        className: "md:col-span-2",
        status: "Planned Roadmap",
        statusColor: "bg-muted text-muted-foreground border-border"
    },
];

const steps = [
    {
        step: "01",
        title: "Plug & Play",
        description: "Connect the HexBox to your power and router. No complicated BIOS or OS installation required—it's ready out of the box.",
        icon: <PlugZap className="w-5 h-5 text-orange-500" />,
    },
    {
        step: "02",
        title: "Access Local",
        description: "Open 'hexbox.local' in any browser on your network. Your private dashboard is served directly from the physical hardware in your room.",
        icon: <Globe className="w-5 h-5 text-orange-500" />,
    },
    {
        step: "03",
        title: "Sync the Vault",
        description: "Select your legacy cloud providers. HexBox begins pulling your data into your 32GB local module through an encrypted gateway.",
        icon: <HardDriveDownload className="w-5 h-5 text-orange-500" />,
    },
    {
        step: "04",
        title: "Total Sovereignty",
        description: "Once synced, you can disconnect the internet. Your data is physically yours, under your own roof.",
        icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
    },
];

export default function HexBoxPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#Order') {
            const element = document.getElementById('Order');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Stack: Content */}
                    <div className="text-left space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1 text-sm font-medium tracking-wide"
                        >
                            Batch 01 - Shipping in 2026
                        </Badge>

                        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl leading-[1.1]">
                            Take Back <br />
                            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                                Your Tech.
                            </span>
                        </h1>

                        <p className="max-w-lg text-lg md:text-xl text-muted-foreground leading-relaxed">
                            The self-hosting appliance that turns &quot;the cloud&quot; into <span className="font-semibold text-foreground">your private vault</span>. Fully observable, unit-testable, and billionaire-free.
                        </p>

                        {/* Manifest Line */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-widest text-orange-600/70 dark:text-orange-400/70 uppercase">
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> No Subscriptions
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> No Tracking
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Local First
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white transition-colors" asChild>
                                <a href="#Order">Get HexBox</a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => setIsVideoOpen(true)}
                                className="hover:bg-muted transition-colors gap-2"
                            >
                                <Play className="w-4 h-4 fill-current text-orange-500" /> Watch Pitch
                            </Button>
                        </div>
                    </div>

                    {/* Right Stack: Interactive Visual Asset */}
                    <div
                        className="relative flex justify-center items-center cursor-pointer group"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <div className="absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-xl translate-y-24">
                            <Play className="w-4 h-4 fill-current" /> Play Video
                        </div>
                        <FloatingHexBox />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Own Your Piece of the Internet
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Stop renting your digital life. HexBox combines the power of isolated container computing with deterministic graph workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            className={`transition-all hover:border-orange-500/30 hover:shadow-sm relative overflow-hidden group flex flex-col justify-between ${feature.className}`}
                        >
                            <div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="mb-4 p-2 rounded-lg border bg-muted/40 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <Badge variant="outline" className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${feature.statusColor}`}>
                                            {feature.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold tracking-tight">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </div>

                            {feature.id === "photos" && (
                                <CardFooter className="pt-0">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-between hover:text-orange-500 hover:border-orange-500/30 font-mono text-xs tracking-wider uppercase transition-all"
                                    >
                                        <a href="/photos">
                                            Learn more
                                            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-all" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            )}
                        </Card>
                    ))}
                </div>
            </section>

            {/* Code / Configuration Block Context */}
            <YamlPreview />

            {/* Workflow Pipeline Section */}
            <section className="border-t bg-muted/20">
                <div className="max-w-6xl mx-auto px-6 py-24">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
                                From unboxing to <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">sovereignty.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Setting up a private server shouldn't require a CS degree. We built a dead-simple local interface that keeps you in command.
                            </p>
                        </div>

                        {/* Interactive Hardware Shell simulation container */}
                        <div className="bg-card border p-6 rounded-2xl font-mono text-sm shadow-sm w-full md:w-auto min-w-[240px]">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                                <div className="w-3 h-3 rounded-full bg-green-500/30" />
                            </div>
                            <p className="text-orange-500"># Site: hexbox.local</p>
                            <p className="text-muted-foreground">Status: <span className="text-emerald-500 font-semibold">Connected</span></p>
                            <p className="text-muted-foreground">Vault: <span className="text-orange-500">32GB Ready</span></p>
                            <p className="text-muted-foreground/60 mt-2 animate-pulse">_ Awaiting sync...</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-border z-0" />

                        {steps.map((item, idx) => (
                            <div key={idx} className="relative z-10 group">
                                <div className="w-12 h-12 rounded-full bg-card border flex items-center justify-center mb-6 group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all duration-300">
                                    <span className="text-orange-600 dark:text-orange-400 font-bold font-mono">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transactional Order Block */}
            <section className="border-t">
                <div className="max-w-5xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 mb-4 font-mono uppercase tracking-widest text-xs">
                                Limited Founder's Edition
                            </Badge>
                            <h2 className="text-4xl font-bold mb-6 tracking-tighter">
                                One-time cost. <br />
                                Lifetime sovereignty.
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                No monthly fees. No &quot;Pro&quot; tiers. Just high-grade hardware running open, observable code.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Box, text: "High-quality Compute Hardware" },
                                    { icon: Zap, text: "Hard-Shell Protective Housing & Power" },
                                    { icon: Globe, text: "Ethernet Cable (Plug and Play)" },
                                    { icon: Cpu, text: "Pre-loaded with Hex Orchestrator" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground transition-all hover:translate-x-1">
                                        <item.icon className="w-5 h-5 text-orange-500" />
                                        <span className="text-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div id="Order">
                            <OrderCard
                                apiEndpoint="https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler"
                                stripeCheckoutUrl="https://buy.stripe.com/fZu8wQ6yu7BYckP8pDgEg08"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pitch Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-12">
                    <div className="relative w-full max-w-5xl aspect-video bg-black border rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white z-[110] bg-black/40 backdrop-blur-md p-2 rounded-full transition-colors"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/HaWhwNRAgLo?autoplay=1"
                            title="HexBox Mission"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </Layout>
    );
}
