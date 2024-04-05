import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const __0___buckets_uniform_png__ = new Proxy({"src":"/_astro/buckets_uniform.PmSsNftY.png","width":990,"height":574,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/buckets_uniform.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/buckets_uniform.png");
							return target[name];
						}
					});

const __1___buckets_nonuniform_png__ = new Proxy({"src":"/_astro/buckets_nonuniform.CjWz8VLo.png","width":993,"height":271,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/buckets_nonuniform.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/buckets_nonuniform.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "How to Implement a Hash Table in Python",
  "publishDate": "2017-11-24T00:00:00.000Z",
  "image": "/blog/2017/hash-table-python.jpg",
  "author": "Steve Grice",
  "category": "Data Structures & Algorithms",
  "tags": ["python", "tutorial"],
  "readingTime": 9
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "the-basics",
    "text": "The Basics"
  }, {
    "depth": 2,
    "slug": "fields",
    "text": "Fields"
  }, {
    "depth": 2,
    "slug": "hashtable-node",
    "text": "HashTable Node"
  }, {
    "depth": 2,
    "slug": "collisions",
    "text": "Collisions"
  }, {
    "depth": 2,
    "slug": "methods",
    "text": "Methods"
  }, {
    "depth": 3,
    "slug": "hash",
    "text": "Hash"
  }, {
    "depth": 3,
    "slug": "insert",
    "text": "Insert"
  }, {
    "depth": 3,
    "slug": "find",
    "text": "Find"
  }, {
    "depth": 3,
    "slug": "remove",
    "text": "Remove"
  }, {
    "depth": 2,
    "slug": "applications",
    "text": "Applications"
  }, {
    "depth": 2,
    "slug": "source",
    "text": "Source"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      code: "code",
      h2: "h2",
      h3: "h3",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This tutorial will show you how to implement a hash table with ", createVNode(_components.strong, {
        children: "separate chaining"
      }), ". It\u2019s not the most efficient method, but it is the simplest way to get started and create a fully functioning hash table."]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "zHi5v78W1f0"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Hash tables are indispensable tools for solving a wide assortment for so many interesting programming problems. I always love to incorporate a hash table into a problem; they can provide a clean solution to an issue that would be a mess otherwise."
    }), "\n", createVNode(_components.p, {
      children: ["For the longest time, I wondered how hash tables were created. I wanted to make my own, but I had no clue as to how they worked. Luckily, I found ", createVNode(_components.a, {
        href: "https://github.com/jamesroutley/write-a-hash-table",
        children: "James Routley\u2019s awesome post"
      }), " detailing how to implement one in C. For anyone interested, I highly recommend it."]
    }), "\n", createVNode(_components.p, {
      children: "Using this knowledge, I ported the hash table to Python. By the end of this tutorial, you will understand the basic ideas behind the hash table. Perhaps more importantly,  you will have implemented your very own!"
    }), "\n", createVNode(_components.h2, {
      id: "the-basics",
      children: "The Basics"
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019ve ever used a dictionary in Python or an associative array in a language like PHP, You\u2019ve probably used a hash table before. Features such as the dictionary in Python or the associative array in PHP are often implemented using a hash table. Even more straightforward is the HashTable class available in Java."
    }), "\n", createVNode(_components.p, {
      children: ["Why would we need such a structure? Well, sometimes a flat area just isn\u2019t enough. To make sense of the problem at hand, you may need to store and access your data by a ", createVNode(_components.strong, {
        children: "key"
      }), ", a definite step up from the rudimentary integer index provided by flat arrays."]
    }), "\n", createVNode(_components.p, {
      children: "The hash table we build will be used like this:"
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
            children: "# Create a new HashTable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "ht "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " HashTable()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Create some data to be stored"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "phone_numbers "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"555-555-5555"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"444-444-4444"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: '# Insert our data under the key "phoneDirectory"'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "ht.insert("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"phoneDirectory"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", phone_numbers)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Do whatever we need with the phone_numbers variable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "phone_numbers "
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
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " # Later on..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Retrieve the data we stored in the HashTable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "phone_numbers "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ht.find("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"phoneDirectory"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# find() retrieved our list object"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: '# phone_numbers is now equal to ["555-555-5555", "444-444-4444"]'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["How does this really work under the hood? As it turns out, your key (", createVNode(_components.code, {
        children: "phoneDirectory"
      }), " in this example) is converted into an index. This index is used for storing and retrieving the data value from the hash table\u2019s internal array. All those messy details are hidden from the user - they just have to worry about ", createVNode(_components.code, {
        children: "insert()"
      }), ", ", createVNode(_components.code, {
        children: "find()"
      }), ", and ", createVNode(_components.code, {
        children: "remove()"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "fields",
      children: "Fields"
    }), "\n", createVNode(_components.p, {
      children: ["Our hash table will need a few fields to keep it together. It needs a ", createVNode(_components.code, {
        children: "size"
      }), ", which will be the number of elements that have been inserted. It needs a ", createVNode(_components.code, {
        children: "capacity"
      }), ", which will determine the size of our internal array. Last, it needs ", createVNode(_components.code, {
        children: "buckets"
      }), " - this is the internal array, storing each inserted value in a \u201Cbucket\u201D based on the provided key."]
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
            children: " HashTable"
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
            children: ".capacity "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " INITIAL_CAPACITY"
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
            children: ".buckets "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".capacity"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Note the ", createVNode(_components.code, {
        children: "INITIAL_CAPACITY"
      }), " variable, arbitrarily set to 50 in my example class. This defines the size of our internal array. In a more complex hash table implementation (i.e. an open-addressed, double-hashed hash table), it\u2019s important that the capacity is prime, and that it can be changed. On the other hand, our separate chaining hash table sets the capacity once and never changes it, regardless of how many elements are stored. This is good for simplicity, but bad for scalability."]
    }), "\n", createVNode(_components.h2, {
      id: "hashtable-node",
      children: "HashTable Node"
    }), "\n", createVNode(_components.p, {
      children: "If you thought you were getting a break from the internal Node structure, you were wrong! Our hash table will need its own version of a Node:"
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
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " __init__"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, key, value):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".key "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " key"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".next "
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Look familiar? Node has a ", createVNode(_components.code, {
        children: "next"
      }), " field because it\u2019s actually part of a ", createVNode(_components.a, {
        href: "../linked-lists-in-python/index.md",
        children: "LinkedList"
      }), ". Because the hash table uses ", createVNode(_components.strong, {
        children: "separate chaining"
      }), ", each bucket will actually contain a LinkedList of nodes containing the objects stored at that index. This is one method of ", createVNode(_components.strong, {
        children: "collision resolution."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "collisions",
      children: "Collisions"
    }), "\n", createVNode(_components.p, {
      children: "Whenever two keys have the same hash value, it is considered a collision. What should our hash table do? If it just wrote the data into the location anyway, we would be losing the object that is already stored under a different key."
    }), "\n", createVNode(_components.p, {
      children: ["With separate chaining, we create a Linked List at each index of our ", createVNode(_components.code, {
        children: "buckets"
      }), " array, containing all keys for a given index. When we need to look up one of those items, we iterate the list until we find the Node matching the requested key."]
    }), "\n", createVNode(_components.p, {
      children: "There are other, far more efficient ways of handling collisions, but separate chaining is likely the simplest method."
    }), "\n", createVNode(_components.h2, {
      id: "methods",
      children: "Methods"
    }), "\n", createVNode(_components.p, {
      children: "Now we can really get started. Let\u2019s jump into our hash table\u2019s methods."
    }), "\n", createVNode(_components.h3, {
      id: "hash",
      children: "Hash"
    }), "\n", createVNode(_components.p, {
      children: ["Our hash method needs to take our key, which will be a string of any length, and produce an index for our internal ", createVNode(_components.code, {
        children: "buckets"
      }), " array."]
    }), "\n", createVNode(_components.p, {
      children: ["We will be creating a hash function to convert the string to an index. There are many properties of a good hash function, but for our purposes the most important characteristic for our function to have is ", createVNode(_components.strong, {
        children: "uniformity"
      }), ". We want our hash values to be as evenly distributed among our buckets as possible, to take full advantage of each bucket and avoid collisions. The ideal case is pictured below:"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0___buckets_uniform_png__,
        alt: "Uniform Bucket Distribution (good)"
      }), "\r\n", createVNode("figcaption", {
        children: "HashTable Buckets with Uniform Distribution (good)"
      })]
    }), "\n", createVNode(_components.p, {
      children: "On the other hand, an uneven distribution will defeat the purpose of the hash table altogether, yielding nothing more than a bloated LinkedList."
    }), "\n", createVNode(_components.p, {
      children: ["Consider an extreme case: Our hash function will be ", createVNode(_components.code, {
        children: "h(x) = 1"
      }), ". That\u2019s right, each input produces the same constant value. So, what happens? Every time we hash a key, the output is 1, meaning that we assign that node to bucket 1. The result would look something like this:"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __1___buckets_nonuniform_png__,
        alt: "Non-Uniform Bucket Distribution (bad)"
      }), "\r\n", createVNode("figcaption", {
        children: "HashTable Buckets with Non-Uniform Distribution (bad)"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Not pretty! We\u2019ll just have to make sure we avoid this bottleneck at all costs."
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s the code for our hash function:"
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
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " hash"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, key):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	hashsum "
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# For each character in the key"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " idx, c "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " enumerate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Add (index + length of key) ^ (current char code)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		hashsum "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (idx "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " ord"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(c)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Perform modulus to keep hashsum in range [0, self.capacity - 1]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		hashsum "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " hashsum "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".capacity"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " hashsum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "While fairly arbitrary, this function will provide an acceptable degree of uniformity for our purposes."
    }), "\n", createVNode(_components.h3, {
      id: "insert",
      children: "Insert"
    }), "\n", createVNode(_components.p, {
      children: "To insert a key/value pair into our hash table, we will follow these steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Increment size of hash table."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Compute ", createVNode(_components.code, {
            children: "index"
          }), " of key using hash function."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["If the bucket at ", createVNode(_components.code, {
            children: "index"
          }), " is empty, create a new node and add it there."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Otherwise, a collision occurred: there is already a linked list of at least one node at this index. Iterate to the end of the list and add a new node there."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is reflected in the following code:"
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
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " insert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, key, value):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 1. Increment size"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "	self"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 2. Compute index of key"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	index "
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
            children: ".hash(key)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# Go to the node corresponding to the hash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	node "
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
            children: ".buckets[index]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 3. If bucket is empty:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Create node, add it, return"
          })
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
            children: ".buckets[index] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Node(key, value)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		return"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 4. Collision! Iterate to the end of the linked list at provided index"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	prev "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " not"
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
              color: "#E1E4E8"
            },
            children: "		prev "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node.next"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# Add a new node at the end of the list with provided key/value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	prev.next "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Node(key, value)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "find",
      children: "Find"
    }), "\n", createVNode(_components.p, {
      children: "After storing data in our hash table, we will surely need to retrieve it at some point. To do this, we\u2019ll perform the following steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Compute the ", createVNode(_components.code, {
            children: "index"
          }), " for the provided key using the hash function."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Go to the bucket for that ", createVNode(_components.code, {
            children: "index"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Iterate the nodes in that linked list until the key is found, or the end of the list is reached."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Return the value of the found node, or None if not found."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This idea would be expressed in code like this:"
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
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, key):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 1. Compute hash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	index "
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
            children: ".hash(key)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 2. Go to first node in list at bucket"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	node "
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
            children: ".buckets[index]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 3. Traverse the linked list at this node"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node.key "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " key:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node.next"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 4. Now, node is the requested key/value pair or None"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Not found"
          })
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
            children: " None"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Found - return the data value"
          })
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
            children: " node.value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "remove",
      children: "Remove"
    }), "\n", createVNode(_components.p, {
      children: "Removing an element from a hash table is similar to removing an element from a linked list. This method will return the data value removed, or None if the requested node was not found."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Compute hash for the key to determine ", createVNode(_components.code, {
            children: "index"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Iterate linked list of nodes. Continue until end of list or until key is found."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "If the key is not found, return None."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Otherwise, remove the node from the linked list and return the node value."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This would be reflected in code as such:"
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
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, key):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 1. Compute hash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	index "
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
            children: ".hash(key)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	node "
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
            children: ".buckets[index]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	prev "
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# 2. Iterate to the requested node"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node.key "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " key:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		prev "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "		node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node.next"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	# Now, node is either the requested node or none"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " node "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# 3. Key not found"
          })
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
            children: " None"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# 4. The key was found."
          })
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
              color: "#E1E4E8"
            },
            children: " node.value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Delete this element in linked list"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " prev "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
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
              color: "#E1E4E8"
            },
            children: "			node "
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
              color: "#E1E4E8"
            },
            children: "			prev.next "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " prev.next.next"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "		# Return the deleted language"
          })
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
    }), "\n", createVNode(_components.p, {
      children: ["For more information about removing a node from a linked list, see my ", createVNode(_components.a, {
        href: "../linked-lists-in-python/index.md",
        children: "LinkedList article"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "applications",
      children: "Applications"
    }), "\n", createVNode(_components.p, {
      children: "Hash tables can be useful in a wide variety of computer science applications. Once you learn how to use them, you won\u2019t be able to stop! It seems at every turn there is a new application for the hash table."
    }), "\n", createVNode(_components.p, {
      children: "Below are a few problems you can attempt to solve using your new hash table:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Write a function to determine whether a string contains repeated characters."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Given a string of any length, find the most-used character in the string."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Write a function to determine whether two strings are anagrams."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", createVNode(_components.p, {
      children: "Thank you for reading. Check out the full source code for what we did today below!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/HashTable/hashtable.py",
          children: "Full HashTable source code"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/education/blob/master/HashTable/test_hashtable.py",
          children: "HashTable test code"
        })
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
const url = "src/content/post/blog/2017/hash-table-python/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2017/hash-table-python/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
