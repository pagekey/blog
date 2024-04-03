import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_QkSTohUE.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bubble Sort in Python",
  "publishDate": "2018-10-05T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "Data Structures & Algorithms",
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
      children: "In this video, we learn the ins and outs of Bubble Sort, a sorting algorithm that will come in handy in many situations. Well, maybe just in your programming classes."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "LmZLKhd2Juc"
    }), "\n", createVNode(_components.p, {
      children: "We go over theory, and then visualize the entire sorting process from start to finish."
    }), "\n", createVNode(_components.p, {
      children: "The full implementation in Python can be found at the following link:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/stephengrice/youtube/tree/master/Sorts",
        children: "https://github.com/stephengrice/youtube/tree/master/Sorts"
      })
    }), "\n", createVNode(_components.p, {
      children: "Thank you for watching."
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
const url = "src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/bubble-sort-python/bubble-sort-python.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
