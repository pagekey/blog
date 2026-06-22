import { Button } from "@/components/ui/button";
import { Mail, ChevronRight, Loader2, CheckCircle, AlertTriangle, ShoppingCart, Globe, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";

interface OrderCardProps {
    apiEndpoint: string;
    stripeCheckoutUrl: string;
}

export default function OrderCard({ apiEndpoint, stripeCheckoutUrl }: OrderCardProps) {
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsFormValid(emailRegex.test(email));
    }, [email]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

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

            if (response.status === 200) {
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
            <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur group-hover:bg-blue-500/30 transition duration-1000"></div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-center">

                {/* Status Indicator & Shipping Constraint */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <Globe className="w-3.5 h-3.5 text-slate-500" />
                        <span>USA Shipping Only</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Edition of 1</span>
                    </div>
                </div>

                <div className="relative z-10 mt-4">
                    {/* UI State Management */}
                    {status === 'loading' && (
                        <div className="flex flex-col items-center gap-4 text-slate-400 text-center py-8">
                            <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
                            <p className="font-mono text-sm">Processing request...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="flex flex-col items-center gap-4 text-emerald-400 animate-in fade-in text-center py-8">
                            <CheckCircle className="w-16 h-16" />
                            <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
                            <p className="text-slate-300 text-sm">If we build another or this sale falls through, you'll be the first to know.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex flex-col items-center gap-4 text-red-400 animate-in fade-in text-center py-8">
                            <AlertTriangle className="w-16 h-16" />
                            <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
                            <p className="text-slate-300 text-sm">Please refresh and try again.</p>
                        </div>
                    )}

                    {/* Default / Form State */}
                    {(status === 'idle' || status === 'loading' || status === 'error') && (
                        <div className="flex flex-col gap-6">

                            {/* Purchase / Buy section */}
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white tracking-tight mb-2">
                                    Claim the HexBox
                                </h3>
                                <p className="text-amber-400/90 text-xs font-mono mb-5 uppercase tracking-wide">
                                    Exactly one unique unit built & available.
                                </p>
                                <a
                                    href={stripeCheckoutUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 h-14 text-lg font-bold rounded-md text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 gap-2"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Buy Founder's Edition 1/1
                                </a>
                            </div>

                            {/* Separator Line */}
                            <div className="relative flex py-1 items-center">
                                <div className="flex-grow border-t border-slate-800"></div>
                                <span className="flex-shrink mx-4 text-slate-500 text-xs font-mono uppercase tracking-wider">Missed It?</span>
                                <div className="flex-grow border-t border-slate-800"></div>
                            </div>

                            {/* Email Waitlist Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <div className="space-y-2">
                                    <Label htmlFor="email-input" className="text-slate-400 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                                        <Mail className="w-4 h-4 text-blue-400" />
                                        Get notified if we drop another
                                    </Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="email-input"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="bg-slate-950 border-slate-700 text-white flex-1"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={!isFormValid || status === 'loading'}
                                            className="bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all group gap-1 disabled:opacity-50 disabled:cursor-not-allowed px-4 border border-slate-700"
                                        >
                                            {status === 'loading' ? "..." : "Notify Me"}
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
