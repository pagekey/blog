import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "React Native Redesign | Boom Dev Log 6",
  "publishDate": "2022-10-10T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/x1Den9ya0jc/hqdefault.jpg",
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
      children: "Let\u2019s take a look at the big plans for switching over the Boom Languages client from Flutter to React Native. It\u2019ll be a complete re-implementation, so it\u2019ll be a fair amount of work, but hopefully I can knock it out one tiny piece at at time."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "x1Den9ya0jc"
    }), "\n", createVNode(_components.p, {
      children: ["You can try the current version of the Boom Languages app at ", createVNode(_components.a, {
        href: "https://boomlanguages.com",
        children: "https://boomlanguages.com"
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
const url = "src/content/post/blog/2022/boom/devlog-6.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-6.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-6.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
