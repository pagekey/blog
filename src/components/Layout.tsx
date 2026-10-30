import pageKeyLogo from '@/assets/logo_dark.svg';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, title, description }: { children: React.ReactNode, title?: string, description?: string }) {
    const currentYear = new Date().getFullYear();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const pageTitle = title ?? "PageKey | Take Back Tech";
        const pageDescription = description ?? "PageKey designs, builds, and manufactures practical products and technology that put people back in control.";
        document.title = pageTitle;

        const setMeta = (selector: string, attribute: string, content: string) => {
            let meta = document.querySelector(selector);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, selector.includes('property=') ? 'property' : 'name');
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        setMeta('meta[name="description"]', 'name', pageDescription);
        setMeta('meta[property="og:title"]', 'property', pageTitle);
        setMeta('meta[property="og:description"]', 'property', pageDescription);
        setMeta('meta[property="og:type"]', 'property', 'website');
        setMeta('meta[name="twitter:card"]', 'name', 'summary');
    }, [title, description]);

    return (
        <div className="min-h-screen bg-background text-foreground antialiased flex flex-col selection:bg-orange-500/20 selection:text-orange-600">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
            <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur">
                <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
                    <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight hover:opacity-90 transition-opacity">
                        <img
                            src={pageKeyLogo}
                            alt="PageKey Logo"
                            className="h-8 w-8 block object-contain"
                        />
                        <span className="leading-none" style={{ marginBottom: "0.2rem" }}>PageKey</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 text-foreground hover:text-orange-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium">
                        {[
                            ["/products", "Products"], ["/manufacturing", "Manufacturing"], ["/mission", "Mission"], ["/contact", "Contact"]
                        ].map(([to, label]) => (
                            <NavLink key={to} to={to} className={({ isActive }) => `transition-colors hover:text-orange-400 ${isActive ? "text-orange-400" : "text-zinc-300"}`}>
                                {label}
                            </NavLink>
                        ))}
                        <NavLink to="/hexbox" className="border border-orange-400/70 px-3.5 py-2 text-orange-300 transition-colors hover:bg-orange-400 hover:text-zinc-950">HexBox</NavLink>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-background">
                        <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
                            {[["/products", "Products"], ["/manufacturing", "Manufacturing"], ["/mission", "Mission"], ["/contact", "Contact"], ["/hexbox", "HexBox Photos"]].map(([to, label]) => (
                                <NavLink key={to} to={to} className="transition-colors hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>{label}</NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content Wrapper */}
            <main id="main-content" className="flex-1">
                {children}
            </main>

            <footer className="border-t border-white/10">
                <div className="mx-auto flex flex-col md:flex-row min-h-24 max-w-7xl items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground">
                    <p>&copy; {currentYear} PageKey Solutions LLC.</p>
                    <div className="flex items-center gap-5">
                        <a href="mailto:hello@pagekey.io" className="hover:text-orange-300 transition-colors">hello@pagekey.io</a>
                        <a href="/blog" className="hover:text-orange-300 transition-colors">Blog</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
