import { ArrowRight, Box, Camera, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import MailingListSignup from "@/components/MailingListSignup";

const ArrowLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200">
        {children}<ArrowRight className="h-4 w-4" />
    </Link>
);

export default function HomePage() {
    return (
        <Layout title="PageKey | Take Back Tech" description="PageKey designs, builds, and manufactures practical products and technology that put people back in control.">
            <section className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
                    <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Independent technology, design, and manufacturing</p>
                    <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl md:text-8xl">Take Back Tech.</h1>
                    <p className="mt-8 max-w-2xl text-2xl leading-snug text-zinc-200 md:text-3xl">Useful things. Built with purpose. Made to be yours.</p>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">PageKey designs, builds, and manufactures practical products and technology that put people back in control.</p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <Link to="/hexbox" className="inline-flex items-center justify-center gap-2 bg-orange-400 px-5 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-orange-300">Explore HexBox Photos <ArrowRight className="h-4 w-4" /></Link>
                        <Link to="/products" className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-orange-300 hover:text-orange-200">View physical products</Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl border-x border-white/10 md:grid-cols-2">
                <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-12 lg:p-16">
                    <Camera className="h-7 w-7 text-orange-400" aria-hidden="true" />
                    <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Flagship technology product</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">HexBox Photos</h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">A personal photo server designed around ownership, privacy, understandable operation, and safe backups. Your photos stay on hardware you control.</p>
                    <div className="mt-9"><ArrowLink to="/hexbox">Meet HexBox Photos</ArrowLink></div>
                </div>
                <div className="p-8 md:p-12 lg:p-16">
                    <Box className="h-7 w-7 text-orange-400" aria-hidden="true" />
                    <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Designed and made in small batches</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">Physical products</h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">Practical objects for everyday use. Custom 3D-printed ice scrapers are available now. License plate covers are in development.</p>
                    <div className="mt-9"><ArrowLink to="/products">See what we are making</ArrowLink></div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-zinc-900/35">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
                    <div><Wrench className="h-7 w-7 text-orange-400" aria-hidden="true" /></div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Custom manufacturing</p>
                        <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Good ideas deserve a path to becoming real.</h2>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">PageKey works with individuals and small businesses on practical parts, prototypes, and small production runs. We help turn a useful need into something you can hold, test, and use.</p>
                        <div className="mt-9"><ArrowLink to="/manufacturing">How we work</ArrowLink></div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Why PageKey</p>
                    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Technology should serve people, not the other way around.</h2>
                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">We make things that favor ownership, independence, and practical understanding. That means technology you can operate yourself and products made with a clear purpose.</p>
                    <div className="mt-9"><ArrowLink to="/mission">Read the Take Back Tech mission</ArrowLink></div>
                </div>
            </section>

            <section className="border-t border-white/10 bg-zinc-900/35">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-end md:py-20">
                    <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Keep in touch</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">Follow what we&apos;re making.</h2><p className="mt-5 max-w-md leading-relaxed text-zinc-400">Get occasional notes about new products, HexBox, and the work behind PageKey.</p></div>
                    <MailingListSignup id="home-email-signup" />
                </div>
            </section>

            <section className="border-t border-white/10 bg-orange-400 text-zinc-950">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-end md:py-20">
                    <div><p className="text-xs font-bold uppercase tracking-[0.18em]">Have a practical project in mind?</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Let&apos;s make it useful.</h2></div>
                    <Link to="/contact" className="inline-flex items-center gap-2 border border-zinc-950 px-5 py-3 text-sm font-bold transition-colors hover:bg-zinc-950 hover:text-orange-300">Contact PageKey <ArrowRight className="h-4 w-4" /></Link>
                </div>
            </section>
        </Layout>
    );
}
