import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

interface MailingListSignupProps {
    id: string;
}

export default function MailingListSignup({ id }: MailingListSignupProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!email || status === "loading") return;

        setStatus("loading");
        try {
            const response = await fetch("https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, newsletter: "pagekey", metadata: {} }),
            });
            setStatus(response.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return <p className="text-lg font-semibold text-orange-300" role="status">You&apos;re on the list. We&apos;ll be in touch.</p>;
    }

    return <form onSubmit={submit} className="max-w-lg" aria-describedby={`${id}-note`}>
        <label className="sr-only" htmlFor={id}>Email address</label>
        <div className="flex flex-col gap-3 sm:flex-row">
            <input id={id} type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" placeholder="you@example.com" className="min-h-12 flex-1 border border-white/20 bg-zinc-950 px-4 text-white placeholder:text-zinc-600 focus:border-orange-300 focus:outline-none" />
            <button type="submit" disabled={status === "loading"} className="inline-flex min-h-12 items-center justify-center gap-2 bg-orange-400 px-5 text-sm font-bold text-zinc-950 transition-colors hover:bg-orange-300 disabled:cursor-wait disabled:opacity-70">{status === "loading" ? "Signing up..." : "Sign up"}<ArrowRight className="h-4 w-4" /></button>
        </div>
        <p id={`${id}-note`} className={`mt-3 text-sm ${status === "error" ? "text-red-300" : "text-zinc-500"}`} aria-live="polite">{status === "error" ? "We couldn't save your email. Please try again or contact hello@pagekey.io." : "Occasional notes on new products and what PageKey is making."}</p>
    </form>;
}
