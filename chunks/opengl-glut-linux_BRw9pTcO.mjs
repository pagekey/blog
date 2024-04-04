import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u226490s: First OpenGL Program with GLUT (Linux)",
  "publishDate": "2020-06-03T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "90 Seconds or Less",
  "tags": ["c++", "ubuntu"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we run through the steps for making our first OpenGL program using GLUT."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "cShqFtmDTQE"
    }), "\n", createVNode(_components.p, {
      children: "List of packages to install:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " vim"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build-essential"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " freeglut3"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " freeglut3-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglew1.5"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglew1.5-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglu1-mesa"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglu1-mesa-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libgl1-mesa-glx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libgl1-mesa-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mesa-common-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglew-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglfw3"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglfw3-dev"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " libglm-dev"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
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
const url = "src/content/post/blog/2020/90-sec/opengl-glut-linux.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/opengl-glut-linux.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/opengl-glut-linux.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
