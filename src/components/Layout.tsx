import pageKeyLogo from '@/assets/logo_dark.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, title, description }: { children: React.ReactNode, title?: string, description?: string }) {
    const currentYear = new Date().getFullYear();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (title) {
            document.title = title;
        } else {
            document.title = "PageKey — Take Back Tech";
        }
        
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);
        }
    }, [title, description]);

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

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 text-foreground hover:text-orange-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/products" className="transition-colors hover:text-orange-500">
                            Products
                        </Link>
                        <Link to="/consulting" className="transition-colors hover:text-orange-500">
                            Consulting
                        </Link>
                        <a href="/blog" className="transition-colors hover:text-orange-500">
                            Blog
                        </a>
                        <Link to="/events" className="transition-colors hover:text-orange-500">
                            Events
                        </Link>
                        <Link to="/about" className="transition-colors hover:text-orange-500">
                            About
                        </Link>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-background">
                        <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
                            <Link to="/products" className="transition-colors hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                Products
                            </Link>
                            <Link to="/consulting" className="transition-colors hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                Consulting
                            </Link>
                            <a href="/blog" className="transition-colors hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                Blog
                            </a>
                            <Link to="/events" className="transition-colors hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                Events
                            </Link>
                            <Link to="/about" className="transition-colors hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                About
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-1">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="border-t py-6 md:py-0">
                <div className="mx-auto flex flex-col md:flex-row h-auto md:h-16 max-w-6xl items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
                    <p>&copy; {currentYear} PageKey Solutions LLC. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="tel:609-521-8918" className="hover:text-foreground transition-colors">609-521-8918</a>
                        <span className="opacity-50">&bull;</span>
                        <a href="mailto:hello@pagekey.io" className="hover:text-foreground transition-colors">hello@pagekey.io</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
