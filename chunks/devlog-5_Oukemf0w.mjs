import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": 'Language Logging as the "One Thing" | Boom DevLog 5',
  "publishDate": "2022-06-13T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/4aKoQicY5Cg/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "Boom Languages",
  "tags": ["javascript", "language"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I am starting a new take on an old project."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "4aKoQicY5Cg"
    }), "\n", createVNode(_components.p, {
      children: ["At ", createVNode(_components.a, {
        href: "https://boomlanguages.com/",
        children: "boomlanguages.com"
      }), ", you can currently see the project I did in 2020-2021. I was determined to make this work, but the tech debt spun out of control and it became impossible to maintain. When this happened, I lost interest."]
    }), "\n", createVNode(_components.p, {
      children: "Two things are different this time around - first, I\u2019m starting a completely new codebase using React Native. Second, I\u2019m focusing on exactly one feature first, one that I will be able to use every day, myself. Until I can get this right, no new features! The core needs to be there before I move onto the rest. The existing Boom Languages has a ton of features, but none of them are well-implemented or useful. While I learned a ton creating the Flutter/Rails version of Boom, I need a fresh start with a new perspective - and a lot more focus."
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s see how far this goes!"
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
const url = "src/content/post/blog/2022/boom/devlog-5.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-5.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/boom/devlog-5.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
