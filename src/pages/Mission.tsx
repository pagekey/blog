import Layout from "@/components/Layout";

export default function MissionPage() {
  return (
    <Layout
      title="Take Back Tech | PageKey"
      description="PageKey builds technology people can own, understand, modify, and operate themselves."
    >
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          The PageKey mission
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.055em] text-white md:text-7xl">
          Take Back Tech.
        </h1>
        <div className="mt-12 max-w-3xl space-y-7 text-xl leading-relaxed text-zinc-300">
          <p>
            Technology should give people more control over their lives, not
            less.
          </p>
          <p>
            More and more of the tools we depend on are owned, operated, and
            controlled by someone else. Our data lives in someone else&apos;s
            cloud. Our homes depend on someone else&apos;s servers. The software
            we use can change underneath us.
          </p>
          <p>We think there&apos;s another way.</p>
          <p>
            PageKey designs and builds technology that people can own,
            understand, modify, and operate themselves.
          </p>
        </div>
      </section>
      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <div className="p-8 md:p-10 md:border-r md:border-white/10">
            <h2 className="text-2xl font-semibold text-white">Ownership</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              HexBox keeps your photos and infrastructure under your control.
            </p>
          </div>
          <div className="border-y border-white/10 p-8 md:border-y-0 md:border-r md:border-white/10 md:p-10">
            <h2 className="text-2xl font-semibold text-white">Making</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              PageKey manufactures useful products in small batches,
              independently.
            </p>
          </div>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white">Knowledge</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              PageKey shares what it learns and makes its work understandable.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="max-w-3xl space-y-7 text-xl leading-relaxed text-zinc-300">
          <p>We believe ownership creates agency.</p>
          <p>We believe understanding creates independence.</p>
          <p>We believe open technology creates resilience.</p>
          <p>
            We&apos;re building toward a world where powerful technology
            doesn&apos;t require surrendering control to use it.
          </p>
        </div>
        <p className="mt-16 text-lg font-semibold text-white">
          Steve G.
          <br />
          <span className="font-normal text-zinc-400">
            Founder, PageKey Solutions
          </span>
        </p>
      </section>
    </Layout>
  );
}
