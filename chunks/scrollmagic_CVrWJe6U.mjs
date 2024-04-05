import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Make Your Site Stand Out with ScrollMagic",
  "publishDate": "2019-04-26T00:00:00.000Z",
  "author": "Steve Grice",
  "tags": ["javascript", "tutorial"],
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
      children: "Today, we learn how to create a basic ScrollMagic web animation."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "8jtLCrvUddA"
    }), "\n", createVNode(_components.p, {
      children: ["View the demo: ", createVNode(_components.a, {
        href: "http://bit.ly/pks-scrollmagic",
        children: "http://bit.ly/pks-scrollmagic"
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
const url = "src/content/post/blog/2019/scrollmagic/scrollmagic.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/scrollmagic/scrollmagic.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/scrollmagic/scrollmagic.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
