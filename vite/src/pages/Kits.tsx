import { Cpu, Zap, Radio, ArrowRight, PackageCheck, Construction } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Layout from "@/components/Layout";

const kits = [
    {
        id: "breadboard",
        name: "Starter Breadboard Kit",
        price: "$15.99",
        description:
            "Perfect for absolute beginners. Includes a breadboard, jumper wires, LEDs, resistors, and a power supply module.",
        icon: <Zap className="w-6 h-6" />,
        tag: "Beginner",
    },
    {
        id: "arduino",
        name: "Arduino Starter Kit",
        price: "$34.99",
        description:
            "Take your first steps into microcontrollers. Comes with an Arduino Uno R3 clone, various sensors, motors, and a detailed guide.",
        icon: <Cpu className="w-6 h-6" />,
        tag: "Most Popular",
    },
    {
        id: "rpi",
        name: "Raspberry Pi 4 IoT Kit",
        price: "$129.99",
        description:
            "Build the Internet of Things. Features a Raspberry Pi 4 (4GB), breadboard, environmental sensors, and a camera module.",
        icon: <Radio className="w-6 h-6" />,
        tag: "Advanced",
    },
];

export default function KitsPage() {
    return (
        <Layout>
            {/* Under-construction notice */}
            <div className="w-full border-b border-amber-500/20 bg-amber-500/10">
                <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-6 py-2.5 text-center text-xs font-medium text-amber-600 md:text-sm">
                    <Construction className="h-4 w-4 shrink-0" />
                    <span>
                        This page is under construction — kits aren't available for purchase yet. Nothing here is live.
                    </span>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-orange-500/10 border-orange-500/20 text-orange-500"
                    >
                        Electronics Kits
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        Build It Yourself.
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                            Own What You Make.
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                        Start your hardware journey today with our curated selection of
                        sample electronics kits. Everything you need to go from zero to
                        soldering iron in a single box.
                    </p>
                </div>
            </section>

            {/* Kits Grid */}
            <section className="mx-auto max-w-6xl px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {kits.map((kit) => (
                        <Card
                            key={kit.id}
                            className="relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:ring-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5"
                        >
                            <div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="mb-4 p-2 rounded-lg border bg-orange-500/5 border-orange-500/20 text-orange-500">
                                            {kit.icon}
                                        </div>

                                        <Badge
                                            variant="outline"
                                            className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 bg-muted text-muted-foreground border-border"
                                        >
                                            {kit.tag}
                                        </Badge>
                                    </div>

                                    <CardTitle className="text-xl font-bold tracking-tight group-hover:text-foreground transition-colors">
                                        {kit.name}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {kit.description}
                                    </p>

                                    <p className="mt-6 text-3xl font-black tracking-tight">
                                        {kit.price}
                                    </p>
                                </CardContent>
                            </div>

                            <CardFooter className="pt-0">
                                <Button
                                    disabled
                                    className="w-full justify-between bg-orange-600 hover:bg-orange-500 text-white transition-colors"
                                >
                                    Coming Soon
                                    <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Reassurance strip */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase">
                    <span className="flex items-center gap-2">
                        <PackageCheck className="w-4 h-4 text-orange-500" /> Ships Worldwide
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Beginner Friendly
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Open Source Guides
                    </span>
                </div>
            </section>
        </Layout>
    );
}
