import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const __0___logicanalyzer_png__ = new Proxy({"src":"/_astro/logicanalyzer.ClRcuK95.png","width":417,"height":313,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/logic-analyzer/logicanalyzer.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2022/logic-analyzer/logicanalyzer.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "How and Why to Use a Logic Analyzer",
  "publishDate": "2022-05-16T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/IqiRDxxR8Ds/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["hardware"],
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "parts-list",
    "text": "Parts List"
  }, {
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "arduino-code",
    "text": "Arduino Code"
  }, {
    "depth": 2,
    "slug": "arduino-wiring",
    "text": "Arduino Wiring"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      code: "code",
      h2: "h2",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      span: "span",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "A logic analyzer lets us look at the digital data coming out of ports on various devices, in much the same way an oscilloscope lets us look at analog signals. In this lesson, we plug our logic analyzer into an Arduino\u2019s serial port to show how we can record and analyze digital data."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "IqiRDxxR8Ds"
    }), "\n", createVNode(_components.h2, {
      id: "parts-list",
      children: "Parts List"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "https://amzn.to/3N1YObl",
            children: "KeeYees Logic Analyzer"
          }), " (~$14)"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "https://amzn.to/3M7CWve",
            children: "Arduino UNO"
          }), " (~$30)"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "https://amzn.to/3FHoEiA",
            children: "Jumper Cables"
          }), " (~$7)"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "As an Amazon associate I earn from qualifying purchases."
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:28 Parts list"
      }), "\n", createVNode(_components.li, {
        children: "1:06 Arduino code"
      }), "\n", createVNode(_components.li, {
        children: "1:59 Arduino wiring"
      }), "\n", createVNode(_components.li, {
        children: "2:24 Logic analyzer in action"
      }), "\n", createVNode(_components.li, {
        children: "3:27 Outro"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "arduino-code",
      children: "Arduino Code"
    }), "\n", createVNode(_components.p, {
      children: "We use the following simple program on our Arduino, which outputs a message via serial every 2 seconds:"
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
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setup"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  Serial."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "begin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "9600"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " loop"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  Serial."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "println"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Hello world!"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  delay"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "arduino-wiring",
      children: "Arduino Wiring"
    }), "\n", createVNode(_components.p, {
      children: "We wire channel 1 of the logic analyzer to the TX port of the Arduino. To do this, we use a female-to-female jumper (which should come with the logic analyzer) and a (more common) male-to-male jumper to complete the connection."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0___logicanalyzer_png__,
        alt: "Logic Analyzer hookup circuit diagram"
      })
    }), "\n", createVNode(_components.p, {
      children: "With this wiring in place, we can launch the software that came with the logic analyzer and perform a capture, which will show us the \u201CHello World\u201D message coming through Channel 1!"
    }), "\n", createVNode(_components.p, {
      children: "This same technique can be applied to a variety of protocols, such as I2C, SPI, PS2 Keyboard/Mouse, and USB (low- and full-speed only)."
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
const url = "src/content/post/blog/2022/logic-analyzer/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/logic-analyzer/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/logic-analyzer/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
