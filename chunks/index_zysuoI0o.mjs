import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_L4PgzY7a.mjs';
import 'clsx';

const __0___kernel_panic2_png__ = new Proxy({"src":"/_astro/kernel_panic2.BvTmmbw1.png","width":714,"height":393,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/kernel_panic2.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/kernel_panic2.png");
							return target[name];
						}
					});

const __1___syslog_success_png__ = new Proxy({"src":"/_astro/syslog-success.BmKQrhwx.png","width":1025,"height":758,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/syslog-success.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/syslog-success.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "Making Simple Modifications to the Linux Source",
  "publishDate": "2018-03-23T00:00:00.000Z",
  "image": "/blog/2018/linux-kernel-2.png",
  "author": "Steve Grice",
  "category": "Linux Kernel Series",
  "tags": ["linux", "tutorial"],
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisite",
    "text": "Prerequisite"
  }, {
    "depth": 2,
    "slug": "modifications",
    "text": "Modifications"
  }, {
    "depth": 3,
    "slug": "kernel-printing",
    "text": "Kernel printing"
  }, {
    "depth": 3,
    "slug": "entry-point",
    "text": "Entry Point"
  }, {
    "depth": 3,
    "slug": "first-attempt---panic",
    "text": "First Attempt - Panic!"
  }, {
    "depth": 3,
    "slug": "trying-again",
    "text": "Trying Again"
  }, {
    "depth": 3,
    "slug": "digging-in",
    "text": "Digging In"
  }, {
    "depth": 3,
    "slug": "the-fix-we-need",
    "text": "The Fix We Need"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping Up"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      code: "code",
      em: "em",
      h2: "h2",
      h3: "h3",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The Linux kernel is one of the most complex open-source projects available to the public, and the source code that comprises it is highly intricate, to say the least. Knowing this, I wondered what it would take to pick apart such a technological beast and actually begin to understand it. The key to understanding, like anything else, is to learn by doing. The ", createVNode(_components.a, {
        href: "https://github.com/torvalds/linux",
        children: "entire source repository"
      }), " is available to view in a browser, and more than 95% of it is written in C. How hard could it be to write a little C code?"]
    }), "\n", createVNode(_components.p, {
      children: "As it turns out, it\u2019s harder than expected. Keep reading to get the full rundown on how I edited the kernel source,  built it, broke it (several times), and finally made a simple change that produced an output in the system logs."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 2 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.a, {
          href: "./linux-kernel-1/",
          children: "Part 1"
        }), " - Part 2 - ", createVNode(_components.a, {
          href: "./linux-kernel-3/",
          children: "Part 3"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "prerequisite",
      children: "Prerequisite"
    }), "\n", createVNode(_components.p, {
      children: ["Before we start, you may want to check out how to ", createVNode(_components.a, {
        href: "./linux-kernel-1/",
        children: "build the kernel"
      }), ". This will allow you to make the same modifications that I do as the article progresses and to eventually make your own changes."]
    }), "\n", createVNode(_components.h2, {
      id: "modifications",
      children: "Modifications"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s get our hands dirty. Today, our goal will be to add a snippet of code that does some math for us and prints several lines to the system log using ", createVNode(_components.code, {
        children: "printk"
      }), ". The snippet we will be using is as follows:"]
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
            children: "printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello this is Steve calling, I'm currently trapped in your kernel."`
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
            children: "printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello, yep, it's me here."`
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
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " math "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ans;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (i "
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
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
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
              color: "#E1E4E8"
            },
            children: "    ans "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " math "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "		printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"The value of math + i is '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%i"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ans);"
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
    }), "\n", createVNode(_components.h3, {
      id: "kernel-printing",
      children: "Kernel printing"
    }), "\n", createVNode(_components.p, {
      children: ["Note that the above code makes use of the ", createVNode(_components.code, {
        children: "printkern"
      }), " function. This is the function that prints to the system log, which can be viewed using the ", createVNode(_components.code, {
        children: "dmesg"
      }), " command. On some Linux distributions, these messages can also be found in the ", createVNode(_components.code, {
        children: "/var/log/messages"
      }), " file; for some others, the command ", createVNode(_components.code, {
        children: "journalctl"
      }), " does the trick. When in doubt, though, just opt for ", createVNode(_components.code, {
        children: "dmesg"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "entry-point",
      children: "Entry Point"
    }), "\n", createVNode(_components.p, {
      children: ["A quick Google search told me that the kernel entry point is located in ", createVNode(_components.code, {
        children: "init/main.c"
      }), ". This fascinated me - I hoped that at least knowing where execution began would allow me to slowly unravel the kernel source code. I also (perhaps naively) thought it would be easy to make changes here, in one of the most important parts of the kernel."]
    }), "\n", createVNode(_components.p, {
      children: ["Reading through the source led me to believe that the true start of execution was in the ", createVNode(_components.code, {
        children: "static int kernel_init(void)"
      }), " function."]
    }), "\n", createVNode(_components.h3, {
      id: "first-attempt---panic",
      children: "First Attempt - Panic!"
    }), "\n", createVNode(_components.p, {
      children: "I want to include an analogy before we begin. Modifying a project of this magnitude without knowing anything about it is something like doing heart surgery with a shovel. With that said, let\u2019s continue."
    }), "\n", createVNode(_components.p, {
      children: ["My first thought for how to go about this was to find the kernel entry point, insert my code at the beginning of the function, and ", createVNode(_components.code, {
        children: "return"
      }), ". The code looked something like this:"]
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
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " __ref "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "kernel_init"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "unused"
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
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "	printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello this is Steve calling, I'm currently trapped in your kernel."`
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
              color: "#6A737D"
            },
            children: "	// The rest of our snippet ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ret;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	// The rest of the function, never to be executed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	..."
          })
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
      children: "My expectation was that when the machine booted, it would display my messages and stop all execution, leaving my text up for the world to see. The result was a little bit different\u2026 It caused a kernel panic!"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0___kernel_panic2_png__,
        alt: "Screenshot of Kernel Panic"
      }), "\r\n", createVNode("figcaption", {
        children: "Panic! At The Kernel"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["At this point, I realized that the ", createVNode(_components.code, {
        children: "kernel_init"
      }), " function ", createVNode(_components.em, {
        children: "may"
      }), " do something important, and that cutting it off and returning before the first line may not have been the best strategy. Go figure!"]
    }), "\n", createVNode(_components.h3, {
      id: "trying-again",
      children: "Trying Again"
    }), "\n", createVNode(_components.p, {
      children: "My next attempt involved moving the print statement to the end of the function, where (hopefully) all of the important setup tasks would have already been completed."
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
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " __ref "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "kernel_init"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "unused"
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
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "	// Important code..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	..."
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
            children: " (ramdisk_execute_command) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			ret "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " run_init_process"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(ramdisk_execute_command);"
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
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "ret)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "					return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "			pr_err"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Failed to execute '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " (error "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%d"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "						 ramdisk_execute_command, ret);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "	printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello this is Steve calling, I'm currently trapped in your kernel."`
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
              color: "#6A737D"
            },
            children: "	// The rest of our snippet"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	..."
          })
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
      children: "This time, building the kernel succeeded (albeit with a warning due to my sloppy coding skills) and the system booted without crashing. Even so, I couldn\u2019t help but be disappointed when I checked the logs."
    }), "\n", createVNode(_components.p, {
      children: "While there was no crash, our message still didn\u2019t show up in the logs. Something was still wrong. My only guess was that our snippet started trying to print things before anything was ready to record them. So, I started to follow the spaghetti\u2026"
    }), "\n", createVNode(_components.h3, {
      id: "digging-in",
      children: "Digging In"
    }), "\n", createVNode(_components.p, {
      children: ["I needed to find a place where ", createVNode(_components.code, {
        children: "printk"
      }), " would work."]
    }), "\n", createVNode(_components.p, {
      children: ["I started by following the method called in ", createVNode(_components.code, {
        children: "kernel_init"
      }), " in hopes of understanding the line of execution. This was made easier with a ", createVNode(_components.a, {
        href: "https://elixir.bootlin.com/linux/latest/source/",
        children: "handy tool"
      }), " I stumbled across for browsing the kernel source. I started by looking up ", createVNode(_components.code, {
        children: "run_init_process (init/main.c)"
      }), ", then ", createVNode(_components.code, {
        children: "do_execve (fs/exec.c)"
      }), ", then ", createVNode(_components.code, {
        children: "do_execveat_common (fs/exec.c)"
      }), "\u2026"]
    }), "\n", createVNode(_components.p, {
      children: "It didn\u2019t take long for me to realize I was in over my head. I needed a different strategy than trying to read the source like a book."
    }), "\n", createVNode(_components.h3, {
      id: "the-fix-we-need",
      children: "The Fix We Need"
    }), "\n", createVNode(_components.p, {
      children: ["I decided to check where some of the other messages in ", createVNode(_components.code, {
        children: "dmesg"
      }), " were being outputted. In the system log screenshot shown above, the second message is ", createVNode(_components.code, {
        children: "Command line: BOOT_IMAGE=..."
      }), ". So, I searched the source for that line:"]
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
            children: 'grep printk * -r | grep "Command line"'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This almost immediately yielded some files in the ", createVNode(_components.code, {
        children: "arch"
      }), " directory. At first, I just edited the first file that came up (", createVNode(_components.code, {
        children: "arch/alpha/kernel/setup.c"
      }), "), but this didn\u2019t work. ", createVNode(_components.code, {
        children: "arch"
      }), " is short for architecture, meaning that I would have to edit the source for the architecture of my target system. In my case, this was ", createVNode(_components.code, {
        children: "arch/x86/kernel/setup.c"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "I found the relevant line in this file, and inserted our code snippet below it:"
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
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "#else"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_INFO "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Command line: '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", boot_command_line);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Here goes nothing!!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello this is Steve calling, I'm currently trapped in your kernel."`
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
            children: "    printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: `"Hello, yep, it's me here."`
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
            children: "    int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " math "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ans;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (i "
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
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
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
              color: "#E1E4E8"
            },
            children: "        ans "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " math "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    		printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_DEBUG "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"The value of math + i is '
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%i"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ans);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "#endif"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After inserting the code, I performed another quick kernel build, and\u2026"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __1___syslog_success_png__,
        alt: "System Logs with our messages"
      }), "\r\n", createVNode("figcaption", {
        children: "We made it!"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Success! The kernel logs finally showed our beloved homemade debug messages. With this, we successfully added our own code to the kernel and verified that it executed."
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping Up"
    }), "\n", createVNode(_components.p, {
      children: "Though it took a few botched attempts and shots in the dark, I was finally able to inject custom code into the kernel and verify that it executed. While it\u2019s a colossal monster of a project, you can scratch the surface of the Linux kernel source if you know where to look! There were a few blunders along the way, but by correcting these mistakes, I learned a lot and accomplished my original goal. I would encourage you to do the same. Continue to tinker where we left off, and see what you can learn!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 2 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.a, {
          href: "./linux-kernel-1/",
          children: "Part 1"
        }), " - Part 2 - ", createVNode(_components.a, {
          href: "./linux-kernel-3/",
          children: "Part 3"
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
const url = "src/content/post/blog/2018/linux-kernel-2/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-2/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
