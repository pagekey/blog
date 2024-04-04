import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS12: Basic Keyboard Driver (x86 Interrupts)",
  "publishDate": "2020-08-12T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["tutorial", "assembly", "c"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
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
      children: "In this video, we learn about interrupts and write our own basic keyboard driver!"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "YtnNX074jMU"
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Lecture"
      }), "\n", createVNode(_components.li, {
        children: "9:58 What we\u2019re building"
      }), "\n", createVNode(_components.li, {
        children: "10:39 Updates to Makefile, add .gdbinit file"
      }), "\n", createVNode(_components.li, {
        children: "12:32 Updates to kernel.asm"
      }), "\n", createVNode(_components.li, {
        children: "18:08 Updates to kernel.c"
      }), "\n", createVNode(_components.li, {
        children: "28:28 Compiler error fixes; working demo again"
      }), "\n", createVNode(_components.li, {
        children: "29:06 GDB debugging skills; making the keyboard map from scratch"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos012",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os011..vid/os012",
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
const url = "src/content/post/blog/2020/pkos/12.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/12.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/12.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
