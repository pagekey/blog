import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Design vs. Implementation: The Eternal Divide",
  "publishDate": "2018-12-12T00:00:00.000Z",
  "image": "/blog/2018/design-vs-implementation.jpg",
  "author": "Steve Grice",
  "tags": ["ideas"],
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "benefits-of-a-design-focus",
    "text": "Benefits of a Design Focus"
  }, {
    "depth": 3,
    "slug": "ease-of-implementation",
    "text": "Ease of Implementation"
  }, {
    "depth": 3,
    "slug": "preventing-errors",
    "text": "Preventing Errors"
  }, {
    "depth": 2,
    "slug": "potential-downsides",
    "text": "Potential Downsides"
  }, {
    "depth": 3,
    "slug": "limiting-your-mindset",
    "text": "Limiting Your Mindset"
  }, {
    "depth": 3,
    "slug": "shorter-pieces",
    "text": "Shorter Pieces"
  }, {
    "depth": 2,
    "slug": "the-winner",
    "text": "The Winner"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Typically, people don\u2019t go about their day thinking about design and implementation, or at least not in these terms. Such words are usually limited to the vocabulary of engineers, programmers, developers, or project managers. In spite of this, these two concepts can apply to just about everything in your daily life. Learning to think in these terms may give you a new perspective."
    }), "\n", createVNode(_components.p, {
      children: ["Though the terminology is unorthodox, design and implementation can easily be applied to the process of writing. Whenever I\u2019m putting together an article, essay, story, or document, I find myself performing design and implementation as two distinct activities, whether I attempt to separate them or not. Design is figuring out which ideas I would like to convey, how I want to convey them, and what the feel should be - it\u2019s the big picture. ", createVNode(_components.strong, {
        children: "Outlining"
      }), " is a design activity that really helps me bring my writing together."]
    }), "\n", createVNode(_components.p, {
      children: ["On the other side of the coin is the ", createVNode(_components.em, {
        children: "implementation"
      }), " of the writing. It\u2019s what I\u2019m doing right now - with the ideas more or less figured out, I\u2019m putting pen to paper, relentlessly beating the words out of the keyboard and giving life to the skeleton of thoughts that I had previously formed."]
    }), "\n", createVNode(_components.p, {
      children: "What do these two concepts really mean? Google can help us with the definitions:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Design (v). Decide upon the look and functioning of (a building, garment, or other object), typically by making a detailed drawing of it."
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Implementation (n). The process of putting a decision or plan into effect; execution."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "As you can see, even the definition of design acknowledges that it applies to many different contexts: buildings, garments, electronics, musical instruments, video games, articles, fantasy football leagues - everything!"
    }), "\n", createVNode(_components.p, {
      children: "With these concepts in mind, I find it helpful to focus on design whenever possible, especially since it\u2019s often forgotten. Whether you\u2019re aware or not, it\u2019s happening behind the scenes in your head anyway. By realizing what\u2019s happening, you can take control and ensure that the end result is exactly what you envisioned!"
    }), "\n", createVNode(_components.p, {
      children: "Keeping in mind the immense benefits that can be reaped from a relatively small amount of planning, this article will focus on design and implementation from the perspective of a writer."
    }), "\n", createVNode(_components.h2, {
      id: "benefits-of-a-design-focus",
      children: "Benefits of a Design Focus"
    }), "\n", createVNode(_components.p, {
      children: "Like I mentioned above, the control that you get over your end result when focusing on design is invaluable."
    }), "\n", createVNode(_components.h3, {
      id: "ease-of-implementation",
      children: "Ease of Implementation"
    }), "\n", createVNode(_components.p, {
      children: "Actually performing the work becomes much, much easier when you have a blueprint that details exactly what needs to happen."
    }), "\n", createVNode(_components.p, {
      children: ["For example, I once made a habit of \u201Cimplement first, think later\u201D when it came to my website designs for ", createVNode(_components.a, {
        href: "https://pagekey.io/",
        children: "PageKey"
      }), ". I knew roughly what I wanted the end result to be, but really couldn\u2019t visualize it in any kind of detail. I was familiar with the \u201Clook and feel\u201D I was shooting for, but didn\u2019t have much to show beyond that."]
    }), "\n", createVNode(_components.p, {
      children: "As I progressed, it became increasingly harder to change my mind about decisions. They became baked into the code. Want to move the navigation pane to the right side? That\u2019s 100 lines to change. Need to rework the way the footer looks next to the body? You\u2019re going to have to edit every individual color code."
    }), "\n", createVNode(_components.p, {
      children: "When I redesigned my site, I made sure to create a digital design beforehand. I spent ample time making sure this design was exactly what I wanted before moving onto code. This approach saved me hours at the end of the day."
    }), "\n", createVNode(_components.h3, {
      id: "preventing-errors",
      children: "Preventing Errors"
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s tempting to dive right in and get something working right away. As we\u2019ve seen, though, this tactic will neither save you time nor produce a better product. When you jump straight into implementation, you lock yourself into the first inkling or thought that\u2019s running through your mind at that moment. Code is a lot harder to change than a drawing, and it takes longer to get it working in the first place."
    }), "\n", createVNode(_components.p, {
      children: "Think of it like a building. If you decided you were going to build your dream home, you wouldn\u2019t go to the home improvement store, buy a 5 gallon bucket of mortar and a half ton of bricks, and start putting bricks down."
    }), "\n", createVNode(_components.p, {
      children: ["When you have the idea, you\u2019re still a ", createVNode(_components.em, {
        children: "long"
      }), " way away from laying any materials down. You still need to figure out the room layouts, the architectural look, the electrical and plumbing systems, and so much more. Only when the full picture has been established in your mind (and in the minds of everyone involved in building it) can you proceed with building."]
    }), "\n", createVNode(_components.p, {
      children: ["A majority of the errors you would encounter in the ", createVNode(_components.em, {
        children: "pure implementation"
      }), " strategy described above, where no formal design efforts take place, are completely avoided by carefully thinking through the problem or plan at a high level before tackling the nitty gritty lower-level details."]
    }), "\n", createVNode(_components.p, {
      children: "There\u2019s nothing that can replace working everything out at a high level, standing back, and observing the overall effect of what you\u2019ve created. If something is a little off, but you can\u2019t quite put your finger on it, it\u2019s easy enough to tweak, time and again, until you figure out the issue."
    }), "\n", createVNode(_components.h2, {
      id: "potential-downsides",
      children: "Potential Downsides"
    }), "\n", createVNode(_components.p, {
      children: "There are downsides to any strategy. In this case, the issue could be that there is a system to begin with."
    }), "\n", createVNode(_components.h3, {
      id: "limiting-your-mindset",
      children: "Limiting Your Mindset"
    }), "\n", createVNode(_components.p, {
      children: "Despite all of the benefits of planning and outlining, the rigidity may leave little room for creativity. When I\u2019m writing an article off-the-cuff, it could go any direction - I really don\u2019t know what exactly I\u2019m going to cover, and I may surprise myself with what I produce."
    }), "\n", createVNode(_components.p, {
      children: "On the other hand, writing from an outline is like checking boxes off a list. Covered that point? Next. Wrote a sentence about that? Next. What could be a flowing piece of writing and persuasion is often initially a scrunched up ball of ideas, thrown onto the paper with little care to how each is expressed."
    }), "\n", createVNode(_components.p, {
      children: "The mitigation to this issue, for me personally, is to take time to reread what I\u2019ve written several times with the goal of revising and amending. Almost like conversing with myself, I\u2019ll often have more ideas when reading through a second time that I can add onto the original piece. Stories, analogies, and allegory often escape my narrow minded, top down outlining approach, but are incorporated in a later stage."
    }), "\n", createVNode(_components.p, {
      children: ["\u201DThe Idiot\u201D by Dostoyevsky (free to download on Kindle - in English and Russian!) is a work that is famous for having a fluid plot. It was written periodically, and with each installment, the author claimed that he couldn\u2019t tell what was going to happen next. He simply defined a rich set of characters, and wrote about what happened when they interacted. The outcome couldn\u2019t have been centrally planned, because he wrote it off-the-cuff as he went along. If he had centrally planned this book, start to finish, the end result would have been completely different. The style is called ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Carnivalesque",
        children: "carnivalesque"
      }), ", which allows a story to evolve naturally, without having to assign a specific purpose to each character."]
    }), "\n", createVNode(_components.h3, {
      id: "shorter-pieces",
      children: "Shorter Pieces"
    }), "\n", createVNode(_components.p, {
      children: "When I\u2019m writing from an outline, things tend to come out a lot shorter than they would otherwise. This can be good if I\u2019m making points in a more concise manner rather than talking in circles to get to them. Often times, though, the brevity only communicates the bare-bones specter of what I really wanted to say. Elaboration on the bulleted ideas from my outline are what really make an effective, clearly conveyed message."
    }), "\n", createVNode(_components.h2, {
      id: "the-winner",
      children: "The Winner"
    }), "\n", createVNode(_components.p, {
      children: "So, who will it be - design or implementation? As I\u2019m sure you\u2019ve guessed, the winner is\u2026"
    }), "\n", createVNode(_components.p, {
      children: "Neither!"
    }), "\n", createVNode(_components.p, {
      children: "At the end of the day, both design and implementation are extremely important to the successful execution of a project, whether that be an article, a supercomputer, or a skyscraper."
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s easy to forget what happens behind the scenes of the text you read every day. Textbooks have teams of editors scouring the paragraphs for editors. Similarly, newspaper articles likely go through several stages of reviews, both by the author and his or her peers."
    }), "\n", createVNode(_components.p, {
      children: ["While the focus tends to be on actually ", createVNode(_components.em, {
        children: "doing"
      }), " the work that gets something done, one cannot forget the design work that must be completed before these things can happen. Both are equally important, and should be respected as such - design without implementation creates nothing of value, as does implementation without design."]
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
const url = "src/content/post/blog/2018/design-vs-implementation/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/design-vs-implementation/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/design-vs-implementation/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
