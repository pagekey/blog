import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Nuanced Truth: Exploring Differences Between ML and AI",
  "publishDate": "2021-04-11T00:00:00.000Z",
  "image": "/blog/2021/ml-vs-ai.jpg",
  "author": "Steve Grice",
  "tags": ["machine-learning"],
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "artificial-intelligence",
    "text": "Artificial Intelligence"
  }, {
    "depth": 3,
    "slug": "weak-ai-vs-strong-ai",
    "text": "Weak AI vs. Strong AI"
  }, {
    "depth": 2,
    "slug": "machine-learning",
    "text": "Machine Learning"
  }, {
    "depth": 3,
    "slug": "types-of-machine-learning",
    "text": "Types of Machine Learning"
  }, {
    "depth": 4,
    "slug": "supervised-learning-when-data-is-labeled",
    "text": "Supervised Learning: When Data is Labeled"
  }, {
    "depth": 4,
    "slug": "unsupervised-learning",
    "text": "Unsupervised Learning"
  }, {
    "depth": 4,
    "slug": "reinforcement-learning",
    "text": "Reinforcement Learning"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Everyone has heard of machine learning and artificial intelligence at this point, right?"
    }), "\n", createVNode(_components.p, {
      children: "There is an insane amount of buzz around ML and AI, and for good reason. The techniques available to us today allow for mind-blowing applications that would have seemed like magic just a few years ago."
    }), "\n", createVNode(_components.p, {
      children: ["I\u2019ve researched all that I can across the web, and I\u2019ve come up with an analogy: ", createVNode(_components.strong, {
        children: "Machine learning"
      }), " is a kind of tool that we can use to make our computers do what we want. Every time you learn a new machine learning technique, you add another tool to you toolbelt."]
    }), "\n", createVNode(_components.p, {
      children: ["When you have an assortment of tools at your disposal, you might try your hand at building something rather complex with them, something that requires all of those tools to work together in unison. It\u2019s likely that you\u2019d try to build something that exhibits ", createVNode(_components.strong, {
        children: "artificial intelligence"
      }), ". In this way, machine learning techniques are the tools, ", createVNode(_components.strong, {
        children: "artificial intelligence"
      }), " is the house, and you are the carpenter!"]
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s dive in a bit deeper and see if this analogy holds true."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Photo by ", createVNode(_components.a, {
          href: "https://www.pexels.com/@agk42?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels",
          children: "Alex Knight"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "artificial-intelligence",
      children: "Artificial Intelligence"
    }), "\n", createVNode(_components.p, {
      children: ["Artificial Intelligence is the top of the hierarchy, encompassing all other topics that we\u2019ll discuss today. The broad definition provided by IBM is \u201Cany human-like intelligence exhibited by a computer, robot, or other machine\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". This encompassing a lot, from the facial recognition software your phone uses to make you look like a cat, to expert systems that help doctors and surgeons make more effective decisions ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-2",
          id: "user-content-fnref-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "weak-ai-vs-strong-ai",
      children: "Weak AI vs. Strong AI"
    }), "\n", createVNode(_components.p, {
      children: ["Weak, or Narrow, Artificial Intelligence is an AI application that is \u201Ctrained and focused to perform specific tasks\u201D [1]. This is the technology that drives pretty much everything we see today, including Google Assistant, Siri, Alexa, and IBM\u2019s Watson (which won Jeopardy that one time - ", createVNode(_components.a, {
        href: "https://www.techrepublic.com/article/ibm-watson-the-inside-story-of-how-the-jeopardy-winning-supercomputer-was-born-and-what-it-wants-to-do-next/",
        children: "remember?"
      }), "). This is why \u201Cweak\u201D is not necessarily the best way to describe it; there are plenty of things that have been accomplished with Weak/Narrow AI."]
    }), "\n", createVNode(_components.p, {
      children: ["Strong AI, or Artificial General Intelligence, is something that \u201Ccan solve many types or classes of problems and even choose the problems it wants to solve without human intervention\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". There is still no real-world example of Strong AI - it\u2019s only a concept. There are plenty of science fiction examples though, but not all of them present a favorable view. ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Skynet_(Terminator)",
        children: "Skynet"
      }), ", anyone?"]
    }), "\n", createVNode(_components.h2, {
      id: "machine-learning",
      children: "Machine Learning"
    }), "\n", createVNode(_components.p, {
      children: ["IBM defines machine learning as software that is \u201Cfocused on building applications that learn from data and improve their accuracy over time without being programmed to do so\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ". This means that you can train your computer to make decisions without having to specify every single possible case with an ", createVNode(_components.code, {
        children: "if/else"
      }), " or ", createVNode(_components.code, {
        children: "switch"
      }), " statement. Imagine trying to find a way to tell your computer to recognize a cat based on pixels. Just getting one image right would take hundreds, or perhaps thousands, of statements, and then that would only work for a single image! Instead, machine learning enables ", createVNode(_components.strong, {
        children: "pattern recognition"
      }), " so that you can train your computer to get the gist of what you\u2019re looking for, and then let it make the calls."]
    }), "\n", createVNode(_components.p, {
      children: ["Though closely related, ML and AI are distinct topics that must be considered and understood separately. Gary Sims from Android Authority sums it up quite well in his YouTube video on the topic ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-4",
          id: "user-content-fnref-4",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "4"
        })
      }), ": ", createVNode(_components.strong, {
        children: "Machine learning"
      }), " is a process by which a machine learns from its experience, and generally involves ", createVNode(_components.strong, {
        children: "recognizing patterns and doing something useful with them"
      }), ". On the other hand, artificial intelligence involves ", createVNode(_components.strong, {
        children: "creativity, abstract thinking, and analysis"
      }), " within a specific context. While achieving artificial intelligence will almost certainly require the use of ML techniques, it is clear that AI refers to a high-level concept of a computer\u2019s abilities, whereas ML generally describes techniques for pattern-matching and extracting specific insights from a dataset."]
    }), "\n", createVNode(_components.p, {
      children: "So why is this so confusing? Gary hints at an answer: \u201Cartificial intelligence\u201D tends to double as a marketing technique. When you hear a company claim that they use \u201Cartificial intelligence\u201D without explaining how, they\u2019re usually trying to sell you something."
    }), "\n", createVNode(_components.h3, {
      id: "types-of-machine-learning",
      children: "Types of Machine Learning"
    }), "\n", createVNode(_components.p, {
      children: ["The machine learning technique that you apply depends on what you\u2019re using it for. In particular, there are three main considerations ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Is your data labeled or unlabeled?"
      }), "\n", createVNode(_components.li, {
        children: "How much data will be available?"
      }), "\n", createVNode(_components.li, {
        children: "What type of problem are you trying to solve?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Some algorithms can be used both for labeled and unlabeled data. For example, \u201CNearest Neighbors\u201D is a broad category of algorithms. Scikit-learn, one of the most popular open-source libraries for machine learning, says that their ", createVNode(_components.code, {
        children: "neighbors"
      }), " package \u201Cprovides functionality for unsupervised and supervised neighbors-based learning methods\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-5",
          id: "user-content-fnref-5",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "5"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "However, focusing on whether the data at hand is labeled provides a starting point for divvying up the algorithms into their most common uses."
    }), "\n", createVNode(_components.h4, {
      id: "supervised-learning-when-data-is-labeled",
      children: "Supervised Learning: When Data is Labeled"
    }), "\n", createVNode(_components.p, {
      children: ["When labels are provided for data, it\u2019s like having the answers to the exam for all of your training data. We use these answers when teaching the model how to make decisions. This is referred to as ", createVNode(_components.strong, {
        children: "supervised learning"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["A few examples of supervised learning include ", createVNode(_components.strong, {
        children: "regression algorithms"
      }), ", ", createVNode(_components.strong, {
        children: "decision trees"
      }), ", and ", createVNode(_components.strong, {
        children: "instance-based"
      }), " algorithms."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Linear"
      }), " and ", createVNode(_components.strong, {
        children: "logistic regression"
      }), " algorithms are some of the simplest ML algorithms that we have. They are essentially trying to fit your training data to a curve, one that either looks something like ", createVNode(_components.code, {
        children: "y=mx+b"
      }), " or something involving logarithms. As long as your data can actually be modeled by these curves, it could be a great choice."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Decision_tree_learning",
        children: "Decision trees"
      }), " and ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Instance-based_learning",
        children: "instance-based"
      }), " algorithms are some other choices for supervised learning."]
    }), "\n", createVNode(_components.h4, {
      id: "unsupervised-learning",
      children: "Unsupervised Learning"
    }), "\n", createVNode(_components.p, {
      children: ["Unsupervised learning means that we ", createVNode(_components.em, {
        children: "just"
      }), " have the data, with no answers provided. It\u2019s up to the program to figure out how to categorize the data. Within this category, we typically find ", createVNode(_components.strong, {
        children: "clustering algorithms"
      }), ", ", createVNode(_components.strong, {
        children: "association algorithms"
      }), ", and ", createVNode(_components.strong, {
        children: "neural networks"
      }), createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Clustering algorithms"
      }), " are aimed at forming groups of data points. They try to find some kind of similarity between points, then it will form a group containing those similar points."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Association algorithms"
      }), " attempt to uncover how data points are related to one another ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), ". Such algorithms can automatically find correlations that may not otherwise be obvious. This is the kind of algorithm that may ", createVNode(_components.a, {
        href: "https://www.driveresearch.com/market-research-company-blog/how-target-used-data-analytics-to-predict-pregnancies/",
        children: "find out that you\u2019re pregnant before you do"
      }), " based on your shopping list."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Neural networks"
      }), " attempt to model the neurons in the human brain to process data in successive \u201Chidden layers\u201D of calculations. Depending on how many hidden layers are involved, the use of neural networks could be considered ", createVNode(_components.strong, {
        children: "deep learning"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "reinforcement-learning",
      children: "Reinforcement Learning"
    }), "\n", createVNode(_components.p, {
      children: "Reinforcement learning is similar to supervised learning, but instead of getting trained by sample data, it learns as it goes. This means that you may have to run the \u201Cagent,\u201D or program acting on your behalf, through hundreds or even thousands of situations so that it can figure out what works best. Reinforcement learning defines ways to reward or penalize the agent\u2019s actions, and based on whether it is rewarded or punished, the agent learns to seek out the best path."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=y5OY4dd5DIY",
        children: "This awesome video"
      }), " shows an example of reinforcement learning in action - someone trained their computer to play Super Mario!"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "So, what do you think? Would you agree that the key to building a useful artificial intelligence application involves applying specific ML applications? Is ML the toolkit that lets us build a \u201Chouse\u201D of AI?"
    }), "\n", createVNode(_components.p, {
      children: "I hope you learned something new from this article about these topics. Please let me know if you have any thoughts on these topics (or corrections if I made any mistakes)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "If you\u2019re excited about these topics and want to get your hands dirty, check out my next post about how to install scikit-learn!"
      })
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
              children: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1307157/",
              children: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1307157/"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.ibm.com/cloud/learn/machine-learning",
              children: "https://www.ibm.com/cloud/learn/machine-learning"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3-3",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "3"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-4",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.youtube.com/watch?v=whlODvf-SVk",
              children: "https://www.youtube.com/watch?v=whlODvf-SVk"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-4",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 4",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-5",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://scikit-learn.org/stable/modules/neighbors.html",
              children: "https://scikit-learn.org/stable/modules/neighbors.html"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-5",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 5",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-6",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html",
              children: "https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
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
const url = "src/content/post/blog/2021/ml-vs-ai/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/ml-vs-ai/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/ml-vs-ai/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
