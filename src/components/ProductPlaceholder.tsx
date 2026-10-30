interface ProductPlaceholderProps {
    label: string;
    detail: string;
    variant?: "hardware" | "physical";
}

export default function ProductPlaceholder({ label, detail, variant = "physical" }: ProductPlaceholderProps) {
    return (
        <div className="relative isolate flex aspect-[4/3] overflow-hidden border border-white/10 bg-[#181818] p-5" aria-label={`${label} product photography placeholder`}>
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:28px_28px]" />
            {variant === "hardware" ? (
                <div className="relative m-auto h-[58%] w-[62%] border border-orange-300/70 bg-zinc-800 shadow-[14px_14px_0_rgba(0,0,0,.25)]">
                    <div className="absolute left-5 right-5 top-5 border-t border-white/20" />
                    <div className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-orange-400" />
                    <div className="absolute bottom-5 right-5 h-2 w-10 bg-zinc-600" />
                </div>
            ) : (
                <div className="relative m-auto h-[22%] w-[72%] -rotate-12 border border-orange-300/70 bg-zinc-700 shadow-[14px_14px_0_rgba(0,0,0,.25)]">
                    <div className="absolute -right-5 top-0 h-full w-5 border-y border-r border-orange-300/70 bg-zinc-600" />
                    <div className="absolute left-[16%] top-0 h-full w-px bg-white/20" />
                </div>
            )}
            <div className="absolute bottom-4 left-5 right-5 flex justify-between gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-zinc-500"><span>{label}</span><span>{detail}</span></div>
        </div>
    );
}
