import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Python Update - Convert OneNote to Markdown",
  "publishDate": "2022-03-12T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/mYbiT63Bkns/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["productivity", "python"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "resources",
    "text": "Resources"
  }, {
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The ", createVNode(_components.a, {
        href: "./onenote-to-markdown",
        children: "last post"
      }), " walked us through a PowerShell script to convert OneNote to Markdown. A lot of people (including me) ran into issues with that script, so this video introduces a Python version, which should be less buggy."]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "mYbiT63Bkns"
    }), "\n", createVNode(_components.h2, {
      id: "resources",
      children: "Resources"
    }), "\n", createVNode(_components.p, {
      children: ["Source code: ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/onenote-to-markdown/",
        children: "https://github.com/pagekeysolutions/onenote-to-markdown/"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Obsidian: ", createVNode(_components.a, {
        href: "https://obsidian.md/",
        children: "https://obsidian.md/"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Table converter: ", createVNode(_components.a, {
        href: "https://jmalarcon.github.io/markdowntables/",
        children: "https://jmalarcon.github.io/markdowntables/"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.p, {
      children: "0:00 Intro"
    }), "\n", createVNode(_components.p, {
      children: "0:30 How to run the script"
    }), "\n", createVNode(_components.p, {
      children: "1:42 A few caveats"
    }), "\n", createVNode(_components.p, {
      children: "2:00 How it works / code explanation"
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
const url = "src/content/post/blog/2022/onenote-to-markdown-python.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/onenote-to-markdown-python.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/onenote-to-markdown-python.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
