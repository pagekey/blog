import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import 'clsx';

const __0___dmesg1_png__ = new Proxy({"src":"/_astro/dmesg1.CWs7awSt.png","width":563,"height":184,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/dmesg1.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/dmesg1.png");
							return target[name];
						}
					});

const __1___dmesg2_png__ = new Proxy({"src":"/_astro/dmesg2.Bv8i5Usk.png","width":570,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/dmesg2.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/dmesg2.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "Writing Your First Kernel Module",
  "publishDate": "2018-03-29T00:00:00.000Z",
  "image": "/blog/2018/linux-kernel-3.jpg",
  "author": "Steve Grice",
  "category": "Linux Kernel Series",
  "tags": ["linux", "tutorial"],
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "user-space-vs-kernel-space",
    "text": "User Space vs. Kernel space"
  }, {
    "depth": 2,
    "slug": "what-can-a-kernel-module-do",
    "text": "What can a kernel module do?"
  }, {
    "depth": 2,
    "slug": "setting-up-makefile",
    "text": "Setting Up: Makefile"
  }, {
    "depth": 2,
    "slug": "writing-the-module",
    "text": "Writing the Module"
  }, {
    "depth": 2,
    "slug": "installing-the-module",
    "text": "Installing the Module"
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
      "astro-image": "astro-image",
      code: "code",
      em: "em",
      h2: "h2",
      li: "li",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["So we\u2019ve already ", createVNode(_components.a, {
        href: "./linux-kernel-1/",
        children: "built the kernel from source"
      }), " and even ", createVNode(_components.a, {
        href: "./linux-kernel-2/",
        children: "modified the source code"
      }), ". While these were some pretty cool parlor tricks, isn\u2019t it about time we learned something useful?"]
    }), "\n", createVNode(_components.p, {
      children: ["Well, I can\u2019t promise ", createVNode(_components.em, {
        children: "that"
      }), ", but today we\u2019ll take a step in the right direction by building a Linux kernel module."]
    }), "\n", createVNode(_components.p, {
      children: ["The Linux kernel is structured so that you can add extended functionality without modifying the core source. These added ", createVNode(_components.em, {
        children: "modules"
      }), " can be linked in as the source is compiled or added dynamically. The one we write today will be inserted dynamically, adding itself and running without a system reboot."]
    }), "\n", createVNode(_components.p, {
      children: "While writing a kernel module is definitely safer than modifying the source, it can still mess up your system a lot more than a user space application, so proceed with caution."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 3 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.a, {
          href: "./linux-kernel-1/",
          children: "Part 1"
        }), " - ", createVNode(_components.a, {
          href: "./linux-kernel-2/",
          children: "Part 2"
        }), " - Part 3"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "user-space-vs-kernel-space",
      children: "User Space vs. Kernel space"
    }), "\n", createVNode(_components.p, {
      children: "Hold on - What was that last part about a safe space? Oh, you mean user space!"
    }), "\n", createVNode(_components.p, {
      children: "In the world of kernel developers, where wise old men tug their beards and discuss edgy topics like Round Robin scheduling and virtual memory schemes, there are but two paths that a budding programmer can follow - that of the User Space, and that of the Kernel Space. Choose wisely."
    }), "\n", createVNode(_components.p, {
      children: "User space applications cover most things that we think of for software development - these are your browsers, email clients, video games, web servers, and so forth. These applications are like the flashy skyscrapers in a big city; everyone knows and talks about them, but nobody seems to remember the infrastructure that supports them. Even a mighty tower must have a solid base."
    }), "\n", createVNode(_components.p, {
      children: "Kernel space code provides that foundation. It involves everything that makes the operating system run, hosting and providing an execution environment for all user applications. System calls, memory management, process management, scheduling, threading, device management, and much more are all handled in the kernel space. Much as the best bridges and roads are those that go unnoticed, a beautiful kernel handles everything under the hood seamlessly. You don\u2019t notice it\u2019s there\u2026 Until it breaks!"
    }), "\n", createVNode(_components.h2, {
      id: "what-can-a-kernel-module-do",
      children: "What can a kernel module do?"
    }), "\n", createVNode(_components.p, {
      children: "Not much if I\u2019m writing it."
    }), "\n", createVNode(_components.p, {
      children: "Jokes aside, kernel modules can be anything from a device driver to a new type of file system. It\u2019s one of the most practical ways to provide additional functionality to the kernel for a specific use case."
    }), "\n", createVNode(_components.h2, {
      id: "setting-up-makefile",
      children: "Setting Up: Makefile"
    }), "\n", createVNode(_components.p, {
      children: ["Enough talk. Let\u2019s get to work! The first thing we\u2019ll need in order to create our kernel module is a ", createVNode(_components.code, {
        children: "Makefile"
      }), ". If you\u2019re not familiar with ", createVNode(_components.code, {
        children: "make"
      }), ", it\u2019s a build tool that lets you automate redundant tasks like compilation, cleanup, and so forth. For very small projects, it may seem like nothing more than a convenience, but as your program become more complex, a good ", createVNode(_components.code, {
        children: "Makefile"
      }), " is essential."]
    }), "\n", createVNode(_components.p, {
      children: ["Ours will be fairly straightforward. Create a blank directory, ", createVNode(_components.code, {
        children: "cd"
      }), " to it, and open a new file named ", createVNode(_components.code, {
        children: "Makefile"
      }), " in your favorite text editor. Enter the following:"]
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
              color: "#E1E4E8"
            },
            children: "obj-m += hello-world.o"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "all"
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
            children: "  make -C /lib/modules/"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "shell"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " uname -r)"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/build M="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "PWD"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " modules"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "clean"
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
            children: "  make -C /lib/modules/"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "shell"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " uname -r)"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/build M="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "PWD"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " clean"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The first line uses the ", createVNode(_components.code, {
        children: "make"
      }), " Domain Specific Language (DSL) to append ", createVNode(_components.code, {
        children: "hello-world.o"
      }), " to the ", createVNode(_components.code, {
        children: "obj-m"
      }), " variable."]
    }), "\n", createVNode(_components.p, {
      children: "A few takeaways:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "obj-m"
        }), " is a variable referenced in another ", createVNode(_components.code, {
          children: "Makefile"
        }), ". You\u2019ll notice that the ", createVNode(_components.code, {
          children: "all"
        }), " and ", createVNode(_components.code, {
          children: "clean"
        }), " tasks both call ", createVNode(_components.code, {
          children: "make"
        }), " in the ", createVNode(_components.code, {
          children: "lib/modules/(kernel version here)/build"
        }), " directory. That\u2019s where the ", createVNode(_components.code, {
          children: "Makefile"
        }), " that is uses ", createVNode(_components.code, {
          children: "obj-m"
        }), " is."]
      }), "\n", createVNode(_components.li, {
        children: ["For all of your Bash enthusiasts out there, you\u2019ll recognize ", createVNode(_components.code, {
          children: "$()"
        }), ". Much like bash, this operator substitutes  the result of what executes between the parentheses into the file. It\u2019s important not to confuse this with the Bash or shell version of this, however. The code between the parentheses of ", createVNode(_components.code, {
          children: "$()"
        }), " in a ", createVNode(_components.code, {
          children: "Makefile"
        }), " ", createVNode(_components.em, {
          children: "must"
        }), " be written in the ", createVNode(_components.code, {
          children: "make"
        }), " DSL, not in bash/shell."]
      }), "\n", createVNode(_components.li, {
        children: ["Furthermore, ", createVNode(_components.code, {
          children: "shell"
        }), " is a ", createVNode(_components.code, {
          children: "make"
        }), " builtin that allows you to execute shell commands. (bash, ksh, csh, or whatever your heart desires in the way of shells)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "PWD"
        }), " is another ", createVNode(_components.code, {
          children: "make"
        }), " builtin that does exactly what the shell ", createVNode(_components.code, {
          children: "pwd"
        }), " (print working directory) does. In fact, replacing ", createVNode(_components.code, {
          children: "$(PWD)"
        }), " with ", createVNode(_components.code, {
          children: "$(shell pwd)"
        }), " would produce the exact same result. (Try it!)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Now that we\u2019ve laid the ground work, let\u2019s get to coding."
    }), "\n", createVNode(_components.h2, {
      id: "writing-the-module",
      children: "Writing the Module"
    }), "\n", createVNode(_components.p, {
      children: ["Edit ", createVNode(_components.code, {
        children: "hello-world.c"
      }), " and add the following code:"]
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
            children: "#include"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " <linux/module.h>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "#include"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " <linux/kernel.h>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " init_module"
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
            children: "  printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_INFO "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Hello world.'
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
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
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
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " cleanup_module"
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
            children: "  printk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(KERN_INFO "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Goodbye world.'
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
      children: ["Save this file, and type ", createVNode(_components.code, {
        children: "make"
      }), ". If all goes well and you see no errors, several files will be created in the current directory. The important one to notice is ", createVNode(_components.code, {
        children: "hello-world.ko"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["As a side note, if you\u2019re wondering why there is never a comma between ", createVNode(_components.code, {
        children: "KERN_INFO"
      }), " and your message in ", createVNode(_components.code, {
        children: "printk"
      }), ", it\u2019s because ", createVNode(_components.code, {
        children: "KERN_INFO"
      }), " is a macro. In fact, this and all other ", createVNode(_components.code, {
        children: "printk"
      }), " macros are defined in ", createVNode(_components.a, {
        href: "https://github.com/torvalds/linux/blob/master/include/linux/kern_levels.h",
        children: createVNode(_components.code, {
          children: "/include/linux/kern_levels.h"
        })
      }), " in the Linux source code."]
    }), "\n", createVNode(_components.h2, {
      id: "installing-the-module",
      children: "Installing the Module"
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s time to test out our hard work. While in the same directory, type:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " insmod"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " hello-world.ko"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If no errors are present, it must have worked. Verify this by typing ", createVNode(_components.code, {
        children: "dmesg"
      }), " to show kernel messages. In my case, it looked something like this:"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0___dmesg1_png__,
        alt: "dmesg with Hello"
      }), "\r\n", createVNode("figcaption", {
        children: "Who said that?"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["That worked well enough! Try out ", createVNode(_components.code, {
        children: "modinfo hello-world.ko"
      }), " to see some more generic information about the module you just made."]
    }), "\n", createVNode(_components.p, {
      children: ["Okay, that\u2019s enough fun for one day. Let\u2019s rip that thing back out of the kernel. Type: ", createVNode(_components.code, {
        children: "sudo rmmod hello-world.ko"
      }), " and check ", createVNode(_components.code, {
        children: "dmesg"
      }), " again:"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __1___dmesg2_png__,
        alt: "dmesg with Hello and Goodbye"
      }), "\r\n", createVNode("figcaption", {
        children: "You say goodbye\u2026 And I say hello."
      })]
    }), "\n", createVNode(_components.p, {
      children: "How beautiful! Our module\u2019s circle of life is complete. They sure do grow up fast."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "I sure hope this was a hootin\u2019 good time for you. We wrote our first kernel module, compiled it, and did a good old hot swap into the running kernel."
    }), "\n", createVNode(_components.p, {
      children: "All in all, we didn\u2019t break any records, but it was a good start to writing kernel modules. The future is bright for you, young kernalist. If you dare, you can attempt to write a device driver kernel module (see links below). I\u2019ll leave that up to you for now. Until then, keep coding."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sources & Other Useful Links:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.safaribooksonline.com/library/view/linux-device-drivers/0596005903/ch02.html",
          children: "Kernel Modules & Drivers as explained by O\u2019Reilly"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://stackoverflow.com/questions/38492059/why-doesnt-the-function-printk-use-a-comma-to-separate-parameters",
          children: ["Why you don\u2019t need a comma in ", createVNode(_components.code, {
            children: 'printk(KERN_INFO "message\\n")'
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.tldp.org/LDP/lkmpg/2.6/html/x245.html",
          children: "__init and __exit macros"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234",
          children: "Advanced: Creating a file in /dev"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.apriorit.com/dev-blog/195-simple-driver-for-linux-os",
          children: "Advanced: Write a device driver"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 3 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.a, {
          href: "./linux-kernel-1/",
          children: "Part 1"
        }), " - ", createVNode(_components.a, {
          href: "./linux-kernel-2/",
          children: "Part 2"
        }), " - Part 3"]
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
const url = "src/content/post/blog/2018/linux-kernel-3/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-3/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
