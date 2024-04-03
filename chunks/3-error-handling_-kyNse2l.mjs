import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_QkSTohUE.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Quick Python 3: Error Handling (Actually pretty useful!)",
  "publishDate": "2020-10-21T00:00:00.000Z",
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
      children: "In this video, we keep the user in line! With error handling, we can specify what type of input we\u2019re expecting to receive. This basic skill will also be useful for countless other situations as you continue your Python journey."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "pgppd2fwrJQ"
    }), "\n", createVNode(_components.p, {
      children: "Check out the source code here:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/stephengrice/education/tree/master/Quick_Python/03_Error_Handling",
        children: "https://github.com/stephengrice/education/tree/master/Quick_Python/03_Error_Handling"
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you need to install Python, we have you covered! Check out our ", createVNode(_components.a, {
        href: "/category/90-seconds-or-less",
        children: "Done in 90 Seconds series"
      }), " to get it installed FAST!"]
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
const url = "src/content/post/blog/2020/quick-python/3-error-handling.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/3-error-handling.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/3-error-handling.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
