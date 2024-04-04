import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS3: Hone the Power of the BIOS!",
  "publishDate": "2020-01-15T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["tutorial", "assembly"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "code",
    "text": "Code"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "We delve into and modify the example code, I explain a few assembly concepts, and I give you some challenges!"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "W3DdyiO3Fy8"
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s the source code repository (AND the solutions to the challenges):"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/tree/master/OS",
        children: "https://github.com/pagekeysolutions/education/tree/master/OS"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here is the link to the Ralph Brown\u2019s Interrupt List download:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "http://www.cs.cmu.edu/~ralf/files.html",
        children: "http://www.cs.cmu.edu/~ralf/files.html"
      })
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos003",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os002..vid/os003",
          children: "Diff from previous video"
        })
      }), "\n"]
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
const url = "src/content/post/blog/2020/pkos/3.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/3.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/3.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
