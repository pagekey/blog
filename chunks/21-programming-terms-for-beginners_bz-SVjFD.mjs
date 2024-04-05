import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "21 Programming Terms for Absolute Beginners",
  "publishDate": "2022-09-26T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/NbGXjdAsCR8/hqdefault.jpg",
  "author": "Eric Eaton",
  "tags": ["tutorial"],
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
      children: "If you\u2019re just getting started in the world of programming, it can be hard to wrap your head around all of the technical terms that come flying your way. In this video, Eric walks us through what he\u2019s learned in his first few months of coding, breaking down the concepts in an easy-to-understand way."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "NbGXjdAsCR8"
    }), "\n", createVNode(_components.p, {
      children: ["Eric\u2019s GitHub: ", createVNode(_components.a, {
        href: "https://github.com/ericthomaseaton",
        children: "https://github.com/ericthomaseaton"
      })]
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
const url = "src/content/post/blog/2022/21-programming-terms-for-beginners.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/21-programming-terms-for-beginners.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/21-programming-terms-for-beginners.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
