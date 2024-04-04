import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_BBzd8Bxt.mjs';
import 'clsx';

const __0___server_diagram_png__ = new Proxy({"src":"/_astro/server_diagram.DP66d_EP.png","width":1280,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/server_diagram.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/server_diagram.png");
							return target[name];
						}
					});

const __1___hello_django_png__ = new Proxy({"src":"/_astro/hello_django.CCatIfEh.png","width":2725,"height":1736,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/hello_django.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/hello_django.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "Django: How to Install and Run Your First Web App",
  "publishDate": "2019-06-17T00:00:00.000Z",
  "image": "/blog/2019/django-first-web-app.jpg",
  "author": "Steve Grice",
  "tags": ["python", "tutorial"],
  "readingTime": 5
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-django",
    "text": "What is Django?"
  }, {
    "depth": 2,
    "slug": "setting-up",
    "text": "Setting Up"
  }, {
    "depth": 3,
    "slug": "python",
    "text": "Python"
  }, {
    "depth": 3,
    "slug": "pip",
    "text": "Pip"
  }, {
    "depth": 3,
    "slug": "django",
    "text": "Django"
  }, {
    "depth": 2,
    "slug": "generating-the-project",
    "text": "Generating the Project"
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
      p: "p",
      pre: "pre",
      span: "span",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Friends, we all have ideas for apps. Everyone that I\u2019ve talked to, whether they\u2019re interested in technology or not, has had some kind of idea for something that their phone and computer could do better, something to make their lives that much easier. Yet, getting started can be tremendously intimidating. How can we actually make it happen? Do we need degrees? Years of study? A natural gift?"
    }), "\n", createVNode(_components.p, {
      children: "I think the answer is no. Applications are can be complex and vary widely in functionality, but the fundamentals are the same. This is true whether you\u2019re building for mobile phones, web, or even desktop."
    }), "\n", createVNode(_components.p, {
      children: "Today, we\u2019ll take the first step to bringing your stunning app idea to life. We\u2019ll be working with Django, which is a Python framework used to make web apps that are fast, secure, and maintainable."
    }), "\n", createVNode(_components.p, {
      children: "For this tutorial, I\u2019ll do my best to assume you have little or no prior knowledge on the subject. This might make explanations lengthy, so feel free to skip through if you already feel comfortable with a topic."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-django",
      children: "What is Django?"
    }), "\n", createVNode(_components.p, {
      children: "The official Django website describes itself as \u201Cthe Web framework for perfectionists with deadlines.\u201D It\u2019s an open-source web framework that follows the model-view-template architectural pattern."
    }), "\n", createVNode(_components.p, {
      children: "What\u2019s that in English? It helps you build websites."
    }), "\n", createVNode(_components.p, {
      children: "Django comes right out of the box with a ton of goodies, including a development server and a set of tools for building and testing your site from end to end. It follows a familiar high-level architecture, in which a web server is connected to a database."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0___server_diagram_png__,
        alt: "Simple Web App Architecture"
      }), "\r\n", createVNode("figcaption", {
        children: "Simple Web App Architecture"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Luckily, we don\u2019t have to understand the inner workings of Django to use it. In fact, that\u2019s the point - with the details neatly abstracted for us, we\u2019re free to jump right in and learn as we go!"
    }), "\n", createVNode(_components.h2, {
      id: "setting-up",
      children: "Setting Up"
    }), "\n", createVNode(_components.p, {
      children: "To get started, we will have to install some software on our computer. I\u2019ll be walking you through installation for the following tools:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Python"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Pip"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Django"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Later on, you may want to install a production database, such as MySQL. The built-in SQLite database is really only good for one user at a time. However, until you\u2019re ready to publish and scale your app, it will work just fine."
    }), "\n", createVNode(_components.h3, {
      id: "python",
      children: "Python"
    }), "\n", createVNode(_components.p, {
      children: "Everything in Django is built using the Python programming language, so we\u2019ll definitely need to have that installed. There are two major \u201Cflavors\u201D of Python out there: Python 2 and Python 3. Unless you have a specific reason to go with Python 2, I would recommend using Python 3 from the get-go."
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019re a Linux user, you probably already have Python installed\u200A\u2014\u200Ajust open a terminal and write ", createVNode(_components.code, {
        children: "python --version"
      }), ". If you don\u2019t have it, or if it\u2019s not the version you want, you\u2019ll need to install it with a package manager. Since you\u2019re a Linux user, I\u2019m assuming you can figure that out, or at least Google it. :)"]
    }), "\n", createVNode(_components.p, {
      children: ["For Windows, we can\u2019t rely on a beautiful package manager\u200A\u2014\u200Awe\u2019ll have to install the binary from the web. To do this, ", createVNode(_components.a, {
        href: "https://www.python.org/downloads",
        children: "just download Python from the website"
      }), ". Then, run the downloaded installer and follow the instructions onscreen."]
    }), "\n", createVNode(_components.p, {
      children: ["When you\u2019re done, you should be able to open a command prompt and write ", createVNode(_components.code, {
        children: "python --version"
      }), ". If it returns something like ", createVNode(_components.code, {
        children: "Python 3.5.2"
      }), ", you\u2019re in good shape."]
    }), "\n", createVNode(_components.h3, {
      id: "pip",
      children: "Pip"
    }), "\n", createVNode(_components.p, {
      children: ["Pip is a package manager for Python. It\u2019s what we\u2019ll use to install Django and its many dependencies. Luckily, you probably already have it installed. Try it out by saying ", createVNode(_components.code, {
        children: "pip --version"
      }), ". If a version prints out with a link to your Python version, you\u2019re good to go. It should look like this:"]
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
              color: "#79B8FF"
            },
            children: " 19.1.1"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /path/to/binary/pip"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (python "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Make sure the Python version matches the one you would like to use."
    }), "\n", createVNode(_components.p, {
      children: "If the command doesn\u2019t work, we can just install it using Python. Run this:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pip"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This should get you off and running."
    }), "\n", createVNode(_components.h3, {
      id: "django",
      children: "Django"
    }), "\n", createVNode(_components.p, {
      children: "At last! We can finally install Django."
    }), "\n", createVNode(_components.p, {
      children: "Now that we have pip doing our dirty work for us, installing Django is as easy as running:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " django"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Check to make sure it worked:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " django-admin"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --version"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "2.2.2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Now we\u2019re ready to go."
    }), "\n", createVNode(_components.h2, {
      id: "generating-the-project",
      children: "Generating the Project"
    }), "\n", createVNode(_components.p, {
      children: ["With Django, we don\u2019t have to start from scratch. The basic format of the project will be generated for us by the ", createVNode(_components.code, {
        children: "django-admin"
      }), " tool."]
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ll give our project a generic name\u200A\u2014\u200Ahello_django. To generate the project, run this:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " django-admin"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " startproject"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " hello_django"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This creates a project folder with plenty of pre-set files for us to work from."
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s enter the directory and see what\u2019s inside."
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " hello_django"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$"
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
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "       ./hello_django/__init__.py"
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
            children: "       ./hello_django/settings.py"
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
            children: "       ./hello_django/urls.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "       ./hello_django/wsgi.py"
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
            children: "       ./hello_django"
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
            children: "       ./manage.py"
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
            children: "      ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Excellent. The basics for our app are in place. We will never have to edit ", createVNode(_components.code, {
        children: "manage.py"
      }), ", but it\u2019s going to be our best friend as we move forward. It\u2019s this script that will run our development server, run any tests we may have, and generate new \u201Capps.\u201D"]
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ll talk about what apps are in Django and how to use them soon. First, though, let\u2019s make sure everything is working so far. Start your Django server and see for yourself what it looks like out of the box:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " manage.py"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " runserver"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Django"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 2.2.2,"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " settings"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'hello_django.settings'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Starting"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " development"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " at"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " http://127.0.0.1:8000/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Quit"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " CONTROL-C."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now open up a browser and type ", createVNode(_components.a, {
        href: "http://localhost:8000/",
        children: "http://localhost:8000/"
      }), " into your address bar. You should see a welcome page for Django!"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1___hello_django_png__,
        alt: "Django Welcome Page"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you see something like the page above, you\u2019re up and running!"
    }), "\n", createVNode(_components.p, {
      children: "In the next part of this tutorial, we\u2019ll take a look at how to actually make things happen\u200A\u2014\u200Awe\u2019ll generate an \u201Capp\u201D and start linking things up with URLs."
    }), "\n", createVNode(_components.p, {
      children: "Thanks for reading!"
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
const url = "src/content/post/blog/2019/django-first-web-app/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2019/django-first-web-app/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
