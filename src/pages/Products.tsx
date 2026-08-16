import { Server, Shield, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    return (
        <Layout title="PageKey Products" description="Hardware, software, and tools built for individuals and businesses who want to take back control of their infrastructure.">
            {/* Hero Section */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">
                    Build technology you <span className="text-orange-600">actually own.</span>
                </h1>
                
                <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Practical hardware, software, and tools built for individuals and businesses who want to take back control of their infrastructure.
                </p>
            </section>

            {/* Products Grid */}
            <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {/* HexBox */}
                    <Card className="flex flex-col border-orange-500/30 shadow-sm transition-all hover:border-orange-500/50 hover:shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Server className="h-8 w-8 text-orange-600" />
                                <Badge className="bg-orange-600 text-white hover:bg-orange-600">Flagship</Badge>
                            </div>
                            <CardTitle className="text-2xl">HexBox</CardTitle>
                            <CardDescription className="text-base text-foreground font-medium">Local-first automation platform.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">
                                Turns your local-first infrastructure into something tangible. Build automations, run services, and keep critical systems under your control, rather than depending on the cloud.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white" asChild>
                                <Link to="/hexbox">
                                    Explore HexBox
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* PageKey VPN */}
                    <Card className="flex flex-col transition-all hover:border-border/80">
                        <CardHeader>
                            <Shield className="mb-4 h-8 w-8 text-orange-500" />
                            <CardTitle className="text-2xl">PageKey VPN</CardTitle>
                            <CardDescription className="text-base">Secure network access.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">
                                Pre-configured WireGuard VPN access. Bypass firewalls, access your local services remotely, and stay secure without managing your own VPS or navigating complicated network setups.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                                <Link to="/vpn">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Hardware Kits */}
                    <Card className="flex flex-col transition-all hover:border-border/80">
                        <CardHeader>
                            <Cpu className="mb-4 h-8 w-8 text-orange-500" />
                            <CardTitle className="text-2xl">Hardware Kits</CardTitle>
                            <CardDescription className="text-base">Learn electronics by doing.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">
                                Starter electronics and hardware kits designed to help you understand the physical foundations of computing, from simple circuits to microcontrollers.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full" disabled>
                                Coming Soon
                            </Button>
                        </CardFooter>
                    </Card>

                </div>
            </section>
        </Layout>
    );
}
