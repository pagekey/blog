import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_Biewhb8P.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Implement a Stack in Python",
  "publishDate": "2017-06-22T00:00:00.000Z",
  "image": "/blog/2017/stack-python.jpg",
  "author": "Steve Grice",
  "category": "Data Structures & Algorithms",
  "tags": ["python", "tutorial"],
  "readingTime": 5
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "an-analogy",
    "text": "An Analogy"
  }, {
    "depth": 2,
    "slug": "setup",
    "text": "Setup"
  }, {
    "depth": 2,
    "slug": "push-it",
    "text": "Push it"
  }, {
    "depth": 2,
    "slug": "take-a-peek",
    "text": "Take a peek"
  }, {
    "depth": 2,
    "slug": "pop-it",
    "text": "Pop it"
  }, {
    "depth": 2,
    "slug": "challenges",
    "text": "Challenges"
  }, {
    "depth": 3,
    "slug": "first-challenge-reverse-a-string",
    "text": "First Challenge: Reverse a string"
  }, {
    "depth": 3,
    "slug": "second-challenge-evaluate-a-postfix-string",
    "text": "Second Challenge: Evaluate a postfix string"
  }, {
    "depth": 3,
    "slug": "solutions",
    "text": "Solutions"
  }, {
    "depth": 2,
    "slug": "full-code-and-testing",
    "text": "Full Code and Testing"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "There\u2019s no other data structure like the Stack. In only a few minutes, you can have a fully working implementation that can be used to solve a wide variety of problems. Stacks are useful for anything from reversing a string to language processing applications - not to mention the fact that many programming languages (and probably your operating system) rely on a Stack to function."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Click ", createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/Stack/stack.py",
          children: "here"
        }), " for the full Stack source code. Also, ", createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/Stack/test_stack.py",
          children: "here"
        }), " is the test code."]
      })
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "5MOy9VYKczY"
    }), "\n", createVNode(_components.h2, {
      id: "an-analogy",
      children: "An Analogy"
    }), "\n", createVNode(_components.p, {
      children: "The Stack data structure is well-named - it very much resembles a stack of papers, or a tower of blocks, or any pile of objects where all adding and removing occurs at the top of the pile. Just think - you can\u2019t remove a quarter in the middle of a stack of coins without knocking the whole thing over!"
    }), "\n", createVNode(_components.p, {
      children: ["For our purposes, imagine you have a long, thin cardboard box. Your box can hold many different objects, but you can only interact with the contents of your box through the top. This box is your Stack. If you (", createVNode(_components.strong, {
        children: "gently!"
      }), ") slide a green plate into the box, it will rest at the bottom, still visible and accessible from someone looking in. After this, if you add an orange plate to your box, you will only have access to the orange plate. To get to the green plate, you need to first reach in and remove the orange plate. Keep this analogy in your mind as we move forward."]
    }), "\n", createVNode(_components.h2, {
      id: "setup",
      children: "Setup"
    }), "\n", createVNode(_components.p, {
      children: ["Our Stack will have three operations - ", createVNode(_components.code, {
        children: "push"
      }), ", ", createVNode(_components.code, {
        children: "pop"
      }), ", and ", createVNode(_components.code, {
        children: "peek"
      }), ". Before we get to the nitty gritty of their implementation, though, we need to setup the class for the ", createVNode(_components.code, {
        children: "Stack"
      }), ", as well as a ", createVNode(_components.code, {
        children: "Node"
      }), " class to hold whatever we put in our Stack. The Node that we create for our Stack will be identical to ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "../linked-lists-in-python/index.md",
          children: "the Node we made for our LinkedList"
        })
      }), " in the last post."]
    }), "\n", createVNode(_components.p, {
      children: ["Our Stack will have two fields - ", createVNode(_components.code, {
        children: "self.top"
      }), ", which is the item on the top of the Stack, and ", createVNode(_components.code, {
        children: "self.size"
      }), ". The field ", createVNode(_components.code, {
        children: "self.top"
      }), " is similar to ", createVNode(_components.code, {
        children: "self.head"
      }), " or ", createVNode(_components.code, {
        children: "self.tail"
      }), " in a LinkedList. What makes it special is that it is the ", createVNode(_components.strong, {
        children: "only"
      }), " Node accessible to the user of the ", createVNode(_components.code, {
        children: "Stack"
      }), ". All other nodes are hidden until that ", createVNode(_components.code, {
        children: "self.top"
      }), " Node is removed."]
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " __init__"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, d):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".next_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Stack"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " __init__"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".size "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "push-it",
      children: "Push it"
    }), "\n", createVNode(_components.p, {
      children: ["When you ", createVNode(_components.code, {
        children: "push"
      }), " something onto your Stack, you place it on top. This is akin to sliding a plate into your long box. The plate you add becomes the new top plate, and all the ones underneath become inaccessible."]
    }), "\n", createVNode(_components.p, {
      children: ["The first step to making this work is creating a Node object to hold the data you\u2019re holding. Then, tie this ", createVNode(_components.code, {
        children: "new_node"
      }), " to the Node referenced by the Stack\u2019s ", createVNode(_components.code, {
        children: "self.top"
      }), " variable: ", createVNode(_components.code, {
        children: "new_node.next_node = self.top"
      }), ". Now, set your ", createVNode(_components.code, {
        children: "new_node"
      }), " as the new top of the Stack."]
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
            children: "	def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, d):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		new_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Node(d)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		if"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			new_node.next_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " new_node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".size "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The nodes are linked together exactly like a Singly Linked List. The only differences are the operations used to manipulate the data."
    }), "\n", createVNode(_components.h2, {
      id: "take-a-peek",
      children: "Take a peek"
    }), "\n", createVNode(_components.p, {
      children: ["What happens when you need to look at what\u2019s in your Stack? You just peek down inside, that\u2019s all! The method ", createVNode(_components.code, {
        children: "peek"
      }), " is used to access the top data entry in a Stack ", createVNode(_components.strong, {
        children: "without changing the Stack itself"
      }), ". It\u2019s not destructive - after all, it\u2019s just a harmless peek!"]
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
            children: "	def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " peek"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top.data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "pop-it",
      children: "Pop it"
    }), "\n", createVNode(_components.p, {
      children: ["Now, let\u2019s get serious. We need to completely remove something from our stack and look at it. We want to do something with it, and more importantly, we want whatever is below it to become the new ", createVNode(_components.code, {
        children: "self.top"
      }), " so that we can access it, too. When we ", createVNode(_components.code, {
        children: "pop"
      }), " something from the stack, we pull an object out, removing it from the stack. More specifically, the ", createVNode(_components.code, {
        children: "pop"
      }), " method returns ", createVNode(_components.code, {
        children: "self.top"
      }), " just like ", createVNode(_components.code, {
        children: "peek"
      }), ", but it also removes whatever Node is located at ", createVNode(_components.code, {
        children: "self.top"
      }), ", changing it to reference the next Node down."]
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
            children: "	def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " pop"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		result "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top.data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".top.next_node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "		self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".size "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " result"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "challenges",
      children: "Challenges"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s put this knowledge to use! I have two programming challenges to try. If you get stuck, I\u2019ll give you a link to my solutions."
    }), "\n", createVNode(_components.p, {
      children: ["Each challenge should use the stack we just built, so either put your functions in the same source file as your stack, or create a challenges source file in the same directory and write ", createVNode(_components.code, {
        children: "from stack import Stack"
      }), " at the top."]
    }), "\n", createVNode(_components.h3, {
      id: "first-challenge-reverse-a-string",
      children: "First Challenge: Reverse a string"
    }), "\n", createVNode(_components.p, {
      children: ["Implement a method, ", createVNode(_components.code, {
        children: "reverse(s)"
      }), ", which uses our Stack to reverse the input string ", createVNode(_components.code, {
        children: "s"
      }), ". For hints about completing this challenge, check out the video at the top of the article."]
    }), "\n", createVNode(_components.h3, {
      id: "second-challenge-evaluate-a-postfix-string",
      children: "Second Challenge: Evaluate a postfix string"
    }), "\n", createVNode(_components.p, {
      children: ["Implement a method, ", createVNode(_components.code, {
        children: "eval_postfix(postfix_string)"
      }), ", which returns a number representing the value of the input ", createVNode(_components.code, {
        children: "postfix_string"
      }), ". A Stack makes this much easier. Assume that the input has no spaces - each character in the string is a number or one of the following operator characters: ", createVNode(_components.code, {
        children: "'+', '-', '*', '/'"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Hint: Push all operands. When you find an operator, pop twice, calculate based on the operator, and push the result."
    }), "\n", createVNode(_components.p, {
      children: "Another hint: When you\u2019re finished, the only thing in the stack will be the answer. Pop and return this."
    }), "\n", createVNode(_components.h3, {
      id: "solutions",
      children: "Solutions"
    }), "\n", createVNode(_components.p, {
      children: ["Don\u2019t peek! I hope you tried your best! Anyway, ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/Stack/challenges.py",
        children: "here"
      }), " are my solutions to the challenges."]
    }), "\n", createVNode(_components.h2, {
      id: "full-code-and-testing",
      children: "Full Code and Testing"
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s all there is to it! Part of the beauty of a Stack is its simplicity."
    }), "\n", createVNode(_components.p, {
      children: ["If you want to see all of the code for our finished Stack, ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/Stack/stack.py",
        children: "check out the source"
      }), " on Github. I also wrote a few ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/Stack/test_stack.py",
        children: "tests"
      }), ", which cover some of the important functionality of our Stack (though I can\u2019t guarantee 100% coverage!). Thanks for reading!"]
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
const url = "src/content/post/blog/2017/stack-python/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/stack-python/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/stack-python/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
