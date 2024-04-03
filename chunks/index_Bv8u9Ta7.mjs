import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_L4PgzY7a.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Implement a Queue in Python",
  "publishDate": "2017-06-23T00:00:00.000Z",
  "image": "/blog/2017/queue-python.jpg",
  "author": "Steve Grice",
  "category": "Data Structures & Algorithms",
  "tags": ["python", "tutorial"],
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "starting-out",
    "text": "Starting Out"
  }, {
    "depth": 2,
    "slug": "enqueue",
    "text": "enqueue"
  }, {
    "depth": 2,
    "slug": "dequeue",
    "text": "dequeue"
  }, {
    "depth": 2,
    "slug": "peek",
    "text": "peek"
  }, {
    "depth": 2,
    "slug": "full-source-and-tests",
    "text": "Full Source and Tests"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "You may hate the line at the DMV, but without it, things might turn into a rough-and-tumble free for all! In the same way that a line keeps raging motorists from getting out of hand, a Queue helps your computer keep its ducks in a row. The Queue functions very much like a line of people. It\u2019s a First-In, First-Out (FIFO) data structure, so no cutting!"
    }), "\n", createVNode(_components.h2, {
      id: "starting-out",
      children: "Starting Out"
    }), "\n", createVNode(_components.p, {
      children: "Bear with me. Our basic Queue data structure and accompanying Node will look like this:"
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
            children: ".prev_node "
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
            children: " Queue"
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
            children: ".head "
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
            children: ".tail "
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
      id: "enqueue",
      children: "enqueue"
    }), "\n", createVNode(_components.p, {
      children: ["Take a number, buddy. When you get in line, you\u2019re involved in the ", createVNode(_components.code, {
        children: "enqueue"
      }), " operation. You begin your journey to the front desk at the back, or ", createVNode(_components.code, {
        children: "tail"
      }), ", of the Queue. The ", createVNode(_components.code, {
        children: "tail"
      }), " attribute is just a pointer; it\u2019s like a big flag or arrow saying, \u201CThis person (or object) is last in line!\u201D Talk about embarrassing\u2026"]
    }), "\n", createVNode(_components.p, {
      children: ["In our hypothetical DMV line, everyone is holding their driver\u2019s license in their pocket. This registration is your ", createVNode(_components.code, {
        children: "data"
      }), ", making you a ", createVNode(_components.code, {
        children: "Node"
      }), " in the Queue. Our Queue will be implemented as a Double-Ended Linked List, which means that every Node will point to the ", createVNode(_components.code, {
        children: "next"
      }), " data item in the queue. So, each person in our line will have to point at the next person in line. Perhaps rudely, they\u2019ll need to jerk a thumb over their shoulder at the ", createVNode(_components.code, {
        children: "prev"
      }), "ious person in line, too."]
    }), "\n", createVNode(_components.p, {
      children: ["When you\u2019re joining the line, the first thing you need to do is point at the current ", createVNode(_components.code, {
        children: "tail"
      }), ". Then, move the hypothetical arrow and declare yourself as the new ", createVNode(_components.code, {
        children: "tail"
      }), " reference."]
    }), "\n", createVNode(_components.p, {
      children: "In code, this would look like:"
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
            children: " enqueue"
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
            children: ".size "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "			self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".tail.prev_node "
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
            children: ".tail"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "			self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".tail "
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
              color: "#F97583"
            },
            children: "		else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "			self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".head "
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
            children: "			self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".tail "
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
    }), "\n", createVNode(_components.h2, {
      id: "dequeue",
      children: "dequeue"
    }), "\n", createVNode(_components.p, {
      children: "You\u2019ve been waiting for an hour, and finally shuffled to the front of the line. The man at the desk yells, \u201CNext!\u201D and you rush to the desk."
    }), "\n", createVNode(_components.p, {
      children: ["Something special just happened. You\u2019ve been ", createVNode(_components.code, {
        children: "dequeue"
      }), "\u2019d. Congratulations."]
    }), "\n", createVNode(_components.p, {
      children: ["In order to ", createVNode(_components.code, {
        children: "dequeue"
      }), " something from the list, you first grab the Node from the front. Then, set ", createVNode(_components.code, {
        children: "self.head = self.head.prev_node"
      }), ". In other words, move the ", createVNode(_components.code, {
        children: "head"
      }), " pointer to the previous person in line. Now, return the ", createVNode(_components.code, {
        children: "data"
      }), " from Node you just removed from the Queue. It\u2019s important to store this in a temporary variable. Otherwise, you\u2019ll be returning the data of something still in the Queue. An important part of ", createVNode(_components.code, {
        children: "dequeue"
      }), " is that the item you return has been removed from the queue."]
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
            children: " dequeue"
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
            children: ".head "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "			return"
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
            children: ".head"
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
            children: ".head "
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
            children: ".head.prev_node"
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
            children: " result.data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "peek",
      children: "peek"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s say that you just made it to the front of the line. All the clerks are busy, but you know someone who works there. Your long time pal looks up from a pile of work and yells, \u201CWhat\u2019s going on?\u201D"
    }), "\n", createVNode(_components.p, {
      children: ["How did they know you were there? They had to ", createVNode(_components.code, {
        children: "peek"
      }), " at the front of the line to recognize your face."]
    }), "\n", createVNode(_components.p, {
      children: ["This operation is very simple. All you need to do is ask the first person in line to pull out their driver\u2019s license for a moment. In other words, just return ", createVNode(_components.code, {
        children: "self.head.data"
      }), "."]
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
            children: ".head.data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "full-source-and-tests",
      children: "Full Source and Tests"
    }), "\n", createVNode(_components.p, {
      children: ["Feel free to check out the source of the entire Queue ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/Queue/queue.py",
        children: "on Github"
      }), ". If it interests you, the code I used to test it is ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/Queue/test_queue.py",
        children: "here"
      }), ". Thanks for reading!"]
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
const url = "src/content/post/blog/2017/queue-python/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/queue-python/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/queue-python/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
