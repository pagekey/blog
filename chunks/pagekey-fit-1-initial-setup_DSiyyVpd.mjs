import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Coding a Workout App from Scratch - #1 Initial Setup",
  "publishDate": "2022-02-22T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/hO16sBPMe34/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["flutter"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "summary",
    "text": "Summary"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Let\u2019s code a workout app from scratch. Why? Watch the video and find out."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "hO16sBPMe34"
    }), "\n", createVNode(_components.p, {
      children: ["Source code is available at: ", createVNode(_components.a, {
        href: "https://github.com/pagekey/pfl",
        children: "https://github.com/pagekey/pfl"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 The idea and why bother?"
      }), "\n", createVNode(_components.li, {
        children: "1:22 Today\u2019s progress"
      }), "\n", createVNode(_components.li, {
        children: "3:36 Existing Python scripts/data"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s a quick recap on what I did to get this far. It\u2019s not much!"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Generate a new flutter project."
      }), "\n"]
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
            children: "flutter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Update the application ID, which must be unique"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Ctl-Shift-F to search the entire project in Android Studio"
          }), "\n", createVNode(_components.li, {
            children: ["Find instances of ", createVNode(_components.code, {
              children: "com.example"
            })]
          }), "\n", createVNode(_components.li, {
            children: ["Replace with ", createVNode(_components.code, {
              children: "com.pagekeysolutions"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Start getting Google API set up"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["I followed (part of) this article: ", createVNode(_components.a, {
              href: "https://betterprogramming.pub/the-minimum-guide-for-using-google-drive-api-with-flutter-9207e4cb05ba",
              children: "https://betterprogramming.pub/the-minimum-guide-for-using-google-drive-api-with-flutter-9207e4cb05ba"
            })]
          }), "\n", createVNode(_components.li, {
            children: "Most of the work for this video was setting up Firebase. Just follow this article for this."
          }), "\n", createVNode(_components.li, {
            children: "I was able to get \u201CLogin with Google\u201D working on Android (though there were some warnings about it not being a verified app - we can worry about this later)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["I set up the ", createVNode(_components.a, {
            href: "https://github.com/pagekey/pfl",
            children: "repo"
          }), ", made it public, and made a video."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019re trying to re-create my results exactly, note that I committed the \u201CInitial commit\u201D ", createVNode(_components.strong, {
        children: "directly"
      }), " after running ", createVNode(_components.code, {
        children: "flutter create"
      }), ". Hopefully this makes my changes easier to follow."]
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
const url = "src/content/post/blog/2022/pagekey-fit-1-initial-setup.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pagekey-fit-1-initial-setup.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pagekey-fit-1-initial-setup.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
