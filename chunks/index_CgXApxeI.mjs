import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Get Up and Running with Scikit-Learn",
  "publishDate": "2021-04-17T00:00:00.000Z",
  "image": "/blog/2021/getting-started-sklearn.jpg",
  "author": "Steve Grice",
  "tags": ["machine-learning"],
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-scikit-learn",
    "text": "What is scikit-learn?"
  }, {
    "depth": 2,
    "slug": "core-installation",
    "text": "Core Installation"
  }, {
    "depth": 3,
    "slug": "1-install-python",
    "text": "1) Install Python"
  }, {
    "depth": 3,
    "slug": "2-create-a-virtual-environment",
    "text": "2) Create a virtual environment"
  }, {
    "depth": 3,
    "slug": "3-install-the-scikit-learn-package",
    "text": "3) Install the scikit-learn package"
  }, {
    "depth": 3,
    "slug": "4-check-your-installation",
    "text": "4) Check your installation"
  }, {
    "depth": 2,
    "slug": "development-environment",
    "text": "Development Environment"
  }, {
    "depth": 3,
    "slug": "pure-python",
    "text": "Pure Python"
  }, {
    "depth": 3,
    "slug": "jupyter-notebooks",
    "text": "Jupyter Notebooks"
  }, {
    "depth": 4,
    "slug": "vscode-extension",
    "text": "VSCode Extension"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
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
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Machine learning is fascinating, but it can be overwhelming if you\u2019re just getting started. Luckily, scikit-learn is an open-source machine learning library that allows you to jump in and gain hands-on experience immediately, harnessing the power of almost 2,000 contributors without reading a single scientific paper."
    }), "\n", createVNode(_components.p, {
      children: "If this sounds interesting to you, read on. In this article, we\u2019re going to learn what scikit-learn is, how to install it, and how to run it using Python and Jupyter Notebooks."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Photo by ", createVNode(_components.a, {
          href: "https://www.pexels.com/@meruyert-bissimbayeva?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels",
          children: "Meruyert Gonullu"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "what-is-scikit-learn",
      children: "What is scikit-learn?"
    }), "\n", createVNode(_components.p, {
      children: ["In 2007, David Cournapeau started a project during Google\u2019s Summer of Code that would have an impact for years to come. His project eventually morphed into ", createVNode(_components.a, {
        href: "https://github.com/scikit-learn/scikit-learn",
        children: "scikit-learn"
      }), ", a collection of open-source machine learning libraries used by countless people across the globe."]
    }), "\n", createVNode(_components.p, {
      children: "Thanks to the hard work of Cournapeau, along with 1,952 other contributors (at the time of writing), we now have a library that drastically lowers the barrier of entry for learning the basics of machine learning and beginning to harness its power in our careers, or even our everyday lives."
    }), "\n", createVNode(_components.h2, {
      id: "core-installation",
      children: "Core Installation"
    }), "\n", createVNode(_components.h3, {
      id: "1-install-python",
      children: "1) Install Python"
    }), "\n", createVNode(_components.p, {
      children: ["You\u2019ll need Python installed before you can use scikit-learn. There are plenty of guides online that will tell you how to install Python, but it\u2019s a very straightforward process anyway. You can probably just go to the Python ", createVNode(_components.a, {
        href: "https://www.python.org/downloads/",
        children: "Downloads page"
      }), " and figure it out yourself."]
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019d like to get it done in 90 seconds or less, I made videos for just that purpose! Click ", createVNode(_components.a, {
        href: "../2020/90-sec/python-windows",
        children: "here"
      }), " to get started on Windows, or ", createVNode(_components.a, {
        href: "../2020/90-sec/python-ubuntu",
        children: "here"
      }), " if you use Ubuntu."]
    }), "\n", createVNode(_components.p, {
      children: ["Note that the instructions below are tailored to ", createVNode(_components.strong, {
        children: "Linux users"
      }), ". You may need to make a few tweaks to the shell commands to get them working on Mac/Windows, but it probably won\u2019t be anything wildly different."]
    }), "\n", createVNode(_components.h3, {
      id: "2-create-a-virtual-environment",
      children: "2) Create a virtual environment"
    }), "\n", createVNode(_components.p, {
      children: "This step is technically optional, but it\u2019s good practice to use virtual environments based on what you\u2019re working on. This way, if you need one version of a package for one project, and a different version for another, you can just switch virtual environments instead of reinstalling everything every time you switch from working on one project to another."
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019ve never created a virtual environment before, you\u2019ll want to create a folder to hold all of them. I prefer to use the ", createVNode(_components.code, {
        children: "venv"
      }), " folder in my home directory, but feel free to change this if you\u2019 like to put them somewhere else."]
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
            children: " ~"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " venv"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " venv"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "python3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " venv"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " sklearn"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will create a new virtual environment named ", createVNode(_components.code, {
        children: "sklearn"
      }), ". Now that you\u2019ve created it, you\u2019ll need to activate it. Remember to activate your virtual environment ", createVNode(_components.strong, {
        children: "every time you want to use scikit-learn"
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
              color: "#79B8FF"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/venv/sklearn/bin/activate"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Your shell should now have \u201C", createVNode(_components.code, {
        children: "(sklearn)"
      }), "\u201D at the beginning of each line in your terminal. If you want to quit the virtual environment at any point, you can just type ", createVNode(_components.code, {
        children: "deactivate"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "3-install-the-scikit-learn-package",
      children: "3) Install the scikit-learn package"
    }), "\n", createVNode(_components.p, {
      children: "Installing scikit-learn is as simple as typing in a pip command:"
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
            children: "pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -U"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " scikit-learn"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-check-your-installation",
      children: "4) Check your installation"
    }), "\n", createVNode(_components.p, {
      children: "The scikit-learn website provides a few snippets to check if everything is working as expected. Copy-and-paste the one below to try it out yourself."
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
            children: "python"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "import sklearn; sklearn.show_versions()"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " $?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You should see a lot of information printed about your ", createVNode(_components.code, {
        children: "scikit-learn"
      }), " installation and the system you\u2019re running on. If you get a ", createVNode(_components.code, {
        children: "0"
      }), " as output after ", createVNode(_components.code, {
        children: "echo $?"
      }), ", then it means the command exited successfully - you\u2019re good to go!"]
    }), "\n", createVNode(_components.h2, {
      id: "development-environment",
      children: "Development Environment"
    }), "\n", createVNode(_components.p, {
      children: ["Almost as important as having the software installed is ", createVNode(_components.strong, {
        children: "how will you use it?"
      }), " Getting your development environment situated can be the hardest part."]
    }), "\n", createVNode(_components.p, {
      children: "There are an infinite number of ways that you can customize your development environment. For our purposes today, we\u2019ll focus on (1) using Python without any extra IDEs to help us out, and (2) how to use my preferred IDE, Visual Studio Code, which has plenty of helpful extensions to make our work with scikit-learn move more smoothly."
    }), "\n", createVNode(_components.h3, {
      id: "pure-python",
      children: "Pure Python"
    }), "\n", createVNode(_components.p, {
      children: "Working with scikit-learn in pure Python is always an option. It may not be the best for learning, because the only way to explain what\u2019s happening with each line is to add comments, which can get messy. It\u2019s also up to you to figure out how to download others\u2019 code and get it running. However, knowing how to set these things up will be required if you want to integrate machine learning into a real application that others can use."
    }), "\n", createVNode(_components.p, {
      children: ["Using scikit-learn in this way doesn\u2019t require any additional software. You can open up a ", createVNode(_components.code, {
        children: "test.py"
      }), " file in your favorite text editor, ", createVNode(_components.code, {
        children: "import sklearn"
      }), ", and go to town! Then, just run the script with ", createVNode(_components.code, {
        children: "python test.py"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["If you want to get more advanced, you can distribute your package using a ", createVNode(_components.code, {
        children: "setup.py"
      }), " file and ", createVNode(_components.a, {
        href: "https://docs.python.org/3.10/library/distutils.html",
        children: "distutils"
      }), ", or get fancy with something like ", createVNode(_components.a, {
        href: "https://python-poetry.org/",
        children: "Poetry"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019re just getting started with learning or you\u2019re only interested in data analytics, then read on - the next option may be more your speed."
    }), "\n", createVNode(_components.h3, {
      id: "jupyter-notebooks",
      children: "Jupyter Notebooks"
    }), "\n", createVNode(_components.p, {
      children: ["If you haven\u2019t tried them already, ", createVNode(_components.a, {
        href: "https://jupyter.org/",
        children: "Jupyter Notebooks"
      }), " are an amazing way of presenting information and code. You\u2019re able to mix Markdown and interactive Python code blocks in a single document, allowing you to easily walk through code, executing a single block at a time with a clear understanding of what is happening every step of the way."]
    }), "\n", createVNode(_components.p, {
      children: "Getting started with Jupyter is as easy as typing the following:"
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
            children: "pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " notebook"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "jupyter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " notebook"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will install the required pip package and start a Jupyter Notebook server. This server will be accessible in your web browser, allowing you to create, view, and edit ", createVNode(_components.code, {
        children: ".ipynb"
      }), " files. ", createVNode(_components.code, {
        children: "ipynb"
      }), " stands for Interactive Python Notebook, which is so named because Jupyter Notebooks was previously named IPython Notebooks ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["As an example, here is the output when I run ", createVNode(_components.code, {
        children: "jupyter notebook"
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
              color: "#E1E4E8"
            },
            children: " [I 16:31:31.879 NotebookApp] "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Serving"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " notebooks"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " local"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " directory:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home/steve"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [I 16:31:31.882 NotebookApp] "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Jupyter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Notebook"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 6.1.4"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " running"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " at:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [I 16:31:31.882 NotebookApp] "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "http://localhost:8888/?token"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [I 16:31:31.883 NotebookApp]  "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "or"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " http://127.0.0.1:8888/?token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [I 16:31:31.883 NotebookApp] "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Use"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Control-C"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " stop"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " shut"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " down"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " all"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " kernels"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (twice "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "to"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " skip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " confirmation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you can see, the server is running at ", createVNode(_components.code, {
        children: "http://localhost:8888"
      }), ". To start using Jupyter, simply open this link in a web browser."]
    }), "\n", createVNode(_components.h4, {
      id: "vscode-extension",
      children: "VSCode Extension"
    }), "\n", createVNode(_components.p, {
      children: ["I\u2019ll briefly note that if you already use ", createVNode(_components.a, {
        href: "https://code.visualstudio.com/",
        children: "Visual Studio Code"
      }), ", there is a Jupyter Notebooks extension that you can use to edit and run ", createVNode(_components.code, {
        children: ".ipynb"
      }), " notebooks right in your IDE. No need to leave, start a server, open a browser, any of that - it\u2019s all integrated into a single window. I guess that\u2019s why they call it an ", createVNode(_components.strong, {
        children: "integrated"
      }), " development environment!"]
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve tried both approaches, and I find this one to be much easier. But it\u2019s up to you to choose your favorite!"
    }), "\n", createVNode(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", createVNode(_components.p, {
      children: "With any luck, you\u2019ve just installed scikit-learn (and maybe Jupyter Notebooks too). Your computer should be revved up and ready to roll with some machine learning! Stay tuned for more tutorials like this one that will build on this knowledge."
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://jupyter.org/about",
              children: "https://jupyter.org/about"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
const url = "src/content/post/blog/2021/getting-started-scikit-learn/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/getting-started-scikit-learn/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/getting-started-scikit-learn/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
