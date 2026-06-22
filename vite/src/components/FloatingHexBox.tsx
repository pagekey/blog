export default function FloatingHexBox() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
            {/* Container for the 3D effect */}
            <div className="relative w-full h-full preserve-3d animate-float">

                {/* The Outer Glow Layer */}
                <div className="absolute inset-0 hex-clip bg-blue-500/20 blur-2xl animate-pulse" />

                {/* The "Bottom" Layer (Depth) */}
                <div className="absolute inset-0 translate-z-[-20px] hex-clip bg-slate-800 border-2 border-slate-700 opacity-50" />

                {/* The Main Body (Glass Layer) */}
                <div className="absolute inset-0 hex-clip bg-slate-900/80 backdrop-blur-xl border-2 border-blue-500/30 flex items-center justify-center overflow-hidden">

                    {/* Internal "Circuitry" Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#3b82f6_12%,transparent_12.5%,transparent_87%,#3b82f6_87.5%,#3b82f6),linear-gradient(150deg,#3b82f6_12%,transparent_12.5%,transparent_87%,#3b82f6_87.5%,#3b82f6),linear-gradient(30deg,#3b82f6_12%,transparent_12.5%,transparent_87%,#3b82f6_87.5%,#3b82f6),linear-gradient(150deg,#3b82f6_12%,transparent_12.5%,transparent_87%,#3b82f6_87.5%,#3b82f6),linear-gradient(60deg,#3b82f6_25%,transparent_25.5%,transparent_75%,#3b82f6_75%,#3b82f6),linear-gradient(60deg,#3b82f6_25%,transparent_25.5%,transparent_75%,#3b82f6_75%,#3b82f6)] bg-[length:20px_35px]" />

                    {/* The "Core" (The observability engine) */}
                    <div className="relative z-10 w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                        <div className="w-12 h-12 bg-blue-400 rounded-sm rotate-45 animate-spin-slow shadow-inner" />
                    </div>
                </div>

                {/* Reflection Highlight */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div
                    className="absolute inset-0 hex-clip bg-slate-800 border-2 border-slate-700 opacity-50"
                    style={{ transform: 'translateZ(-20px)' }}
                />
            </div>
        </div>
    );
}
