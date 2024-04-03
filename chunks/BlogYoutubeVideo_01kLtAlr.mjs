import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro_Ba_0T9xz.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://pagekey.io");
const $$BlogYoutubeVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogYoutubeVideo;
  const {
    videoId
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center w-full overflow-hidden"> <iframe width="560" height="315"${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="margin: auto; border-radius: 10px">
    </iframe> </div>`;
}, "/home/runner/work/website/website/astrowind/src/components/common/BlogYoutubeVideo.astro", void 0);

export { $$BlogYoutubeVideo as $ };
