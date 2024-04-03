import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BEb4f0He.mjs';
import 'clsx';

const frontmatter = {
  "title": "Take Your Linux Workspace Anywhere: Backup for Nerds",
  "publishDate": "2018-11-24T00:00:00.000Z",
  "image": "/blog/2018/backup-linux-workspace.jpg",
  "authors": ["steve"],
  "tags": ["linux", "productivity"],
  "readingTime": 10
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "all-of-your-tools-mobile",
    "text": "All of your Tools, Mobile"
  }, {
    "depth": 2,
    "slug": "going-remote",
    "text": "Going Remote"
  }, {
    "depth": 2,
    "slug": "setup-forsuccess",
    "text": "Setup for\xA0Success"
  }, {
    "depth": 2,
    "slug": "handling-homefiles",
    "text": "Handling Home\xA0Files"
  }, {
    "depth": 2,
    "slug": "lasso-yourrepos",
    "text": "Lasso your\xA0Repos"
  }, {
    "depth": 2,
    "slug": "sync-simply",
    "text": "Sync Simply"
  }, {
    "depth": 2,
    "slug": "alias-setup",
    "text": "Alias Setup"
  }, {
    "depth": 2,
    "slug": "pulling-it-alltogether",
    "text": "Pulling It All\xA0Together"
  }, {
    "depth": 3,
    "slug": "initial-setup",
    "text": "Initial Setup"
  }, {
    "depth": 3,
    "slug": "use",
    "text": "Use"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "How many times have you sat down at a new Linux computer and felt like you were starting all over again? All of those aliases, every little helper file and script\u200A-\u200Agone. This new computer is a shell of its former self (pun intended). Your heart warms as you think back to the comfort and productivity that came with your Linux workstation at home. If only there were a way to take everything you know and love on the go\u2026"
    }), "\n", createVNode(_components.p, {
      children: "Thankfully, there is!"
    }), "\n", createVNode(_components.p, {
      children: ["If you don\u2019t feel like setting it up yourself, you can clone the pre-finished skeleton I made ", createVNode(_components.a, {
        href: "https://github.com/stephengrice/linux-workspace",
        children: "on Github"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "all-of-your-tools-mobile",
      children: "All of your Tools, Mobile"
    }), "\n", createVNode(_components.p, {
      children: ["I\u2019m going to show you how to create your own ", createVNode(_components.code, {
        children: "linux-workspace"
      }), " that you can regenerate anywhere. Once we have this set up, all you\u2019ll need is an internet connection to take it with you."]
    }), "\n", createVNode(_components.p, {
      children: "Essentially, we will be creating a set of common files and scripts that will enable you to clone any code repositories you may have stored online. All of it will be version-controlled with Git, meaning that you can track any changes made."
    }), "\n", createVNode(_components.p, {
      children: ["There are two parts to this little code contraption. The first is ", createVNode(_components.code, {
        children: "sync-home.bash"
      }), ". This script provides a way to track changes for important files in your home area, such as\xA0", createVNode(_components.code, {
        children: ".bashrc"
      }), ",\xA0", createVNode(_components.code, {
        children: ".vimrc"
      }), ", and the like. You simply edit these files from the ", createVNode(_components.code, {
        children: "home"
      }), " folder within the repository and commit/push your changes. This keeps all of your files neatly tracked. Meanwhile, ", createVNode(_components.code, {
        children: "sync-home.bash"
      }), " will copy them into place whenever you want so that you can start using them."]
    }), "\n", createVNode(_components.p, {
      children: ["The second script packs a punch: ", createVNode(_components.code, {
        children: "clone-repos.py"
      }), " is what makes this all work\xA0. As input, it uses a comma-separated list of repositories stored in ", createVNode(_components.code, {
        children: "repos.csv"
      }), ". From this list, it clones these repositories one-by-one into the ", createVNode(_components.code, {
        children: "wkdir"
      }), " directory (shorthand for working directory)."]
    }), "\n", createVNode(_components.p, {
      children: "This is a smooth solution if you frequently find yourself writing code or developing software of any kind. For me, the most time consuming part of making this happen was organizing all of my existing files into Git repositories and pushing them to websites like Bitbucket and Github."
    }), "\n", createVNode(_components.h2, {
      id: "going-remote",
      children: "Going Remote"
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019re like me, when you want to code, you code. You don\u2019t start by thinking how to organize every last file on your computer, or how to track every change you make. Your goal is to explore and learn, not to categorize and label. Occasionally, though, you\u2019ll need to find something you did months ago, and this is when the hunt begins. Like a madman, you\u2019ll search folders high and low for that outlying scoundrel, that scrap of unscrupulous scripting. As you scour the seemingly endless tree of one-off attempts at web apps and random sneezes of game ideas, you may be wondering if there\u2019s a better way."
    }), "\n", createVNode(_components.p, {
      children: "This is why it is so important to get into the habit of working within a Git repository (or some other kind of version control). Even if what you\u2019re doing isn\u2019t particularly structured, you can always set up a general-purpose practice repository where anything goes. The main idea is to get any kind of code that you touch into a repository so that you can upload it to Github, Bitbucket, or wherever else you may store code online."
    }), "\n", createVNode(_components.p, {
      children: "Once it\u2019s been pushed to one or more sites, the files are available in multiple locations, so you can rest assured that they\u2019re safe. When there\u2019s a fire, your laptop is stolen, or you finally chuck the poor thing across the room in anger, you\u2019ll be glad that all of your precious code is backed up the smart way."
    }), "\n", createVNode(_components.h2, {
      id: "setup-forsuccess",
      children: "Setup for\xA0Success"
    }), "\n", createVNode(_components.p, {
      children: ["Again, I want to let you know that you can still get out of this\u200A-\u200Athe repository I set up ", createVNode(_components.a, {
        href: "https://github.com/stephengrice/linux-workspace",
        children: "here"
      }), " can be forked or cloned to get started in a jiffy. However, if you\u2019re the DIY type, I respect that\u200A-\u200Aread on!"]
    }), "\n", createVNode(_components.p, {
      children: "First things first\u200A-\u200Aas mentioned above, you\u2019ll want to make sure all of the repositories that you want access to in your workspace are uploaded to some kind of external source code hosting service, whether it\u2019s self-hosted or one of the big names."
    }), "\n", createVNode(_components.h2, {
      id: "handling-homefiles",
      children: "Handling Home\xA0Files"
    }), "\n", createVNode(_components.p, {
      children: ["It won\u2019t be hard to get a grip on your home files. First, create a ", createVNode(_components.code, {
        children: "home"
      }), " directory in your ", createVNode(_components.code, {
        children: "linux-workspace"
      }), " repository. This is where you\u2019ll keep all of the files you need in your home area to keep life going smoothly. Next, we need a script to install those files whenever we want them. Luckily, I\u2019ve already taken care of this part for you. Open a text editor, and get ready to write ", createVNode(_components.code, {
        children: "sync-home.bash"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "WARNED"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "false"
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
            children: " f "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ls"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -A"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " home`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-e"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ~"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/$f ] && "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $WARNED; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Warning:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Files"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " overwritten"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " continue."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "                while"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                        echo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Continue? (y/n): "'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                        read"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " user_in"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "                        if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$user_in"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "y"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                                WARNED"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "                                break"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "                        elif"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$user_in"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "n"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                                exit"
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
              color: "#F97583"
            },
            children: "                        fi"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "                done"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        fi"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Copying"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " home/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$f "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "into"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " place..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        cp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " home/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$f "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "~"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "done"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This script doesn\u2019t do a whole lot. Basically, it loops through every file in the ", createVNode(_components.code, {
        children: "home"
      }), " directory of your workspace. For each of these files, it first checks if the file already exists in your real home area. If it does, it warns you that your files could be overwritten. If you understand the risks and would rather have the script run to completion without asking for permission, just comment out lines 4\u201316 above."]
    }), "\n", createVNode(_components.p, {
      children: ["After checking in that you\u2019re okay with files being overwritten, the script will copy everything in the ", createVNode(_components.code, {
        children: "linux-workspace/home"
      }), " folder into your actual Linux home area (", createVNode(_components.code, {
        children: "~"
      }), "). With this, all of those little files, like\xA0", createVNode(_components.code, {
        children: ".bashrc"
      }), " and\xA0", createVNode(_components.code, {
        children: ".vimrc"
      }), ", will be instantly available. This means all of your personal customizations to the shell, such as shortcuts, aliases, and other related features, will now be available to you."]
    }), "\n", createVNode(_components.h2, {
      id: "lasso-yourrepos",
      children: "Lasso your\xA0Repos"
    }), "\n", createVNode(_components.p, {
      children: "How great would it be to regenerate all of the folders you work with, anywhere, without relying on cumbersome cloud services like OneDrive or Google Drive? It\u2019s possible, and it\u2019s not that hard. We only need a few files."
    }), "\n", createVNode(_components.p, {
      children: ["First, we will create a list of repositories. You can format this list however you want, but any structural changes must be reflected in the script we\u2019re about to write that actually performs the sync. For mine, I just created two columns in a CSV format. The first column is the local location where the code will live within your ", createVNode(_components.code, {
        children: "linux-workspace"
      }), ". The other is the URL to the remote source of the repository, where we will be cloning from. Here\u2019s a sample from mine:"]
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
            children: "github/stephengrice,"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git@github.com:stephengrice/linux-workspace"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above example, the local directory ", createVNode(_components.code, {
        children: "github/stephengrice"
      }), " will be created, and ", createVNode(_components.code, {
        children: "linux-workspace"
      }), " will be cloned into it from the remote address."]
    }), "\n", createVNode(_components.p, {
      children: "Now we just need a script to sync things up."
    }), "\n", createVNode(_components.h2, {
      id: "sync-simply",
      children: "Sync Simply"
    }), "\n", createVNode(_components.p, {
      children: ["Before we get started, go through each one of your old repositories and make sure you didn\u2019t leave anything uncommitted (type ", createVNode(_components.code, {
        children: "git status"
      }), "). If you have anything lingering around, I would recommend creating  a commit to ensure these changes are tracked. I usually just use \u201CCommit old changes\u201D as the commit message. I had to do this many times while pushing all of my repositories to remote. This generic message had to do, as I didn\u2019t have time to dive back into each project and figure out where I left off."]
    }), "\n", createVNode(_components.p, {
      children: ["Once you\u2019ve done that, push every repository\u200A-\u200Aand not just the ", createVNode(_components.code, {
        children: "master"
      }), " branch. Use ", createVNode(_components.code, {
        children: "git push --all"
      }), " to ensure that everything on your local computer is also on the remote site. When this is the case, we can regenerate all of our local repositories with our sync script. After that, we can delete the originals, since the newly cloned repositories are identical."]
    }), "\n", createVNode(_components.p, {
      children: "With all of that said, here\u2019s our sync script:"
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
            children: "#!/usr/bin/env python3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " csv, os"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "WORKING_DIRECTORY_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'wkdir'"
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
              color: "#79B8FF"
            },
            children: " __name__"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "__main__"'
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
            children: "	with"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'repos.csv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " file"
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
            children: "		csv_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " csv.reader("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "file"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "delimiter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "','"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " row "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " csv_data:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			remote_path "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " row["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "			local_path "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " row["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
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
            children: " os.path.exists("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " %"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "WORKING_DIRECTORY_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", local_path)):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "				print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Already exists: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " %"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " local_path)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "			else"
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
            children: "				print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Cloning repository...'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "				command "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'git clone "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wkdir/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "%s"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " %"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (remote_path, local_path)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "				print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(command)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "				os.system(command)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "My college programming professors would have a heart attack. No comments! What kind of monster have I become?"
    }), "\n", createVNode(_components.p, {
      children: "Not to worry, professor\u200A-\u200Athe script is actually fairly clear cut. Allow me to document it in the next few paragraphs."
    }), "\n", createVNode(_components.p, {
      children: ["The top of the script is defining which Python interpreter to use, importing libraries, and setting constants. The real magic begins when we open ", createVNode(_components.code, {
        children: "repos.csv"
      }), ". You may recall that this file contains two columns\u200A-\u200Afirst, where we want to store the repo locally, and second, the address of the remote repository we\u2019ll be cloning from. For each of the repositories in the file, it checks if it exists locally, and if it doesn\u2019t, it clones the remote."]
    }), "\n", createVNode(_components.p, {
      children: ["If you get tired of typing out your password every single time, it may be a good idea to copy your public key file (located in ", createVNode(_components.code, {
        children: "~/.ssh/id_rsa.pub"
      }), ") into your Github and/or Bitbucket profile. You may also be interested in ", createVNode(_components.a, {
        href: "./push-ssh-keys/",
        children: "pushing out your SSH keys"
      }), " if you have local Git servers."]
    }), "\n", createVNode(_components.p, {
      children: "I decided to use Python, because it\u2019s quick, straightforward, and a lot more powerful than Bash (no offense to die-hard shell-scripters!). Feel free to make your own script in whichever language tickles your fancy."
    }), "\n", createVNode(_components.h2, {
      id: "alias-setup",
      children: "Alias Setup"
    }), "\n", createVNode(_components.p, {
      children: ["Most people do a majority of their work from their home area. It\u2019s exceedingly easy to get there\u200A-\u200Atype ", createVNode(_components.code, {
        children: "cd"
      }), ", and you\u2019re done. With this in mind, I thought it may be inconvenient to move all the way over to your Linux workspace every time you want to do something. To get around this, I set up a short alias that allows you to jump to ", createVNode(_components.code, {
        children: "linux-workspace"
      }), ", and it\u2019s been working great for me."]
    }), "\n", createVNode(_components.p, {
      children: ["While you can use whatever name you want for this alias, I named it ", createVNode(_components.code, {
        children: "wkdir"
      }), ". To get this alias working, just edit your\xA0", createVNode(_components.code, {
        children: ".bashrc"
      }), " file in the ", createVNode(_components.code, {
        children: "home"
      }), " directory of the repository. Add this line:"]
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
            children: "alias"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'cd ~/linux-workspace/wkdir'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Type the following to finish settings things up:"
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
            children: " ~/linux-workspace"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "./sync-home.bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/.bashrc"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now, try it out! Just type ", createVNode(_components.code, {
        children: "wkdir"
      }), ", anytime, anywhere."]
    }), "\n", createVNode(_components.h2, {
      id: "pulling-it-alltogether",
      children: "Pulling It All\xA0Together"
    }), "\n", createVNode(_components.p, {
      children: "With all of this in place, we can adopt the following workflow:"
    }), "\n", createVNode(_components.h3, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "If you have not already, organize all of your code into Git repositories. Push each of them to some kind of remote site (like Github or Bitbucket)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Set up ", createVNode(_components.code, {
            children: "repos.csv"
          }), ". This defines where you want each repository to be stored on your local machine. This should only be necessary one time, unless you add new repositories."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "use",
      children: "Use"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["For each computer you want to use this on in the future, use ", createVNode(_components.code, {
            children: "clone-repos.py"
          }), " to clone everything defined in ", createVNode(_components.code, {
            children: "repos.csv"
          }), " to your local machine."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Run ", createVNode(_components.code, {
            children: "sync-home.bash"
          }), " to add all of your home files and aliases to this computer, if you defined any. If you want immediate access to your aliases, you can run ", createVNode(_components.code, {
            children: "source ~/.bashrc"
          }), ". This way, you won\u2019t need to restart or reopen your terminal session."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Enjoy your new work environment! Switch to your work area, choose a repository, and get coding."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "With all these tips in mind, you can move away from cloud storage for code repositories and Linux files. You now have the power to forge your own path, and customize the way you do work to your heart\u2019s content. Happy computing!"
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
const url = "src/content/post/blog/2018/backup-linux-workspace/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/backup-linux-workspace/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/backup-linux-workspace/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
