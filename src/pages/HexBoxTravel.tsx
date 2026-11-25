import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const youtubeVideoId: string = "lLRq45FqzZA";

export default function HexBoxTravelPage() {
  return (
    <Layout
      title="HexBox Travel Router Setup Guide | PageKey"
      description="Set up your HexBox travel router with the PageKey video guide."
    >
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-400">
          HexBox setup
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl md:text-6xl">
          HexBox Travel Router Setup Guide
        </h1>

        <div className="mt-10 aspect-video overflow-hidden border border-white/15 bg-zinc-900">
          {youtubeVideoId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="HexBox Travel Router Setup Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-zinc-400">
              Setup video coming soon.
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link
            to="/support"
            className="inline-flex items-center justify-center gap-2 bg-orange-400 px-5 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-orange-300"
          >
            Get support <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/hexbox"
            className="text-sm font-bold text-orange-300 hover:text-orange-200"
          >
            Back to HexBox
          </Link>
        </div>
      </section>
    </Layout>
  );
}
