import { Button } from "@/components/ui/button";
import { Mail, ChevronRight, Loader2, CheckCircle, AlertTriangle, ShoppingCart, Globe, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

interface OrderCardProps {
    apiEndpoint: string;
    stripeCheckoutUrl: string;
}

export default function OrderCard({ apiEndpoint, stripeCheckoutUrl }: OrderCardProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Derived state: Calculate inline instead of using useEffect to prevent double-renders
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid = emailRegex.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || status === 'loading') return;

        setStatus('loading');

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    newsletter: "hexbox-waitlist",
                    metadata: {}
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="relative group max-w-md mx-auto w-full">
            {/* Premium Outer Glow Layer */}
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500/10 to-amber-500/20 rounded-2xl blur-md group-hover:blur-lg group-hover:from-orange-500/20 group-hover:to-amber-500/30 transition-all duration-500" />

            <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[440px] flex flex-col justify-center transition-all duration-300">

                {/* Top Context Badges */}
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

                {/* UI Dynamic States Wrapper */}
                <div className="relative z-10 mt-6">

                    {/* LOADING STATE */}
                    {status === 'loading' && (
                        <div className="flex flex-col items-center justify-center gap-3 text-zinc-400 text-center py-12 min-h-[300px]">
                            <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
                            <p className="font-mono text-xs tracking-wider text-zinc-500 uppercase">Securing your spot...</p>
                        </div>
                    )}

                    {/* SUCCESS STATE */}
                    {status === 'success' && (
                        <div className="flex flex-col items-center justify-center gap-4 text-center py-8 min-h-[300px] animate-in fade-in zoom-in-95 duration-300">
                            <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">You're on the list!</h3>
                            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                                If we build another unit or this sale falls through, you'll be the first to know.
                            </p>
                        </div>
                    )}

                    {/* ERROR STATE */}
                    {status === 'error' && (
                        <div className="flex flex-col items-center justify-center gap-4 text-center py-8 min-h-[300px] animate-in fade-in zoom-in-95 duration-300">
                            <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                                <AlertTriangle className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Something went wrong</h3>
                            <p className="text-zinc-400 text-sm max-w-xs mb-2">
                                We couldn't reserve your spot. Please refresh and try again.
                            </p>
                            <Button
                                onClick={() => setStatus('idle')}
                                variant="outline"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 text-xs font-mono uppercase"
                            >
                                Try Again
                            </Button>
                        </div>
                    )}

                    {/* IDLE / DEFAULT FORM STATE */}
                    {status === 'idle' && (
                        <div className="flex flex-col gap-6 animate-in fade-in duration-300">

                            {/* Purchase Action Section */}
                            <div className="text-center">
                                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                                    Claim the HexBox
                                </h3>
                                <p className="text-amber-500/90 text-xs font-mono mb-6 uppercase tracking-wider">
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

                            {/* Separator Line */}
                            <div className="relative flex py-2 items-center select-none">
                                <div className="flex-grow border-t border-zinc-800"></div>
                                <span className="flex-shrink mx-4 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                                    Missed It?
                                </span>
                                <div className="flex-grow border-t border-zinc-800"></div>
                            </div>

                            {/* Email Waitlist Form */}
                            <form onSubmit={handleSubmit} className="space-y-3 text-left">
                                <div className="space-y-2">
                                    <Label htmlFor="email-input" className="text-zinc-500 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider">
                                        <Mail className="w-3.5 h-3.5 text-orange-500/80" />
                                        Get notified if we drop another
                                    </Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="email-input"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="bg-zinc-950/80 border-zinc-800 focus:border-orange-500/50 focus:ring-orange-500/20 text-white h-11 rounded-lg flex-1 transition-all"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={!isFormValid}
                                            className="bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-800/40 text-zinc-200 disabled:text-zinc-600 font-semibold h-11 transition-all group gap-1 px-4 border border-zinc-700/60 disabled:border-zinc-800 rounded-lg"
                                        >
                                            <span>Notify Me</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
