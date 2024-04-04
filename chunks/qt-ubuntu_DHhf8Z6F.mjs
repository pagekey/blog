import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_Biewhb8P.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u226490s: Hello World with Qt Framework (Ubuntu)",
  "publishDate": "2020-05-06T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "90 Seconds or Less",
  "tags": ["c++", "linux"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we install dependencies and run our first Qt graphical application using C++ on Ubuntu Linux."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "d1JGsHc1NGA"
    }), "\n", createVNode(_components.p, {
      children: "Code for this lesson:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/tree/master/Qt_in_90_Sec",
        children: "https://github.com/pagekeysolutions/education/tree/master/Qt_in_90_Sec"
      })
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
const url = "src/content/post/blog/2020/90-sec/qt-ubuntu.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/qt-ubuntu.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/qt-ubuntu.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
