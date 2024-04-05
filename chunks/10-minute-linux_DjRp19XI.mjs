import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "10 Minute Linux Crash Course - Everything You Need to Get Started Now",
  "publishDate": "2020-11-30T00:00:00.000Z",
  "author": "Steve Grice",
  "tags": ["linux"],
  "readingTime": 8
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "making-moves-navigating-the-system",
    "text": "Making Moves (Navigating the System)"
  }, {
    "depth": 3,
    "slug": "ls",
    "text": "ls"
  }, {
    "depth": 3,
    "slug": "cd",
    "text": "cd"
  }, {
    "depth": 3,
    "slug": "pwd",
    "text": "pwd"
  }, {
    "depth": 3,
    "slug": "relative-paths",
    "text": "Relative Paths"
  }, {
    "depth": 2,
    "slug": "get-organized-file-manipulation",
    "text": "Get Organized! (File Manipulation)"
  }, {
    "depth": 3,
    "slug": "cat",
    "text": "cat"
  }, {
    "depth": 3,
    "slug": "touch",
    "text": "touch"
  }, {
    "depth": 3,
    "slug": "mkdir",
    "text": "mkdir"
  }, {
    "depth": 3,
    "slug": "rmdir",
    "text": "rmdir"
  }, {
    "depth": 3,
    "slug": "mv",
    "text": "mv"
  }, {
    "depth": 3,
    "slug": "rm",
    "text": "rm"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap Up"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
      children: "Some of us grew up clicking around in MS Paint on Windows. Others may enjoyed the luxurious interface afforded by Mac OS. Still others may have been stuck with nothing more than a cell phone, or even just a TI-84 calculator."
    }), "\n", createVNode(_components.p, {
      children: "Regardless of your humble beginnings, I want to congratulate you on taking things to the next level by jumping headfirst into the world of Linux. Whatever your reason for dipping your toes in these waters, I\u2019m sure you won\u2019t regret it! Anyone involved with computers will almost certainly encounter Linux at some point in their career, so now is the time for you to get ahead of things and figure out how to use the dang thing!"
    }), "\n", createVNode(_components.p, {
      children: "All you\u2019ll need is a little patience and about 10 minutes to get started! Read on."
    }), "\n", createVNode(_components.p, {
      children: "Disclaimer: the video is 10 minutes, but the article may be a bit more verbose. :)"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "XKvmgtOidYU"
    }), "\n", createVNode(_components.h2, {
      id: "making-moves-navigating-the-system",
      children: "Making Moves (Navigating the System)"
    }), "\n", createVNode(_components.p, {
      children: "One of the first things you need to know how to do when you\u2019re learning to use the computer is how to move around. For Windows or Mac, everything is graphical. Some Linux distributions have a Graphical User Interface (GUI) as well, but Real Linux happens on the command line. From now on, we\u2019re throwing off the GUI security blanket and diving straight into the command-line!"
    }), "\n", createVNode(_components.h3, {
      id: "ls",
      children: createVNode(_components.code, {
        children: "ls"
      })
    }), "\n", createVNode(_components.p, {
      children: ["By far, the most common command on Linux is ", createVNode(_components.code, {
        children: "ls"
      }), ", which ", createVNode(_components.code, {
        children: "l"
      }), "i", createVNode(_components.code, {
        children: "s"
      }), "ts the files in the current directory. Instead of opening a window and seeing a folder\u2019s files there, you\u2019ll instead be in a terminal window whose ", createVNode(_components.em, {
        children: "current working directory"
      }), " is set to some folder on your hard drive. ", createVNode(_components.code, {
        children: "ls"
      }), " shows you everything in that folder."]
    }), "\n", createVNode(_components.p, {
      children: ["Here is an example of what using ", createVNode(_components.code, {
        children: "ls"
      }), " may look like:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  file2.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  image.jpg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above, you can see that we typed ", createVNode(_components.code, {
        children: "ls"
      }), " and hit enter, showing the contents of our current folder. As it turns out, the folder contains three files: ", createVNode(_components.code, {
        children: "file1.txt"
      }), ", ", createVNode(_components.code, {
        children: "file2.txt"
      }), ", and ", createVNode(_components.code, {
        children: "image.jpg"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ls"
      }), " command on its own hides files that start with a \u201C", createVNode(_components.code, {
        children: "."
      }), "\u201D. To really see ", createVNode(_components.strong, {
        children: "all"
      }), " the files, you can use ", createVNode(_components.code, {
        children: "ls -a"
      }), ":"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  .."
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  file2.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  image.jpg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can view extra information about the files with the ", createVNode(_components.strong, {
        children: "long"
      }), " version of the command, ", createVNode(_components.code, {
        children: "ls -l"
      }), ":"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -l"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "total"
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
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file1.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file2.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " image.jpg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can use them together with ", createVNode(_components.code, {
        children: "ls -al"
      }), " (or ", createVNode(_components.code, {
        children: "ls -la"
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -al"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "total"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  2"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4096"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4096"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 12:38"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file1.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file2.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " steve"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Nov"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 28"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 14:11"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " image.jpg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "cd",
      children: createVNode(_components.code, {
        children: "cd"
      })
    }), "\n", createVNode(_components.p, {
      children: "What if there\u2019s nothing in this folder that we\u2019re particularly interested in? Are we out of luck?"
    }), "\n", createVNode(_components.p, {
      children: ["No! The ", createVNode(_components.code, {
        children: "cd"
      }), " command, or ", createVNode(_components.strong, {
        children: "current directory"
      }), ", will come to the rescue! We use this command to change the current working directory to somewhere else on the system."]
    }), "\n", createVNode(_components.p, {
      children: "For example, say I need a break from work. In that case, I\u2019ll head over to my games folder:"
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
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home/steve/games"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "cod.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  minecraft.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you can see, typing ", createVNode(_components.code, {
        children: "ls"
      }), " again now shows the files inside the ", createVNode(_components.strong, {
        children: "games"
      }), " folder in my home directory. If the path ", createVNode(_components.code, {
        children: "/home/steve/does_not_exist"
      }), " isn\u2019t a real folder on your computer, you\u2019ll get an error:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home/steve/does_not_exist"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "-bash:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home/steve/does_not_exist:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " No"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " such"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Notice how the path above begins with a slash (\u201C", createVNode(_components.code, {
        children: "/"
      }), "\u201D). When you see this in Linux, it\u2019s called an ", createVNode(_components.strong, {
        children: "absolute path"
      }), ". This means that you\u2019re giving the ", createVNode(_components.em, {
        children: "exact"
      }), " path to a file or folder on your system. The alternative is to use a ", createVNode(_components.strong, {
        children: "relative path"
      }), ", which we\u2019ll talk about below."]
    }), "\n", createVNode(_components.h3, {
      id: "pwd",
      children: createVNode(_components.code, {
        children: "pwd"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In case you get completely turned around, you can use the ", createVNode(_components.code, {
        children: "pwd"
      }), " command, or ", createVNode(_components.strong, {
        children: "print working directory"
      }), ", to tell you exactly where you are on the computer."]
    }), "\n", createVNode(_components.p, {
      children: ["After running the ", createVNode(_components.code, {
        children: "cd"
      }), " command in the above example, this is the output of the ", createVNode(_components.code, {
        children: "pwd"
      }), " command:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home/steve/games"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home/steve/games"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "relative-paths",
      children: "Relative Paths"
    }), "\n", createVNode(_components.p, {
      children: ["There are two special directories you\u2019ll want to worry about: ", createVNode(_components.code, {
        children: "."
      }), " and ", createVNode(_components.code, {
        children: ".."
      }), ". Yes, you read that right - they\u2019re called \u201Cdot\u201D and \u201Cdot dot\u201D. What the heck does that mean?"]
    }), "\n", createVNode(_components.p, {
      children: ["The single dot, ", createVNode(_components.code, {
        children: "."
      }), ", stands for the ", createVNode(_components.strong, {
        children: "current directory"
      }), ". The double dot, ", createVNode(_components.code, {
        children: ".."
      }), ", stands for the ", createVNode(_components.strong, {
        children: "parent directory"
      }), ". Anything that uses one of these two special folders, or that does not begin with a slash, is considered a ", createVNode(_components.strong, {
        children: "relative path"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Say that we\u2019re back in my ", createVNode(_components.code, {
        children: "games"
      }), " folder, and I want to move up a folder into the ", createVNode(_components.code, {
        children: "/home/steve"
      }), " directory. One way to do this would be to type the whole path in the command, as ", createVNode(_components.code, {
        children: "cd /home/steve"
      }), ". However, you might as well save your fingers some work! Just type ", createVNode(_components.code, {
        children: "cd .."
      }), " and it will do the same job."]
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
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home/steve/games"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:~$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home/steve"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:~$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:~$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " games"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home/steve/games"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "It may not seem like a big deal, but paths can get quite long. When you\u2019re 20 folders deep, you definitely won\u2019t want to type the entire path out to move up a folder!"
    }), "\n", createVNode(_components.p, {
      children: "Another powerful part of this is that you can chain the dot-folders. To move up two directories instead of one, it\u2019s as easy as:"
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
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home/steve/games"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:games$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ../.."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:home$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "/home"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:home$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Notice that I moved from ", createVNode(_components.code, {
        children: "/home/steve/games"
      }), " all the way up to ", createVNode(_components.code, {
        children: "/home"
      }), ". Much quicker!"]
    }), "\n", createVNode(_components.p, {
      children: "Now that you now know the basics of moving around, let\u2019s get our hands dirty and mess with some files."
    }), "\n", createVNode(_components.h2, {
      id: "get-organized-file-manipulation",
      children: "Get Organized! (File Manipulation)"
    }), "\n", createVNode(_components.h3, {
      id: "cat",
      children: createVNode(_components.code, {
        children: "cat"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The fluffiest of all Linux commands, ", createVNode(_components.code, {
        children: "cat"
      }), " is also one of the most useful. It\u2019s job is not to eat all of your kibble or crawl on your keyboard, but instead to ", createVNode(_components.strong, {
        children: "output the contents of any file on your computer"
      }), ". This is handy if you want to check what\u2019s inside of something without popping open a text editor, but it\u2019s also priceless when using ", createVNode(_components.strong, {
        children: "piping"
      }), ", discussed below."]
    }), "\n", createVNode(_components.p, {
      children: ["It\u2019s incredibly simple to use. Just type ", createVNode(_components.code, {
        children: "cat <name_of_file>"
      }), ". Here\u2019s an example - say that I keep my dog\u2019s name is a text file in case I forget it:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "dog_name.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cat"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dog_name.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Doggo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you can see, we\u2019ve printed the contents of ", createVNode(_components.code, {
        children: "dog_name.txt"
      }), " to the terminal for all the world to see!"]
    }), "\n", createVNode(_components.h3, {
      id: "touch",
      children: createVNode(_components.code, {
        children: "touch"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you need to create an empty file, maybe as a placeholder or just to prove that you have permission to do it, you can use the touch command."
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "my_file.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cat"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "There it is!"
    }), "\n", createVNode(_components.h3, {
      id: "mkdir",
      children: createVNode(_components.code, {
        children: "mkdir"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "mkdir"
      }), " command lets you ", createVNode(_components.strong, {
        children: "make a directory"
      }), ". Check it out:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "my_file.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "folder1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder1/other_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder1/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder1$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "other_file.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder1$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " .."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "folder1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you need to make multiple nested directories all at once, you\u2019ll have to use ", createVNode(_components.code, {
        children: "mkdir -p"
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
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " lots/of/nested/folders"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cannot"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \u2018lots/of/nested/folders\u2019:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " No"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " such"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " lots/of/nested/folders"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lots"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " du"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "       ./lots/of/nested/folders"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "       ./lots/of/nested"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      ./lots/of"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "16"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      ./lots"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./lots"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./lots/of"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./lots/of/nested"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./lots/of/nested/folders"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Notice that we used the ", createVNode(_components.code, {
        children: "du -a"
      }), " command to see all of the folders. While ", createVNode(_components.code, {
        children: "du"
      }), " stands for ", createVNode(_components.strong, {
        children: "disk utilization"
      }), ", it can also be helpful to show an entire folder structure rather than a single directory. Another option to perform the same task is ", createVNode(_components.code, {
        children: "find ."
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "rmdir",
      children: createVNode(_components.code, {
        children: "rmdir"
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you want to ", createVNode(_components.strong, {
        children: "remove a directory"
      }), ", ", createVNode(_components.code, {
        children: "rmdir"
      }), " is the way to go."]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "img"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rmdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "It doesn\u2019t always work though. What if the directory has something in it?"
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir/testfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir/testfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rmdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rmdir:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " failed"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'testdir':"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Directory"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " empty"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "testdir"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In order to delete a directory with something in it, we\u2019ll have to use the ", createVNode(_components.code, {
        children: "rm"
      }), " command, explained below."]
    }), "\n", createVNode(_components.h3, {
      id: "mv",
      children: createVNode(_components.code, {
        children: "mv"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "mv"
      }), " command serves two purposes. You can ", createVNode(_components.strong, {
        children: "move"
      }), " a file, and you can also ", createVNode(_components.strong, {
        children: "rename"
      }), " a file. If you think about it, this is pretty much the same thing anyway. If you rename a file, it\u2019s a lot like you\u2019re moving it to a new path in the same directory."]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " myfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "myfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " myfile.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " not_my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "not_my_file.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "rm",
      children: createVNode(_components.code, {
        children: "rm"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Sadly, we have to let some of our files go sometimes. When that time comes, ", createVNode(_components.code, {
        children: "rm"
      }), " lets you ", createVNode(_components.strong, {
        children: "remove files"
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
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "not_my_file.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " not_my_file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rm:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " regular"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " empty"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'not_my_file.txt'?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " y"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "So long!"
    }), "\n", createVNode(_components.p, {
      children: ["What if you want to ", createVNode(_components.strong, {
        children: "remove a directory"
      }), "? You\u2019ll have to use ", createVNode(_components.code, {
        children: "rm -r"
      }), " instead. The ", createVNode(_components.code, {
        children: "-r"
      }), " stands for ", createVNode(_components.strong, {
        children: "recursive"
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
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir/testfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir/testfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rm:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " descend"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'testdir'?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " y"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rm:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " regular"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " empty"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'testdir/testfile.txt'?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " y"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rm:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'testdir'?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " y"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Notice how it asks you for ", createVNode(_components.em, {
        children: "every single file"
      }), ". If you\u2019re deleting a directory with thousands of files, this is not going to work. To ", createVNode(_components.strong, {
        children: "force"
      }), " it to delete the files without asking, add ", createVNode(_components.code, {
        children: "-f"
      }), " to the command:"]
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
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir/testfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./testdir/testfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -rf"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " testdir"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "steve@surface01:folder$"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Be careful with this one"
      }), ", as you can damage your system beyond repair. ", createVNode(_components.strong, {
        children: ["Never run anything like ", createVNode(_components.code, {
          children: "rm -rf /"
        })]
      }), " as you will delete everything (assuming you have permission) and brick your system. It\u2019s like deleting system32 on Windows - anyone telling you to run this command does not have good intentions!"]
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap Up"
    }), "\n", createVNode(_components.p, {
      children: "Well done - you now know the basics of navigating around a Linux system."
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
const url = "src/content/post/blog/2020/10-minute-linux/10-minute-linux.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/10-minute-linux/10-minute-linux.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/10-minute-linux/10-minute-linux.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
