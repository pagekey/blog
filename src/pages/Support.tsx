import { Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";

export default function SupportPage() {
  return (
    <Layout
      title="Support | PageKey"
      description="Get help from PageKey by email or phone."
    >
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          PageKey support
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
          We&apos;re here to help.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
          If you need anything, get in touch with us by email or phone.
        </p>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
            Get in touch
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white">
            Contact support.
          </h2>
          <div className="mt-8 max-w-md space-y-3">
            <a
              href="mailto:support@pagekey.io"
              className="flex items-center gap-3 border border-orange-400/70 px-5 py-4 text-lg font-semibold text-orange-200 transition-colors hover:bg-orange-400 hover:text-zinc-950"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              support@pagekey.io
            </a>
            <a
              href="tel:609-521-8918"
              className="flex items-center gap-3 border border-white/20 px-5 py-4 text-lg font-semibold text-white transition-colors hover:border-orange-300 hover:text-orange-200"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (609) 521-8918
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
