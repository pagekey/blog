import { Code, MessageSquare, Video } from "lucide-react";
import Layout from "@/components/Layout";
import MailingListSignup from "@/components/MailingListSignup";

const channels = [
  {
    icon: Video,
    name: "YouTube",
    description: "Video devlogs, tutorials, and deep dives.",
    href: "https://youtube.com/@PageKey",
  },
  {
    icon: MessageSquare,
    name: "Discord",
    description: "Talk with other people who want to Take Back Tech.",
    href: "https://discord.gg/5m5yFgDPF5",
  },
  {
    icon: Code,
    name: "GitHub",
    description: "Explore PageKey's code and work in the open.",
    href: "https://github.com/pagekey",
  },
];

export default function SignupPage() {
  return (
    <Layout
      title="Stay in Touch | PageKey"
      description="Sign up for occasional PageKey notes, product updates, and work in progress."
    >
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
            Stay in touch
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
            Follow what we&apos;re making.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Get occasional notes about new products, HexBox, and the work behind
            PageKey.
          </p>
          <div className="mt-10">
            <MailingListSignup id="signup-email-signup" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          More ways to follow along
        </p>
        <div className="mt-8 grid border-l border-t border-white/10 md:grid-cols-3">
          {channels.map(({ icon: Icon, name, description, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group border-b border-r border-white/10 p-7 transition-colors hover:bg-zinc-900/60"
            >
              <Icon className="h-6 w-6 text-orange-400" aria-hidden="true" />
              <h2 className="mt-10 text-xl font-semibold text-white group-hover:text-orange-200">
                {name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
