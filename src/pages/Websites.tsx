import { ArrowRight, Check, ClipboardList, LifeBuoy } from "lucide-react";
import Layout from "@/components/Layout";
import jeannetteMillsPreview from "@/assets/images/websites/jeannettemils.com.jpg";
import pageKeyPreview from "@/assets/images/websites/pagekey.io.jpg";

const planningIncludes = [
  "60–90 minute discovery session",
  "Requirements gathering and project planning",
  "Website structure and feature recommendations",
  "Written scope and project estimate",
];

const packages = [
  { name: "Starter Website", details: "1–3 pages", price: "$1,000" },
  { name: "Standard Website", details: "Up to 5 pages", price: "$1,500" },
  {
    name: "Advanced Website",
    details:
      "For projects with custom functionality, more involved integrations, or complex layouts.",
    price: "$2,500+",
  },
];

const developmentIncludes = [
  "Custom website design and development",
  "Mobile-friendly responsive layout",
  "Up to five rounds of revisions",
  "Basic SEO setup",
  "Contact forms and agreed integrations",
  "Website deployment and launch",
  "Final review and handoff",
];

const additionalServices = [
  ["Additional page", "$150"],
  ["Additional revision round", "$125"],
  ["Custom functionality", "Custom quote"],
  ["Content entry / formatting", "$100/hour"],
  ["Custom Development", "$100/hour"],
];

const supportIncludes = [
  "Routine website health checks",
  "Software and dependency updates, where applicable",
  "Basic troubleshooting",
  "Up to one hour of minor content or configuration changes per month",
];

const portfolioProjects: {
  title: string;
  description: string;
  href: string | null;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "JeannetteMills.com",
    description:
      "A website for author and leadership consultant Jeannette Mills, showcasing her book, consulting services, and approach to developing strong leaders.",
    href: "https://jeannettemills.com",
    image: jeannetteMillsPreview,
    imageAlt:
      "Jeannette Mills website with her portrait and the headline Lead Boldly. Build what lasts.",
  },
  {
    title: "PageKey.io",
    description:
      "Our own website, bringing together PageKey's products, manufacturing and website services, and a technical blog in a responsive design.",
    href: "https://pagekey.io",
    image: pageKeyPreview,
    imageAlt:
      "PageKey homepage with the Take Back Tech headline and orange heart illustration",
  },
  // Restore this third project after its website facelift is ready.
  /* {
    title: "Custom Website — Placeholder",
    description:
      "Example space for a website with tailored layouts, custom features, or connected tools.",
    href: null,
    image: "", // Add the project screenshot when ready.
    imageAlt: "",
  }, */
];

const projectSteps = [
  {
    title: "Discovery meeting",
    description:
      "We discuss your goals, audience, needs, and budget, then agree on the scope and project plan.",
  },
  {
    title: "Initial design",
    description:
      "You receive an initial design to review, with a proposed layout and visual direction for your website.",
  },
  {
    title: "Comments & revisions",
    description:
      "Share consolidated comments so we can refine the design together. Up to five revision rounds are included.",
  },
  {
    title: "Development & review",
    description:
      "We build your responsive website, add the agreed features, and walk through the finished site with you.",
  },
  {
    title: "Launch & handoff",
    description:
      "After final approval and payment, we launch your website and provide access to your site and deliverables.",
  },
  {
    title: "Ongoing support",
    description:
      "Choose optional Website Care & Maintenance for routine upkeep, or request additional support as needed.",
  },
];

const projectTerms = [
  "50% deposit to begin development; remaining 50% due upon completion, before launch.",
  "Project scope and deliverables agreed upon before work begins.",
  "Five consolidated revision rounds included.",
  "Domain registration, hosting, and third-party subscriptions billed separately.",
  "Clients retain ownership of their website content and receive access to their website and deliverables.",
];

function Checklist({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-zinc-400">
          <Check
            className="mt-1 h-4 w-4 shrink-0 text-orange-400"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WebsitesPage() {
  return (
    <Layout
      title="Website Design & Development | PageKey"
      description="Professional websites for authors, entrepreneurs, and small businesses. Explore PageKey's website design, development, and ongoing support packages."
    >
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          PageKey
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-.05em] text-white md:text-7xl">
          Website Design &amp; Development
        </h1>
        <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400">
          Professional websites for authors, entrepreneurs, and small
          businesses.
        </p>
        <a
          href="mailto:hello@pagekey.io?subject=Website%20project%20inquiry"
          className="mt-9 inline-flex items-center gap-3 bg-orange-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-orange-300"
        >
          Discuss your website{" "}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:gap-16 md:py-16">
          <div>
            <ClipboardList
              className="h-7 w-7 text-orange-400"
              aria-hidden="true"
            />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white">
              Discovery &amp; Planning
            </h2>
            <p className="mt-5 text-4xl font-semibold tracking-tight text-white">
              $200
            </p>
            <h3 className="mt-2 font-medium text-zinc-300">
              Initial Consultation &amp; Planning
            </h3>
          </div>
          <div>
            <Checklist items={planningIncludes} />
            <p className="mt-6 border-l-2 border-orange-400/60 pl-4 text-sm italic leading-relaxed text-zinc-400">
              Consultation fee credited toward development when a project is
              commissioned within 30 days.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-[-.04em] text-white md:text-4xl">
          Website Design &amp; Development
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {packages.map(({ name, details, price }) => (
            <article
              key={name}
              className="flex flex-col border border-white/15 bg-zinc-900/35 p-7 md:p-8"
            >
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {details}
              </p>
              <p className="mt-auto pt-9 text-xs font-bold uppercase tracking-[.14em] text-zinc-500">
                Starting price
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-orange-300">
                {price}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white">
            Website projects include
          </h3>
          <Checklist
            items={developmentIncludes}
            className="mt-5 grid gap-x-10 gap-y-3 space-y-0 md:grid-cols-2"
          />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-.04em] text-white md:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
            Explore an author&apos;s website and PageKey&apos;s own online home.
            Follow the links to visit the sites.
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {portfolioProjects.map(
              ({ title, description, href, image, imageAlt }) => (
                <article
                  key={title}
                  className="flex flex-col border border-white/15 bg-zinc-900/35"
                >
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="aspect-[16/9] w-full border-b border-white/10 object-cover object-top"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {description}
                    </p>
                    <div className="mt-auto pt-6 text-sm font-semibold">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-orange-300 transition-colors hover:text-orange-200"
                        >
                          View project{" "}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-zinc-500">
                          Project link coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-.04em] text-white md:text-4xl">
            From first conversation to ongoing care
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
            A clear, collaborative process with opportunities to review and
            share feedback along the way.
          </p>
          <ol className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map(({ title, description }, index) => (
              <li
                key={title}
                className="relative border-l border-orange-400/30 pl-6"
              >
                <span
                  className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-orange-400"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="px-6 py-12 md:border-r md:border-white/10 md:py-16 md:pr-12">
            <h2 className="text-3xl font-semibold tracking-[-.04em] text-white">
              Additional Services
            </h2>
            <table className="mt-8 w-full text-left text-sm sm:text-base">
              <caption className="sr-only">
                Additional website services and pricing
              </caption>
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-zinc-500">
                  <th scope="col" className="pb-3 font-semibold">
                    Service
                  </th>
                  <th scope="col" className="pb-3 text-right font-semibold">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map(([service, price]) => (
                  <tr key={service} className="border-b border-white/10">
                    <th
                      scope="row"
                      className="py-4 pr-4 font-normal text-zinc-400"
                    >
                      {service}
                    </th>
                    <td className="whitespace-nowrap py-4 text-right font-medium text-zinc-200">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-white/10 px-6 py-12 md:border-t-0 md:py-16 md:pl-12">
            <div className="flex items-center gap-3">
              <LifeBuoy
                className="h-6 w-6 shrink-0 text-orange-400"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-semibold tracking-[-.04em] text-white">
                Ongoing Website Support
              </h2>
            </div>
            <h3 className="mt-8 font-medium text-zinc-300">
              Website Care &amp; Maintenance
            </h3>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
              $75
              <span className="text-base font-normal tracking-normal text-zinc-400">
                /month
              </span>
            </p>
            <Checklist items={supportIncludes} className="mt-6" />
            <p className="mt-6 border-l-2 border-orange-400/60 pl-4 text-sm leading-relaxed text-zinc-400">
              Hosting and domain registration are separate costs and are not
              included in the $75/month care and maintenance price.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Additional support and development billed at $100/hour.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1fr_2fr] md:py-20">
        <h2 className="text-3xl font-semibold tracking-[-.04em] text-white">
          Project Terms
        </h2>
        <ul className="list-disc space-y-4 pl-5 leading-relaxed text-zinc-400 marker:text-orange-400">
          {projectTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-14 md:flex-row md:items-center md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-.04em] text-white">
              Let&apos;s build something that works for you.
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              PageKey works with each customer to understand their goals and
              develop a solution that fits their needs and budget.
            </p>
          </div>
          <a
            href="mailto:hello@pagekey.io?subject=Website%20project%20inquiry"
            className="inline-flex w-fit shrink-0 items-center gap-3 border border-orange-400/70 px-6 py-3.5 text-sm font-bold text-orange-300 transition-colors hover:bg-orange-400 hover:text-zinc-950"
          >
            Start a conversation{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
