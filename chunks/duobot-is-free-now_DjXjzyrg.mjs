import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "I spent dozens of hours to save 5 minutes on DuoLingo",
  "publishDate": "2022-10-03T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/voon-ylQBkI/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["language", "python"],
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
      children: "I finally released the DuoBot source code! Thanks Zigfrid for asking."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "voon-ylQBkI"
    }), "\n", createVNode(_components.p, {
      children: ["View the original \u201Cshowoff\u201D post from a few years ago ", createVNode(_components.a, {
        href: "../2020/duobot",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Check out our Docker 101 tutorial: ", createVNode(_components.a, {
        href: "./docker-101",
        children: "here"
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
const url = "src/content/post/blog/2022/duobot-is-free-now.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/duobot-is-free-now.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/duobot-is-free-now.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
