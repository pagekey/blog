import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS9: Multiboot (Bootloader Breakup)",
  "publishDate": "2020-07-01T00:00:00.000Z",
  "authors": ["steve"],
  "category": "PageKey Operating System",
  "tags": ["tutorial", "assembly", "c"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "code",
    "text": "Code"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we break up with our old bootloader :-("
    }), "\n", createVNode(_components.p, {
      children: "Don\u2019t worry, life without it is much better! :-)"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "UraQLWvn9Vg"
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.p, {
      children: "Special thanks to Petros Koutoupis for his awesome Linux Journal article. Please check it out at this link - it\u2019s a great read!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.linuxjournal.com/content/what-does-it-take-make-kernel-0",
        children: "https://www.linuxjournal.com/content/what-does-it-take-make-kernel-0"
      })
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos009",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os008..vid/os009",
          children: "Diff from previous video"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/post/blog/2020/pkos/9.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/9.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/9.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
