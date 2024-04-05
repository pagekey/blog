import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import 'clsx';

const frontmatter = {
  "title": "4 Fun JavaScript Examples for Beginners",
  "publishDate": "2020-11-02T00:00:00.000Z",
  "image": "/blog/2020/javascript-examples-for-beginners.jpg",
  "author": "Steve Grice",
  "tags": ["javascript"],
  "readingTime": 4
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "genie-game",
    "text": "Genie Game"
  }, {
    "depth": 3,
    "slug": "challenges",
    "text": "Challenges"
  }, {
    "depth": 2,
    "slug": "random-choice",
    "text": "Random Choice"
  }, {
    "depth": 2,
    "slug": "tip-calculator",
    "text": "Tip Calculator"
  }, {
    "depth": 2,
    "slug": "canvas-example",
    "text": "Canvas Example"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Welcome to our JavaScript lesson! Today, we\u2019ll be trying out some fun examples to see a few of the cool things you can do with JavaScript."
    }), "\n", createVNode(_components.p, {
      children: "Any of these examples are editable on CodePen. Just click \u201CEdit on Codepen\u201D in the top right corner and you can make as many changes as you want. Don\u2019t worry - the changes you make will be just for you! You don\u2019t have to worry about making mistakes, because you can always come back here to start fresh."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Photo by ", createVNode(_components.a, {
          href: "https://www.pexels.com/photo/coffee-beans-1695052/",
          children: "Igor Haritanovich"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "genie-game",
      children: "Genie Game"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://codepen.io/stephengrice/pen/KKMewxN",
        children: "Link to Genie Game on CodePen"
      })
    }), "\n", createVNode(_components.p, {
      children: "Click the button below to start the Genie Game!"
    }), "\n", createVNode(_components.p, {
      children: ["If you look at the code, you\u2019ll notice that we\u2019re using ", createVNode(_components.code, {
        children: "if"
      }), ", ", createVNode(_components.code, {
        children: "else"
      }), ", and ", createVNode(_components.code, {
        children: "for"
      }), " statements to make this work. These are called ", createVNode(_components.strong, {
        children: "control flow statements"
      }), ", and without them, programming would be a lot harder! They let us control which code is executed, allowing us to change what happens based on the answers given by the user (that\u2019s you!)."]
    }), "\n", createVNode(_components.p, {
      children: ["To show messages to the user, we use the ", createVNode(_components.code, {
        children: "alert"
      }), " function. It\u2019s easy to use - all you have to do is follow this format, and you\u2019ll see a popup box with your message:"]
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
            children: "alert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Your message here"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Another function that we used is the ", createVNode(_components.code, {
        children: "confirm"
      }), " function. It displays a box with a message, just like the ", createVNode(_components.code, {
        children: "alert"
      }), " function, but it has a special feature. Instead of a single \u201COK\u201D button, the ", createVNode(_components.code, {
        children: "confirm"
      }), " box has both an \u201COK\u201D and a \u201CCancel\u201D button. If the user presses the \u201COK\u201D button, a value of ", createVNode(_components.code, {
        children: "true"
      }), " is returned. On the other hand, if you hit \u201CCancel,\u201D a value of ", createVNode(_components.code, {
        children: "false"
      }), " is returned. We can use this to ask yes or no questions and change which messages we display based on the responses."]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " choice "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " prompt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Do you like cheese?"'
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
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (choice "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    alert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Me too!"'
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
              color: "#E1E4E8"
            },
            children: "} "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    alert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"I understand."'
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
    }), "\n", createVNode(_components.p, {
      children: ["Finally, the last major function that we use is the ", createVNode(_components.code, {
        children: "prompt"
      }), " function. This is just like the ", createVNode(_components.code, {
        children: "alert"
      }), " and ", createVNode(_components.code, {
        children: "confirm"
      }), " functions, but it gives you a text box to type in a message to the program. You can use it like this:"]
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
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " favorite_pet "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " prompt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"What is your favorite pet?"'
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
            children: "alert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(favorite_pet "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' " is a great choice!"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "With all of that out of the way, let\u2019s see it in action! Click the button below to play the game. Then, try changing the code and make it do something new!"
    }), "\n", createVNode(_components.p, {
      children: "As a special challenge, create a new CodePen and try to make your own story from scratch. Be sure to use this one as a reference if you need it."
    }), "\n", createVNode(_components.h3, {
      id: "challenges",
      children: "Challenges"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Let\u2019s try out the snippets. Right click on this post and press \u201CInspect Element.\u201D Then, look for the Console. Copy each of the snippets from the beginning of the post and paste them into the Console. For bonus points, change the messages to something that you made up yourself!"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Continue the story after the three wishes are granted. You can include any number of ", createVNode(_components.code, {
            children: "alert"
          }), ", ", createVNode(_components.code, {
            children: "confirm"
          }), ", or ", createVNode(_components.code, {
            children: "prompt"
          }), " messages, and ", createVNode(_components.code, {
            children: "if"
          }), ", ", createVNode(_components.code, {
            children: "else"
          }), ", and ", createVNode(_components.code, {
            children: "for"
          }), " statements, if you\u2019re feeling adventurous! Hint: Start by adding a new line of code after line #32."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Use the template below to create your own story from scratch! You can start by just replacing the text that is displayed with your own story. Then, try building your own logic."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "random-choice",
      children: "Random Choice"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://codepen.io/stephengrice/pen/VwjdYdq",
        children: "Link to Random Choice on CodePen"
      })
    }), "\n", createVNode(_components.p, {
      children: "This code picks a random color when you press the button, and shows you the answer."
    }), "\n", createVNode(_components.h2, {
      id: "tip-calculator",
      children: "Tip Calculator"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://codepen.io/stephengrice/pen/xxVpOgO",
        children: "Link to Tip Calculator on CodePen"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you ever need to pay the bill at a restaurant, you may need to figure out how much to tip. This calculator takes the bill amount you provide and adds 20% so that you know how much to pay!"
    }), "\n", createVNode(_components.h2, {
      id: "canvas-example",
      children: "Canvas Example"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://codepen.io/stephengrice/pen/bGpLRJO",
        children: "Link to Canvas Example on CodePen"
      })
    }), "\n", createVNode(_components.p, {
      children: "The HTML Canvas is a special element on the page that lets you draw custom shapes, lines, and images wherever and however you want. It\u2019s often used to create games right in your browser. It\u2019s a bit of an advanced topic, so we won\u2019t delve into it for this post. Try messing around with the code to get a feel for it."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Thanks for following along with our JavaScript tutorial! I hope you got a lot out of it."
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
const url = "src/content/post/blog/2020/javascript-examples-for-beginners/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/javascript-examples-for-beginners/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/javascript-examples-for-beginners/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
