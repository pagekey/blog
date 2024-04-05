import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "WILR2: Rust Beginnings (minigrep)",
  "publishDate": "2022-06-20T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/Lelgwgs63Z8/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "What I Learned Recently",
  "tags": ["rust"],
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "installing-rust",
    "text": "Installing Rust"
  }, {
    "depth": 2,
    "slug": "rust-book-ch-12",
    "text": "Rust Book Ch. 12"
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
      children: ["I learned some basic Rust by following the Rust Book\u2019s Chapter 12, where they show us how to build a ", createVNode(_components.code, {
        children: "minigrep"
      }), " command-line application."]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "Lelgwgs63Z8"
    }), "\n", createVNode(_components.p, {
      children: "What you see below are very rough notes I took as I went through this for the first time. Hopefully this, along with the video walkthrough, is helpful to you in some way."
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:32 Installation"
      }), "\n", createVNode(_components.li, {
        children: "0:45 Discussing the Rust Book"
      }), "\n", createVNode(_components.li, {
        children: "2:13 The finished code"
      }), "\n", createVNode(_components.li, {
        children: "2:44 What it does"
      }), "\n", createVNode(_components.li, {
        children: "3:56 Code walkthrough"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "installing-rust",
      children: "Installing Rust"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.rust-lang.org/tools/install",
        children: "https://www.rust-lang.org/tools/install"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Just use script:"
      }), "\n"]
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --proto"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '=https'"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --tlsv1.2"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -sSf"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://sh.rustup.rs"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["If having trouble on proxy, use minimal installation\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "(I was having trouble with rust-docs)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "rust-book-ch-12",
      children: "Rust Book Ch. 12"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://doc.rust-lang.org/book/ch12-00-an-io-project.html",
        children: "https://doc.rust-lang.org/book/ch12-00-an-io-project.html"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Importing standard libraries: you can import ", createVNode(_components.code, {
          children: "std::env::args"
        }), " if you want, but it\u2019s not recommended. Better to import ", createVNode(_components.code, {
          children: "std::env"
        }), " to prevent name conflicts\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Either way, ", createVNode(_components.code, {
              children: "use"
            }), " seems to take the last thing and make it accessable. ", createVNode(_components.code, {
              children: "use std::env"
            }), " makes ", createVNode(_components.code, {
              children: "env"
            }), " accessible, ", createVNode(_components.code, {
              children: "use std::error::Error"
            }), " makes ", createVNode(_components.code, {
              children: "Error"
            }), " accessible"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "env::args()"
        }), " returns an iterator, and ", createVNode(_components.code, {
          children: "collect()"
        }), " turns it into a vector (basically a list) so that we can use it"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "expect()"
        }), " fails out and prints a rust backtrace (ugly)"]
      }), "\n", createVNode(_components.li, {
        children: "First: Can simply return a tuple"
      }), "\n", createVNode(_components.li, {
        children: ["Then, abstract the tuple to ", createVNode(_components.code, {
          children: "struct Config"
        }), " - this way, you can name your fields"]
      }), "\n", createVNode(_components.li, {
        children: ["Adding ", createVNode(_components.code, {
          children: "impl Config"
        }), ", and ", createVNode(_components.code, {
          children: "new"
        }), " method: Allows you to \u201Cinstantiate\u201D the Config object using ", createVNode(_components.code, {
          children: "args"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Checking for errors: Can ", createVNode(_components.code, {
          children: "panic!()"
        }), ", which is like ", createVNode(_components.code, {
          children: "expect!"
        }), " in that it prints a backtrace (ugly)"]
      }), "\n", createVNode(_components.li, {
        children: ["Alternative: Return a ", createVNode(_components.code, {
          children: "Result"
        }), " and let the caller handle it. ", createVNode(_components.code, {
          children: "Ok()"
        }), " with return value or ", createVNode(_components.code, {
          children: "Err()"
        }), " with message\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["What is ", createVNode(_components.code, {
              children: "&'static"
            }), " ?? something to do with reference/memory ownership I think"]
          }), "\n", createVNode(_components.li, {
            children: ["It says to see Chapter 10 on \u201CLifetimes\u201D: ", createVNode(_components.a, {
              href: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html",
              children: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "unwrap_or_else"
        }), ": Alternative to ", createVNode(_components.code, {
          children: "expect()"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "expect()"
            }), " gives you the return value in ", createVNode(_components.code, {
              children: "Result"
            }), ", or panics"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "unwrap_or_else"
            }), " gives you the return value if ok, otherwise lets you handle it in a block of code"]
          }), "\n", createVNode(_components.li, {
            children: "\u201Dcustom, non-panic error handling\u201D"
          }), "\n", createVNode(_components.li, {
            children: "Uses a Closure, or anonymous function"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "std::process"
        }), " lets you exit with error code, much like python\u2019s ", createVNode(_components.code, {
          children: "sys.exit"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Box<dyn Error>"
        }), " is a ", createVNode(_components.strong, {
          children: "trait"
        }), " object\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Basically means what it returns must be a subclass of Error"
          }), "\n", createVNode(_components.li, {
            children: ["Ending a line with ", createVNode(_components.code, {
              children: "?"
            }), " instead of ", createVNode(_components.code, {
              children: "expect()"
            }), ": Returns the error automatically instead of panicking"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "if let"
        }), " syntax?? Similar to ", createVNode(_components.code, {
          children: "unwrap_or_else"
        }), "?"]
      }), "\n", createVNode(_components.li, {
        children: ["We move our code to separate ", createVNode(_components.code, {
          children: "lib.rs"
        }), " file - it calls this a separate crate? This way, it can be tested. Added ", createVNode(_components.code, {
          children: "pub"
        }), " everywhere"]
      }), "\n", createVNode(_components.li, {
        children: "Tutorial uses TDD! My heart!"
      }), "\n", createVNode(_components.li, {
        children: ["Lifetime ", createVNode(_components.code, {
          children: "'a"
        }), " marks the argument with matching lifetime of return value. So return value will live as long as the ", createVNode(_components.code, {
          children: "contents"
        }), " variable\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Again, see Chapter 10 on \u201CLifetimes\u201D: ", createVNode(_components.a, {
              href: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html",
              children: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Topics covered: file input and output, lifetimes, testing, and command line parsing."
      }), "\n", createVNode(_components.li, {
        children: "Env to add case sensitivity"
      }), "\n", createVNode(_components.li, {
        children: ["Print to stderr with ", createVNode(_components.code, {
          children: "eprintln!"
        })]
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
const url = "src/content/post/blog/2022/wilr-2.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/wilr-2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/wilr-2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
