import { ArrowUpRight, Code, Mail, MessageSquare, Phone, Video } from "lucide-react";
import Layout from "@/components/Layout";
import MailingListSignup from "@/components/MailingListSignup";

const channels = [
  { icon: Video, label: "YouTube", href: "https://youtube.com/@PageKey" },
  { icon: MessageSquare, label: "Discord", href: "https://discord.gg/5m5yFgDPF5" },
  { icon: Code, label: "GitHub", href: "https://github.com/pagekey" },
];

export default function ContactPage() {
  return (
    <Layout
      title="Contact | PageKey"
      description="Contact PageKey about HexBox Photos, physical products, or small-batch custom manufacturing."
    >
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          Contact PageKey
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
          Let&apos;s talk about what you need to make.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Ask about HexBox Photos, physical products, or a practical custom
          manufacturing idea. For manufacturing, it helps to include the
          purpose, quantity, dimensions, and any sketches or references.
        </p>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto grid max-w-5xl md:grid-cols-2">
          <div className="p-8 md:border-r md:border-white/10 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
              Get in touch
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white">
              Start a conversation.
            </h2>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@pagekey.io"
                className="flex items-center gap-3 border border-orange-400/70 px-5 py-4 text-lg font-semibold text-orange-200 transition-colors hover:bg-orange-400 hover:text-zinc-950"
              >
                <Mail className="h-5 w-5" />
                hello@pagekey.io
              </a>
              <a
                href="tel:609-521-8918"
                className="flex items-center gap-3 border border-white/20 px-5 py-4 text-lg font-semibold text-white transition-colors hover:border-orange-300 hover:text-orange-200"
              >
                <Phone className="h-5 w-5" />
                (609) 521-8918
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 p-8 md:border-t-0 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
              PageKey mailing list
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white">
              Stay in the loop.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
              Get occasional updates on products and the work PageKey is doing.
            </p>
            <div className="mt-7">
              <MailingListSignup id="contact-email-signup" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">Follow PageKey elsewhere.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {channels.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-orange-200"
              >
                <Icon className="h-4 w-4 text-orange-400" aria-hidden="true" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
