import { ShoppingCart, Globe, Sparkles } from "lucide-react";

import WaitlistCard from "@/components/WaitlistCard";

interface OrderCardProps {
    apiEndpoint: string;
    stripeCheckoutUrl: string;
}

export default function OrderCard({
    apiEndpoint,
    stripeCheckoutUrl,
}: OrderCardProps) {
    return (
        <div className="relative group max-w-md mx-auto w-full">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500/10 to-amber-500/20 rounded-2xl blur-md group-hover:blur-lg group-hover:from-orange-500/20 group-hover:to-amber-500/30 transition-all duration-500" />

            <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300">

                {/* Header */}
                <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest font-semibold select-none">
                    <div className="flex items-center gap-1.5 text-zinc-500">
                        <Globe className="w-3.5 h-3.5 text-zinc-600" />
                        <span>USA Shipping Only</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-amber-500/90 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        <Sparkles className="w-3 h-3" />
                        <span>Edition of 1</span>
                    </div>
                </div>

                <div className="relative z-10 mt-6 flex flex-col gap-8">

                    {/* Purchase Section */}

                    <div className="text-center">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                            Claim the HexBox
                        </h3>

                        <p className="text-amber-500/90 text-xs font-mono uppercase tracking-wider mb-6">
                            Exactly one unique unit built & available.
                        </p>

                        <a
                            href={stripeCheckoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-500 h-14 text-base font-bold rounded-xl text-white shadow-[0_4px_20px_rgba(234,88,12,0.25)] hover:shadow-[0_4px_25px_rgba(234,88,12,0.4)] transition-all active:scale-[0.98] gap-2.5 group"
                        >
                            <ShoppingCart className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                            Buy Founder's Edition 1/1
                        </a>
                    </div>

                    {/* Divider */}

                    <div className="relative flex items-center select-none">
                        <div className="flex-grow border-t border-zinc-800" />
                        <span className="mx-4 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                            Missed It?
                        </span>
                        <div className="flex-grow border-t border-zinc-800" />
                    </div>

                    {/* Waitlist */}

                    <WaitlistCard
                        apiEndpoint={apiEndpoint}
                        newsletter="hexbox-waitlist"
                        title="Get notified if we build another"
                        subtitle="Reserve your place in line for the next production run."
                        label="Email Address"
                        buttonText="Notify Me"
                        successTitle="You're on the list!"
                        successDescription="If another HexBox becomes available, you'll be among the first to know."
                        errorTitle="Something went wrong"
                        errorDescription="We couldn't save your email. Please try again."
                    />

                </div>
            </div>
        </div>
    );
}
