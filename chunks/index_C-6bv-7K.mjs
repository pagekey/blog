import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_L4PgzY7a.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Compile the Linux Kernel from Source",
  "publishDate": "2018-03-03T00:00:00.000Z",
  "image": "/blog/2018/linux-kernel-1.jpg",
  "author": "Steve Grice",
  "category": "Linux Kernel Series",
  "tags": ["linux", "tutorial"],
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-install-all-dependencies",
    "text": "1. Install all dependencies."
  }, {
    "depth": 2,
    "slug": "2-clone-the-source",
    "text": "2. Clone the source."
  }, {
    "depth": 2,
    "slug": "3-optional-determine-number-of-processors",
    "text": "3. Optional: Determine number of processors."
  }, {
    "depth": 2,
    "slug": "4-configure-the-kernel",
    "text": "4. Configure the kernel."
  }, {
    "depth": 2,
    "slug": "5-create-compressed-image",
    "text": "5. Create Compressed Image"
  }, {
    "depth": 2,
    "slug": "6-link-modules",
    "text": "6. Link Modules"
  }, {
    "depth": 2,
    "slug": "7-install-modules",
    "text": "7. Install Modules"
  }, {
    "depth": 2,
    "slug": "8-install-the-kernel",
    "text": "8. Install the kernel"
  }, {
    "depth": 2,
    "slug": "sources",
    "text": "Sources"
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
      children: "Linux is everywhere, and there are plenty of Linux distributions available providing great out-of-the-box features. But what happens when you need to make an intricate, low-level change to system functionality? What if you wanted to get into kernel development and start to understand one of the world\u2019s largest open source projects?"
    }), "\n", createVNode(_components.p, {
      children: "The first step to doing all of these things is compiling the Linux kernel from source. While it may seem tedious or trivial at first, this process will get you down in the weeds of the OS, allowing you to turn modules on or off, search for kernel features, and even examine (and if you\u2019re brave, tweak) the raw source code that runs everything on your Linux machine!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 1 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Part 1 - ", createVNode(_components.a, {
          href: "./linux-kernel-2/",
          children: "Part 2"
        }), " - ", createVNode(_components.a, {
          href: "./linux-kernel-3/",
          children: "Part 3"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "1-install-all-dependencies",
      children: "1. Install all dependencies."
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s jump right in. The code is nothing without the toolchain that compiles it! We\u2019ll make use of our handy package managers to get everything we need."
    }), "\n", createVNode(_components.p, {
      children: ["If you use ", createVNode(_components.code, {
        children: "apt-get"
      }), " (", createVNode(_components.strong, {
        children: "Debian / Ubuntu"
      }), "), use the following:"]
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build-essential"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you use ", createVNode(_components.code, {
        children: "yum"
      }), " (", createVNode(_components.strong, {
        children: "Centos, RHEL, etc."
      }), "):"]
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
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rpm-build"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " redhat-rpm-config"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " asciidoc"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " hmaccalc"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " perl-ExtUtils-Embed"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pesign"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " xmlto"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " audit-libs-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " binutils-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " elfutils-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " elfutils-libelf-devel"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ncurses-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " newt-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " numactl-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pciutils-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python-devel"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " zlib-devel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "2-clone-the-source",
      children: "2. Clone the source."
    }), "\n", createVNode(_components.p, {
      children: ["The absolute latest, bleeding edge version of the source is found on the Github account of Linus Torvalds himself, the mastermind behind Linux! You can check it out ", createVNode(_components.a, {
        href: "https://www.github.com/torvalds/linux",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "To clone this, find a place to keep it (your home area is fine) and type the following:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://www.github.com/torvalds/linux.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will create a clone in a ", createVNode(_components.code, {
        children: "linux"
      }), " folder wherever you ran the command. Make sure you have a steady connection - this may take a while!"]
    }), "\n", createVNode(_components.p, {
      children: ["If you have a spotty connection, or you\u2019re in a hurry, you can create a ", createVNode(_components.strong, {
        children: "shallow clone"
      }), ", which will clone only the ", createVNode(_components.strong, {
        children: "most recent commit"
      }), ", rather than the entire history:"]
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --depth"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://www.github.com/torvalds/linux.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "3-optional-determine-number-of-processors",
      children: "3. Optional: Determine number of processors."
    }), "\n", createVNode(_components.p, {
      children: "Building the kernel is a fairly labor intensive task for your computer. If you\u2019re not utilizing all of your processors, it will take much, much longer."
    }), "\n", createVNode(_components.p, {
      children: ["If you know how many CPUs your computer has, great. If not, examine the output of ", createVNode(_components.code, {
        children: "cat /proc/cpuinfo"
      }), ". Though you should verify this by examining the file yourself, the following command should give you the exact number of processors you have:"]
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
            children: "cat"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /proc/cpuinfo"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " grep"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " processor"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " wc"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -l"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Make note of this number - it will be important in the next few steps."
    }), "\n", createVNode(_components.h2, {
      id: "4-configure-the-kernel",
      children: "4. Configure the kernel."
    }), "\n", createVNode(_components.p, {
      children: "Even Linux geeks like to use a GUI once in a while! The menuconfig program will turn your terminal into a mini-windowing system, allowing you to select which parts of the kernel are included in your build. To begin, run the following:"
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
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " linux"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " menuconfig"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["While in this program, you can use your arrow keys and enter/space bar to navigate and select modules. Another helpful trick is to press the ", createVNode(_components.code, {
        children: "/"
      }), " key, which will allow you to search. As an example, type ", createVNode(_components.code, {
        children: "/HDMI"
      }), " to get information on HDMI drivers in the kernel."]
    }), "\n", createVNode(_components.p, {
      children: ["Once you have finished, select ", createVNode(_components.code, {
        children: "< Save >"
      }), " and press ", createVNode(_components.code, {
        children: "< Ok >"
      }), " to write to a ", createVNode(_components.code, {
        children: ".config"
      }), " file in that directory. After this, feel free to ", createVNode(_components.code, {
        children: "< Exit >"
      }), " the menu."]
    }), "\n", createVNode(_components.p, {
      children: ["Another option is to use the ", createVNode(_components.code, {
        children: "make config"
      }), " command, but this isn\u2019t recommended. It will use the command line to ask you a long series of questions, requiring you to manually verify almost every setting in the kernel."]
    }), "\n", createVNode(_components.h2, {
      id: "5-create-compressed-image",
      children: "5. Create Compressed Image"
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s time for the moment of truth (one of them, anyway). We\u2019re going to create bzImage, which stands for \u201CBig Zimage.\u201D Don\u2019t worry about what this means - just think of it as another step in the pipeline."
    }), "\n", createVNode(_components.p, {
      children: ["Remember the number of processors you found in step 3? Now\u2019s the time to use it. Run the following, where ", createVNode(_components.code, {
        children: "<NUMBER OF PROCESSORS>"
      }), " is your answer from Step 3:"]
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
            children: "make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " bzImage"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " NUMBER"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " OF"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " PROCESSORS"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "For example, if your computer has 4 processors, you would use:"
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
            children: "make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " bzImage"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -j4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This ", createVNode(_components.code, {
        children: "-j"
      }), " option specifies the ", createVNode(_components.strong, {
        children: "number of jobs"
      }), " to use when running the ", createVNode(_components.code, {
        children: "make"
      }), " command. By using (at least) one job for each processor, you will take better advantage of your CPU\u2019s resources and speed up the build process significantly."]
    }), "\n", createVNode(_components.p, {
      children: "While there is some debate over the exact jobs-to-processors ratio that provides the optimal performance, using a 1:1 ratio as a rule of thumb should work well enough getting started. Since the effectiveness of this may vary depending on what the job is, feel free to mess around with other numbers, benchmark results, and find what works best."
    }), "\n", createVNode(_components.p, {
      children: ["For the remainder of the article, we will assume 4 CPUs, hence ", createVNode(_components.code, {
        children: "-j4"
      }), ". Remember to change this if your system is different."]
    }), "\n", createVNode(_components.h2, {
      id: "6-link-modules",
      children: "6. Link Modules"
    }), "\n", createVNode(_components.p, {
      children: "For the next step, run the following command:"
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
            children: "make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " modules"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -j4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will link any modules marked as \u2018M\u2019 in ", createVNode(_components.code, {
        children: "make menuconfig"
      }), " to the kernel image created in the last step. Anything marked as \u2018Y\u2019 will already be included in that image."]
    }), "\n", createVNode(_components.h2, {
      id: "7-install-modules",
      children: "7. Install Modules"
    }), "\n", createVNode(_components.p, {
      children: ["Now we will install kernel modules in ", createVNode(_components.code, {
        children: "/lib/modules"
      }), ". This can be accomplished with the following:"]
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
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " modules_install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -j4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Note that we had to prefix the command with ", createVNode(_components.code, {
        children: "sudo"
      }), ". We need to perform this step as a superuser because it involves copying files to sensitive system locations that are often locked down."]
    }), "\n", createVNode(_components.h2, {
      id: "8-install-the-kernel",
      children: "8. Install the kernel"
    }), "\n", createVNode(_components.p, {
      children: ["Finally, we will install our kernel to ", createVNode(_components.code, {
        children: "/boot"
      }), ". Use:"]
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
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -j4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Congratulations, our kernel is built and present in ", createVNode(_components.code, {
        children: "/boot"
      }), "! The next step is to figure out how to boot into our kernel and see it in action."]
    }), "\n", createVNode(_components.p, {
      children: "Before we do anything, let\u2019s confirm which kernel we are using. In your home area, use the following to show the current kernel in use:"
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
            children: "uname"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -r"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You may want to write this down or redirect to a file for later comparison, but if you can remember it, more power to you!"
    }), "\n", createVNode(_components.p, {
      children: ["The kernel must now be configured in the system bootloader so that it will be used on the next restart. If you\u2019re using the ever-popular ", createVNode(_components.code, {
        children: "grub"
      }), ", you can use:"]
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
            children: " update-grub"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If all is well, a reboot should use the new kernel. Try it now, and confirm the new kernel is in use with ", createVNode(_components.code, {
        children: "uname -r"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Thanks for reading through - I hope you learned something! If you\u2019re hungry for more, read the ", createVNode(_components.a, {
        href: "./linux-kernel-2/",
        children: "next article"
      }), ", in which we will make some simple modifications to kernel source code."]
    }), "\n", createVNode(_components.p, {
      children: ["In an even ", createVNode(_components.a, {
        href: "./linux-kernel-3/",
        children: "later article"
      }), ", we\u2019ll be creating a basic kernel module."]
    }), "\n", createVNode(_components.h2, {
      id: "sources",
      children: "Sources"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://wiki.centos.org/HowTos/I_need_the_Kernel_Source",
          children: "https://wiki.centos.org/HowTos/I_need_the_Kernel_Source"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "ftp://ftp.wayne.edu/ldp/en/Kernel-HOWTO/ar01s10.html",
          children: "ftp://ftp.wayne.edu/ldp/en/Kernel-HOWTO/ar01s10.html"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://unix.stackexchange.com/questions/20864/what-happens-in-each-step-of-the-linux-kernel-building-process?newreg=4067157d2de24c1c99b0ab222a59366f",
          children: "https://unix.stackexchange.com/questions/20864/what-happens-in-each-step-of-the-linux-kernel-building-process?newreg=4067157d2de24c1c99b0ab222a59366f"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This post is Part 1 of a series on the Linux kernel."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Part 1 - ", createVNode(_components.a, {
          href: "./linux-kernel-2/",
          children: "Part 2"
        }), " - ", createVNode(_components.a, {
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
const url = "src/content/post/blog/2018/linux-kernel-1/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-1/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/linux-kernel-1/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
