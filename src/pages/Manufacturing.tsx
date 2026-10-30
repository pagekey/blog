import {
  ArrowRight,
  DraftingCompass,
  Layers3,
  PackageCheck,
} from "lucide-react";
import Layout from "@/components/Layout";

const stages = [
  {
    icon: DraftingCompass,
    title: "Design",
    text: "Work through a practical idea, constraint, or part that needs to exist.",
  },
  {
    icon: Layers3,
    title: "Prototype",
    text: "Create and refine a physical version that can be handled and tested.",
  },
  {
    icon: PackageCheck,
    title: "Small production",
    text: "Make a considered small run when a prototype is ready to be useful.",
  },
];
export default function ManufacturingPage() {
  return (
    <Layout
      title="Small-Batch Manufacturing | PageKey"
      description="Design, prototyping, and small production runs for practical products and parts."
    >
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          Small-batch custom manufacturing
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
          From useful idea to real object.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
          PageKey designs, prototypes, and makes practical products in small
          batches. We work with individuals and small businesses that need a
          thoughtful, hands-on path from idea to part.
        </p>
      </section>
      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {stages.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`p-8 md:p-10 ${index < 2 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`}
            >
              <Icon className="h-7 w-7 text-orange-400" />
              <p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-zinc-500">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {title}
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
            An honest starting point
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] text-white">
            Built for practical, smaller work.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-zinc-400">
          <p>
            Current work is centered on custom 3D-printed products and small
            batches. That makes PageKey a good fit for practical parts,
            prototypes, and early production runs where direct attention
            matters.
          </p>
          <p>
            If you have an idea, include what it needs to do, who will use it,
            and any rough sketches or dimensions. We will start with an honest
            conversation about whether PageKey is the right fit.
          </p>
          <a
            href="mailto:hello@pagekey.io?subject=Custom%20manufacturing%20inquiry"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-300 hover:text-orange-200"
          >
            Start a manufacturing inquiry <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
