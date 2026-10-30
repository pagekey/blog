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
    text: "Turn a practical need or rough idea into a design worth making.",
  },
  {
    icon: Layers3,
    title: "Prototype",
    text: "Make a physical version, test it, and refine the details.",
  },
  {
    icon: PackageCheck,
    title: "Made to order",
    text: "Produce exactly what you need, without committing to mass production.",
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
            What we make
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] text-white">
            Practical products. Made in small batches.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-zinc-400">
          <p>
            PageKey makes custom 3D-printed products, prototypes, and small production runs. Whether you need a handful of specialized parts or a finished product made to order, you work directly with the person designing and making it. No large minimums, long supply chains, or unnecessary overhead.          </p>
          <p>
            Have an idea? Tell us what it needs to do, who will use it, and share any sketches or dimensions you have. We'll have an honest conversation about your needs and how we can help.
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
