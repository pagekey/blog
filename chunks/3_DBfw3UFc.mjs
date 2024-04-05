import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "VSCode, Emmet Coding, Serving Static Files | FTP3",
  "publishDate": "2022-07-04T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/pG1OmboC5Jc/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "First Time Programmer",
  "tags": ["tutorial"],
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
      children: "In this video, we talk about VSCode, Emmet Coding, and Serving Static Files."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "pG1OmboC5Jc"
    }), "\n", createVNode(_components.p, {
      children: "Yeah, that\u2019s it. No timestamps this week."
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
const url = "src/content/post/blog/2022/ftp/3.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/ftp/3.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/ftp/3.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
