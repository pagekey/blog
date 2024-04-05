import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Version, Registration Info in React Native | Boom Dev Log 7",
  "publishDate": "2022-10-17T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/Mzv4SifCrs8/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "Boom Languages",
  "tags": ["javascript", "language"],
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
      children: "In this video, we get our hands dirty and implement the \u201Cversion\u201D and \u201Cregistration info\u201D endpoints in the new React Native client for Boom Languages."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "Mzv4SifCrs8"
    }), "\n", createVNode(_components.p, {
      children: ["You can try the current version of the Boom Languages app at ", createVNode(_components.a, {
        href: "https://boomlanguages.com/",
        children: "https://boomlanguages.com/"
      }), ". You can also find it on Android and iOS stores."]
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
const url = "src/content/post/blog/2022/boom/devlog-7.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-7.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-7.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
