import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started with React (Create React App)",
  "publishDate": "2022-05-23T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/qGsFYSWTMFY/hqdefault.jpg",
  "author": "Steve Grice",
  "tags": ["javascript"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "steps",
    "text": "Steps"
  }, {
    "depth": 3,
    "slug": "1-install-nvm",
    "text": "1. Install NVM"
  }, {
    "depth": 3,
    "slug": "2-generate-the-project",
    "text": "2. Generate the project."
  }, {
    "depth": 3,
    "slug": "3-start-the-app-in-your-browser",
    "text": "3. Start the app in your browser."
  }, {
    "depth": 3,
    "slug": "4-edit-the-source",
    "text": "4. Edit the Source"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this lesson, we learn about how to quickly get started with React (JavaScript framework) using Facebook\u2019s Create React App project generator."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "qGsFYSWTMFY"
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:48 Setup - nvm, npm, node"
      }), "\n", createVNode(_components.li, {
        children: "1:47 Generate the project"
      }), "\n", createVNode(_components.li, {
        children: "2:15 Code changes"
      }), "\n", createVNode(_components.li, {
        children: "4:55 Outro"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "steps",
      children: "Steps"
    }), "\n", createVNode(_components.h3, {
      id: "1-install-nvm",
      children: "1. Install NVM"
    }), "\n", createVNode(_components.p, {
      children: ["If you don\u2019t already have ", createVNode(_components.code, {
        children: "npm"
      }), " and ", createVNode(_components.code, {
        children: "node"
      }), " installed, use ", createVNode(_components.code, {
        children: "nvm"
      }), " to get going quickly. Run the following to install:"]
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -o-"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " bash"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bash"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " # or restart your terminal"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 16"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-generate-the-project",
      children: "2. Generate the project."
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
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create-react-app"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " exampleapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " exampleapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-start-the-app-in-your-browser",
      children: "3. Start the app in your browser."
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " start"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-edit-the-source",
      children: "4. Edit the Source"
    }), "\n", createVNode(_components.p, {
      children: "Edit the source code as desired! See the video for live edits."
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
const url = "src/content/post/blog/2022/react-cra.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/react-cra.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/react-cra.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
