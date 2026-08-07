import { Shield, Server, Globe, Smartphone, Check, CloudOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import WaitlistCard from "@/components/WaitlistCard";

export default function VPNPage() {
    const features = [
        {
            title: "WireGuard",
            description:
                "The exact VPN technology featured throughout the PageKey videos. Fast, modern, and open source.",
            icon: Shield,
        },
        {
            title: "No VPS Required",
            description:
                "Skip creating AWS, DigitalOcean, or Oracle Cloud accounts. No Linux server maintenance or monthly surprise bills.",
            icon: Server,
        },
        {
            title: "Remote Access",
            description:
                "Securely access your self-hosted dashboards, media servers, and internal services from anywhere.",
            icon: Globe,
        },
        {
            title: "Every Device",
            description:
                "Works with Windows, Linux, macOS, Android, iPhone, Steam Deck, and routers using the official WireGuard apps.",
            icon: Smartphone,
        },
    ];

    return (
        <Layout>

            {/* Hero */}

            <section className="relative overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

                <div className="mx-auto max-w-5xl px-6 py-24 text-center">

                    <Badge
                        variant="outline"
                        className="mb-6 bg-orange-500/10 border-orange-500/20 text-orange-500"
                    >
                        Managed WireGuard VPN
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        The VPN From The Videos.
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                            Without Running Your Own Server.
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                        Want the security and convenience of WireGuard without
                        learning cloud infrastructure, renting a VPS, configuring
                        firewalls, renewing certificates, or maintaining another
                        Linux server?
                        <br /><br />
                        We already built it.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Button
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-500"
                            asChild
                        >
                            <a href="#Join">
                                Join the VPN
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                        >
                            <a href="/help">
                                Questions?
                            </a>
                        </Button>

                    </div>

                </div>

            </section>

            {/* Why */}

            <section className="mx-auto max-w-6xl px-6 py-20">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold">
                        You shouldn't need to become a cloud engineer.
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Setting up your own WireGuard server is absolutely worth
                        learning—but not everyone wants another VPS to maintain.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <Card className="border-red-500/20">
                        <CardContent className="p-8">

                            <div className="flex items-center gap-3 mb-6">
                                <CloudOff className="text-red-400" />
                                <h3 className="font-bold text-xl">
                                    The DIY Route
                                </h3>
                            </div>

                            <ul className="space-y-4 text-muted-foreground">

                                <li>• Rent a VPS</li>
                                <li>• Create a cloud account</li>
                                <li>• Secure the Linux server</li>
                                <li>• Configure networking</li>
                                <li>• Open firewall ports</li>
                                <li>• Rotate keys</li>
                                <li>• Maintain another machine forever</li>

                            </ul>

                        </CardContent>
                    </Card>

                    <Card className="border-orange-500/20">

                        <CardContent className="p-8">

                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="text-orange-500" />
                                <h3 className="font-bold text-xl">
                                    The PageKey Route
                                </h3>
                            </div>

                            <ul className="space-y-4">

                                {[
                                    "Create an account",
                                    "Download your WireGuard profile",
                                    "Import into the official app",
                                    "Connect",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 items-center"
                                    >
                                        <Check className="text-orange-500 w-4 h-4" />
                                        {item}
                                    </li>
                                ))}

                            </ul>

                        </CardContent>

                    </Card>

                </div>

            </section>

            {/* Features */}

            <section className="mx-auto max-w-6xl px-6 py-10">

                <div className="grid sm:grid-cols-2 gap-6">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <Card key={feature.title}>

                                <CardContent className="p-8">

                                    <Icon className="text-orange-500 mb-5" />

                                    <h3 className="font-bold text-xl">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>

                                </CardContent>

                            </Card>

                        );

                    })}

                </div>

            </section>

            {/* CTA */}

            <section
                id="Join"
                className="mx-auto max-w-4xl px-6 py-24"
            >

                <Card className="border-orange-500/20 bg-gradient-to-br from-card to-orange-500/[0.03]">

                    <CardContent className="p-12 text-center">

                        <Badge
                            variant="outline"
                            className="mb-6 bg-orange-500/10 border-orange-500/20 text-orange-500"
                        >
                            Monthly Membership
                        </Badge>

                        <h2 className="text-4xl font-bold">
                            Join the PageKey VPN
                        </h2>

                        <p className="mt-5 max-w-xl mx-auto text-muted-foreground leading-relaxed">
                            The same WireGuard architecture demonstrated on the
                            channel, professionally hosted so you don't have to
                            manage cloud servers, security updates, backups, or
                            infrastructure yourself.
                        </p>

                        <div className="mt-10 max-w-md mx-auto">
                            <WaitlistCard
                                apiEndpoint="https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler"
                                newsletter="vpn-waitlist"
                                title="Join the Waitlist"
                                subtitle="Be the first to know when the PageKey VPN launches."
                                label="Email Address"
                                buttonText="Join Waitlist"
                                successTitle="You're on the list!"
                                successDescription="We'll email you before the public launch and invite you to the first rollout."
                                errorTitle="Something went wrong"
                                errorDescription="We couldn't save your email. Please refresh and try again."
                            />
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Cancel anytime. Import your configuration into the
                            official WireGuard application in minutes.
                        </p>

                    </CardContent>

                </Card>

            </section>

        </Layout>
    );
}
