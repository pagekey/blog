import { useState } from "react";
import {
    Mail,
    ChevronRight,
    Loader2,
    CheckCircle,
    AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WaitlistCardProps {
    apiEndpoint: string;

    newsletter: string;

    title: string;
    subtitle?: string;

    label?: string;
    placeholder?: string;
    buttonText?: string;

    successTitle: string;
    successDescription: string;

    errorTitle?: string;
    errorDescription?: string;

    metadata?: Record<string, unknown>;
}

export default function WaitlistCard({
    apiEndpoint,
    newsletter,

    title,
    subtitle,

    label = "Email Address",
    placeholder = "your@email.com",
    buttonText = "Join Waitlist",

    successTitle,
    successDescription,

    errorTitle = "Something went wrong",
    errorDescription = "Please refresh and try again.",

    metadata = {},
}: WaitlistCardProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid = emailRegex.test(email);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!isFormValid || status === "loading") {
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    newsletter,
                    metadata,
                }),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    if (status === "loading") {
        return (
            <div className="flex flex-col items-center justify-center gap-3 py-10">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Joining waitlist...
                </p>
            </div>
        );
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                    {successTitle}
                </h3>

                <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                    {successDescription}
                </p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertTriangle className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-white">
                    {errorTitle}
                </h3>

                <p className="text-sm text-zinc-400 max-w-sm">
                    {errorDescription}
                </p>

                <Button
                    variant="outline"
                    className="text-xs font-mono uppercase"
                    onClick={() => setStatus("idle")}
                >
                    Try Again
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-5">

            <div>
                <h3 className="text-xl font-bold text-white">
                    {title}
                </h3>

                {subtitle && (
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-3"
            >
                <div className="space-y-2">

                    <Label
                        htmlFor="waitlist-email"
                        className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500"
                    >
                        <Mail className="w-3.5 h-3.5 text-orange-500/80" />
                        {label}
                    </Label>

                    <div className="flex items-stretch gap-2">

                        <Input
                            id="waitlist-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={placeholder}
                            className="bg-zinc-950/80 border-zinc-800 focus:border-orange-500/50 focus:ring-orange-500/20 text-white h-11"
                        />

                        <Button
                            type="submit"
                            disabled={!isFormValid}
                            className="h-11 bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-800/40 border border-zinc-700 disabled:border-zinc-800 gap-1 text-white"
                        >
                            {buttonText}

                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>

                    </div>

                </div>
            </form>

        </div>
    );
}
