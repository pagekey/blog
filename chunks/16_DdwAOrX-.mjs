import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS16: Integration Test with QEMU in CI/CD Using Pytest",
  "publishDate": "2022-08-08T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/zcqJHKUKipg/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["assembly", "c", "ci-cd", "python", "testing", "tutorial"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["In this video, we implement a simple integration test in GitLab CI/CD to automate our input to QEMU using ", createVNode(_components.code, {
        children: "pytest"
      }), " and Python\u2019s ", createVNode(_components.code, {
        children: "subprocess"
      }), " package."]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "zcqJHKUKipg"
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
const url = "src/content/post/blog/2022/pkos/16.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/16.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/16.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
