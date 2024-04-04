import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS2: First Bootloader",
  "publishDate": "2020-01-01T00:00:00.000Z",
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
    "slug": "sources",
    "text": "Sources"
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we install qemu and nasm so that we can build our first bootloader and run it."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "1lAuJoPZ3Q0"
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.p, {
      children: "Command for getting the first bootloader code:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wget"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/first.asm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Command for getting the Makefile:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wget"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/Makefile"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader",
            children: "https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "http://mikeos.sourceforge.net/write-your-own-os.html",
            children: "http://mikeos.sourceforge.net/write-your-own-os.html"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos002",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os001..vid/os002",
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
const url = "src/content/post/blog/2020/pkos/2.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
