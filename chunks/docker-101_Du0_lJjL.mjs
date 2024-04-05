import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Docker 101: Basics and Containerizing a Web App",
  "publishDate": "2022-06-06T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/shhFukTFhtQ/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["docker", "tutorial"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Let\u2019s jump into how Docker works. We\u2019ll learn the absolute basics - the what, the why, and the how - and then we\u2019ll apply this knowledge to containerize a simple, real-world web application."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "shhFukTFhtQ"
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Snazzy Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:36 Overview"
      }), "\n", createVNode(_components.li, {
        children: "1:05 What is Docker?"
      }), "\n", createVNode(_components.li, {
        children: "2:10 What We\u2019ll Be Able to Do"
      }), "\n", createVNode(_components.li, {
        children: "2:22 Why Docker?"
      }), "\n", createVNode(_components.li, {
        children: "3:34 How To Use Docker (Slides)"
      }), "\n", createVNode(_components.li, {
        children: "4:31 Command-Line Docker"
      }), "\n", createVNode(_components.li, {
        children: "9:07 Building Custom Images (slides)"
      }), "\n", createVNode(_components.li, {
        children: "10:00 Building Custom Images (terminal/code)"
      }), "\n", createVNode(_components.li, {
        children: "15:27 Containerizing a Flask App"
      }), "\n", createVNode(_components.li, {
        children: "19:04 Outro"
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
const url = "src/content/post/blog/2022/docker-101.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/docker-101.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/docker-101.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
