import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Quick Python 8: Virtual Environments",
  "publishDate": "2021-06-11T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/O5rH_fsOOJM/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "Quick Python",
  "tags": ["python", "tutorial"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-tips",
    "text": "Quick Tips"
  }, {
    "depth": 3,
    "slug": "commands",
    "text": "Commands"
  }, {
    "depth": 3,
    "slug": "bonus-bash-alias-for-quick-switching",
    "text": "Bonus: Bash Alias for Quick Switching"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we learn how to create, manage, and remove Python Virtual Environments."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "O5rH_fsOOJM"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/tree/master/Quick_Python/08_Installing_Packages",
          children: "Here\u2019s a link to the source code."
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "quick-tips",
      children: "Quick Tips"
    }), "\n", createVNode(_components.h3, {
      id: "commands",
      children: "Commands"
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
            children: "python3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " venv"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "pat"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "h"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Creates a virutal environment located at ", createVNode(_components.code, {
        children: "<path>"
      })]
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
              color: "#79B8FF"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "pat"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "h"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/bin/activate"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Activates a virtual environment"
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
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "deactivate"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Deactivates a virutal environment"
    }), "\n", createVNode(_components.h3, {
      id: "bonus-bash-alias-for-quick-switching",
      children: "Bonus: Bash Alias for Quick Switching"
    }), "\n", createVNode(_components.p, {
      children: ["Paste this function into your ", createVNode(_components.code, {
        children: "~/.bashrc"
      }), " or ", createVNode(_components.code, {
        children: "~/.bash_aliases"
      }), " file and restart your shell. It assumes you keep your virtual environments in the ", createVNode(_components.code, {
        children: "~/venv"
      }), " folder."]
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
            children: "venv"
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
              color: "#79B8FF"
            },
            children: "    source"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/venv/"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "$1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/bin/activate"
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
    }), "\n", createVNode(_components.p, {
      children: ["Switch to the venv with ", createVNode(_components.code, {
        children: "venv <NAME>"
      }), " and get out of it by typing ", createVNode(_components.code, {
        children: "deactivate"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
            children: "python3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " venv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/venv/my-env"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "venv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " my-env"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# do stuff in your environment. When done:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "deactivate"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
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
const url = "src/content/post/blog/2021/quick-python-8/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/quick-python-8/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/quick-python-8/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
