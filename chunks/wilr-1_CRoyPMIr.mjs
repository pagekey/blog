import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "WILR1: React Native Basics",
  "publishDate": "2022-05-30T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/THiU0OdK1C8/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "What I Learned Recently",
  "tags": ["javascript"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
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
      children: "Here\u2019s a brain dump of everything I learned this week about React Native."
    }), "\n", createVNode(_components.p, {
      children: "I\u2019m trying out a new format where I ramble and don\u2019t edit anything."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "THiU0OdK1C8"
    }), "\n", createVNode(_components.p, {
      children: ["Code: ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/example-react-native",
        children: "https://github.com/pagekeysolutions/example-react-native"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "2:40 Installing Dependencies - npm, yarn, expo"
      }), "\n", createVNode(_components.li, {
        children: "3:25 Generating the project - expo init"
      }), "\n", createVNode(_components.li, {
        children: "4:55 Looking at template app"
      }), "\n", createVNode(_components.li, {
        children: "6:16 Blank typescript app"
      }), "\n", createVNode(_components.li, {
        children: "6:40 Adding a button"
      }), "\n", createVNode(_components.li, {
        children: "7:50 Watch out for Divs and Raw Text"
      }), "\n", createVNode(_components.li, {
        children: "11:00 Implementing Navigation"
      }), "\n", createVNode(_components.li, {
        children: "17:50 Managing State with React Hooks"
      }), "\n", createVNode(_components.li, {
        children: "18:30 useState hook"
      }), "\n", createVNode(_components.li, {
        children: "20:45 Async Storage for Persistence / Saving Data"
      }), "\n", createVNode(_components.li, {
        children: "22:33 AsyncStorage setItem"
      }), "\n", createVNode(_components.li, {
        children: "23:50 AsyncStorage getItem with useEffect hook"
      }), "\n", createVNode(_components.li, {
        children: "27:20 How to specify styles"
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
const url = "src/content/post/blog/2022/wilr-1.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/wilr-1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/wilr-1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
