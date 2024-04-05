import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Boom Languages Dev Log 2",
  "publishDate": "2021-10-03T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/IBdZjelApI4/hqdefault.jpg",
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
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I just finished getting Version 2.0.0 on all app stores and the web. The main new feature is an \u201Carticle translation\u201D tool. It works, but as you\u2019ll see, it\u2019s pretty buggy."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "IBdZjelApI4"
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019d like to try it out, visit ", createVNode(_components.a, {
        href: "https://boomlanguages.com",
        children: "https://boomlanguages.com"
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
const url = "src/content/post/blog/2021/boom/devlog-2.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
