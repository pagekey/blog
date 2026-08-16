import { Terminal, Users, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

export default function AboutPage() {
    return (
        <Layout title="About — PageKey" description="PageKey is a technology ecosystem built around the idea of taking back control of technology through products, consulting, education, and community.">
            <section className="mx-auto max-w-3xl px-6 py-24">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-12">
                    About PageKey
                </h1>

                <div className="prose prose-lg dark:prose-invert prose-orange max-w-none text-muted-foreground">
                    <p className="text-xl text-foreground font-medium mb-8">
                        PageKey exists because technology has become too opaque, too centralized, and too difficult for regular people to truly own.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Take Back Tech</h2>
                    <p>
                        We rely on software and hardware for almost everything, yet we understand less about how it works than ever before. We rent our infrastructure from a handful of massive cloud providers. When services go down, or prices spike, or features are removed, we are entirely dependent on their decisions.
                    </p>
                    <p>
                        <strong>"Take Back Tech"</strong> is a simple idea: technology should be something you can understand, control, and build yourself. It favors local-first architecture, open-source principles, and systems that you can physically touch and repair.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">What We Do</h2>
                    <p>
                        To make that philosophy practical, PageKey operates across several areas:
                    </p>
                    <ul className="list-none pl-0 space-y-4 my-6">
                        <li className="flex items-start gap-3">
                            <Terminal className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-foreground">Products:</strong> Building hardware like HexBox and tools that allow individuals to run their own infrastructure.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-foreground">Consulting:</strong> Helping businesses solve practical problems with sensible, well-engineered technology rather than over-hyped trends.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <BookOpen className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-foreground">Education & Community:</strong> Publishing devlogs, writing technical articles, and hosting local events so people can learn how to build things from scratch.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Who is Steve?</h2>
                    <p>
                        PageKey is primarily driven by Steve, an engineer and builder. He started PageKey as a place to document experiments, share knowledge, and build tools that aligned with the idea of computing independence. Today, he leads the consulting practice and continues to build the products, content, and community that make up the PageKey ecosystem.
                    </p>

                    <p className="mt-12 text-lg text-foreground">
                        Have a project in mind, or just want to connect? <a href="mailto:hello@pagekey.io" className="text-orange-600 hover:text-orange-500 underline underline-offset-4 font-medium">Reach out anytime.</a>
                    </p>
                </div>
            </section>
        </Layout>
    );
}
