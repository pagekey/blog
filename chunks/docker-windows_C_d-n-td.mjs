import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u226490s: Install Docker on Windows 10 Pro",
  "publishDate": "2020-04-22T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "90 Seconds or Less",
  "tags": ["docker", "windows"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["In this video, we get Docker working for ", createVNode(_components.em, {
        children: "us"
      }), " in 90 seconds!"]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "Jl_C_sy02MA"
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
const url = "src/content/post/blog/2020/90-sec/docker-windows.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/docker-windows.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/docker-windows.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
