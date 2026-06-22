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
        description:
            "Pull files and documents directly from legacy platforms onto your bare metal. Every payload transfer is a verifiable execution node, meaning zero corrupted files.",
        icon: <HardDrive className="w-6 h-6 text-muted-foreground" />,
        className: "md:col-span-2",
        status: "MVP Feature",
        statusClass: "bg-muted text-muted-foreground border-border"
    },
    {
        id: "photos",
        title: "Self-Hosted Photos",
        description:
            "An isolated, secure media gallery operating entirely out of your local storage. High-speed indexing without giving megacorps an ML training license to your memories.",
        icon: <Image className="w-6 h-6 text-muted-foreground" />,
        className: "md:col-span-1",
        status: "MVP Feature",
        statusClass: "bg-muted text-muted-foreground border-border"
    },
    {
        id: "dag",
        title: "Visual DAG Studio",
        description:
            "Coming Soon: Stop writing YAML by hand. Arrange, connect, and deploy workflows using a node graph designer that turns complex scripting into clean data paths.",
        icon: <GitGraph className="w-6 h-6 text-muted-foreground" />,
        className: "md:col-span-1",
        status: "In Development",
        statusClass: "bg-muted text-muted-foreground border-border"
    },
    {
        id: "vpn",
        title: "VPN Traffic Tunneling",
        description:
            "Coming Soon: The ultimate physical firewall. Encrypt external communication and audit your home network in real-time to watch exactly where 'smart' tech tries to leak your metadata.",
        icon: <Network className="w-6 h-6 text-muted-foreground" />,
        className: "md:col-span-2",
        status: "Planned Roadmap",
        statusClass: "bg-muted text-muted-foreground border-border"
    }
];

const steps = [
    {
        step: "01",
        title: "Plug & Play",
        description:
            "Connect the HexBox to your power and router. No complicated BIOS or OS installation required—it's ready out of the box.",
        icon: <PlugZap className="w-5 h-5 text-muted-foreground" />
    },
    {
        step: "02",
        title: "Access Local",
        description:
            "Open 'hexbox.local' in any browser on your network. Your private dashboard is served directly from the physical hardware in your room.",
        icon: <Globe className="w-5 h-5 text-muted-foreground" />
    },
    {
        step: "03",
        title: "Sync the Vault",
        description:
            "Select your legacy cloud providers. HexBox begins pulling your data into your 32GB local module through an encrypted gateway.",
        icon: <HardDriveDownload className="w-5 h-5 text-muted-foreground" />
    },
    {
        step: "04",
        title: "Total Sovereignty",
        description:
            "Once synced, you can disconnect the internet. Your data is physically yours, under your own roof.",
        icon: <ShieldCheck className="w-5 h-5 text-muted-foreground" />
    }
];

export default function HexBoxPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        if (window.location.hash === "#Order") {
            const element = document.getElementById("Order");
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-muted text-muted-foreground border-border px-3 py-1 text-sm font-medium"
                        >
                            Batch 01 - Shipping in 2026
                        </Badge>

                        <div className="space-y-2">
                            <h1 className="text-6xl font-black tracking-tight md:text-8xl text-white">
                                HexBox
                            </h1>
                            <p className="text-2xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-tight">
                                Take Back Your Tech.
                            </p>
                        </div>

                        <p className="max-w-lg text-lg md:text-xl text-muted-foreground leading-relaxed">
                            The self-hosting appliance that turns "the cloud" into your private vault. Fully observable, unit-testable, and billionaire-free.
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase">
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
                            <Button
                                size="lg"
                                className="bg-orange-600 hover:bg-orange-500 text-white transition-colors"
                                asChild
                            >
                                <a href="#Order">Get HexBox</a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => setIsVideoOpen(true)}
                                className="hover:bg-muted transition-colors gap-2"
                            >
                                <Play className="w-4 h-4 text-orange-500" />
                                Watch Pitch
                            </Button>
                        </div>
                    </div>

                    <div
                        className="relative flex justify-center items-center cursor-pointer group"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <div className="absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-xl translate-y-24">
                            <Play className="w-4 h-4" /> Play Video
                        </div>
                        <FloatingHexBox />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Own Your Piece of the Internet
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Stop renting your digital life. HexBox combines isolated computing with deterministic workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {/* subtle ambient grid glow */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent opacity-60 blur-2xl" />

                    {features.map((feature) => {
                        const isFeatured = feature.className?.includes("md:col-span-2");

                        return (
                            <Card
                                key={feature.id}
                                className={`
                        relative overflow-hidden group flex flex-col justify-between
                        transition-all duration-300
                        hover:-translate-y-1 hover:border-orange-500/40
                        hover:shadow-lg hover:shadow-orange-500/5
                        ${feature.className}
                        ${isFeatured ? "ring-1 ring-orange-500/10 bg-card/60 backdrop-blur-sm" : ""}
                    `}
                            >
                                {/* subtle corner glow for featured cards */}
                                {isFeatured && (
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
                                )}

                                <div>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div
                                                className={`
                                        mb-4 p-2 rounded-lg border transition-colors
                                        ${isFeatured
                                                        ? "bg-orange-500/5 border-orange-500/20"
                                                        : "bg-muted/40"
                                                    }
                                    `}
                                            >
                                                <div
                                                    className={
                                                        isFeatured
                                                            ? "text-orange-500"
                                                            : "text-muted-foreground"
                                                    }
                                                >
                                                    {feature.icon}
                                                </div>
                                            </div>

                                            <Badge
                                                variant="outline"
                                                className={`
                                        text-[10px] uppercase tracking-wider px-2.5 py-0.5
                                        ${feature.statusClass}
                                        ${isFeatured ? "border-orange-500/20" : ""}
                                    `}
                                            >
                                                {feature.status}
                                            </Badge>
                                        </div>

                                        <CardTitle className="text-xl font-bold tracking-tight group-hover:text-foreground transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </div>

                                {/* CTA only where it matters */}
                                {feature.id === "photos" && (
                                    <CardFooter className="pt-0">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="
                                    w-full justify-between
                                    hover:border-orange-500/40 hover:bg-orange-500/5
                                    transition-all
                                "
                                        >
                                            <a href="/photos">
                                                Explore module
                                                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </Button>
                                    </CardFooter>
                                )}
                            </Card>
                        );
                    })}
                </div>
            </section>

            <YamlPreview />

            {/* Steps */}
            <section className="relative border-t border-zinc-800 bg-zinc-950/40 overflow-hidden">
                {/* Subtle grid accent background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                <div className="relative max-w-6xl mx-auto px-6 py-24 z-10">
                    {/* Section Heading Accent if you need one, otherwise remove this div */}
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500/80 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                            Deployment Pipeline
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                        {steps.map((item, index) => (
                            <div
                                key={item.step}
                                className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm group hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Visual Connecting Line Accent (Hidden on mobile, stops at the last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[calc(1.5rem+3rem)] right-[-1.5rem] h-[1px] bg-gradient-to-r from-zinc-800 to-transparent z-0 group-hover:from-orange-500/30 transition-all duration-500" />
                                )}

                                {/* Step Number Circle Accent */}
                                <div className="relative z-10 w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 shadow-inner group-hover:border-orange-500/40 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.15)] transition-all duration-300">
                                    <span className="text-zinc-400 font-mono text-xs font-bold tracking-tight group-hover:text-orange-400 transition-colors">
                                        {item.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-grow">
                                    <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Indicator Dash Accent */}
                                <div className="w-6 h-[2px] bg-zinc-800 mt-6 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Order */}
            <section className="border-t">
                <div className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Badge className="bg-muted text-muted-foreground border-border mb-4">
                            Limited Founder’s Edition
                        </Badge>

                        <h2 className="text-4xl font-bold mb-6">
                            One-time cost. <br />
                            Lifetime sovereignty.
                        </h2>

                        <p className="text-muted-foreground mb-8">
                            No monthly fees. Just hardware running open systems.
                        </p>

                        <ul className="space-y-4">
                            {[
                                { icon: Box, text: "High-quality Compute Hardware" },
                                { icon: Zap, text: "Protective Housing & Power" },
                                { icon: Globe, text: "Ethernet Cable Included" },
                                { icon: Cpu, text: "Pre-loaded Software Stack" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <item.icon className="w-5 h-5 text-orange-500" />
                                    <span>{item.text}</span>
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
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-5xl aspect-video bg-black border rounded-2xl overflow-hidden">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                            ✕
                        </button>

                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/HaWhwNRAgLo?autoplay=1"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </Layout>
    );
}
