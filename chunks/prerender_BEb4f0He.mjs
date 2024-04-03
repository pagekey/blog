import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { l as lookup, r as resolveSrc, i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from './astro/assets-service_DwFntjGq.mjs';
import { c as createAstro, b as createComponent, r as renderTemplate, d as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, f as defineScriptVars, A as AstroError, g as ExpectedImageOptions, E as ExpectedImage, h as FailedToFetchRemoteImageDimensions, i as InvalidImageService, j as ImageMissingAlt, m as maybeRenderHead, s as spreadAttributes, k as renderHead, l as renderSlot, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from './astro_Ba_0T9xz.mjs';
import 'kleur/colors';
import { getRssString } from '@astrojs/rss';
import { twMerge } from 'tailwind-merge';
import 'clsx';
/* empty css                         */
import merge from 'lodash.merge';
/* empty css                                 */
import slugify from 'limax';
import { escape } from 'html-escaper';
import { getIconData, iconToSVG } from '@iconify/utils';
import { parseUrl, transformUrl } from 'unpic';

const SITE = {"name":"PageKey","site":"https://pagekey.io","base":"/","trailingSlash":false,"googleSiteVerificationId":"orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M"};
                    const I18N = {"language":"en","textDirection":"ltr"};
                    const METADATA = {"title":{"default":"PageKey","template":"%s — PageKey"},"description":"🚀 Let's take back tech.","robots":{"index":true,"follow":true},"openGraph":{"type":"website","site_name":"PageKey","images":[{"url":"~/assets/images/default.png","width":1200,"height":628}]},"twitter":{"handle":"@onwidget","site":"@onwidget","cardType":"summary_large_image"}};
                    const APP_BLOG = {"isEnabled":true,"postsPerPage":6,"isRelatedPostsEnabled":true,"relatedPostsCount":4,"post":{"isEnabled":true,"permalink":"/%slug%","robots":{"index":true,"follow":true}},"list":{"isEnabled":true,"pathname":"blog","robots":{"index":true,"follow":true}},"category":{"isEnabled":true,"pathname":"category","robots":{"index":true,"follow":true}},"tag":{"isEnabled":true,"pathname":"tag","robots":{"index":false,"follow":true}}};
                    const UI = {"theme":"system","classes":{},"tokens":{"default":{"fonts":{"sans":"InterVariable","serif":"InterVariable","heading":"InterVariable"},"colors":{"default":"rgb(16 16 16)","heading":"rgb(0 0 0)","muted":"rgb(16 16 16 / 66%)","bgPage":"rgb(255 255 255)","primary":"rgb(1 97 239)","secondary":"rgb(1 84 207)","accent":"rgb(109 40 217)"}},"dark":{"fonts":{},"colors":{"default":"rgb(229 236 246)","heading":"rgb(247, 248, 248)","muted":"rgb(229 236 246 / 66%)","bgPage":"rgb(3 6 32)","primary":"rgb(1 97 239)","secondary":"rgb(1 84 207)","accent":"rgb(109 40 217)"}}}};

const formatter = new Intl.DateTimeFormat(I18N?.language, {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch)
    ++start;
  while (end > start && str[end - 1] === ch)
    --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + ("");
};
const BASE_PATHNAME = SITE.base ;
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink );
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

const $$Astro$1n = createAstro("https://pagekey.io");
const $$CommonMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1n, $$props, $$slots);
  Astro2.self = $$CommonMeta;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "/home/runner/work/website/website/astrowind/src/components/common/CommonMeta.astro", void 0);

const favIcon = "/_astro/favicon.EoKXths8.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.Ca94UIdJ.svg","width":527,"height":527,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/apple-touch-icon.Ctlcgf5O.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

const $$Astro$1m = createAstro("https://pagekey.io");
const $$Favicons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1m, $$props, $$slots);
  Astro2.self = $$Favicons;
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "/home/runner/work/website/website/astrowind/src/components/Favicons.astro", void 0);

const $$Astro$1l = createAstro("https://pagekey.io");
const $$CustomStyles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1l, $$props, $$slots);
  Astro2.self = $$CustomStyles;
  const { tokens } = UI;
  const html = `
  <style>
    :root {
      --aw-font-sans: ${tokens.default.fonts.sans ? `'${tokens.default.fonts.sans}'` : '""'};
      --aw-font-serif: ${tokens.default.fonts.serif ? `'${tokens.default.fonts.serif}'` : "var(--aw-font-sans)"};
      --aw-font-heading: ${tokens.default.fonts.heading ? `'${tokens.default.fonts.heading}'` : "var(--aw-font-sans)"};

      --aw-color-primary: ${tokens.default.colors.primary};
      --aw-color-secondary: ${tokens.default.colors.secondary};
      --aw-color-accent: ${tokens.default.colors.accent};

      --aw-color-text-heading: ${tokens.default.colors.heading};
      --aw-color-text-default: ${tokens.default.colors.default};
      --aw-color-text-muted: ${tokens.default.colors.muted};
      --aw-color-bg-page: ${tokens.default.colors.bgPage};

      --aw-color-bg-page-dark: ${tokens.dark.colors.bgPage};

      ::selection {
        background-color: lavender;
      }
    }

    .dark {
      ${tokens.dark.fonts.sans ? `--aw-font-sans: '${tokens.dark.fonts.sans}';` : ""}
      ${tokens.dark.fonts.serif ? `--aw-font-serif: '${tokens.dark.fonts.serif};'` : ""}
      ${tokens.dark.fonts.heading ? `--aw-font-heading: '${tokens.dark.fonts.heading}';` : ""}

      --aw-color-primary: ${tokens.dark.colors.primary};
      --aw-color-secondary: ${tokens.dark.colors.secondary};
      --aw-color-accent: ${tokens.dark.colors.accent};

      --aw-color-text-heading: ${tokens.dark.colors.heading};
      --aw-color-text-default: ${tokens.dark.colors.default};
      --aw-color-text-muted: ${tokens.dark.colors.muted};
      --aw-color-bg-page: ${tokens.dark.colors.bgPage};

      ::selection {
        background-color: black;
        color: snow;
      }
    }
  </style>
`;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/CustomStyles.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$1k = createAstro("https://pagekey.io");
const $$ApplyColorMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1k, $$props, $$slots);
  Astro2.self = $$ApplyColorMode;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", '\n  function applyTheme(theme) {\n    if (theme === "dark") {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n    const matches = document.querySelectorAll("[data-aw-toggle-color-scheme] > input");\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== "dark";\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(":only")) || (!localStorage.theme && defaultTheme !== "system")) {\n    applyTheme(defaultTheme.replace(":only", ""));\n  } else if (\n    localStorage.theme === "dark" ||\n    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)\n  ) {\n    applyTheme("dark");\n  } else {\n    applyTheme("light");\n  }\n})();<\/script>'])), defineScriptVars({ defaultTheme: UI.theme  }));
}, "/home/runner/work/website/website/astrowind/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs} />`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs} />`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(createOpenGraphTag(`${mediaType}:height`, medium.height.toString()));
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, noarchive, unavailableAfter, noimageindex, notranslate } = config.robotsProps;
    if (nosnippet)
      robotsContent.push("nosnippet");
    if (maxSnippet)
      robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive)
      robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex)
      robotsContent.push("noimageindex");
    if (notranslate)
      robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(createLinkTag({ rel: "alternate", media: config.mobileAlternate.media, href: config.mobileAlternate.href }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(createLinkTag({ rel: "alternate", hrefLang: languageAlternate.hrefLang, href: languageAlternate.href }));
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(createOpenGraphTag("profile:first_name", config.openGraph.profile.firstName));
      }
      if (config.openGraph.profile.lastName) {
        addTag(createOpenGraphTag("profile:last_name", config.openGraph.profile.lastName));
      }
      if (config.openGraph.profile.username) {
        addTag(createOpenGraphTag("profile:username", config.openGraph.profile.username));
      }
      if (config.openGraph.profile.gender) {
        addTag(createOpenGraphTag("profile:gender", config.openGraph.profile.gender));
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(createOpenGraphTag("book:release_date", config.openGraph.book.releaseDate));
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(createOpenGraphTag("article:published_time", config.openGraph.article.publishedTime));
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(createOpenGraphTag("article:modified_time", config.openGraph.article.modifiedTime));
      }
      if (config.openGraph.article.expirationTime) {
        addTag(createOpenGraphTag("article:expiration_time", config.openGraph.article.expirationTime));
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(createOpenGraphTag("article:section", config.openGraph.article.section));
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(createOpenGraphTag("video:duration", config.openGraph.video.duration.toString()));
      }
      if (config.openGraph.video.releaseDate) {
        addTag(createOpenGraphTag("video:release_date", config.openGraph.video.releaseDate));
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(createOpenGraphTag("video:series", config.openGraph.video.series));
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(createMetaTag({ property: "fb:app_id", content: config.facebook.appId }));
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.cardType }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$1j = createAstro("https://pagekey.io");
const $$AstroSeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1j, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/home/runner/work/website/website/astrowind/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_DwFntjGq.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$1i = createAstro("https://pagekey.io");
const $$Image$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1i, $$props, $$slots);
  Astro2.self = $$Image$1;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/runner/work/website/website/astrowind/node_modules/astro/components/Image.astro", void 0);

const $$Astro$1h = createAstro("https://pagekey.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1h, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && originalSrc.format in specialFormatsFallback) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/home/runner/work/website/website/astrowind/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const load$1 = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/app-store.png": () => Promise.resolve().then(() => appStore),"/src/assets/images/default.png": () => import('./default_RM5Ly1PJ.mjs'),"/src/assets/images/google-play.png": () => Promise.resolve().then(() => googlePlay),"/src/assets/images/hero-image.png": () => import('./hero-image_RRNdzXBC.mjs')});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load$1();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

const $$Astro$1g = createAstro("https://pagekey.io");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1g, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language ,
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: !METADATA.robots.index ,
      nofollow: !METADATA.robots.follow ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "/home/runner/work/website/website/astrowind/src/components/common/Metadata.astro", void 0);

const $$Astro$1f = createAstro("https://pagekey.io");
const $$SiteVerification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1f, $$props, $$slots);
  Astro2.self = $$SiteVerification;
  return renderTemplate`${renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/common/SiteVerification.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1e = createAstro("https://pagekey.io");
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1e, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "", "><\/script><script", ">(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    window.dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", id);\n})();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), spreadAttributes(attrs), spreadAttributes(attrs), defineScriptVars({ id }));
}, "/home/runner/work/website/website/astrowind/node_modules/@astrolib/analytics/src/GoogleAnalytics.astro", void 0);

const $$Astro$1d = createAstro("https://pagekey.io");
const $$Analytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1d, $$props, $$slots);
  Astro2.self = $$Analytics;
  return renderTemplate`${null}`;
}, "/home/runner/work/website/website/astrowind/src/components/common/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1c = createAstro("https://pagekey.io");
const $$BasicScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1c, $$props, $$slots);
  Astro2.self = $$BasicScripts;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case 'twitter':\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case 'linkedin':\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case 'whatsapp':\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case 'mail':\n          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    let screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        document.getElementById('header').classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        document.getElementById('header').classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"], ["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case 'twitter':\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case 'linkedin':\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case 'whatsapp':\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case 'mail':\n          href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    let screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        document.getElementById('header').classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        document.getElementById('header').classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/home/runner/work/website/website/astrowind/src/components/common/BasicScripts.astro", void 0);

const $$Astro$1b = createAstro("https://pagekey.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"> <head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}<!-- Uncomment line below to activate View Transitions --><!-- <ViewTransitions fallback="swap" /> -->${renderHead()}</head> <body class="antialiased text-default bg-page tracking-tight"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}  </body> </html>`;
}, "/home/runner/work/website/website/astrowind/src/layouts/Layout.astro", void 0);

const $$Astro$1a = createAstro("https://pagekey.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1a, $$props, $$slots);
  Astro2.self = $$404;
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
But dont worry, you can find plenty of other things on our homepage.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a> </div> </div> </section> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/404.astro", void 0);

const $$file$p = "/home/runner/work/website/website/astrowind/src/pages/404.astro";
const $$url$p = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$404,
                    file: $$file$p,
                    url: $$url$p
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$19 = createAstro("https://pagekey.io");
const $$Headline$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$19, $$props, $$slots);
  Astro2.self = $$Headline$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/Headline.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$18 = createAstro("https://pagekey.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$18, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/home/runner/work/website/website/astrowind/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$17 = createAstro("https://pagekey.io");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$17, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <span id="pks-daily-emoji">🔑</span> ${SITE?.name} </span> `;
}, "/home/runner/work/website/website/astrowind/src/components/Logo.astro", void 0);

const $$Astro$16 = createAstro("https://pagekey.io");
const $$ToggleTheme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$16, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/common/ToggleTheme.astro", void 0);

const $$Astro$15 = createAstro("https://pagekey.io");
const $$ToggleMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$15, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/home/runner/work/website/website/astrowind/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$14 = createAstro("https://pagekey.io");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$14, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/Button.astro", void 0);

const $$Astro$13 = createAstro("https://pagekey.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$13, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"> ${text} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Header.astro", void 0);

const $$Astro$12 = createAstro("https://pagekey.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}>${SITE?.name}</a> </div> <div class="text-sm text-muted"> ${secondaryLinks.map(({ text, href }) => renderTemplate`<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"${addAttribute(href, "href")}>${unescapeHTML(text)}</a>`)} </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Footer.astro", void 0);

const $$Astro$11 = createAstro("https://pagekey.io");
const $$Announcement = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$11, $$props, $$slots);
  Astro2.self = $$Announcement;
  return renderTemplate`<!-- 
<div
  class="dark text-muted text-sm bg-black dark:bg-transparent dark:border-b dark:border-slate-800 dark:text-slate-400 hidden md:block overflow-hidden px-3 py-2 relative text-ellipsis whitespace-nowrap"
>
  <span class="dark:bg-slate-700 bg-white/40 dark:text-slate-300 font-semibold px-1 py-0.5 text-xs mr-0.5 rtl:mr-0 rtl:ml-0.5 inline-block">NEW</span>
  <a href="https://astro.build/blog/astro-440/" class="text-muted hover:underline dark:text-slate-400 font-medium"
    >Astro 4.4 is now available! »</a
  >
  <a
    target="_blank"
    rel="noopener"
    class="float-right rtl:float-left"
    title="If you like AstroWind, give us a star."
    href="https://github.com/onwidget/astrowind"
  >
    <img
      src="https://img.shields.io/github/stars/onwidget/astrowind.svg?style=social&label=Stars&maxAge=86400"
      alt="Follow @onWidget"
      width="84"
      height="20"
    />
  </a>
</div> -->`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Announcement.astro", void 0);

const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Products',
      links: [
        {
          text: '💣 Boom Languages',
          href: getPermalink('/products/boom'),
        },
        {
          text: '✅ KeyDo',
          href: getPermalink('/products/keydo'),
        },
        {
          text: '📙 KeyReader',
          href: getPermalink('/products/keyreader'),
        },
        {
          text: '💻 PageKey Operating System',
          href: getPermalink('/products/pkos'),
        },
        {
          text: '🎥 PKVid',
          href: getPermalink('/products/pkvid'),
        },
        {
          text: '🎹 Plaintext DAW',
          href: getPermalink('/products/ptd'),
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Team',
      href: '/team',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Boom Languages', href: '/products/boom' },
        { text: 'KeyDo', href: '/products/keydo' },
        { text: 'KeyReader', href: '/products/keyreader' },
        { text: 'PageKey Operating System', href: '/products/pkos' },
        { text: 'PKVid', href: '/products/pkvid' },
        { text: 'Plaintext DAW', href: '/products/ptd' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/pagekey' },
        { text: 'Discord', href: 'https://discord.gg/5m5yFgDPF5' },
        { text: 'YouTube', href: 'https://youtube.com/@PageKey' },
      ],
    },
    {
      title: 'Tags',
      links: [
        { text: 'Python', href: '/tag/python' },
        { text: 'Rust', href: '/tag/rust' },
      ],
    },
    {
      title: 'Languages',
      links: [
        { text: 'English', href: '/blog' },
        { text: 'Español', href: '/tag/spanish' },
        { text: 'Русский', href: '/tag/russian' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/5m5yFgDPF5' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@PageKey' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pagekey' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/pagekeysolutions' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(/favicon.ico)]"></span>
    Copyright &copy; ${new Date().getFullYear()} PageKey Solutions, LLC · All rights reserved.
  `,
};

const $$Astro$10 = createAstro("https://pagekey.io");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$10, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["announcement"], renderTemplate` ${renderComponent($$result2, "Announcement", $$Announcement, {})} `)} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/layouts/PageLayout.astro", void 0);

const $$Astro$$ = createAstro("https://pagekey.io");
const $$Boom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$$, $$props, $$slots);
  Astro2.self = $$Boom;
  const metadata = {
    title: "Boom Languages"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "Language Learning", "title": "Boom Languages", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/boom.astro", void 0);

const $$file$o = "/home/runner/work/website/website/astrowind/src/pages/products/boom.astro";
const $$url$o = "/products/boom";

const boom = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Boom,
                    file: $$file$o,
                    url: $$url$o
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$_ = createAstro("https://pagekey.io");
const $$Keydo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$_, $$props, $$slots);
  Astro2.self = $$Keydo;
  const metadata = {
    title: "KeyDo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "Productivity", "title": "KeyDo", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/keydo.astro", void 0);

const $$file$n = "/home/runner/work/website/website/astrowind/src/pages/products/keydo.astro";
const $$url$n = "/products/keydo";

const keydo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Keydo,
                    file: $$file$n,
                    url: $$url$n
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$Z = createAstro("https://pagekey.io");
const $$Keyreader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Z, $$props, $$slots);
  Astro2.self = $$Keyreader;
  const metadata = {
    title: "KeyReader"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "Productivity", "title": "KeyReader", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/keyreader.astro", void 0);

const $$file$m = "/home/runner/work/website/website/astrowind/src/pages/products/keyreader.astro";
const $$url$m = "/products/keyreader";

const keyreader = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Keyreader,
                    file: $$file$m,
                    url: $$url$m
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$Y = createAstro("https://pagekey.io");
const $$Pkos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$Pkos;
  const metadata = {
    title: "PKOS"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "OSDev", "title": "PageKey Operating System", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/pkos.astro", void 0);

const $$file$l = "/home/runner/work/website/website/astrowind/src/pages/products/pkos.astro";
const $$url$l = "/products/pkos";

const pkos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Pkos,
                    file: $$file$l,
                    url: $$url$l
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$X = createAstro("https://pagekey.io");
const $$Pkvid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$Pkvid;
  const metadata = {
    title: "PKVid"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "Video Editing", "title": "PKVid", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/pkvid.astro", void 0);

const $$file$k = "/home/runner/work/website/website/astrowind/src/pages/products/pkvid.astro";
const $$url$k = "/products/pkvid";

const pkvid = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Pkvid,
                    file: $$file$k,
                    url: $$url$k
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$W = createAstro("https://pagekey.io");
const $$Ptd = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$Ptd;
  const metadata = {
    title: "Plaintext DAW"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "tagline": "Music", "title": "Plaintext DAW", "subtitle": "This page is coming soon." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/products/ptd.astro", void 0);

const $$file$j = "/home/runner/work/website/website/astrowind/src/pages/products/ptd.astro";
const $$url$j = "/products/ptd";

const ptd = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Ptd,
                    file: $$file$j,
                    url: $$url$j
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://pagekey.io", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/blog/2017/hash-table-python/index.mdx": () => import('./index_BC2ZTBrU.mjs'),"/src/content/post/blog/2017/linked-lists-in-python/index.mdx": () => import('./index_BWLmwexR.mjs'),"/src/content/post/blog/2017/queue-python/index.mdx": () => import('./index_Dx3G7uBx.mjs'),"/src/content/post/blog/2017/stack-python/index.mdx": () => import('./index_Dcb8fSiB.mjs'),"/src/content/post/blog/2018/5-steps-write-technical-article/index.mdx": () => import('./index_DkCx5w28.mjs'),"/src/content/post/blog/2018/backup-linux-workspace/index.mdx": () => import('./index_CH9rQcL4.mjs'),"/src/content/post/blog/2018/binary-search-tree/index.mdx": () => import('./index_CezQ7BkF.mjs'),"/src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx": () => import('./bubble-sort-python_CVE6sxuq.mjs'),"/src/content/post/blog/2018/career-year-one/index.mdx": () => import('./index_B20ydd_l.mjs'),"/src/content/post/blog/2018/creativity-language-learning/index.mdx": () => import('./index_DnCl2Fes.mjs'),"/src/content/post/blog/2018/design-vs-implementation/index.mdx": () => import('./index_DjkFmB9U.mjs'),"/src/content/post/blog/2018/insertion-sort-python/insertion-sort-python.mdx": () => import('./insertion-sort-python_DuOXDlvj.mjs'),"/src/content/post/blog/2018/kanban-board-onenote/index.mdx": () => import('./index_By80uJQz.mjs'),"/src/content/post/blog/2018/linux-kernel-1/index.mdx": () => import('./index_BewjbzKm.mjs'),"/src/content/post/blog/2018/linux-kernel-2/index.mdx": () => import('./index_Dr4a-hER.mjs'),"/src/content/post/blog/2018/linux-kernel-3/index.mdx": () => import('./index_DHpQ_CVp.mjs'),"/src/content/post/blog/2018/merge-sort/merge-sort.mdx": () => import('./merge-sort_DaVNG82W.mjs'),"/src/content/post/blog/2018/push-ssh-keys/index.mdx": () => import('./index_B2r-rdJn.mjs'),"/src/content/post/blog/2018/quicksort-python/quicksort-python.mdx": () => import('./quicksort-python_C10wFxcr.mjs'),"/src/content/post/blog/2018/ruby-gem/index.mdx": () => import('./index_DTtSFR4j.mjs'),"/src/content/post/blog/2019/django-first-web-app/index.mdx": () => import('./index_7jJAP6r4.mjs'),"/src/content/post/blog/2019/pkos-1/pkos-1.mdx": () => import('./pkos-1_ClvMrphK.mjs'),"/src/content/post/blog/2019/scrollmagic/scrollmagic.mdx": () => import('./scrollmagic_CQpTJsbR.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"blog/2017/hash-table-python":"/src/content/post/blog/2017/hash-table-python/index.mdx","blog/2017/linked-lists-in-python":"/src/content/post/blog/2017/linked-lists-in-python/index.mdx","blog/2017/queue-python":"/src/content/post/blog/2017/queue-python/index.mdx","blog/2017/stack-python":"/src/content/post/blog/2017/stack-python/index.mdx","blog/2019/django-first-web-app":"/src/content/post/blog/2019/django-first-web-app/index.mdx","blog/2019/pkos-1/pkos-1":"/src/content/post/blog/2019/pkos-1/pkos-1.mdx","blog/2019/scrollmagic/scrollmagic":"/src/content/post/blog/2019/scrollmagic/scrollmagic.mdx","blog/2018/5-steps-write-technical-article":"/src/content/post/blog/2018/5-steps-write-technical-article/index.mdx","blog/2018/backup-linux-workspace":"/src/content/post/blog/2018/backup-linux-workspace/index.mdx","binary-search-tree":"/src/content/post/blog/2018/binary-search-tree/index.mdx","blog/2018/bubble-sort-python/bubble-sort-python":"/src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx","blog/2018/career-year-one":"/src/content/post/blog/2018/career-year-one/index.mdx","blog/2018/creativity-language-learning":"/src/content/post/blog/2018/creativity-language-learning/index.mdx","blog/2018/design-vs-implementation":"/src/content/post/blog/2018/design-vs-implementation/index.mdx","blog/2018/insertion-sort-python/insertion-sort-python":"/src/content/post/blog/2018/insertion-sort-python/insertion-sort-python.mdx","blog/2018/kanban-board-onenote":"/src/content/post/blog/2018/kanban-board-onenote/index.mdx","blog/2018/linux-kernel-1":"/src/content/post/blog/2018/linux-kernel-1/index.mdx","blog/2018/linux-kernel-2":"/src/content/post/blog/2018/linux-kernel-2/index.mdx","blog/2018/merge-sort/merge-sort":"/src/content/post/blog/2018/merge-sort/merge-sort.mdx","blog/2018/linux-kernel-3":"/src/content/post/blog/2018/linux-kernel-3/index.mdx","blog/2018/push-ssh-keys":"/src/content/post/blog/2018/push-ssh-keys/index.mdx","blog/2018/quicksort-python/quicksort-python":"/src/content/post/blog/2018/quicksort-python/quicksort-python.mdx","blog/2018/ruby-gem":"/src/content/post/blog/2018/ruby-gem/index.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/blog/2017/hash-table-python/index.mdx": () => import('./index_BYsBuQF_.mjs'),"/src/content/post/blog/2017/linked-lists-in-python/index.mdx": () => import('./index_BUk7oPhy.mjs'),"/src/content/post/blog/2017/queue-python/index.mdx": () => import('./index_BnT7dIwj.mjs'),"/src/content/post/blog/2017/stack-python/index.mdx": () => import('./index_NhvForx3.mjs'),"/src/content/post/blog/2018/5-steps-write-technical-article/index.mdx": () => import('./index_B1EZ1Uis.mjs'),"/src/content/post/blog/2018/backup-linux-workspace/index.mdx": () => import('./index_LWR1Nl-q.mjs'),"/src/content/post/blog/2018/binary-search-tree/index.mdx": () => import('./index_B5H-NJ4G.mjs'),"/src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx": () => import('./bubble-sort-python_C9_otTA7.mjs'),"/src/content/post/blog/2018/career-year-one/index.mdx": () => import('./index_BB9dPi4M.mjs'),"/src/content/post/blog/2018/creativity-language-learning/index.mdx": () => import('./index_Dd-kFOrr.mjs'),"/src/content/post/blog/2018/design-vs-implementation/index.mdx": () => import('./index_YpFQSmRW.mjs'),"/src/content/post/blog/2018/insertion-sort-python/insertion-sort-python.mdx": () => import('./insertion-sort-python_zqM89T21.mjs'),"/src/content/post/blog/2018/kanban-board-onenote/index.mdx": () => import('./index_A00M6JKg.mjs'),"/src/content/post/blog/2018/linux-kernel-1/index.mdx": () => import('./index_BMw9o196.mjs'),"/src/content/post/blog/2018/linux-kernel-2/index.mdx": () => import('./index_DbA6kld4.mjs'),"/src/content/post/blog/2018/linux-kernel-3/index.mdx": () => import('./index_m8yuL-IC.mjs'),"/src/content/post/blog/2018/merge-sort/merge-sort.mdx": () => import('./merge-sort_DK4eKUAz.mjs'),"/src/content/post/blog/2018/push-ssh-keys/index.mdx": () => import('./index_CjYolUYU.mjs'),"/src/content/post/blog/2018/quicksort-python/quicksort-python.mdx": () => import('./quicksort-python_D8Ln9nrx.mjs'),"/src/content/post/blog/2018/ruby-gem/index.mdx": () => import('./index_sTsU_r7E.mjs'),"/src/content/post/blog/2019/django-first-web-app/index.mdx": () => import('./index_DwPhm37k.mjs'),"/src/content/post/blog/2019/pkos-1/pkos-1.mdx": () => import('./pkos-1_1tQ8H11T.mjs'),"/src/content/post/blog/2019/scrollmagic/scrollmagic.mdx": () => import('./scrollmagic_DqWqqXXl.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const getRandomizedPosts = (array, num) => {
  const newArray = [];
  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return newArray;
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids))
    return [];
  const posts = await fetchPosts();
  return ids.reduce(function(r, id) {
    posts.some(function(post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};
function getRelatedPosts(allPosts, currentSlug, currentTags) {
  const relatedPosts = getRandomizedPosts(
    allPosts.filter((post) => post.slug !== currentSlug && post.tags?.some((tag) => currentTags.includes(tag))),
    APP_BLOG.relatedPostsCount
  );
  if (relatedPosts.length < APP_BLOG.relatedPostsCount) {
    const morePosts = getRandomizedPosts(
      allPosts.filter((post) => post.slug !== currentSlug && !post.tags?.some((tag) => currentTags.includes(tag))),
      APP_BLOG.relatedPostsCount - relatedPosts.length
    );
    relatedPosts.push(...morePosts);
  }
  return relatedPosts;
}

const GET = async () => {
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name} Blog`,
    description: METADATA?.description ,
    site: "https://pagekey.io",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    GET
}, Symbol.toStringTag, { value: 'Module' }));

const config = {
  // FIXME: Use this when image.width is minor than deviceSizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [
    640,
    // older and lower-end phones
    750,
    // iPhone 6-8
    828,
    // iPhone XR/11
    960,
    // older horizontal phones
    1080,
    // iPhone 6-8 Plus
    1280,
    // 720p
    1668,
    // Various iPads
    1920,
    // 1080p
    2048,
    // QXGA
    2560,
    // WQXGA
    3200,
    // QHD+
    3840,
    // 4K
    4480,
    // 4.5K
    5120,
    // 5K
    6016
    // 6K
  ],
  formats: ["image/webp"]
};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number")
    return aspectRatio;
  if (typeof aspectRatio === "string") {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num))
        return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue))
        return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
    styleEntries.push(["object-position", "top left"]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "responsive") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["height", "auto"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "contained") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
    styleEntries.push(["object-fit", "contain"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "cover") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  if (layout === "fullWidth" || layout === "cover" || layout === "responsive" || layout === "contained") {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
const astroAsseetsOptimizer = async (image, breakpoints) => {
  if (!image || typeof image === "string") {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = (await getImage({ src: image, width: w })).src;
      return {
        src: url,
        width: w
      };
    })
  );
};
const unpicOptimizer = async (image, breakpoints, width, height) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = transformUrl({
        url: image,
        width: w,
        height: width && height ? computeHeight(w, width / height) : height,
        cdn: urlParsed.cdn
      }) || image;
      return {
        src: String(url),
        width: w
      };
    })
  );
};
async function getImagesOptimized(image, { src: _, width, height, sizes, aspectRatio, widths, layout = "constrained", style = "", ...rest }, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width) {
      if (height) ; else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = Number(height * aspectRatio);
    } else if (layout !== "fullWidth") {
      console.error("When aspectRatio is set, either width or height must also be set");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Either aspectRatio or both width and height must be set");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const srcset = (await transform(image, breakpoints, Number(width) || void 0, Number(height) || void 0)).map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        layout
      })}${style ?? ""}`,
      ...rest
    }
  };
}

const $$Astro$V = createAstro("https://pagekey.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image !== null && typeof _image === "object") {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/common/Image.astro", void 0);

const $$Astro$U = createAstro("https://pagekey.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    id,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20"> <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Hero.astro", void 0);

const $$Astro$T = createAstro("https://pagekey.io");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/Background.astro", void 0);

const $$Astro$S = createAstro("https://pagekey.io");
const $$WidgetWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$R = createAstro("https://pagekey.io");
const $$ItemGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(
    `${title || description ? "mt-3" : ""}`,
    actionClass,
    itemClasses?.actionClass
  ), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/ItemGrid.astro", void 0);

const $$Astro$Q = createAstro("https://pagekey.io");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Content.astro", void 0);

const $$Astro$P = createAstro("https://pagekey.io");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200"> ${post.title} </a>`} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/GridItem.astro", void 0);

const $$Astro$O = createAstro("https://pagekey.io");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/Grid.astro", void 0);

const $$Astro$N = createAstro("https://pagekey.io");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Astro$M = createAstro("https://pagekey.io");
const $$Steve = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Steve;
  const metadata = {
    title: "Steve Grice"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Steve Grice", "tagline": "Software Engineer", "actions": [{ variant: "primary", target: "_blank", text: "Contact me", href: "mailto:pagekeysolutions@gmail.com" }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
As a seasoned software engineer, I've found that success lies in balancing technical expertise with effective communication and leadership skills. With over 5 years of industry experience, I've had the opportunity to develop innovative solutions and collaborate with teams to achieve successful project outcomes.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-github",
      callToAction: {
        target: "_blank",
        text: "GitHub",
        href: "https://github.com/stephengrice"
      }
    }
  ], "image": {
    src: "https://github.com/stephengrice.png",
    alt: "Colorful Image",
    loading: "eager"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h2> <p>
Welcome to my journey in software engineering. My focus lies in translating ideas into tangible solutions through collaborative efforts, where each line of code serves as a bridge between concept and execution.
</p> <br> <p>
I like building software to understand how it works, whether it's digging into code or figuring out complex systems. Moreover, I enjoy leading teams, using what I've learned to help us work better together.
</p> <br>  ` })}` })}                  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my articles on the PageKey Blog", "information": `Follow along as I learn new lessons by writing software and more.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/team/steve.astro", void 0);

const $$file$i = "/home/runner/work/website/website/astrowind/src/pages/team/steve.astro";
const $$url$i = "/team/steve";

const steve = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Steve,
                    file: $$file$i,
                    url: $$url$i
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$L = createAstro("https://pagekey.io");
const $$People = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$People;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image, profileUrl }) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> <hr class="border-slate-200 dark:border-slate-600 my-4"> ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${testimonial} "</p> </blockquote>`} ${profileUrl && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { "href": profileUrl }, { "default": ($$result3) => renderTemplate`View profile` })} </div>`} </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/People.astro", void 0);

const $$Astro$K = createAstro("https://pagekey.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$Index$2;
  const metadata = {
    title: "Team"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "People", $$People, { "title": "The PageKey Team", "testimonials": [
    {
      testimonial: `I started up the PageKey brand in 2017. Let's keep it going!`,
      name: "Steve Grice",
      job: "Software Engineer",
      image: {
        src: "https://github.com/stephengrice.png",
        alt: "Steve Grice Image"
      },
      profileUrl: "/team/steve"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/team/index.astro", void 0);

const $$file$h = "/home/runner/work/website/website/astrowind/src/pages/team/index.astro";
const $$url$h = "/team";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Index$2,
                    file: $$file$h,
                    url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$J = createAstro("https://pagekey.io");
const $$ItemGrid2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const {
    items = [],
    columns,
    defaultIcon = "",
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(
    ({
      title,
      description,
      icon,
      callToAction,
      classes: itemClasses = {}
    }) => renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-col",
      panelClass,
      itemClasses?.panel
    ), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "mb-2 w-10 h-10",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}<div${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`
  )}</div>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro$I = createAstro("https://pagekey.io");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Features2.astro", void 0);

const $$Astro$H = createAstro("https://pagekey.io");
const $$Features3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$Features3;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    image,
    items = [],
    columns,
    defaultIcon,
    isBeforeContent,
    isAfterContent,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `${isBeforeContent ? "md:pb-8 lg:pb-12" : ""} ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${maybeRenderHead()}<div aria-hidden="true" class="aspect-w-16 aspect-h-7"> ${image && renderTemplate`<div class="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg", "width": "auto", "height": 320, "widths": [400, 768], "layout": "fullWidth", ...image })}`} </div>`} </div> ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "mt-12",
    panel: "max-w-full sm:max-w-md",
    title: "text-lg font-semibold",
    description: "mt-0.5",
    icon: "flex-shrink-0 mt-1 text-primary w-6 h-6",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Features3.astro", void 0);

const $$Astro$G = createAstro("https://pagekey.io");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center -m-4 text-center"> ${stats && stats.map(({ amount, title: title2, icon }) => renderTemplate`<div class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none dark:md:border-slate-500"> ${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-4 text-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10" })} </div>`} ${amount && renderTemplate`<div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"> ${amount} </div>`} ${title2 && renderTemplate`<div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base"> ${title2} </div>`} </div>`)} </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Stats.astro", void 0);

const $$Astro$F = createAstro("https://pagekey.io");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Steps2.astro", void 0);

const $$Astro$E = createAstro("https://pagekey.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$About;
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About us", "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Caos Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Donec efficitur, ipsum quis congue luctus, mauris magna convallis mauris, eu auctor nisi lectus non augue. Donec
      quis lorem non massa vulputate efficitur ac at turpis. Sed tincidunt ex a nunc convallis, et lobortis nisi tempus.
      Suspendisse vitae nisi eget tortor luctus maximus sed non lectus.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Elevate your online presence with our ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Beautiful Website Templates</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics about us", "stats": [
    { title: "Offices", amount: "4" },
    { title: "Employees", amount: "248" },
    { title: "Templates", amount: "12" },
    { title: "Awards", amount: "24" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Our templates", "subtitle": "Etiam scelerisque, enim eget vestibulum luctus, nibh mauris blandit nulla, nec vestibulum risus justo ut enim. Praesent lacinia diam et ante imperdiet euismod.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Educational",
      description: "Morbi faucibus luctus quam, sit amet aliquet felis tempor id. Cras augue massa, ornare quis dignissim a, molestie vel nulla.",
      icon: "tabler:template"
    },
    {
      title: "Interior Design",
      description: "Vivamus porttitor, tortor convallis aliquam pretium, turpis enim consectetur elit, vitae egestas purus erat ac nunc nulla.",
      icon: "tabler:template"
    },
    {
      title: "Photography",
      description: "Duis sed lectus in nisl vehicula porttitor eget quis odio. Aliquam erat volutpat. Nulla eleifend nulla id sem fermentum.",
      icon: "tabler:template"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "E-commerce",
      description: "Rutrum non odio at vehicula. Proin ipsum justo, dignissim in vehicula sit amet, dignissim id quam. Sed ac tincidunt sapien.",
      icon: "tabler:template"
    },
    {
      title: "Blog",
      description: "Nullam efficitur volutpat sem sed fringilla. Suspendisse et enim eu orci volutpat laoreet ac vitae libero.",
      icon: "tabler:template"
    },
    {
      title: "Business",
      description: "Morbi et elit finibus, facilisis justo ut, pharetra ipsum. Donec efficitur, ipsum quis congue luctus, mauris magna.",
      icon: "tabler:template"
    },
    {
      title: "Branding",
      description: "Suspendisse vitae nisi eget tortor luctus maximus sed non lectus. Cras malesuada pretium placerat. Nullam venenatis dolor a ante rhoncus.",
      icon: "tabler:template"
    },
    {
      title: "Medical",
      description: "Vestibulum malesuada lacus id nibh posuere feugiat. Nam volutpat nulla a felis ultrices, id suscipit mauris congue. In hac habitasse platea dictumst.",
      icon: "tabler:template"
    },
    {
      title: "Fashion Design",
      description: "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus.",
      icon: "tabler:template"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Our values", "subtitle": "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus. Nulla facilisi. Vestibulum malesuada lacus.", "items": [
    {
      title: "Customer-centric approach",
      description: "Donec id nibh neque. Quisque et fermentum tortor. Fusce vitae dolor a mauris dignissim commodo. Ut eleifend luctus condimentum."
    },
    {
      title: "Constant Improvement",
      description: "Phasellus laoreet fermentum venenatis. Vivamus dapibus pulvinar arcu eget mattis. Fusce eget mauris leo."
    },
    {
      title: "Ethical Practices",
      description: "Vestibulum imperdiet libero et lectus molestie, et maximus augue porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Achievements", "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.", "isReversed": true, "callToAction": {
    text: "See more",
    href: "/"
  }, "items": [
    {
      title: "Global reach",
      description: "Nam malesuada urna in enim imperdiet tincidunt. Phasellus non tincidunt nisi, at elementum mi.",
      icon: "tabler:globe"
    },
    {
      title: "Positive customer feedback and reviews",
      description: "Cras semper nulla leo, eget laoreet erat cursus sed. Praesent faucibus massa in purus iaculis dictum.",
      icon: "tabler:message-star"
    },
    {
      title: "Awards and recognition as industry experts",
      description: "Phasellus lacinia cursus velit, eu malesuada magna pretium eu. Etiam aliquet tellus purus, blandit lobortis ex rhoncus vitae.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Our locations", "tagline": "Find us", "columns": 4, "items": [
    {
      title: "EE.UU",
      description: "1234 Lorem Ipsum St, 12345, Miami"
    },
    {
      title: "Spain",
      description: "5678 Lorem Ipsum St, 56789, Madrid"
    },
    {
      title: "Australia",
      description: "9012 Lorem Ipsum St, 90123, Sydney"
    },
    {
      title: "Brazil",
      description: "3456 Lorem Ipsum St, 34567, S\xE3o Paulo"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Technical Support", "tagline": "Contact us", "columns": 2, "items": [
    {
      title: "Chat with us",
      description: "Integer luctus laoreet libero, auctor varius purus rutrum sit amet. Ut nec molestie nisi, quis eleifend mi.",
      icon: "tabler:messages"
    },
    {
      title: "Call us",
      description: "Mauris faucibus finibus orci, in posuere elit viverra non. In hac habitasse platea dictumst. Cras lobortis metus a hendrerit congue.",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/about.astro", void 0);

const $$file$g = "/home/runner/work/website/website/astrowind/src/pages/templates/about.astro";
const $$url$g = "/templates/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$About,
                    file: $$file$g,
                    url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$D = createAstro("https://pagekey.io");
const $$HeroText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$HeroText;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction = await Astro2.slots.render("callToAction"),
    callToAction2 = await Astro2.slots.render("callToAction2")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 pb-8 md:pb-8"> <div class="text-center max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${callToAction && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", ...callToAction })}`} </div>`} ${callToAction2 && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction2 === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction2)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { ...callToAction2 })}`} </div>`} </div> </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> </div> </div> </section>`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/HeroText.astro", void 0);

const $$Astro$C = createAstro("https://pagekey.io");
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Form;
  const { inputs, textarea, disclaimer, button = "Contact us", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form> ${inputs && inputs.map(
    ({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div>`
  )} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/Form.astro", void 0);

const $$Astro$B = createAstro("https://pagekey.io");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Contact.astro", void 0);

const $$Astro$A = createAstro("https://pagekey.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Contact;
  const metadata = {
    title: "Contact"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact", "title": "Let's Connect!" })} ${renderComponent($$result2, "ContactUs", $$Contact$1, { "title": "Drop us a message today!", "subtitle": "For quicker answers, explore our FAQs section. You may find the solution you're looking  for right there! If not, our support team is delighted to help you.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Name"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "textarea": {
    label: "Message"
  }, "disclaimer": {
    label: "By submitting this contact form, you acknowledge and agree to the collection of your personal information."
  }, "description": "Our support team typically responds within 24 business hours." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "We are here to help!", "items": [
    {
      title: "General support",
      description: `Chat with us for inquiries related to account management, website navigation, payment issues, accessing purchased templates or general questions about the website's functionality.`
    },
    {
      title: "Contact sales",
      description: "Chat with us for questions about purchases, customization options, licensing for commercial use, inquiries about specific template, etc."
    },
    {
      title: "Technical support",
      description: "Chat with us when facing issues like template installation, problems editing difficulties, compatibility issues with software or download errors, or other technical challenges related to using the templates."
    },
    {
      title: "Phone",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Location",
      description: "1234 Lorem Ipsum St, 12345, Miami, EEUU",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/contact.astro", void 0);

const $$file$f = "/home/runner/work/website/website/astrowind/src/pages/templates/contact.astro";
const $$url$f = "/templates/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Contact,
                    file: $$file$f,
                    url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$z = createAstro("https://pagekey.io");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 600, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Hero2.astro", void 0);

const $$Astro$y = createAstro("https://pagekey.io");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/CallToAction.astro", void 0);

const $$Astro$x = createAstro("https://pagekey.io");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/FAQs.astro", void 0);

const appStoreImg = new Proxy({"src":"/_astro/app-store.t3tG4Jz3.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/assets/images/app-store.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/assets/images/app-store.png");
							return target[name];
						}
					});

const appStore = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: appStoreImg
}, Symbol.toStringTag, { value: 'Module' }));

const googlePlayImg = new Proxy({"src":"/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/assets/images/google-play.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/assets/images/google-play.png");
							return target[name];
						}
					});

const googlePlay = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: googlePlayImg
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$w = createAstro("https://pagekey.io");
const $$MobileApp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$MobileApp;
  const appStoreDownloadLink = "https://github.com/onwidget/astrowind";
  const googlePlayDownloadLink = "https://github.com/onwidget/astrowind";
  const metadata = {
    title: "Mobile App Homepage"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Mobile App Web Demo", "image": {
    src: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "AstroWind Hero Image"
  } }, { "actions": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span class="hidden sm:inline">
Unlock boundless creativity at your fingertips: your gateway to innovative design.
</span>
Download now and embark on a journey to elevate your projects like never before.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-accent dark:text-white highlight">AstroWind App</span>: <br> professional websites <span class="hidden xl:inline">made easy</span> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "id": "features", "title": "How to use our app?", "subtitle": "Tired of spending hours crafting documents from scratch? Our app offers an innovative solution. With a wide array of professionally designed templates, you can now create stunning documents in minutes. Explore our templates now and experience the difference.", "tagline": "Step-by-step guide", "columns": 2, "items": [
    {
      title: "Download and install the app",
      description: `Begin your journey by downloading our user-friendly app from your device's app store or our official website.`,
      icon: "tabler:square-number-1"
    },
    {
      title: "Sign up",
      description: "Create your account by providing the necessary information, enabling you to access our full range of features.",
      icon: "tabler:square-number-2"
    },
    {
      title: "Browse templates",
      description: "Explore our diverse collection of website templates, categorized for easy navigation.",
      icon: "tabler:square-number-3"
    },
    {
      title: "Preview and select a template",
      description: `Visualize the potential of each template through previews, then choose the one that aligns best with your project's needs.`,
      icon: "tabler:square-number-4"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1521517407911-565264e7d82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "User-friendly interface",
      description: "An intuitive and easy-to-navigate interface that allows users to quickly browse and find the templates they need.",
      icon: "tabler:wand"
    },
    {
      title: "Personalization options",
      description: "Include basic customization tools that let users modify text, colors, images, and other elements within the templates.",
      icon: "tabler:settings"
    },
    {
      title: "Ready-to-use components",
      description: "Enhance your designs with ready-to-use elements like graphics, icons, and layouts, saving you time and boosting visual appeal.",
      icon: "tabler:template"
    },
    {
      title: "Preview Mode",
      description: "Provide a preview of each template, allowing users to see how it looks before making a purchase.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Colorful Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Offline Access",
      description: "Offer the option for users to download purchased templates for offline use.",
      icon: "tabler:wifi-off"
    },
    {
      title: "Secure Cloud Storage",
      description: "Provide cloud storage for purchased templates, ensuring users can access and back up their templates from anywhere securely.",
      icon: "tabler:file-download"
    },
    {
      title: "Regular Updates",
      description: "Continuously add new templates and features to keep the app fresh and engaging for users.",
      icon: "tabler:refresh"
    },
    {
      title: "Wishlist",
      description: `Allow users to create a wishlist of templates they're interested in, making it easier for them to revisit and potentially purchase later.`,
      icon: "tabler:heart"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vintage Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Other features</h3> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics of our app", "stats": [
    { amount: "20K", icon: "tabler:download" },
    { amount: "18.5K", icon: "tabler:users" },
    { amount: "4.7", icon: "tabler:user-star" }
  ] })}   ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Still have some doubts?", "items": [
    {
      title: "What does this app do?",
      description: "This app provides a platform for you to easily browse, purchase, download, and use a wide range of website templates for your projects."
    },
    {
      title: "How can this app solve my problem?",
      description: "This app streamlines the process of finding and implementing professional website designs, saving you time and effort in creating visually appealing and functional websites."
    },
    {
      title: "Is it available for my device?",
      description: `Our app is designed for compatibility across various devices and platforms, ensuring accessibility whether you're using a smartphone, tablet, or computer.`
    },
    {
      title: "What makes this app different from others?",
      description: "Our app stands out for its user-friendly interface, extensive template collection, and seamless integration of the purchasing and downloading process, making it highly efficient."
    },
    {
      title: "Are there any costs involved?",
      description: "While the app itself may be free to download, there may be costs associated with purchasing specific templates based on your preferences and project requirements."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "download", "title": "Download our app now!", "subtitle": "Access a variety of stunning templates, simplify your creative process, and elevate your online presence." }, { "actions": ($$result3) => renderTemplate`<div class="flex max-w-sm gap-4"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": appStoreDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": appStoreImg, "alt": "App Store Image", "width": 200 })} ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "href": googlePlayDownloadLink }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": googlePlayImg, "alt": "Google Play Image", "width": 200 })} ` })} </div>` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "position": "left", "links": [
    { text: "Services", href: "#" },
    { text: "Features", href: "#" },
    { text: "About", href: "#" }
  ], "actions": [
    {
      text: "Download",
      href: "#download"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/homes/mobile-app.astro", void 0);

const $$file$e = "/home/runner/work/website/website/astrowind/src/pages/templates/homes/mobile-app.astro";
const $$url$e = "/templates/homes/mobile-app";

const mobileApp = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$MobileApp,
                    file: $$file$e,
                    url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$v = createAstro("https://pagekey.io");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 2,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "",
    title: "md:text-[1.3rem]",
    icon: "text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Features.astro", void 0);

const $$Astro$u = createAstro("https://pagekey.io");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Pricing.astro", void 0);

const $$Astro$t = createAstro("https://pagekey.io");
const $$Saas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Saas;
  const metadata = {
    title: "SaaS Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "SaaS Web Demo", "actions": [
    { variant: "primary", target: "_blank", text: "Get Started", href: "https://github.com/onwidget/astrowind" },
    { text: "Learn more", href: "#features" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Elevate your website creation process with <span class="font-semibold">AstroWind</span>'s SaaS solutions.</span>
Seamlessly blend the power of Astro 4.0 and Tailwind CSS to craft websites that resonate with your brand and
      audience.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Simplify web design with Astrowind: <br> your ultimate <span class="text-accent dark:text-white highlight">SaaS</span> companion<br> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Why choose AstroWind?", "subtitle": "Each of the following features enhances AstroWind's value proposition.", "columns": 2, "items": [
    {
      title: "Integration of Astro 4.0 and Tailwind CSS",
      description: "Offers a powerful combination that enhances both the development process and the end-user experience. Also, allows to build dynamic and visually stunning websites with optimized performance.",
      icon: "tabler:layers-union"
    },
    {
      title: "Versatile design for startups, small businesses, and more",
      description: `Easily customize AstroWind to harmonize with the unique branding and identity of your venture. AstroWind's versatile design adapts to suit your needs.`,
      icon: "tabler:artboard"
    },
    {
      title: "Effortless customization for portfolios and marketing sites",
      description: "With intuitive customization, easily showcase portfolio pieces, case studies, project highlights, and relevant content. Ideal for creative professionals and businesses looking to highlight their expertise.",
      icon: "tabler:writing"
    },
    {
      title: "Optimized landing pages and engaging blogs",
      description: `Landing pages are strategically designed to captivate visitors and prompt specific actions. Additionally, the blog creation feature empowers sharing insights, engaging the audience.`,
      icon: "tabler:podium"
    },
    {
      title: "Fast loading times and production-ready code",
      description: `Using Astro 4.0 ensures fast loading and seamless rendering, enhancing browsing. The code follows best practices, improving user experience, SEO, and reducing bounce rates.`,
      icon: "tabler:rocket"
    },
    {
      title: "SEO-optimized structure for enhanced visibility",
      description: `Follows SEO best practices with clean code, semantic HTML markup, and fast loading, enhancing search engine rankings. AstroWind's SEO structure ensures visibility to potential customers and clients.`,
      icon: "tabler:eyeglass"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Use cases", "subtitle": "Discover how AstroWind's versatile template serves as the ideal solution for various use cases, providing tailored solutions to drive success.", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Are you a startup with big dreams? AstroWind propels your success. Our template forges a seamless online presence, attracting investors and customers from day one. Astro 4.0 and Tailwind CSS ensure striking, responsive sites, leaving lasting impressions. Countless startups leverage AstroWind to kickstart their journey and resonate with audiences."
    },
    {
      title: "Benefits:",
      description: `Allow startups to quickly create professional websites without investing extensive time and resources. <br /> Make a memorable first impression with visually appealing design elements that highlight your startup's unique value proposition. <br /> Ensures your website looks stunning and works well on all devices. <br /> Engage potential investors and customers with engaging content, clear messaging, and intuitive navigation.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1620558138198-cfb9b4f3c294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    alt: "Startup Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Startup success stories: <br><span class="text-2xl">Launching with AstroWind</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `For SaaS businesses, user experience is key. AstroWind enhances showcasing SaaS solutions intuitively. The template's Astro 4.0 and Tailwind CSS integration guarantees user-friendly experience, mirroring your software's efficiency. Customize pages to communicate SaaS value and solutions for your audience.`
    },
    {
      title: "Benefits:",
      description: `Ensuring a cohesive and user-centric design for your SaaS website. <br /> Effectively communicate complex SaaS features through visual aids, animations, and interactive elements. <br /> Prioritize user needs and pain points through well-structured layouts and clear navigation. <br /> Encourage visitors to take action with strategically placed CTAs. <br /> Ensures your SaaS website works seamlessly across all devices.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80",
    alt: "SaaS Businesses Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
SaaS showcase: <br><span class="text-2xl">Streamlining user experience</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Your portfolio is your masterpiece, and AstroWind is your canvas. Whether you're a designer, photographer, artist, or any other creative professional, AstroWind empowers you to showcase your work with elegance and sophistication. Tailored to highlight your creative projects, AstroWind's templates offer a visually immersive experience that lets your portfolio shine.`
    },
    {
      title: "Benefits:",
      description: `Serve as a captivating backdrop to showcase your creative work, capturing attention and leaving a lasting impression. <br /> Tailor your portfolio to reflect your unique style and artistic vision. <br /> Prioritizes visuals, allowing you to present your work in high-resolution detail that draws viewers into your creations. <br /> Enables seamless navigation for effortless portfolio exploration.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Portfolio Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Creative portfolios: <br><span class="text-2xl">Highlighting your work</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "items": [
    {
      title: "Description:",
      description: `For small businesses, a well-crafted website can be a game-changer. AstroWind empowers small businesses to not only establish a credible online presence but also convert visitors into loyal customers. The template's thoughtful design and optimization features ensure that your website doesn't just attract attention but also guides visitors through a seamless journey, ultimately leading to conversions.`
    },
    {
      title: "Benefits:",
      description: `Present your small business with a professional and polished website that instills confidence and trust among visitors. <br /> Strategically placed CTAs, user-friendly forms, and optimized layouts work together to drive user engagement and conversions. <br /> Ensure a smooth browsing experience, reducing bounce rates and encouraging interaction.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1514621166532-aa7eb1a3a2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Small Business Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Small business growth: <br><span class="text-2xl">Converting visitors into customers</span> </h3> ` })}` })}  ${renderComponent($$result2, "Pricing", $$Pricing$1, { "title": "Flexible pricing plans", "prices": [
    {
      title: "free",
      subtitle: "Access to core features and a wide range of templates",
      price: "0",
      period: "/ month",
      callToAction: {
        target: "_blank",
        text: "Get Started for Free",
        href: "#"
      }
    },
    {
      title: "pro",
      subtitle: "Premium templates and advanced customization",
      price: 15,
      period: "/ Month",
      callToAction: {
        target: "_blank",
        text: "Upgrade to Pro",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "Enterprise",
      subtitle: "Tailored solutions for large-scale projects",
      price: 45,
      period: "/ Month",
      callToAction: {
        target: "_blank",
        text: "Unlock Enterprise Features",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "Is AstroWind compatible with the latest versions of Astro and Tailwind CSS?",
      description: "Yes, AstroWind is designed to be compatible with the latest versions of both Astro and Tailwind CSS. This ensures that you can harness the full capabilities of these technologies while benefiting from the features offered by AstroWind.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Can I use AstroWind for both personal and commercial projects?",
      description: `Certainly! AstroWind is versatile and can be used for a wide range of projects, including both personal and commercial endeavors. Whether you're building a professional portfolio, launching a startup, or creating a marketing website, AstroWind has you covered.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "What level of coding knowledge is required to use AstroWind?",
      description: "While some familiarity with HTML, CSS, and web development concepts is helpful, the user-friendly interface and customization options allow those with limited coding experience to create impressive websites. For more advanced users, AstroWind offers extensive customization capabilities.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Is customer support available for AstroWind users seeking guidance?",
      description: `Absolutely, our dedicated customer support team is here to assist you with any questions or challenges you may encounter. Feel free to reach out to us through our support channels, and we'll be happy to provide the help you need.`,
      icon: "tabler:chevrons-right"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Reach out to us", "subtitle": "Have questions? Feel free to contact us using the form below. We're here to help!", "callToAction": {
    text: "Contact us",
    href: "/"
  }, "items": [
    {
      title: "Email us",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Call us",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Follow us",
      description: "@example",
      icon: "tabler:brand-twitter"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Stay informed with AstroWind's blog", "information": `Explore our collection of articles, guides, and tutorials on web development, design trends, and using AstroWind effectively for your projects.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { ...headerData, "actions": [
    {
      variant: "secondary",
      text: "Login",
      href: "#"
    },
    {
      variant: "primary",
      text: "Sign Up",
      href: "#"
    }
  ], "isSticky": true })} ` })}` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/homes/saas.astro", void 0);

const $$file$d = "/home/runner/work/website/website/astrowind/src/pages/templates/homes/saas.astro";
const $$url$d = "/templates/homes/saas";

const saas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Saas,
                    file: $$file$d,
                    url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$s = createAstro("https://pagekey.io");
const $$LandingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["announcement"])} ` })}`, "default": ($$result2) => renderTemplate`   ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[2] ? [headerData.links[2]] : void 0, "actions": [
    {
      text: "Download",
      href: "https://github.com/onwidget/astrowind"
    }
  ], "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "/home/runner/work/website/website/astrowind/src/layouts/LandingLayout.astro", void 0);

const $$Astro$r = createAstro("https://pagekey.io");
const $$ClickThrough = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$ClickThrough;
  const metadata = {
    title: "Click-through Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Click-through Demo", "title": "Click-through Landing Page: The Perfect Bridge to Conversion!", "subtitle": "Learn how to design a Click-Through Landing Page that seamlessly guides visitors to your main offer.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Click-through Landing Page Hero Image"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/click-through.astro", void 0);

const $$file$c = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/click-through.astro";
const $$url$c = "/templates/landing/click-through";

const clickThrough = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$ClickThrough,
                    file: $$file$c,
                    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$q = createAstro("https://pagekey.io");
const $$LeadGeneration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LeadGeneration;
  const metadata = {
    title: "Lead Generation Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Lead Generation Landing Demo", "title": "Effective Lead Generation Landing Page: Unlock the Secrets", "subtitle": "Discover the secrets to creating a Landing Page that turns curious visitors into eager leads. (Your Hero should grab attention instantly. Use a powerful headline that speaks directly to your target audience.)", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Magnet attracting screws. Lead generation landing page demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/lead-generation.astro", void 0);

const $$file$b = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/lead-generation.astro";
const $$url$b = "/templates/landing/lead-generation";

const leadGeneration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$LeadGeneration,
                    file: $$file$b,
                    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$p = createAstro("https://pagekey.io");
const $$PreLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$PreLaunch;
  const metadata = {
    title: "Pre-Launch Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Pre-launch Demo", "title": "Pre-launch Landing Page: Build the Hype Before the Big Reveal!", "subtitle": "Craft a tantalizing Coming Soon or Pre-Launch Landing Page that leaves visitors eagerly awaiting your launch.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1558803116-c1b4ac867b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Store with a Coming Soon sign. Pre-launch Landing Page"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/pre-launch.astro", void 0);

const $$file$a = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/pre-launch.astro";
const $$url$a = "/templates/landing/pre-launch";

const preLaunch = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$PreLaunch,
                    file: $$file$a,
                    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$o = createAstro("https://pagekey.io");
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Product;
  const metadata = {
    title: "Product Details Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Product Details Demo", "title": "Product Landing Page: Showcase with Precision and Passion!", "subtitle": "Step-by-step guide to designing a Landing Page that highlights every facet of your product or service.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2174&q=80",
    alt: "A spotlight on a product. Product Details Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/product.astro", void 0);

const $$file$9 = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/product.astro";
const $$url$9 = "/templates/landing/product";

const product = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Product,
                    file: $$file$9,
                    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$n = createAstro("https://pagekey.io");
const $$Sales = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Sales;
  const metadata = {
    title: "Sales Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Long-form Sales Demo", "title": "Long-form Sales: Sell with a Story: The Long-form Way!", "subtitle": "Dive deep into crafting a Landing Page that narrates, persuades, and converts.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
    alt: "Children telling a story. Long-form Sales Landing Page demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/sales.astro", void 0);

const $$file$8 = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/sales.astro";
const $$url$8 = "/templates/landing/sales";

const sales = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Sales,
                    file: $$file$8,
                    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro("https://pagekey.io");
const $$Subscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Subscription;
  const metadata = {
    title: "Subscription Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Subscription Landing Demo", "title": "Subscription Landing Page: Turn Casual Browsers into Loyal Subscribers!", "subtitle": "Unlock the formula for a Subscription Landing Page that keeps your audience coming back for more.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Ironic image associated with canceling a subscription. Subscription Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/landing/subscription.astro", void 0);

const $$file$7 = "/home/runner/work/website/website/astrowind/src/pages/templates/landing/subscription.astro";
const $$url$7 = "/templates/landing/subscription";

const subscription = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Subscription,
                    file: $$file$7,
                    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro("https://pagekey.io");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(
    ({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "w-10 h-10 p-2 rounded-full border-2",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}</div></div>`
  )}</div>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/ui/Timeline.astro", void 0);

const $$Astro$k = createAstro("https://pagekey.io");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Steps.astro", void 0);

const $$Astro$j = createAstro("https://pagekey.io");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Pricing;
  const metadata = {
    title: "Pricing"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Pricing", "title": "Stellar Pricing for Every Journey", "subtitle": "Choose the perfect plan that aligns with your cosmic goals." })}  ${renderComponent($$result2, "Prices", $$Pricing$1, { "title": "Our prices", "subtitle": "Only pay for what you need", "prices": [
    {
      title: "basic",
      subtitle: "Optimal choice for personal use",
      price: 29,
      period: "per month",
      items: [
        {
          description: "Etiam in libero, et volutpat"
        },
        {
          description: "Aenean ac nunc dolor tristique"
        },
        {
          description: "Cras scelerisque accumsan lib"
        },
        {
          description: "In hac habitasse"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    },
    {
      title: "standard",
      subtitle: "Optimal choice for small teams",
      price: 69,
      period: "Per Month",
      items: [
        {
          description: "Proin vel laoreet"
        },
        {
          description: "Ut efficitur habitasse egestas"
        },
        {
          description: "Volutpat hac curabitur"
        },
        {
          description: "Pellentesque blandit ut nibh"
        },
        {
          description: "Donec fringilla sem"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "premium",
      subtitle: "Optimal choice for companies",
      price: 199,
      period: "Per Month",
      items: [
        {
          description: "Curabitur suscipit risus"
        },
        {
          description: "Aliquam habitasse malesuada"
        },
        {
          description: "Suspendisse sit amet blandit"
        },
        {
          description: "Suspendisse auctor blandit dui"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Price-related features", "subtitle": "Discover the advantages of choosing our plans", "columns": 2, "items": [
    {
      title: "Tiered Pricing Plans",
      description: "Choose from a range of pricing plans designed to accommodate different budgets and requirements.",
      icon: "tabler:stairs"
    },
    {
      title: "Transparent Pricing",
      description: "Clearly displayed pricing details for each plan, with no hidden costs or unexpected charges.",
      icon: "tabler:flip-vertical"
    },
    {
      title: "Secure Payment Methods",
      description: "Secure payment gateways to protect your financial information during transactions.",
      icon: "tabler:shield-lock"
    },
    {
      title: "Instant Access",
      description: `Immediate access to your chosen plan's features and templates upon subscription.`,
      icon: "tabler:accessible"
    },
    {
      title: "Upgrade Value",
      description: "Upgrade to higher-tier plans to unlock more features and benefits for an enhanced experience.",
      icon: "tabler:chevrons-up"
    },
    {
      title: "24H support",
      description: "Questions answered via live chat, email or phone, every calendar day.",
      icon: "tabler:headset"
    }
  ], "classes": { container: "max-w-5xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "A guided journey from plans to creativity", "tagline": "simplified process", "isReversed": true, "items": [
    {
      title: "Explore plans",
      icon: "tabler:number-1"
    },
    {
      title: "Select a plan",
      icon: "tabler:number-2"
    },
    {
      title: "Sign Up / Log In",
      icon: "tabler:number-3"
    },
    {
      title: "Review order",
      icon: "tabler:number-4"
    },
    {
      title: "Enter payment details",
      icon: "tabler:number-5"
    },
    {
      title: "Confirmation",
      icon: "tabler:number-6"
    },
    {
      title: "Download and start using the template(s)",
      icon: "tabler:number-7"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Pricing FAQs", "subtitle": "Choosing the right plan is important, and we're here to answer your questions. If you have queries about our pricing options, you're in the right place.", "columns": 1, "items": [
    {
      title: "Do the plans come with customer support?",
      description: "Absolutely, all plans include access to our dedicated customer support to assist you with any queries or concerns."
    },
    {
      title: "Is there a trial period for the different plans?",
      description: "Unfortunately, we don't offer trial periods for the plans. However, you can check out our demo section to preview the quality of our templates."
    },
    {
      title: "Can I switch between plans?",
      description: "Certainly! You can easily upgrade or downgrade your plan, at any time, to find the one that best suits your evolving requirements."
    },
    {
      title: "What payment methods do you accept?",
      description: "We accept major credit cards and online payment methods to ensure a convenient and secure transaction process."
    },
    {
      title: "Are there any hidden fees beyond the displayed cost?",
      description: "No, the subscription cost covers all the features and templates listed under each plan. There are no hidden fees or extra charges."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Ready to boost your projects?", "subtitle": "Join our community of satisfied customers who have transformed their work with our templates.", "actions": [
    {
      variant: "primary",
      text: "Get started now",
      href: "/"
    }
  ] })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/pricing.astro", void 0);

const $$file$6 = "/home/runner/work/website/website/astrowind/src/pages/templates/pricing.astro";
const $$url$6 = "/templates/pricing";

const pricing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Pricing,
                    file: $$file$6,
                    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro("https://pagekey.io");
const $$MarkdownLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-4xl"> <h1 class="font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter">${frontmatter.title}</h1> <div class="mx-auto prose prose-lg max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/layouts/MarkdownLayout.astro", void 0);

const html$1 = "<p><em>Last updated</em>: January 06, 2023</p>\n<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>\n<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy is just a Demo.</p>\n<h2 id=\"interpretation-and-definitions\">Interpretation and Definitions</h2>\n<h3 id=\"interpretation\">Interpretation</h3>\n<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\n<h3 id=\"definitions\">Definitions</h3>\n<p>For the purposes of this Privacy Policy:</p>\n<ul>\n<li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>\n<li><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to AstroWind LLC, 1 Cupertino, CA 95014.</li>\n<li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>\n<li><strong>Country</strong> refers to: California, United States</li>\n<li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>\n<li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>\n<li><strong>Service</strong> refers to the Website.</li>\n<li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>\n<li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>\n<li><strong>Website</strong> refers to AstroWind, accessible from <a href=\"https://astrowind.vercel.app\">https://astrowind.vercel.app</a></li>\n<li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>\n</ul>\n<h2 id=\"collecting-and-using-your-personal-data\">Collecting and Using Your Personal Data</h2>\n<h3 id=\"types-of-data-collected\">Types of Data Collected</h3>\n<h4 id=\"personal-data\">Personal Data</h4>\n<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>\n<ul>\n<li>Usage Data</li>\n</ul>\n<h4 id=\"usage-data\">Usage Data</h4>\n<p>Usage Data is collected automatically when using the Service.</p>\n<p>Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\n<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>\n<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>\n<h4 id=\"tracking-technologies-and-cookies\">Tracking Technologies and Cookies</h4>\n<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>\n<ul>\n<li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>\n<li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>\n</ul>\n<p>Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>\n<p>We use both Session and Persistent Cookies for the purposes set out below:</p>\n<ul>\n<li>\n<p><strong>Necessary / Essential Cookies</strong></p>\n<p>Type: Session Cookies</p>\n<p>Administered by: Us</p>\n<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>\n</li>\n<li>\n<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>\n<p>Type: Persistent Cookies</p>\n<p>Administered by: Us</p>\n<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>\n</li>\n<li>\n<p><strong>Functionality Cookies</strong></p>\n<p>Type: Persistent Cookies</p>\n<p>Administered by: Us</p>\n<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>\n</li>\n</ul>\n<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>\n<h2 id=\"use-of-your-personal-data\">Use of Your Personal Data</h2>\n<p>The Company may use Personal Data for the following purposes:</p>\n<ul>\n<li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>\n<li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>\n<li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>\n<li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>\n<li><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>\n<li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>\n<li><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>\n<li><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>\n</ul>\n<p>We may share Your personal information in the following situations:</p>\n<ul>\n<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>\n<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>\n<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>\n<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>\n<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>\n<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>\n</ul>\n<h2 id=\"retention-of-your-personal-data\">Retention of Your Personal Data</h2>\n<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>\n<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>\n<h2 id=\"transfer-of-your-personal-data\">Transfer of Your Personal Data</h2>\n<p>Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>\n<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>\n<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>\n<h2 id=\"delete-your-personal-data\">Delete Your Personal Data</h2>\n<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>\n<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>\n<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>\n<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>\n<h2 id=\"disclosure-of-your-personal-data\">Disclosure of Your Personal Data</h2>\n<h3 id=\"business-transactions\">Business Transactions</h3>\n<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>\n<h4 id=\"law-enforcement\">Law enforcement</h4>\n<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>\n<h4 id=\"other-legal-requirements\">Other legal requirements</h4>\n<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>\n<ul>\n<li>Comply with a legal obligation</li>\n<li>Protect and defend the rights or property of the Company</li>\n<li>Prevent or investigate possible wrongdoing in connection with the Service</li>\n<li>Protect the personal safety of Users of the Service or the public</li>\n<li>Protect against legal liability</li>\n</ul>\n<h2 id=\"security-of-your-personal-data\">Security of Your Personal Data</h2>\n<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>\n<h2 id=\"childrens-privacy\">Children’s Privacy</h2>\n<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>\n<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.</p>\n<h2 id=\"links-to-other-websites\">Links to Other Websites</h2>\n<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n<h2 id=\"changes-to-this-privacy-policy\">Changes to this Privacy Policy</h2>\n<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>\n<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.</p>\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n<h2 id=\"contact-us\">Contact Us</h2>\n<p>If you have any questions about this Privacy Policy, You can contact us:</p>\n<ul>\n<li>By email: <a href=\"mailto:somecoolemail@domain.com\">somecoolemail@domain.com</a></li>\n</ul>";

				const frontmatter$1 = {"title":"Privacy Policy","layout":"~/layouts/MarkdownLayout.astro","readingTime":12};
				const file$1 = "/home/runner/work/website/website/astrowind/src/pages/templates/privacy.md";
				const url$1 = "/templates/privacy";
				function rawContent$1() {
					return "\n_Last updated_: January 06, 2023\n\nThis Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.\n\nWe use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy is just a Demo.\n\n## Interpretation and Definitions\n\n### Interpretation\n\nThe words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\n\n### Definitions\n\nFor the purposes of this Privacy Policy:\n\n- **Account** means a unique account created for You to access our Service or parts of our Service.\n- **Company** (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to AstroWind LLC, 1 Cupertino, CA 95014.\n- **Cookies** are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.\n- **Country** refers to: California, United States\n- **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.\n- **Personal Data** is any information that relates to an identified or identifiable individual.\n- **Service** refers to the Website.\n- **Service Provider** means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.\n- **Usage Data** refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).\n- **Website** refers to AstroWind, accessible from [https://astrowind.vercel.app](https://astrowind.vercel.app)\n- **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.\n\n## Collecting and Using Your Personal Data\n\n### Types of Data Collected\n\n#### Personal Data\n\nWhile using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:\n\n- Usage Data\n\n#### Usage Data\n\nUsage Data is collected automatically when using the Service.\n\nUsage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.\n\nWhen You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.\n\nWe may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.\n\n#### Tracking Technologies and Cookies\n\nWe use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:\n\n- **Cookies or Browser Cookies.** A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.\n- **Web Beacons.** Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).\n\nCookies can be \"Persistent\" or \"Session\" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.\n\nWe use both Session and Persistent Cookies for the purposes set out below:\n\n- **Necessary / Essential Cookies**\n\n  Type: Session Cookies\n\n  Administered by: Us\n\n  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.\n\n- **Cookies Policy / Notice Acceptance Cookies**\n\n  Type: Persistent Cookies\n\n  Administered by: Us\n\n  Purpose: These Cookies identify if users have accepted the use of cookies on the Website.\n\n- **Functionality Cookies**\n\n  Type: Persistent Cookies\n\n  Administered by: Us\n\n  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.\n\nFor more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.\n\n## Use of Your Personal Data\n\nThe Company may use Personal Data for the following purposes:\n\n- **To provide and maintain our Service**, including to monitor the usage of our Service.\n- **To manage Your Account:** to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.\n- **For the performance of a contract:** the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.\n- **To contact You:** To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.\n- **To provide You** with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.\n- **To manage Your requests:** To attend and manage Your requests to Us.\n- **For business transfers:** We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.\n- **For other purposes**: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.\n\nWe may share Your personal information in the following situations:\n\n- **With Service Providers:** We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.\n- **For business transfers:** We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.\n- **With Affiliates:** We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.\n- **With business partners:** We may share Your information with Our business partners to offer You certain products, services or promotions.\n- **With other users:** when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.\n- **With Your consent**: We may disclose Your personal information for any other purpose with Your consent.\n\n## Retention of Your Personal Data\n\nThe Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.\n\nThe Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.\n\n## Transfer of Your Personal Data\n\nYour information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.\n\nYour consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.\n\nThe Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.\n\n## Delete Your Personal Data\n\nYou have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.\n\nOur Service may give You the ability to delete certain information about You from within the Service.\n\nYou may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.\n\nPlease note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.\n\n## Disclosure of Your Personal Data\n\n### Business Transactions\n\nIf the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.\n\n#### Law enforcement\n\nUnder certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).\n\n#### Other legal requirements\n\nThe Company may disclose Your Personal Data in the good faith belief that such action is necessary to:\n\n- Comply with a legal obligation\n- Protect and defend the rights or property of the Company\n- Prevent or investigate possible wrongdoing in connection with the Service\n- Protect the personal safety of Users of the Service or the public\n- Protect against legal liability\n\n## Security of Your Personal Data\n\nThe security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.\n\n## Children's Privacy\n\nOur Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.\n\nIf We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.\n\n## Links to Other Websites\n\nOur Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.\n\nWe have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.\n\n## Changes to this Privacy Policy\n\nWe may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.\n\nWe will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.\n\nYou are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.\n\n## Contact Us\n\nIf you have any questions about this Privacy Policy, You can contact us:\n\n- By email: somecoolemail@domain.com\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [{"depth":2,"slug":"interpretation-and-definitions","text":"Interpretation and Definitions"},{"depth":3,"slug":"interpretation","text":"Interpretation"},{"depth":3,"slug":"definitions","text":"Definitions"},{"depth":2,"slug":"collecting-and-using-your-personal-data","text":"Collecting and Using Your Personal Data"},{"depth":3,"slug":"types-of-data-collected","text":"Types of Data Collected"},{"depth":4,"slug":"personal-data","text":"Personal Data"},{"depth":4,"slug":"usage-data","text":"Usage Data"},{"depth":4,"slug":"tracking-technologies-and-cookies","text":"Tracking Technologies and Cookies"},{"depth":2,"slug":"use-of-your-personal-data","text":"Use of Your Personal Data"},{"depth":2,"slug":"retention-of-your-personal-data","text":"Retention of Your Personal Data"},{"depth":2,"slug":"transfer-of-your-personal-data","text":"Transfer of Your Personal Data"},{"depth":2,"slug":"delete-your-personal-data","text":"Delete Your Personal Data"},{"depth":2,"slug":"disclosure-of-your-personal-data","text":"Disclosure of Your Personal Data"},{"depth":3,"slug":"business-transactions","text":"Business Transactions"},{"depth":4,"slug":"law-enforcement","text":"Law enforcement"},{"depth":4,"slug":"other-legal-requirements","text":"Other legal requirements"},{"depth":2,"slug":"security-of-your-personal-data","text":"Security of Your Personal Data"},{"depth":2,"slug":"childrens-privacy","text":"Children’s Privacy"},{"depth":2,"slug":"links-to-other-websites","text":"Links to Other Websites"},{"depth":2,"slug":"changes-to-this-privacy-policy","text":"Changes to this Privacy Policy"},{"depth":2,"slug":"contact-us","text":"Contact Us"}];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1)}`
							})}`;
				});

const privacy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    Content: Content$1,
                    compiledContent: compiledContent$1,
                    default: Content$1,
                    file: file$1,
                    frontmatter: frontmatter$1,
                    getHeadings: getHeadings$1,
                    rawContent: rawContent$1,
                    url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro("https://pagekey.io");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline$1, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${testimonial} "</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/Testimonials.astro", void 0);

const $$Astro$g = createAstro("https://pagekey.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Services;
  const metadata = {
    title: "Services"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Services", "title": "Elevate your projects with our stunning templates", "subtitle": "Explore our meticulously crafted templates tailored to various industries and purposes. From captivating presentations to functional website designs, we offer the tools you need to succeed.", "actions": [{ variant: "primary", target: "_blank", text: "Start exploring", href: "/" }], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "AstroWind Hero Image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Explore our diverse templates", "subtitle": "Discover our selection below to streamline and elevate your projects.", "columns": 3, "items": [
    {
      title: "Educational",
      description: "By harmonizing instructional design and visual appeal, templates streamline content creation for varied materials, expediting development and cultivating engaging educational spaces.",
      icon: "tabler:school"
    },
    {
      title: "Interior Design",
      description: "Crafting functional, visually appealing spaces for residential and commercial use. Templates emphasize layout, colors, and furniture setups, offering a versatile toolkit for your design vision.",
      icon: "tabler:home-star"
    },
    {
      title: "Photography",
      description: `Empowering photographers, our templates facilitate captivating storytelling. With a keen focus on layout, galleries, and typography, they cater to both professionals and enthusiasts.`,
      icon: "tabler:photo"
    },
    {
      title: "E-commerce",
      description: "Developing engaging online stores, our E-commerce templates ensure a dynamic presence to effectively showcase products. Ideal for startups or revamps.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "Blog",
      description: "With attention to typography, these templates empower effective content presentation for writers at any stage, ensuring visually engaging and user-friendly blogs.",
      icon: "tabler:article"
    },
    {
      title: "Business",
      description: "Providing polished options for effective visual communication, these templates empower both startups and established companies for a professional brand presence.",
      icon: "tabler:building-store"
    },
    {
      title: "Branding",
      description: "Offering pre-designed elements for a consistent brand identity, including logos and marketing materials. Ideal for new ventures or revamps.",
      icon: "tabler:arrow-big-up-lines"
    },
    {
      title: "Medical",
      description: `From presentations to patient forms, these tools enhance communication effectiveness for healthcare professionals. Ideal for medical practices and research pursuits.`,
      icon: "tabler:vaccine"
    },
    {
      title: "Fashion Design",
      description: "With attention to detail, customization, and contemporary design, they empower designers to showcase ideas cohesively. Ideal for all levels of designers.",
      icon: "tabler:tie"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "High-Quality Designs",
      description: "Our templates feature top-tier designs that ensure a professional and polished appearance for your projects.",
      icon: "tabler:wand"
    },
    {
      title: "Customization Tools",
      description: "Tailor each template to your unique needs with user-friendly customization tools that let you personalize colors, fonts, and content.",
      icon: "tabler:settings"
    },
    {
      title: "Pre-Designed Elements",
      description: "Save time and effort with our ready-to-use elements, including graphics, icons, and layouts that enhance the visual appeal of your creations.",
      icon: "tabler:presentation"
    },
    {
      title: "Preview and Mockup Views",
      description: "Visualize the final outcome before making any changes using our preview and mockup views, ensuring your projects meet your expectations.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Features Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Time Savings",
      description: "Streamline your workflow, enabling you to create stunning materials efficiently and allocate more time to your core tasks.",
      icon: "tabler:clock"
    },
    {
      title: "Professional Appearance",
      description: "Elevate your projects with the polished and sophisticated look that our templates provide, making a lasting impression on your audience.",
      icon: "tabler:school"
    },
    {
      title: "Cost-Efficiency",
      description: "Benefit from cost savings by avoiding the need for custom design work, as our templates offer professional-grade designs at a fraction of the cost.",
      icon: "tabler:coin"
    },
    {
      title: "Instant Download",
      description: "Enjoy immediate access to your chosen templates upon purchase, enabling you to begin working on your projects without delay.",
      icon: "tabler:file-download"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Benefits Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Benefits</h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Words from real customers", "testimonials": [
    {
      testimonial: `The designs are not only visually appealing but also highly professional. The templates have saved me a significant amount of time while helping me make a lasting impression on my clients.`,
      name: "Emily Kennedy",
      job: "Front-end developer",
      image: {
        src: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        alt: "Emily Kennedy Image"
      }
    },
    {
      testimonial: `It beautifully showcases my work, with its clean and elegant design that lets my photographs shine. Customization was a breeze, even for a non-tech person like me. The result is a professional and immersive portfolio that's garnered numerous compliments.`,
      name: "Sarah Hansen",
      job: "Photographer",
      image: {
        src: "https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Sarah Hansen Image"
      }
    },
    {
      testimonial: `I discovered these templates and I'm impressed by their variety and quality. They've helped me establish a consistent brand image across my marketing and social platforms, elevating my business's overall appearance.`,
      name: "Mark Wilkinson",
      job: "Small business owner",
      image: {
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
        alt: "Mark Wilkinson Image"
      }
    }
  ], "callToAction": {
    target: "_blank",
    text: "More testimonials...",
    href: "https://github.com/onwidget/astrowind",
    icon: "tabler:chevron-right"
  } })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [{
    variant: "primary",
    text: "Start exploring",
    href: "/"
  }], "title": "Dive into our template collection", "subtitle": "Whether you're in business, design, or education, our templates are here to elevate your projects." })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/templates/services.astro", void 0);

const $$file$5 = "/home/runner/work/website/website/astrowind/src/pages/templates/services.astro";
const $$url$5 = "/templates/services";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Services,
                    file: $$file$5,
                    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<p><em>Last updated</em>: January 06, 2023</p>\n<p>Please read these terms and conditions carefully before using Our Service.</p>\n<h2 id=\"interpretation-and-definitions\">Interpretation and Definitions</h2>\n<h3 id=\"interpretation\">Interpretation</h3>\n<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\n<h3 id=\"definitions\">Definitions</h3>\n<p>For the purposes of these Terms and Conditions:</p>\n<ul>\n<li>\n<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>\n</li>\n<li>\n<p><strong>Country</strong> refers to: California, United States</p>\n</li>\n<li>\n<p><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to AstroWind LLC, 1 Cupertino, CA 95014.</p>\n</li>\n<li>\n<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>\n</li>\n<li>\n<p><strong>Service</strong> refers to the Website.</p>\n</li>\n<li>\n<p><strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement is a Demo.</p>\n</li>\n<li>\n<p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>\n</li>\n<li>\n<p><strong>Website</strong> refers to AstroWind, accessible from <a href=\"https://astrowind.vercel.app\">https://astrowind.vercel.app</a></p>\n</li>\n<li>\n<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>\n</li>\n</ul>\n<h2 id=\"acknowledgment\">Acknowledgment</h2>\n<p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>\n<p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>\n<p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>\n<p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>\n<p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>\n<h2 id=\"links-to-other-websites\">Links to Other Websites</h2>\n<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>\n<p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>\n<p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>\n<h2 id=\"termination\">Termination</h2>\n<p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>\n<p>Upon termination, Your right to use the Service will cease immediately.</p>\n<h2 id=\"limitation-of-liability\">Limitation of Liability</h2>\n<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven’t purchased anything through the Service.</p>\n<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>\n<p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permitted by law.</p>\n<h2 id=\"as-is-and-as-available-disclaimer\">”AS IS” and “AS AVAILABLE” Disclaimer</h2>\n<p>The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>\n<p>Without limiting the foregoing, neither the Company nor any of the company’s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>\n<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>\n<h2 id=\"governing-law\">Governing Law</h2>\n<p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>\n<h2 id=\"disputes-resolution\">Disputes Resolution</h2>\n<p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>\n<h2 id=\"for-european-union-eu-users\">For European Union (EU) Users</h2>\n<p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>\n<h2 id=\"united-states-legal-compliance\">United States Legal Compliance</h2>\n<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>\n<h2 id=\"severability-and-waiver\">Severability and Waiver</h2>\n<h3 id=\"severability\">Severability</h3>\n<p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>\n<h3 id=\"waiver\">Waiver</h3>\n<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party’s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>\n<h2 id=\"translation-interpretation\">Translation Interpretation</h2>\n<p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>\n<h2 id=\"changes-to-these-terms-and-conditions\">Changes to These Terms and Conditions</h2>\n<p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>\n<p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>\n<h2 id=\"contact-us\">Contact Us</h2>\n<p>If you have any questions about these Terms and Conditions, You can contact us:</p>\n<ul>\n<li>By email: <a href=\"mailto:somecoolemail@domain.com\">somecoolemail@domain.com</a></li>\n</ul>";

				const frontmatter = {"title":"Terms and Conditions","layout":"~/layouts/MarkdownLayout.astro","readingTime":8};
				const file = "/home/runner/work/website/website/astrowind/src/pages/templates/terms.md";
				const url = "/templates/terms";
				function rawContent() {
					return "\n_Last updated_: January 06, 2023\n\nPlease read these terms and conditions carefully before using Our Service.\n\n## Interpretation and Definitions\n\n### Interpretation\n\nThe words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\n\n### Definitions\n\nFor the purposes of these Terms and Conditions:\n\n- **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.\n\n- **Country** refers to: California, United States\n\n- **Company** (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to AstroWind LLC, 1 Cupertino, CA 95014.\n\n- **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.\n\n- **Service** refers to the Website.\n\n- **Terms and Conditions** (also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement is a Demo.\n\n- **Third-party Social Media Service** means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.\n\n- **Website** refers to AstroWind, accessible from [https://astrowind.vercel.app](https://astrowind.vercel.app)\n\n- **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.\n\n## Acknowledgment\n\nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\n\nYour access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\n\nBy accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.\n\nYou represent that you are over the age of 18\\. The Company does not permit those under 18 to use the Service.\n\nYour access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.\n\n## Links to Other Websites\n\nOur Service may contain links to third-party web sites or services that are not owned or controlled by the Company.\n\nThe Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.\n\nWe strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.\n\n## Termination\n\nWe may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.\n\nUpon termination, Your right to use the Service will cease immediately.\n\n## Limitation of Liability\n\nNotwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.\n\nTo the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\n\nSome states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.\n\n## \"AS IS\" and \"AS AVAILABLE\" Disclaimer\n\nThe Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\n\nWithout limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\n\nSome jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.\n\n## Governing Law\n\nThe laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.\n\n## Disputes Resolution\n\nIf You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.\n\n## For European Union (EU) Users\n\nIf You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.\n\n## United States Legal Compliance\n\nYou represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a \"terrorist supporting\" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.\n\n## Severability and Waiver\n\n### Severability\n\nIf any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.\n\n### Waiver\n\nExcept as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.\n\n## Translation Interpretation\n\nThese Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.\n\n## Changes to These Terms and Conditions\n\nWe reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.\n\nBy continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.\n\n## Contact Us\n\nIf you have any questions about these Terms and Conditions, You can contact us:\n\n- By email: somecoolemail@domain.com\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"interpretation-and-definitions","text":"Interpretation and Definitions"},{"depth":3,"slug":"interpretation","text":"Interpretation"},{"depth":3,"slug":"definitions","text":"Definitions"},{"depth":2,"slug":"acknowledgment","text":"Acknowledgment"},{"depth":2,"slug":"links-to-other-websites","text":"Links to Other Websites"},{"depth":2,"slug":"termination","text":"Termination"},{"depth":2,"slug":"limitation-of-liability","text":"Limitation of Liability"},{"depth":2,"slug":"as-is-and-as-available-disclaimer","text":"”AS IS” and “AS AVAILABLE” Disclaimer"},{"depth":2,"slug":"governing-law","text":"Governing Law"},{"depth":2,"slug":"disputes-resolution","text":"Disputes Resolution"},{"depth":2,"slug":"for-european-union-eu-users","text":"For European Union (EU) Users"},{"depth":2,"slug":"united-states-legal-compliance","text":"United States Legal Compliance"},{"depth":2,"slug":"severability-and-waiver","text":"Severability and Waiver"},{"depth":3,"slug":"severability","text":"Severability"},{"depth":3,"slug":"waiver","text":"Waiver"},{"depth":2,"slug":"translation-interpretation","text":"Translation Interpretation"},{"depth":2,"slug":"changes-to-these-terms-and-conditions","text":"Changes to These Terms and Conditions"},{"depth":2,"slug":"contact-us","text":"Contact Us"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const terms = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    Content,
                    compiledContent,
                    default: Content,
                    file,
                    frontmatter,
                    getHeadings,
                    rawContent,
                    url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://pagekey.io");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "text-sm", title = void 0, isCategory = false } = Astro2.props;
  return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${title !== void 0 && renderTemplate`${maybeRenderHead()}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}` })}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-2 py-0.5 px-2 lowercase font-medium">${renderTemplate`<a${addAttribute(getPermalink(tag, isCategory ? "category" : "tag"), "href")} class="text-muted dark:text-slate-300 hover:text-primary dark:hover:text-gray-200">${tag}</a>`}</li>`)}</ul>` })}`}`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/Tags.astro", void 0);

const $$Astro$e = createAstro("https://pagekey.io");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${image ? "md:grid-cols-2" : ""}`, "class")}> ${image && renderTemplate`<a class="relative block group"${addAttribute(link ?? "javascript:void(0)", "href")}> <div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 900, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })}`} </div> </a>`} <div class="mt-2"> <header> <div class="mb-1"> <span class="text-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>${post.author.replaceAll("-", " ")}</span> ` })}`} ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}<a class="capitalize hover:underline"${addAttribute(getPermalink(post.category, "category"), "href")}> ${post.category.replaceAll("-", " ")} </a> ` })}`} </span> </div> <h2 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h2> </header> ${post.excerpt && renderTemplate`<p class="flex-grow text-muted dark:text-slate-400 text-lg">${post.excerpt}</p>`} <footer class="mt-5"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags })} </footer> </div> </article>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/ListItem.astro", void 0);

const $$Astro$d = createAstro("https://pagekey.io");
const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li class="mb-12 md:mb-20"> ${renderComponent($$result, "Item", $$ListItem, { "post": post })} </li>`)} </ul>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/List.astro", void 0);

const $$Astro$c = createAstro("https://pagekey.io");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-8 md:mb-16 text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${unescapeHTML(title)}</h1> ${subtitle && renderTemplate`<div class="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/Headline.astro", void 0);

const $$Astro$b = createAstro("https://pagekey.io");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "Newer posts", nextText = "Older posts" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="flex flex-row mx-auto container justify-between">${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 mr-2 ${!prevUrl ? "invisible" : ""}`, "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 ${!nextUrl ? "invisible" : ""}`, "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}</div></div>`}`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/Pagination.astro", void 0);

const $$Astro$a = createAstro("https://pagekey.io");
const prerender$3 = true;
const getStaticPaths$3 = async ({ paginate }) => {
  return await getStaticPathsBlogCategory({ paginate });
};
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$$2;
  const { page, category } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Category '${category}' ${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: blogCategoryRobots?.index,
      follow: blogCategoryRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`<span class="capitalize">${category.replaceAll("-", " ")}</span>` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[category]/[...page].astro", void 0);

const $$file$4 = "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[category]/[...page].astro";
const $$url$4 = "/[...blog]/[category]/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$$2,
                    file: $$file$4,
                    getStaticPaths: getStaticPaths$3,
                    prerender: prerender$3,
                    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://pagekey.io");
const prerender$2 = true;
const getStaticPaths$2 = async ({ paginate }) => {
  return await getStaticPathsBlogTag({ paginate });
};
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$$1;
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Posts by tag '${tag}'${currentPage > 1 ? ` \u2014 Page ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Tag: ${tag}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file$3 = "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[tag]/[...page].astro";
const $$url$3 = "/[...blog]/[tag]/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$$1,
                    file: $$file$3,
                    getStaticPaths: getStaticPaths$2,
                    prerender: prerender$2,
                    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://pagekey.io");
const prerender$1 = true;
const getStaticPaths$1 = async ({ paginate }) => {
  return await getStaticPathsBlogList({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Blog${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "News, tutorials, resources and other interesting content related to PageKey" }, { "default": ($$result3) => renderTemplate`
Blog
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[...page].astro", void 0);

const $$file$2 = "/home/runner/work/website/website/astrowind/src/pages/[...blog]/[...page].astro";
const $$url$2 = "/[...blog]/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$,
                    file: $$file$2,
                    getStaticPaths: getStaticPaths$1,
                    prerender: prerender$1,
                    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://pagekey.io");
const $$YoutubeVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$YoutubeVideo;
  const {
    videoId,
    title = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoId, "playlabel": title })}  `;
}, "/home/runner/work/website/website/astrowind/src/components/common/YoutubeVideo.astro", void 0);

const $$Astro$6 = createAstro("https://pagekey.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const metadata = {
    title: "Home"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Take Back Tech", "actions": [
    {
      variant: "primary",
      target: "_blank",
      text: "Join us",
      href: "https://discord.gg/5m5yFgDPF5",
      icon: "tabler:brand-discord-filled"
    },
    { text: "Learn more", href: "#what-we-do" }
  ] }, { "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "image" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "YoutubeVideo", $$YoutubeVideo, { "videoId": "7Kock_b-glg", "title": "PageKey Channel Trailer" })} ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
By self-hosting your own services and programming things yourself, you'll gain control of ${maybeRenderHead()}<span class="font-semibold">your data, your attention, and your life</span>.
      Our goal at PageKey is to make that as simple as possible.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-orange-400 highlight">Regain control</span> <span class="hidden sm:inline"></span>of your attention by understanding <span class="text-accent dark:text-green-500 highlight">the tech</span> that runs the world.
` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "About us", "subtitle": "Passionately committed to helping individuals take charge of their digital journey, our organization is here to support you every step of the way. Through easy-to-follow tutorials and guides, we make self-hosting applications a breeze, empowering you to navigate the tech world with confidence. What's more, we create open-source tools that enhance your experience, making self-hosting not just possible but also rewarding and accessible for everyone in our community." }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}      ${renderComponent($$result2, "Features2", $$Features2, { "id": "what-we-do", "title": "What does PageKey do?", "subtitle": "We'll give you plenty of free content to get you started on your tech journey.", "items": [
    {
      title: "Tutorials and Guides",
      description: "We offer clear instructions on how to use various open source technologies, old and new.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Open Source Products",
      description: "We create products that allow you to dive into the code, learn how they work, and manage your own data.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Community",
      description: "Join our Discord and chat with like-minded individuals. Keep an eye out for PageKey hackathons too!",
      icon: "flat-color-icons:voice-presentation"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}      ${renderComponent($$result2, "Features3", $$Features3, { "title": "Let's get in touch.", "subtitle": "We want you to get involved in any way you see fit.", "columns": 4, "items": [
    {
      title: "YouTube",
      icon: "tabler:brand-youtube-filled",
      callToAction: {
        target: "_blank",
        text: "Watch and comment",
        href: "https://youtube.com/@PageKey",
        variant: "link"
      }
    },
    {
      title: "Email",
      icon: "tabler:mail",
      callToAction: {
        target: "_blank",
        text: "Write to us",
        href: "mailto:pagekeysolutions@gmail.com",
        variant: "link"
      }
    },
    {
      title: "Chat on Discord",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Start chatting",
        href: "https://discord.gg/5m5yFgDPF5",
        variant: "link"
      }
    },
    {
      title: "GitHub",
      icon: "tabler:brand-github-filled",
      callToAction: {
        target: "_blank",
        text: "Discuss and contribute",
        href: "https://github.com/pagekey",
        variant: "link"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      target: "_blank",
      text: "Join us",
      href: "https://discord.gg/5m5yFgDPF5",
      icon: "tabler:brand-discord-filled"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Discover a community of like-minded individuals taking control of the tech in their lives.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Be a part of the vision` })}` })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/index.astro", void 0);

const $$file$1 = "/home/runner/work/website/website/astrowind/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Index$1,
                    file: $$file$1,
                    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://pagekey.io");
const $$SocialShare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-gray-400 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-linkedin", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> </div>`;
}, "/home/runner/work/website/website/astrowind/src/components/common/SocialShare.astro", void 0);

const $$Astro$4 = createAstro("https://pagekey.io");
const $$SinglePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  const { Content } = post;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(post.image ? "" : "", "class")}> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
· ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <span class="inline-block">${post.author}</span> ` })}`} ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}<a class="capitalize hover:underline inline-block"${addAttribute(getPermalink(post.category, "category"), "href")}> ${post.category.replaceAll("-", " ")} </a> ` })}`} ${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> min read
` })}`} </p> </div> <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading"> ${post.title} </h1> <p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ${post.excerpt} </p> ${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.excerpt || "", "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px]"> ${Content ? renderTemplate`${renderComponent($$result, "Content", Content, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content || "")}` })}`} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} ${renderComponent($$result, "SocialShare", $$SocialShare, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/SinglePost.astro", void 0);

const $$Astro$3 = createAstro("https://pagekey.io");
const $$ToBlogLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToBlogLink;
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Back to Blog
` })} </div>`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/ToBlogLink.astro", void 0);

const $$Astro$2 = createAstro("https://pagekey.io");
const $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHighlightedPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    postIds = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findPostsByIds(postIds) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")}>${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/home/runner/work/website/website/astrowind/src/components/widgets/BlogHighlightedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://pagekey.io");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  const fetchedPosts = await fetchPosts();
  const relatedPosts = post.tags ? getRelatedPosts(fetchedPosts, post.slug, post.tags) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "Related Posts", "linkText": "View All Posts", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "/home/runner/work/website/website/astrowind/src/components/blog/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://pagekey.io");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge(
    {
      title: post.title,
      description: post.excerpt,
      robots: {
        index: blogPostRobots?.index,
        follow: blogPostRobots?.follow
      },
      openGraph: {
        type: "article",
        ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
      }
    },
    { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "post": post })} ` })}`;
}, "/home/runner/work/website/website/astrowind/src/pages/[...blog]/index.astro", void 0);

const $$file = "/home/runner/work/website/website/astrowind/src/pages/[...blog]/index.astro";
const $$url = "/[...blog]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Index,
                    file: $$file,
                    getStaticPaths,
                    prerender,
                    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image$1 as $, index$1 as A, index as B, _404 as _, keyreader as a, boom as b, pkvid as c, ptd as d, about as e, contact as f, saas as g, clickThrough as h, index$2 as i, preLaunch as j, keydo as k, leadGeneration as l, mobileApp as m, product as n, sales as o, pkos as p, subscription as q, rss_xml as r, steve as s, pricing as t, privacy as u, services as v, terms as w, ____page_$2 as x, ____page_$1 as y, ____page_ as z };