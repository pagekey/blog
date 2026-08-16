import { MessageSquare, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import WaitlistCard from "@/components/WaitlistCard";

export default function SignupPage() {
    return (
        <Layout title="Sign Up — PageKey" description="Join the PageKey mailing list and community.">
            <section className="mx-auto max-w-3xl px-6 py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-6">
                    Join PageKey
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Be the first to know about new products, devlogs, and educational content.
                </p>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-12 pb-24">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Newsletter Signup */}
                    <div className="flex flex-col h-full">
                        <WaitlistCard
                            apiEndpoint="https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler"
                            newsletter="pagekey"
                            title="The Mailing List"
                            subtitle="Sign up for the email newsletter and receive new PageKey content directly to your inbox."
                            label="Email Address"
                            buttonText="Sign Up"
                            successTitle="You're on the list!"
                            successDescription="You'll hear from us soon with the latest content."
                            errorTitle="Something went wrong"
                            errorDescription="We couldn't save your email. Please try again or let us know at hello@pagekey.io"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* YouTube Channel */}
                        <Card className="flex flex-col border-border/80 shadow-sm transition-all">
                            <CardHeader className="text-center md:text-left">
                                <div className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 mb-4">
                                    <Video className="h-6 w-6 text-red-500" />
                                </div>
                                <CardTitle className="text-2xl">Watch on YouTube</CardTitle>
                                <CardDescription className="text-base text-muted-foreground">
                                    Video devlogs, tutorials, and deep dives.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <p className="text-muted-foreground mb-8 text-center md:text-left">
                                    Subscribe to the PageKey channel to follow along as we build hardware, explore software, and document the process.
                                </p>
                                <Button variant="outline" className="w-full hover:bg-red-500/5 hover:text-red-500 hover:border-red-500/30 transition-colors" asChild>
                                    <a href="https://youtube.com/@PageKey" target="_blank" rel="noreferrer">
                                        Subscribe to YouTube
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Discord Community */}
                        <Card className="flex flex-col border-border/80 shadow-sm transition-all">
                            <CardHeader className="text-center md:text-left">
                                <div className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2]/10 mb-4">
                                    <MessageSquare className="h-6 w-6 text-[#5865F2]" />
                                </div>
                                <CardTitle className="text-2xl">Join the Community</CardTitle>
                                <CardDescription className="text-base text-muted-foreground">
                                    Make some friends with other people who want to Take Back Tech.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <p className="text-muted-foreground mb-8 text-center md:text-left">
                                    Hop into our Discord server to ask questions, share what you're building, and hang out with the PageKey community.
                                </p>
                                <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
                                    <a href="https://discord.gg/5m5yFgDPF5" target="_blank" rel="noreferrer">
                                        Join the Discord
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
