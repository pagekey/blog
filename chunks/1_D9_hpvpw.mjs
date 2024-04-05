import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Can we build our own Kindle, with a twist? | KR1",
  "publishDate": "2022-08-29T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/ldzCndHQElI/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "KeyReader",
  "tags": ["design"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "links",
    "text": "Links"
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
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Have you ever wanted to READ and LISTEN to a book at the same time? If so, watch on while I show you the pitch, plan, and design for KeyReader, a proposed app that gives you the option to listen and read the same book, switching between these two activities seamlessly."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "ldzCndHQElI"
    }), "\n", createVNode(_components.h2, {
      id: "links",
      children: "Links"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["KeyReader repo: ", createVNode(_components.a, {
          href: "https://gitlab.com/pagekeytech/keyreader",
          children: "https://gitlab.com/pagekeytech/keyreader"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["MR for this video: ", createVNode(_components.a, {
          href: "https://gitlab.com/pagekeytech/keyreader/-/merge_requests/1",
          children: "https://gitlab.com/pagekeytech/keyreader/-/merge_requests/1"
        })]
      }), "\n", createVNode(_components.li, {
        children: "See repo README for link to slides"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:21 The Pitch (Take Back Tech)"
      }), "\n", createVNode(_components.li, {
        children: "1:30 The Story"
      }), "\n", createVNode(_components.li, {
        children: "2:19 The Problem"
      }), "\n", createVNode(_components.li, {
        children: "3:09 KeyReader to the Rescue"
      }), "\n", createVNode(_components.li, {
        children: "4:31 The Plan"
      }), "\n", createVNode(_components.li, {
        children: "4:35 MVP1: Text Only"
      }), "\n", createVNode(_components.li, {
        children: "5:15 MVP2: Audiobook Reader"
      }), "\n", createVNode(_components.li, {
        children: "6:26 Other Ideas"
      }), "\n", createVNode(_components.li, {
        children: "7:05 Implementation Plan"
      }), "\n", createVNode(_components.li, {
        children: "7:38 Approach"
      }), "\n", createVNode(_components.li, {
        children: "8:24 Coding Video Format"
      }), "\n", createVNode(_components.li, {
        children: "8:45 Issues Plan of Attack (MVP1)"
      }), "\n", createVNode(_components.li, {
        children: "9:40 The Design"
      }), "\n", createVNode(_components.li, {
        children: "9:51 System Architecture"
      }), "\n", createVNode(_components.li, {
        children: "10:29 UI Flow / State Model"
      }), "\n", createVNode(_components.li, {
        children: "11:16 Made with Mermaid"
      }), "\n", createVNode(_components.li, {
        children: "11:31 Screens"
      }), "\n", createVNode(_components.li, {
        children: "11:58 Components"
      }), "\n", createVNode(_components.li, {
        children: "12:32 Listener/Reader Wireframes"
      }), "\n", createVNode(_components.li, {
        children: "12:38 Long-Winded Outro"
      }), "\n", createVNode(_components.li, {
        children: "13:03 Merging the MR"
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
const url = "src/content/post/blog/2022/kr/1.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/kr/1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/kr/1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
