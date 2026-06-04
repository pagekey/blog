import pageKeyLogo from '@/assets/logo_dark.svg';

export default function Layout({ children }: any) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-background text-foreground antialiased flex flex-col selection:bg-orange-500/20 selection:text-orange-600">
            {/* Header Navigation */}
            <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    {/* Logo & Brand */}
                    <a href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight hover:opacity-90 transition-opacity">
                        <img
                            src={pageKeyLogo}
                            alt="PageKey Logo"
                            className="h-8 w-8 block object-contain"
                        />
                        <span className="leading-none" style={{ marginBottom: "0.2rem" }}>PageKey</span>
                    </a>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <a href="/blog" className="transition-colors hover:text-orange-500">
                            Blog
                        </a>
                        <a href="https://tryhexbox.com" className="transition-colors hover:text-orange-500">
                            HexBox
                        </a>
                    </nav>
                </div>
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-1">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="border-t py-6 md:py-0">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6 text-sm text-muted-foreground">
                    <p>© {currentYear} PageKey Solutions LLC. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
