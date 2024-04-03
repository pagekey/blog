import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_QkSTohUE.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Making a Command-line Ruby Gem - Write, Build, and Push",
  "publishDate": "2018-04-04T00:00:00.000Z",
  "image": "/blog/2018/ruby-gem.jpg",
  "author": "Steve Grice",
  "tags": ["ruby", "tutorial"],
  "readingTime": 7
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "requirements",
    "text": "Requirements"
  }, {
    "depth": 2,
    "slug": "setting-up-the-gem",
    "text": "Setting Up the Gem"
  }, {
    "depth": 2,
    "slug": "building-and-testing",
    "text": "Building and Testing"
  }, {
    "depth": 2,
    "slug": "adding-the-cli",
    "text": "Adding the CLI"
  }, {
    "depth": 2,
    "slug": "pushing-and-publishing",
    "text": "Pushing and Publishing"
  }, {
    "depth": 2,
    "slug": "bonus-useful-rake-automation",
    "text": "Bonus: Useful Rake Automation"
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
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Anyone who has used Ruby before knows that gems are the spice of life. They are easy to install and distribute, even easier to use, and most importantly, they provide useful functionality. It\u2019s not uncommon to see entire software projects centered around a single well-made gem. Take any Ruby on Rails project, and you\u2019ll see this in practice."
    }), "\n", createVNode(_components.p, {
      children: ["Gems are, in a nutshell, Ruby code packaged for easy distribution and use. It\u2019s easy to make your first gem, and even easier to reuse someone else\u2019s! Thousands upon thousands of gems are available on ", createVNode(_components.a, {
        href: "http://www.rubygems.org",
        children: "RubyGems.org"
      }), ", ready to solve your problems."]
    }), "\n", createVNode(_components.p, {
      children: ["In this article, we\u2019re going to do two things. First, we\u2019ll get started by creating our first gem and pushing it to RubyGems. This way, everyone in the world will be able to install and use it with the ", createVNode(_components.code, {
        children: "gem install"
      }), " command. Not bad!"]
    }), "\n", createVNode(_components.p, {
      children: "After that, we\u2019re going to modify the gem so that you can use it anywhere on your computer, just by typing its name into the console. Sweet!"
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "KNa1TXnaZSg"
    }), "\n", createVNode(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", createVNode(_components.p, {
      children: ["In order to complete this tutorial, you\u2019ll need a version of Ruby installed on your computer. If you don\u2019t already have it, consider first installing ", createVNode(_components.a, {
        href: "https://rvm.io/",
        children: "RVM"
      }), " (Ruby Version Manager), and then selecting the version of Ruby you want via RVM. This will save you countless headaches in the future should you need to switch Ruby versions for any reason."]
    }), "\n", createVNode(_components.p, {
      children: ["For the record, I used Ruby version ", createVNode(_components.code, {
        children: "2.3.3p200"
      }), " in the creation of this tutorial. As long what you use is at least somewhat recent, you should be fine."]
    }), "\n", createVNode(_components.p, {
      children: ["Note that this tutorial was created using Ubuntu Linux (", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
        children: "on Windows"
      }), "). I\u2019m sure there\u2019s a way to accomplish this using only Windows, but I have to leave that for you to figure out."]
    }), "\n", createVNode(_components.h2, {
      id: "setting-up-the-gem",
      children: "Setting Up the Gem"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s start by creating the initial file structure of our gem. Create an empty directory and ", createVNode(_components.code, {
        children: "cd"
      }), " to it. For this tutorial, I\u2019ll be creating the ", createVNode(_components.code, {
        children: "pagekey"
      }), " gem. When you make yours, be sure to use a unique name that\u2019s not already taken on ", createVNode(_components.a, {
        href: "http://www.rubygems.org",
        children: "RubyGems.org"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey"
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
            children: " pagekey"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The skeleton of our gem will consist of a ", createVNode(_components.code, {
        children: ".gemspec"
      }), " file to specify the gem configuration, a ", createVNode(_components.code, {
        children: "lib"
      }), " folder to hold our source, and of course our first source file. I\u2019ll create these now:"]
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
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey.gemspec"
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
            children: " lib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " lib/pagekey.rb"
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
            children: " bin"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Our file structure should look like this:"
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
              color: "#B392F0"
            },
            children: "pagekey"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey.gemspec"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " bin"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " lib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey.rb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now I\u2019ll edit ", createVNode(_components.code, {
        children: "pagekey.gemspec"
      }), " and include some information about our gem. Remember to update this with information specific to your own gem."]
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
            children: "Gem"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Specification"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " do"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " |s|"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.name      "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'pagekey'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.version   "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '0.1.0'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.platform  "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Gem"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Platform"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "RUBY"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.summary   "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'PageKey Solutions tutorial gem'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.description "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ` "Created in a tutorial found on blog.pageKeySolutions.com. Doesn't do too much!"`
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.authors   "
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
            children: "'Steve G'"
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
            children: "  s.email     "
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
            children: "'info@pagekeysolutions.com'"
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
            children: "  s.homepage  "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'http://rubygems.org/gems/pagekey'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.license   "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'MIT'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.files     "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Dir"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".glob("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"{lib,bin}/**/*"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# This includes all files under the lib directory recursively, so we don't have to add each one individually."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  s.require_path "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'lib'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Perfect. Now that the gem is configured, let\u2019s add some really basic code and test it out. To accomplish this, I\u2019ll edit ", createVNode(_components.code, {
        children: "lib/pagekey.rb"
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
              color: "#F97583"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageKey"
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
            children: " self.hello_world"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '    "Good morning world and all who inhabit it!"'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Excellent. We\u2019re all set up as far as code goes. Now we can leverage Ruby\u2019s wonderfully streamlined gem workflow to build and test our creation. Watch how easy it is."
    }), "\n", createVNode(_components.h2, {
      id: "building-and-testing",
      children: "Building and Testing"
    }), "\n", createVNode(_components.p, {
      children: ["To package everything up, we will provide our ", createVNode(_components.code, {
        children: ".gemspec"
      }), " file as the only input:"]
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
            children: "gem"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey.gemspec"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "If all goes well, you\u2019ll see:"
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
            children: "Successfully"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " built"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " RubyGem"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Version:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.0.0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "File:"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey-0.0.0.gem"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Now we will install it so that it will be accessible from our code."
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
            children: "gem"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ./pagekey-0.0.0.gem"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For projects that use your gem, you may want to include it in your ", createVNode(_components.code, {
        children: "Gemfile"
      }), " and run ", createVNode(_components.code, {
        children: "bundle install"
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
            children: "# Inside Gemfile:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "gem "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'pagekey'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'~> 0.0.0'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Time for the moment of truth. We can test it on ", createVNode(_components.code, {
        children: "irb"
      }), ", the interactive ruby console. Type ", createVNode(_components.code, {
        children: "irb"
      }), " and it will start the interpreter."]
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
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'pagekey'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " => "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " PageKey"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "::hello_world"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " => "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Good morning world and all who inhabit it!"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Wonderful. It works as expected."
    }), "\n", createVNode(_components.h2, {
      id: "adding-the-cli",
      children: "Adding the CLI"
    }), "\n", createVNode(_components.p, {
      children: ["Right now, if I type ", createVNode(_components.code, {
        children: "pagekey"
      }), ", I\u2019ll get an angry message from my console, like: ", createVNode(_components.code, {
        children: "pagekey: command not found"
      }), ". This isn\u2019t good - I want to use my gem just like ", createVNode(_components.code, {
        children: "ls"
      }), ", ", createVNode(_components.code, {
        children: "cat"
      }), ", ", createVNode(_components.code, {
        children: "awk"
      }), ", or any other useful program!"]
    }), "\n", createVNode(_components.p, {
      children: ["In order to make this gem available under a specific terminal command, we\u2019ll have to create an ", createVNode(_components.strong, {
        children: "executable"
      }), " and link to it in our ", createVNode(_components.code, {
        children: ".gemspec"
      }), " file."]
    }), "\n", createVNode(_components.p, {
      children: ["The executable will basically be a short Ruby script that accepts command line arguments and routes them to the gem\u2019s code in ", createVNode(_components.code, {
        children: "./lib"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Create a directory to hold the file with ", createVNode(_components.code, {
        children: "mkdir bin"
      }), " and edit the ", createVNode(_components.code, {
        children: "bin/pagekey"
      }), " file:"]
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
            children: "#!/usr/bin/env ruby"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "require"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'pagekey'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "puts"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " PageKey"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "::hello_world"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Ensure that the file is executable by running ", createVNode(_components.code, {
        children: "chmod +x bin/pagekey"
      }), ". Our next step is to specify this executable in ", createVNode(_components.code, {
        children: "pagekey.gemspec"
      }), " so that it will be added to the system PATH variable when the gem is installed. Add the following line:"]
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
            children: "  s.executables "
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
            children: "'pagekey'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now the gem will look in the ", createVNode(_components.code, {
        children: "bin"
      }), " directory for the ", createVNode(_components.code, {
        children: "pagekey"
      }), " executable when you type ", createVNode(_components.code, {
        children: "pagekey"
      }), " on the command line."]
    }), "\n", createVNode(_components.h2, {
      id: "pushing-and-publishing",
      children: "Pushing and Publishing"
    }), "\n", createVNode(_components.p, {
      children: "After these efforts, our beautiful gem is ready to go. But, until it\u2019s in the open air, I\u2019d it\u2019s nothing but a diamond in the rough (how pun-tastic!). Let\u2019s get this thing out there in the real world."
    }), "\n", createVNode(_components.p, {
      children: ["Make sure that you build your gem as described above with ", createVNode(_components.code, {
        children: "gem build pagekey.gemspec"
      }), ". Then, create an account at ", createVNode(_components.a, {
        href: "http://www.rubygems.org",
        children: "rubygems.org"
      }), ". Replace ", createVNode(_components.code, {
        children: "USERNAME"
      }), " with your RubyGems username in the following snippet, and run it:"]
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
            children: " -u"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " USERNAME"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://rubygems.org/api/v1/api_key.yaml"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "~"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/.gem/credentials; "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "chmod"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0600"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/.gem/credentials"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will set up your system with the proper credentials to publish gems to your RubyGems account. The final step is very simple: Just push it!"
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
            children: "gem"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " push"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pagekey-0.0.0.gem"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The gem will upload, and it will become available for the world to see and download!"
    }), "\n", createVNode(_components.h2, {
      id: "bonus-useful-rake-automation",
      children: "Bonus: Useful Rake Automation"
    }), "\n", createVNode(_components.p, {
      children: ["One more tool that may be helpful as you get into the flow of gem development is ", createVNode(_components.code, {
        children: "rake"
      }), ", which allows you to automate processes using the Ruby programming language. In the base directory for your gem, add a ", createVNode(_components.code, {
        children: "Rakefile"
      }), " to hold your scripts. I\u2019ve included an example that proved very helpful as I pursued my own little gem project:"]
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
            children: "GEM_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "pagekey"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "GEM_VERSION"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "0.0.0"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "task "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":default"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " => "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":build"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "task "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":build"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  system"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "gem build "'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GEM_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ".gemspec"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "task "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":install"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " => "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":build"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  system"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "gem install "'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GEM_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "-"'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GEM_VERSION"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ".gem"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "task "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":publish"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " => "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":build"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  system"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'gem push '"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GEM_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "-"'
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " GEM_VERSION"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ".gem"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "task "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: ":clean"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  system"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "rm *.gem"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "end"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["To run these commands, just type ", createVNode(_components.code, {
        children: "rake"
      }), ", ", createVNode(_components.code, {
        children: "rake build"
      }), ", ", createVNode(_components.code, {
        children: "rake install"
      }), ", ", createVNode(_components.code, {
        children: "rake publish"
      }), ", or ", createVNode(_components.code, {
        children: "rake clean"
      }), " and see what happens."]
    }), "\n", createVNode(_components.p, {
      children: ["The outcome of each task is fairly self-explanatory. The build command just builds the gem for you. The install command builds the gem and installs it, so that you can ", createVNode(_components.code, {
        children: "require"
      }), " it and try it out. The publish command also builds the gem, after which it takes care of pushing the gem for you."]
    }), "\n", createVNode(_components.p, {
      children: ["The arrow ", createVNode(_components.code, {
        children: "=>"
      }), " indicates a dependency of tasks. For example, ", createVNode(_components.code, {
        children: "task :install => :build"
      }), " indicates that ", createVNode(_components.code, {
        children: ":install"
      }), " depends on ", createVNode(_components.code, {
        children: ":build"
      }), ", and so every time that ", createVNode(_components.code, {
        children: "rake install"
      }), " runs, the commands under the ", createVNode(_components.code, {
        children: ":build"
      }), " task run beforehand."]
    }), "\n", createVNode(_components.p, {
      children: ["This ", createVNode(_components.code, {
        children: "Rakefile"
      }), " relies heavily on the ", createVNode(_components.code, {
        children: "system"
      }), " command, which utilizes the shell interpreter of the system you\u2019re runnning on. This means that the file is OS specific. All of these tasks can likely be performed in pure Ruby, but I found it much easier, especially for simple, small projects, to write everything as a ", createVNode(_components.code, {
        children: "system"
      }), " command. As you grow, however, it may be best to move away from OS-specific code."]
    }), "\n", createVNode(_components.p, {
      children: ["As a challenge, I\u2019ll suggest to you one way to greatly improve this ", createVNode(_components.code, {
        children: "Rakefile"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Right now, you\u2019d have to update the ", createVNode(_components.code, {
        children: ".gemspec"
      }), " file ", createVNode(_components.em, {
        children: "and"
      }), " your ", createVNode(_components.code, {
        children: "Rakefile"
      }), " if you wanted to change the version from ", createVNode(_components.code, {
        children: "0.0.0"
      }), " to ", createVNode(_components.code, {
        children: "0.0.1"
      }), ". This is not ideal. Modify your gem\u2019s code such that it references the ", createVNode(_components.code, {
        children: "GEM_VERSION"
      }), " in only one place within the application.  Since everything is written in Ruby, you would be able to ", createVNode(_components.code, {
        children: "require"
      }), " a configuration file that contains the version as a variable and use that. Perhaps it would also be helpful to include a task in your ", createVNode(_components.code, {
        children: "Rakefile"
      }), " called ", createVNode(_components.code, {
        children: ":increment"
      }), ", which updates your gem version by incrementing the last number (moving ", createVNode(_components.code, {
        children: "0.0.0"
      }), " to ", createVNode(_components.code, {
        children: "0.0.1"
      }), " automatically)."]
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping Up"
    }), "\n", createVNode(_components.p, {
      children: "Thanks for reading. I hope this article will help you get started writing your first Ruby gem, so that you can contribute to the large and impressive open-source Ruby community. Best of luck!"
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
const url = "src/content/post/blog/2018/ruby-gem/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/ruby-gem/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/ruby-gem/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
