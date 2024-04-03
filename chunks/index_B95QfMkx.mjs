import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_QkSTohUE.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Implement a Linked List in Python",
  "publishDate": "2017-06-20T00:00:00.000Z",
  "image": "/blog/2017/linked-lists-in-python.jpg",
  "author": "Steve Grice",
  "category": "Data Structures & Algorithms",
  "tags": ["python", "tutorial"],
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nodes-and-ropes",
    "text": "Nodes and Ropes"
  }, {
    "depth": 2,
    "slug": "list-setup---heads-and-tails",
    "text": "List Setup - Heads and Tails"
  }, {
    "depth": 2,
    "slug": "adding-elements",
    "text": "Adding elements"
  }, {
    "depth": 2,
    "slug": "removing-elements",
    "text": "Removing elements"
  }, {
    "depth": 2,
    "slug": "finding-elements",
    "text": "Finding elements"
  }, {
    "depth": 2,
    "slug": "testing",
    "text": "Testing"
  }, {
    "depth": 2,
    "slug": "challenges",
    "text": "Challenges"
  }, {
    "depth": 2,
    "slug": "full-source",
    "text": "Full Source"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Need a quick run down on a classic data structure? Look no further."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Click ", createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/LinkedList/linked_list.py",
          children: "here"
        }), " for the full LinkedList source code. Also, ", createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/LinkedList/test_linked_list.py",
          children: "here"
        }), " is the test code."]
      })
    }), "\n", createVNode(_components.p, {
      children: "A linked list is an ordered collection of elements. The thing that makes it special is how it stores data. Behind the scenes, each number, string, object, or other value you may need to keep track of is stored in a Node. Each Node references its successor."
    }), "\n", createVNode(_components.p, {
      children: ["The advantage to this approach is the dynamic nature of the list. Unless you run out of memory, ", createVNode(_components.strong, {
        children: "you can\u2019t run out of space in a linked list"
      }), ", because the last Node in the list always has room to reference another Node. Conversely, when you run out of space in a flat array, you need to create a new, larger array and fill it with the data from the original, which can be inefficient."]
    }), "\n", createVNode(_components.p, {
      children: ["In this case, we will be talking about a ", createVNode(_components.strong, {
        children: "singly linked list"
      }), ", meaning that each Node only has one reference, which belongs to the ", createVNode(_components.strong, {
        children: "next"
      }), " Node. For a ", createVNode(_components.strong, {
        children: "doubly linked list"
      }), ", there would be an additional reference to the ", createVNode(_components.strong, {
        children: "previous"
      }), " Node."]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "KZVU2X4Dw8w"
    }), "\n", createVNode(_components.h2, {
      id: "nodes-and-ropes",
      children: "Nodes and Ropes"
    }), "\n", createVNode(_components.p, {
      children: ["The concept of a ", createVNode(_components.strong, {
        children: "Node"
      }), " is central to linked lists. A linked list Node contains two important fields: ", createVNode(_components.code, {
        children: "next_node"
      }), " and ", createVNode(_components.code, {
        children: "data"
      }), ". The field ", createVNode(_components.code, {
        children: "next_node"
      }), " refers to another Node object, the next element in the list. The ", createVNode(_components.code, {
        children: "data"
      }), " field refers to whatever you are actually storing in the list, which could be anything from a name or phone number to the result of a computation."]
    }), "\n", createVNode(_components.p, {
      children: ["An easy way to visualize a linked list is by picturing each Node as a box. The box has space for you to hold your ", createVNode(_components.code, {
        children: "data"
      }), ". It also has a hole with a rope coming out - this rope is the ", createVNode(_components.code, {
        children: "next_node"
      }), " reference. When you create your list and add elements, you are essentially tying each ", createVNode(_components.code, {
        children: "Node"
      }), "\u2019s rope to the next one in line."]
    }), "\n", createVNode(_components.p, {
      children: ["Putting this idea into code will yield the following ", createVNode(_components.code, {
        children: "Node"
      }), " object:"]
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
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "list-setup---heads-and-tails",
      children: "List Setup - Heads and Tails"
    }), "\n", createVNode(_components.p, {
      children: ["Unlike a regular flat array, we can\u2019t access each list item by index. Instead, we must iterate from one of two points of reference: the ", createVNode(_components.code, {
        children: "head"
      }), " and the ", createVNode(_components.code, {
        children: "tail"
      }), " of the list, each of which contain a Node object. Think of these as the only two \u201Chandles\u201D we have to grab the list by. From the ", createVNode(_components.code, {
        children: "head"
      }), ", we can work our way down the list by following ", createVNode(_components.code, {
        children: "next_node"
      }), " references unitl we reach the ", createVNode(_components.code, {
        children: "tail"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Keep in mind that while the ", createVNode(_components.code, {
        children: "head"
      }), " and ", createVNode(_components.code, {
        children: "tail"
      }), " hold Node objects, they are set to ", createVNode(_components.code, {
        children: "None"
      }), " when the list is created. This is because the list starts out empty, so we don\u2019t have any Node objects to use for them."]
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
            children: " LinkedList"
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
      id: "adding-elements",
      children: "Adding elements"
    }), "\n", createVNode(_components.p, {
      children: ["Adding an element to a list involves updating the ", createVNode(_components.code, {
        children: "next_node"
      }), " references of surrounding Nodes to integrate it into the list, \u201Ctying\u201D all the ropes in their proper places. The simplest situation to consider is when a node is added to the end of a list. In this case, simply update ", createVNode(_components.code, {
        children: "tail.next_node"
      }), " to point to your new node. At this point, the new node is the last element in the list, so you should update ", createVNode(_components.code, {
        children: "tail"
      }), " to reflect this."]
    }), "\n", createVNode(_components.p, {
      children: ["Note that if the list is empty, you only need to set ", createVNode(_components.code, {
        children: "head"
      }), " and ", createVNode(_components.code, {
        children: "tail"
      }), " to your new list node. In either case, increment the list\u2019s size by one. Adding a node to the end of the list is completed in O(1) time."]
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
              color: "#6A737D"
            },
            children: "	# Add d to tail of list"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " add"
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
            children: ".tail:"
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
            children: ".tail.next_node "
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
    }), "\n", createVNode(_components.p, {
      children: ["Adding a node at a specific index in the list is a more complex operation. To do this, you need to iterate the list to find the ", createVNode(_components.code, {
        children: "current_node"
      }), " at the index you will be inserting the new data, as well as the ", createVNode(_components.code, {
        children: "previous"
      }), " node. Once you have these references, tie the previous node to the new node, and the new node to the rest of the list. In code, this would mean setting ", createVNode(_components.code, {
        children: "previous.next_node = new_node"
      }), " and ", createVNode(_components.code, {
        children: "new_node.next_node = current_node"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# Return True if d is in list, false otherwise"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " find"
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
            children: "		current_node "
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
              color: "#F97583"
            },
            children: "		while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "			if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " d:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "				return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " True"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			current_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.next_node"
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
            children: " False"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "removing-elements",
      children: "Removing elements"
    }), "\n", createVNode(_components.p, {
      children: ["Removing an element is fairly straightforward, though it may seem counterintuitive at first. You need two references: ", createVNode(_components.code, {
        children: "previous"
      }), ", the node ", createVNode(_components.strong, {
        children: "before"
      }), " the one you are deleting, and ", createVNode(_components.code, {
        children: "node"
      }), ", the one you are deleting. Once you have checked and found the ", createVNode(_components.code, {
        children: "data"
      }), " you need in ", createVNode(_components.code, {
        children: "node"
      }), ", simply set ", createVNode(_components.code, {
        children: "previous.next_node = node.next_node"
      }), ". This snippet of code reassigns the previous node from pointing to the node we are deleting to the node beyond it. In this way, the ", createVNode(_components.code, {
        children: "node"
      }), " we are deleting is not set as the ", createVNode(_components.code, {
        children: "next_node"
      }), " of any other node. Since nothing references it, it is as good as gone - Garbage collection will see that it gets deleted."]
    }), "\n", createVNode(_components.p, {
      children: ["Once you have the ", createVNode(_components.code, {
        children: "previous"
      }), " and ", createVNode(_components.code, {
        children: "node"
      }), " references, the remove operation has a time complexity of O(1)."]
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
              color: "#6A737D"
            },
            children: "	# Remove d; return True if successful, false otherwise"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " remove"
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
            children: "		previous_node "
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
              color: "#E1E4E8"
            },
            children: "		current_node "
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
              color: "#F97583"
            },
            children: "		while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "			if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " d:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "				if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " previous_node:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "					previous_node.next_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.next_node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "				else"
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
            children: "					self"
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
            children: " current_node.next_node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "				self"
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
            children: "				return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " True"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			previous_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			current_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.next_node"
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
            children: " False"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "finding-elements",
      children: "Finding elements"
    }), "\n", createVNode(_components.p, {
      children: ["Finding an element in your linked list is not as simple as jumping to the index you would like to access. The only way we can interact with the list is through the ", createVNode(_components.code, {
        children: "head"
      }), " node, ", createVNode(_components.code, {
        children: "tail"
      }), " node, and the links between them. The find operation will make use of a scratch variable, ", createVNode(_components.code, {
        children: "current_node"
      }), ", to keep track of which element of the list we are currently interacting with. To begin the find operation, set ", createVNode(_components.code, {
        children: "current_node = self.head"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Next, begin a loop. For each iteration, check if you found the data you are ", createVNode(_components.code, {
        children: "find"
      }), "ing. If you found it, great - return either ", createVNode(_components.code, {
        children: "True"
      }), ", the data, or the Node; what you return depends on how you plan to use the Linked List. If you did not find it, set ", createVNode(_components.code, {
        children: "current_node = current_node.next_node"
      }), ", and begin the next iteration. This assignment moves your ", createVNode(_components.code, {
        children: "current_node"
      }), " pointer onto the next list element, allowing you to perform your check on every item in the list."]
    }), "\n", createVNode(_components.p, {
      children: "The find operation has a time complexity of O(n)."
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
              color: "#6A737D"
            },
            children: "	# Return True if d is in list, false otherwise"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " find"
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
            children: "		current_node "
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
              color: "#F97583"
            },
            children: "		while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "			if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " d:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "				return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " True"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			current_node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " current_node.next_node"
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
            children: " False"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "testing",
      children: "Testing"
    }), "\n", createVNode(_components.p, {
      children: ["Typing ", createVNode(_components.code, {
        children: "python3"
      }), " on the command prompt will bring up an interactive shell in which you can interact with your new Linked List. Just make sure that you import it. If your linked list is stored in ", createVNode(_components.code, {
        children: "linked_list.py"
      }), ", then simply type ", createVNode(_components.code, {
        children: "from linked_list import LinkedList"
      }), ". Create a new LinkedList object with something like ", createVNode(_components.code, {
        children: "l = LinkedList()"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Personally, I find it tiresome to constantly run through all the methods to make sure they work and that a small change didn\u2019t break them. For this reason, I use python\u2019s ", createVNode(_components.code, {
        children: "unittest"
      }), " framework to run a series of tests over and over on my list until I get it right. You can use ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/LinkedList/test_linked_list.py",
        children: "the tests I wrote"
      }), " as a template if you want to get started with unit testing in Python. To run the tests, open a terminal and type ", createVNode(_components.code, {
        children: "python3 -m unittest test_linked_list.py"
      }), ". To run any files with the name prefix ", createVNode(_components.code, {
        children: "test_"
      }), ", type ", createVNode(_components.code, {
        children: "python3 -m unittest discover"
      }), " to automatically detect them."]
    }), "\n", createVNode(_components.h2, {
      id: "challenges",
      children: "Challenges"
    }), "\n", createVNode(_components.p, {
      children: "Up for a challenge? Given our completed LinkedList code, I have two more methods for you to try implementing:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "find_at(self, index):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Return the ", createVNode(_components.code, {
          children: "data"
        }), " found at ", createVNode(_components.code, {
          children: "index"
        }), ". If there is no ", createVNode(_components.code, {
          children: "Node"
        }), " at ", createVNode(_components.code, {
          children: "index"
        }), ", return ", createVNode(_components.code, {
          children: "None"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "remove_at(self, index):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Remove"
        }), " and return the ", createVNode(_components.code, {
          children: "data"
        }), " found at ", createVNode(_components.code, {
          children: "index"
        }), ". If there is no ", createVNode(_components.code, {
          children: "Node"
        }), " at ", createVNode(_components.code, {
          children: "index"
        }), ", return ", createVNode(_components.code, {
          children: "None"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "When you\u2019re done, leave a comment with a link to your completed challenges and any tests that go with them!"
    }), "\n", createVNode(_components.h2, {
      id: "full-source",
      children: "Full Source"
    }), "\n", createVNode(_components.p, {
      children: ["If you want to see all of the code for our finished LinkedList, ", createVNode(_components.a, {
        href: "https://github.com/pagekeysolutions/education/blob/master/LinkedList/linked_list.py",
        children: "check out the source"
      }), " on Github."]
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
const url = "src/content/post/blog/2017/linked-lists-in-python/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/linked-lists-in-python/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/linked-lists-in-python/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
