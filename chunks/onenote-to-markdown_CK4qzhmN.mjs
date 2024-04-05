import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Convert OneNote to Markdown (and Obsidian.md)",
  "publishDate": "2022-01-23T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/C70jUkQyIQM/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["powershell", "productivity"],
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
      children: "Do you have all of your notes in OneNote? Want to move your notes out, but not sure where to start? In this video, we\u2019ll convert all of your OneNote notes to Markdown with an easy-to-use script. Then, you can open it in a different application, like Obsidian."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "C70jUkQyIQM"
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
      children: "0:00 Intro - Why plaintext? What is Obsidian?"
    }), "\n", createVNode(_components.p, {
      children: "1:08 The Problem: our notes are stuck in OneNote"
    }), "\n", createVNode(_components.p, {
      children: "1:35 Required Software - Pandoc and Git"
    }), "\n", createVNode(_components.p, {
      children: "1:56 Enable PowerShell Scripts"
    }), "\n", createVNode(_components.p, {
      children: "2:28 Run the script!"
    }), "\n", createVNode(_components.p, {
      children: "2:50 Open your notes in Obsidian"
    }), "\n", createVNode(_components.p, {
      children: "3:35 How to fix tables with line breaks"
    }), "\n", createVNode(_components.p, {
      children: "4:35 Outro - PRs welcome!"
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
const url = "src/content/post/blog/2022/onenote-to-markdown.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/onenote-to-markdown.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/onenote-to-markdown.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
