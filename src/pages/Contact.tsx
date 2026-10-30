import { Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import MailingListSignup from "@/components/MailingListSignup";

export default function ContactPage() {
  return (
    <Layout
      title="Contact | PageKey"
      description="Contact PageKey about HexBox Photos, physical products, or small-batch custom manufacturing."
    >
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-32">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          Contact PageKey
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
          Let&apos;s talk about what you need to make.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
          For HexBox Photos, physical product questions, or a practical custom
          manufacturing idea, contact PageKey directly. Include enough context
          to make the first conversation useful.
        </p>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
          <a
            href="mailto:hello@pagekey.io"
            className="inline-flex items-center gap-3 border border-orange-400/70 px-5 py-4 text-lg font-semibold text-orange-200 transition-colors hover:bg-orange-400 hover:text-zinc-950"
          >
            <Mail className="h-5 w-5" />
            hello@pagekey.io
          </a>
          <a
            href="tel:609-521-8918"
            className="inline-flex items-center gap-3 border border-white/20 px-5 py-4 text-lg font-semibold text-white transition-colors hover:border-orange-300 hover:text-orange-200"
          >
            <Phone className="h-5 w-5" />
            (609) 521-8918
          </a>
        </div>
        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-white">Products</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Ask about current availability.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Manufacturing</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Share the purpose, quantity, dimensions, and any sketches or
              references.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">HexBox Photos</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Ask about the personal photo server and getting started.
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
            PageKey Mailing List
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white">
            Stay in the loop.
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Get occasional updates on products and the work PageKey is doing.
          </p>
          <div className="mt-7">
            <MailingListSignup id="contact-email-signup" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
