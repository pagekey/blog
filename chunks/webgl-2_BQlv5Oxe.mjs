import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "WebGL Live Coding 2",
  "publishDate": "2022-12-11T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/kLlo4W3nMi8/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["javascript", "live-coding", "webgl"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Surprising success at the very end. But I put it less than two minutes into the video instead of the end since I know you won\u2019t watch that whole way"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "kLlo4W3nMi8"
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
const url = "src/content/post/blog/2022/webgl-2.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/webgl-2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/webgl-2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
