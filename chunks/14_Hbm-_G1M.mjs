import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS14: Organizing Our OS Code",
  "publishDate": "2022-04-09T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/Qa-WjNWkNeA/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["assembly", "c", "tutorial"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }, {
    "depth": 2,
    "slug": "other-resources",
    "text": "Other Resources"
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
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we reorganize the entire project, taking it from cluttered to modular in less than 10 minutes."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "Qa-WjNWkNeA"
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro, Overview"
      }), "\n", createVNode(_components.li, {
        children: "0:25 Running the OS"
      }), "\n", createVNode(_components.li, {
        children: "0:43 The Main Changes"
      }), "\n", createVNode(_components.li, {
        children: "1:16 Other Minor Changes"
      }), "\n", createVNode(_components.li, {
        children: "1:34 Lessons Learned"
      }), "\n", createVNode(_components.li, {
        children: "2:40 The (New!) File Tree"
      }), "\n", createVNode(_components.li, {
        children: "3:42 Code Diff Walkthrough"
      }), "\n", createVNode(_components.li, {
        children: "7:06 Outro"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://accu.org/journals/overload/14/71/miller_2004/",
          children: "Recursive Make Considered Harmful paper"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Goes into detail about why you shouldn\u2019t use separate ", createVNode(_components.code, {
              children: "Makefile"
            }), "s for each submodule in your project"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.gnu.org/software/make/manual/html_node/Include.html",
          children: "GNU Make Include docs"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Tell you how to use ", createVNode(_components.code, {
              children: "include"
            }), " in GNU Make, which we use in this video"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "other-resources",
      children: "Other Resources"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://sites.e-advies.nl/nonrecursive-make.html",
          children: "Implementing Non-Recursive Make"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "A helpful article"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/dmoulding/boilermake",
          children: "boilermake"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Seems to be a boilerplate for Make projects using ", createVNode(_components.code, {
              children: "include"
            })]
          }), "\n", createVNode(_components.li, {
            children: "Definitely too complicated for me to understand/use, but a helpful reference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos014",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os013..vid/os014",
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
const url = "src/content/post/blog/2022/pkos/14.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/14.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/14.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
