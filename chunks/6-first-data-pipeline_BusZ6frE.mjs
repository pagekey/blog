import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Quick Python 6: Our First Data Pipeline",
  "publishDate": "2020-12-02T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "Quick Python",
  "tags": ["python", "tutorial"],
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
      children: "In this video, we use standard input and output in Python to process data piped to us from other applications."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "VCqwKazLLbY"
    }), "\n", createVNode(_components.p, {
      children: ["If you liked this video, check out the whole ", createVNode(_components.a, {
        href: "/category/quick-python",
        children: "Quick Python series"
      }), " and be sure to sign up using the form below to get notified of new posts! Thanks for checking this one out."]
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
const url = "src/content/post/blog/2020/quick-python/6-first-data-pipeline.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/6-first-data-pipeline.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/6-first-data-pipeline.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
