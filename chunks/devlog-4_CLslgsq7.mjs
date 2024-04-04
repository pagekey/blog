import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_Biewhb8P.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Boom Languages Dev Log 4",
  "publishDate": "2021-12-31T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/qvgQYVp5O9o/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "Boom Languages",
  "tags": ["language"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Version 2.2.2 brings some new changes since our last dev log."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "qvgQYVp5O9o"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s a summary of the changes:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Code refactor"
      }), "\n", createVNode(_components.li, {
        children: "Web landing page"
      }), "\n", createVNode(_components.li, {
        children: "Articles list - done/in progress"
      }), "\n", createVNode(_components.li, {
        children: "Article \u201Cshow\u201D page with info/actions to take"
      }), "\n", createVNode(_components.li, {
        children: "Article translator improvements"
      }), "\n", createVNode(_components.li, {
        children: "My Words"
      }), "\n", createVNode(_components.li, {
        children: "Users list"
      }), "\n", createVNode(_components.li, {
        children: "Activity Log"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["In other news, ", createVNode(_components.a, {
        href: "https://pagekey.io",
        children: "pagekey.io"
      }), " has been redesigned and now includes links to everything we\u2019re working on."]
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019d like to try out the app, visit ", createVNode(_components.a, {
        href: "https://boomlanguages.com",
        children: "boomlanguages.com"
      }), "."]
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
const url = "src/content/post/blog/2021/boom/devlog-4.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-4.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-4.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
