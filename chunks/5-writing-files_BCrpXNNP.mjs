import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_QkSTohUE.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Quick Python 5: Writing Files",
  "publishDate": "2020-11-18T00:00:00.000Z",
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
      children: "In this video, we cover writing to files and discuss \u201Cwrite\u201D mode vs. \u201Cappend\u201D mode."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "t-hqxcGsJvU"
    }), "\n", createVNode(_components.p, {
      children: "Link to code:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/stephengrice/education/tree/master/Quick_Python/05_Write_a_File",
        children: "https://github.com/stephengrice/education/tree/master/Quick_Python/05_Write_a_File"
      })
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
const url = "src/content/post/blog/2020/quick-python/5-writing-files.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/5-writing-files.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/quick-python/5-writing-files.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
