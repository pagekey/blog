import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_Biewhb8P.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Boom Languages Dev Log 1",
  "publishDate": "2021-07-21T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/5kwHY_1ewd4/hqdefault.jpg",
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
      children: "Picking up an old project from earlier this year and making a few additions."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "5kwHY_1ewd4"
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019d like to try it out, visit ", createVNode(_components.a, {
        href: "https://boomlanguages.com",
        children: "https://boomlanguages.com"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Unfortunately, I may have broken it by changing the server domain name, but stick around until 7/31 - that\u2019s when I\u2019m aiming to push out a new (not-broken) update with some of the features you see here, and hopefully more."
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
const url = "src/content/post/blog/2021/boom/devlog-1.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/boom/devlog-1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
