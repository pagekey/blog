import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "New coders: Instantly apply concepts with JavaScript (FTP2)",
  "publishDate": "2022-06-27T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/RfZqCb5uXoA/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "First Time Programmer",
  "tags": ["javascript", "tutorial"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-notes",
    "text": "Quick Notes"
  }, {
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
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
      children: "In this video, we go through web programming for the absolute beginner and get our hands dirty with HTML, CSS, and JavaScript."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "RfZqCb5uXoA"
    }), "\n", createVNode(_components.h2, {
      id: "quick-notes",
      children: "Quick Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Intro\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["If you\u2019re brand new to programming, make a website\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "You use websites every day"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Concepts\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "HTML, CSS, JS are all linked together - you learn them all at the same time"
          }), "\n", createVNode(_components.li, {
            children: ["Websites are trees\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "DOM: The logical tree representation of a website"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: "HTML: The content - text, images, etc."
          }), "\n", createVNode(_components.li, {
            children: "CSS: How it looks, styling"
          }), "\n", createVNode(_components.li, {
            children: "JavaScript: Behavior"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Follow Along\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Go to ", createVNode(_components.a, {
              href: "https://pagekey.io",
              children: "pagekey.io"
            }), " or any website"]
          }), "\n", createVNode(_components.li, {
            children: "Right click, press \u201CInspect\u201D to open developer tools"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Top: HTML\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Can change content in any of the elements (hack the school website trick)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Middle: CSS\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Can see each rule and the styles applied by that rule"
          }), "\n", createVNode(_components.li, {
            children: ["The dot in CSS selects elements with \u201Cclass=NAME\u201D\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["Example: ", createVNode(_components.code, {
                  children: ".myClass"
                }), " selects elements such as ", createVNode(_components.code, {
                  children: '<div class="myClass"></div>'
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Bottom: JavaScript console\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: 'console.log("Hello World")'
            })
          }), "\n", createVNode(_components.li, {
            children: ["Get reference to footer:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: 'var footer = document.querySelector(".FooterClassName")'
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:30 Concepts"
      }), "\n", createVNode(_components.li, {
        children: "2:15 Follow Along: Open Dev Tools"
      }), "\n", createVNode(_components.li, {
        children: "3:15 Hack the school website (HTML)"
      }), "\n", createVNode(_components.li, {
        children: "3:42 Style Rules (CSS)"
      }), "\n", createVNode(_components.li, {
        children: "4:35 Behavior (JavaScript)"
      }), "\n", createVNode(_components.li, {
        children: "6:16 Outro"
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
const url = "src/content/post/blog/2022/ftp/2.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/ftp/2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/ftp/2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
