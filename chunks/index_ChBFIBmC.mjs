import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "DuoBot: Topping the DuoLingo Charts with Selenium",
  "publishDate": "2020-04-08T00:00:00.000Z",
  "author": "Steve Grice",
  "tags": ["python", "language"],
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
      children: "In this video, I show off my magical DuoLingo-playing bot made with Selenium. Its best magic trick: breaking while you\u2019re using it."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "zhjWD8O564Q"
    }), "\n", createVNode(_components.p, {
      children: ["Take the first step to writing your own! Check out our post for ", createVNode(_components.a, {
        href: "./90-sec/selenium-ubuntu",
        children: "installing Selenium in 90 seconds or less"
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
const url = "src/content/post/blog/2020/duobot/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/duobot/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/duobot/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
