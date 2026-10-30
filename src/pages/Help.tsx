import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function HelpPage() {
  return (
    <Layout
      title="Help & Support | PageKey"
      description="Get direct help and support with PageKey products from our team."
    >
      <div className="relative overflow-hidden flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-12 text-center">
        {/* Subtle ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 blur-[120px]" />

        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <Badge
            variant="outline"
            className="mb-4 bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1 text-sm font-medium tracking-wide"
          >
            Support
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            How can we help?
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Have a question, hit a snag, or need assistance with our products?
            Reach out directly to our team. We're here to help you get things
            running smoothly.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white transition-colors text-base px-6 py-6 shadow-sm"
              asChild
            >
              <a href="mailto:support@pagekey.io">
                <Mail className="mr-2 h-5 w-5" />
                Email support@pagekey.io
              </a>
            </Button>

            <p className="mt-3 text-sm text-muted-foreground">
              We'll get back to you as soon as possible.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
            <div className="rounded-lg border border-border/60 bg-card/50 p-4">
              <h3 className="font-semibold text-sm text-card-foreground">
                Product Support
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Questions or troubleshooting for HexBox, PageKey VPN, or kits.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/50 p-4">
              <h3 className="font-semibold text-sm text-card-foreground">
                Setup & Guides
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Help following along with our documentation and tutorials.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/50 p-4">
              <h3 className="font-semibold text-sm text-card-foreground">
                General Inquiries
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Feedback, suggestions, or ideas for what we should build next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
