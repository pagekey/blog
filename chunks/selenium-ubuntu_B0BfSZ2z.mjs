import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_Biewhb8P.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u226490s: Install Selenium for Python on Ubuntu",
  "publishDate": "2020-03-25T00:00:00.000Z",
  "author": "Steve Grice",
  "category": "90 Seconds or Less",
  "tags": ["linux", "python"],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "steps",
    "text": "Steps"
  }, {
    "depth": 3,
    "slug": "1-install-packages",
    "text": "1. Install packages."
  }, {
    "depth": 3,
    "slug": "2-download-geckodriver",
    "text": "2. Download geckodriver."
  }, {
    "depth": 3,
    "slug": "3-untar-geckodriver",
    "text": "3. Untar geckodriver."
  }, {
    "depth": 3,
    "slug": "4-copy-geckodriver-into-system-path",
    "text": "4. Copy geckodriver into system PATH."
  }, {
    "depth": 3,
    "slug": "5-install-the-selenium-python-package",
    "text": "5. Install the selenium Python package."
  }, {
    "depth": 3,
    "slug": "6-edit-verifypy-and-make-sure-selenium-is-working",
    "text": "6. Edit verify.py and make sure Selenium is working."
  }, {
    "depth": 3,
    "slug": "7-run-the-test-script",
    "text": "7. Run the test script."
  }, {
    "depth": 3,
    "slug": "8-try-writing-a-unit-test-with-selenium",
    "text": "8. Try writing a unit test with Selenium."
  }, {
    "depth": 3,
    "slug": "9-run-your-test",
    "text": "9. Run your test."
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      children: "In this video, we learn how to set up Selenium in 90 seconds or less! Made using Ubuntu on Windows (WSL). You may need to start an Xming server if you use this method (I did)."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "MTarw_BUR-M"
    }), "\n", createVNode(_components.h2, {
      id: "steps",
      children: "Steps"
    }), "\n", createVNode(_components.h3, {
      id: "1-install-packages",
      children: "1. Install packages."
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
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " update"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " && "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python3"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " python3-pip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " firefox"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-download-geckodriver",
      children: ["2. Download ", createVNode(_components.code, {
        children: "geckodriver"
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
            children: "wget"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-untar-geckodriver",
      children: ["3. Untar ", createVNode(_components.code, {
        children: "geckodriver"
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
            children: "tar"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " xvf"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " geckodriver-v0.26.0-linux64.tar.gz"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-copy-geckodriver-into-system-path",
      children: ["4. Copy ", createVNode(_components.code, {
        children: "geckodriver"
      }), " into system ", createVNode(_components.code, {
        children: "PATH"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Edit"
      }), ": ", createVNode(_components.code, {
        children: "/usr/local/lib"
      }), " may be more appropriate than ", createVNode(_components.code, {
        children: "/usr/lib"
      }), " because ", createVNode(_components.code, {
        children: "/usr/local/lib"
      }), " is typically the place for user-installed software (whereas ", createVNode(_components.code, {
        children: "/usr/lib"
      }), " is for the package manager). Use whichever you prefer, but if you decide to use ", createVNode(_components.code, {
        children: "/usr/local/lib"
      }), ", make sure that it is in your ", createVNode(_components.code, {
        children: "$PATH"
      }), " environment variable."]
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
            children: " cp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " geckodriver"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /usr/lib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-install-the-selenium-python-package",
      children: ["5. Install the ", createVNode(_components.code, {
        children: "selenium"
      }), " Python package."]
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
            children: "pip3"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " selenium"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "6-edit-verifypy-and-make-sure-selenium-is-working",
      children: ["6. Edit ", createVNode(_components.code, {
        children: "verify.py"
      }), " and make sure Selenium is working."]
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
            children: "vi"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " verify.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
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
            children: "#!/usr/bin/env python"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " selenium "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " webdriver"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "browser "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " webdriver.Firefox() "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "browser.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'http://www.google.com/'"
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
    }), "\n", createVNode(_components.h3, {
      id: "7-run-the-test-script",
      children: "7. Run the test script."
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
              color: "#9ECBFF"
            },
            children: " verify.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "8-try-writing-a-unit-test-with-selenium",
      children: "8. Try writing a unit test with Selenium."
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
            children: "vi"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test_selenium.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
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
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " selenium "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " webdriver"
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
            children: " TestGoogle"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "unittest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "TestCase"
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
            children: "  def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setUp"
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
            children: "    self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".browser "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " webdriver.FireFox()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self): "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".browser.get("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'http://www.google.com/'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".assertIn("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Google'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".browser.title)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " tearDown"
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
            children: "    self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".browser.close()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " '__main__'"
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
              color: "#E1E4E8"
            },
            children: "  unittest.main()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "9-run-your-test",
      children: "9. Run your test."
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
              color: "#9ECBFF"
            },
            children: " test_selenium.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Need Python? We have a tutorial for that, too! Install Python in 90 seconds or less ", createVNode(_components.a, {
        href: "./python-windows",
        children: "on Windows"
      }), " or ", createVNode(_components.a, {
        href: "./python-ubuntu",
        children: "on Ubuntu"
      }), "."]
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
const url = "src/content/post/blog/2020/90-sec/selenium-ubuntu.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/selenium-ubuntu.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/selenium-ubuntu.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
