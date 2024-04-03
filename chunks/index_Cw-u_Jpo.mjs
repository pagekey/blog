import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_L4PgzY7a.mjs';
import 'clsx';

const frontmatter = {
  "title": "Push Out Your SSH Keys - Jump Nodes in a Jiffy!",
  "publishDate": "2018-04-16T00:00:00.000Z",
  "image": "/blog/2018/push-ssh-keys.jpg",
  "author": "Steve Grice",
  "tags": ["tutorial"],
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisite",
    "text": "Prerequisite"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "the-hard-way",
    "text": "The Hard Way"
  }, {
    "depth": 2,
    "slug": "the-easy-way",
    "text": "The Easy Way"
  }, {
    "depth": 2,
    "slug": "final-thoughts",
    "text": "Final Thoughts"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Every day, system administrators, students, professors, and everyday computer users struggle with entering their password on the command line. With each passing jump from one system to another, ten seconds tick by. Whoops, that\u2019s a mistake - make it 30!"
    }), "\n", createVNode(_components.p, {
      children: "Over time, entering your password every time you want to move between nodes using SSH can become a real hassle. The benefits from \u201Cpushing out\u201D your SSH keys, or making all of the nodes you typically jump to trust your public key, will save you more time with every use, snowballing from seconds, to minutes, to hours!"
    }), "\n", createVNode(_components.p, {
      children: "This article describes two ways of pushing out your keys: The easy way, and the hard way."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Photo by ", createVNode(_components.a, {
          href: "https://www.pexels.com/photo/man-wearing-blue-shorts-about-to-dive-on-body-of-water-1098365/",
          children: "Oliver Sj\xF6str\xF6m"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "prerequisite",
      children: "Prerequisite"
    }), "\n", createVNode(_components.p, {
      children: "To complete these steps, you\u2019ll need to generate a public/private keypair if you haven\u2019t already. Run this command:"
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
            children: "ls"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/.ssh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you see ", createVNode(_components.code, {
        children: "id_rsa.pub"
      }), " and ", createVNode(_components.code, {
        children: "id_rsa"
      }), " in there, then you\u2019re all set. If not, run this command:"]
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
            children: "ssh-keygen"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -t"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " rsa"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -b"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4096"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Press enter when prompted, keeping default values for now. If you want to know more about how you can customize your keys and make them more or less secure, feel free to Google it!"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019ve never looked into it, SSH may seem mysterious - you enter an IP or hostname, and just like that, you\u2019ve got a terminal window acting like you\u2019re on that machine! It seems crazy, but really, it\u2019s just two computer programs running. The first is the ", createVNode(_components.strong, {
        children: "ssh client"
      }), ", and the other is the ", createVNode(_components.strong, {
        children: "ssh server"
      }), ", or the ", createVNode(_components.strong, {
        children: "ssh daemon"
      }), ". As you\u2019ll see, both can be running on the same machine at the same time."]
    }), "\n", createVNode(_components.p, {
      children: "The server runs on the machine whose data you\u2019re trying to access. It watches the network constantly, looking for new connections, and when it finds one, starting a new terminal session. The client is the program that actually goes out and requests access."
    }), "\n", createVNode(_components.p, {
      children: "When you\u2019re authenticating, or logging in, there are at least two ways of getting in. The first is with a password, which I\u2019m sure you\u2019re already accustomed to. The SSH client securely transfers the password over the network and the server checks it against the corresponding user account on that machine."
    }), "\n", createVNode(_components.p, {
      children: ["Another way to authenticate is with a ", createVNode(_components.strong, {
        children: "public / private keypair,"
      }), " which you should have generated using the steps above. A public / private keypair is like a lock and key. Your private key is a secret that only you should have access to - anyone else who has it can pretend to be you! The public key, however, can be distributed to anyone and everyone who wants to send you data or verify that you are who you say you are. Thanks to the math behind these keys, it\u2019s computationally infeasible (read: too hard, even for computers, to figure out in any reasonable amount of time) for you to reverse them."]
    }), "\n", createVNode(_components.h2, {
      id: "the-hard-way",
      children: "The Hard Way"
    }), "\n", createVNode(_components.p, {
      children: "You may be thinking, \u201CHey, what\u2019s the deal? This is 2018, and I want my results now. I want the easy, Google-verified, one-liner method to accomplishing this.\u201D"
    }), "\n", createVNode(_components.p, {
      children: "Well, my friend, there is a reason we\u2019re starting with the hard way: Learning! If you want to get your one-liner and move on, feel free to scroll on down to the next section. In the mean time, the rest of us will be up here, finding out a bit more about how SSH really works."
    }), "\n", createVNode(_components.p, {
      children: ["When you\u2019ve generated the public / private keypair as directed, there will be a ", createVNode(_components.code, {
        children: ".ssh"
      }), " directory in your home area containing some special files. Remember to use ", createVNode(_components.code, {
        children: "ls -al"
      }), " to see ", createVNode(_components.strong, {
        children: "all"
      }), " the files, even \u201Chidden\u201D ones that begin with a dot."]
    }), "\n", createVNode(_components.p, {
      children: ["One of the files in the ", createVNode(_components.code, {
        children: ".ssh"
      }), " directory is the ", createVNode(_components.code, {
        children: "authorized_keys"
      }), " file. If it exists, this file is used by the SSH program to detect whether or not someone is allowed to connect using a specific public / private keypair."]
    }), "\n", createVNode(_components.p, {
      children: ["To get our keys \u201Cpushed out\u201D, the public key from each node must be in the ", createVNode(_components.code, {
        children: "authorized_keys"
      }), " file. Assume that you\u2019re pushing keys from a ", createVNode(_components.strong, {
        children: "source"
      }), " node to a ", createVNode(_components.strong, {
        children: "destination"
      }), " node with the goal of not needing password entry to jump between these machines. We\u2019ll follow these steps:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "From your source node, securely copy your public key to the destination node\u2019s home directory:"
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
                children: "# From source node:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "scp"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/.ssh/id_rsa.pub"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " DESTINATION_HOSTNAME_OR_IP:~"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Login to your destination node with SSH. Sorry, you\u2019ll still need to enter a password this time."
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
                children: "ssh"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " DESTINATION_HOSTNAME_OR_IP"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Put the public key file we just copied over into the ", createVNode(_components.code, {
            children: "authorized_keys"
          }), " file on your destination. This way, we know to \u201Ctrust\u201D the source node. ", createVNode(_components.strong, {
            children: "NOTE:"
          }), " Make sure you use the append operator ", createVNode(_components.code, {
            children: ">>"
          }), " and NOT the redirect operator ", createVNode(_components.code, {
            children: ">"
          }), ". Otherwise, you\u2019ll overwrite any existing keys and have to push everything all over again!"]
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
                children: "# From destination node:"
              })
            }), "\n", createVNode(_components.span, {
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
                children: " ~/id_rsa.pub"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " >>"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/.ssh/authorized_keys"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "# Now we can remove this public key from our home directory"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/id_rsa.pub"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "We\u2019ve successfully told our destination node to trust the source node. Now we\u2019ll repeat steps 1 - 4 in reverse order, so that our source trusts our destination. In other words, we have to go both ways to make sure that passwords are not needed TO or FROM the nodes in question."
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
                children: "# Still on destination node:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "scp"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/.ssh/id_rsa.pub"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " SOURCE_HOSTNAME_OR_IP:~"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "ssh"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " SOURCE_HOSTNAME_OR_IP"
              })]
            }), "\n", createVNode(_components.span, {
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
                children: " ~/id_rsa.pub"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " >>"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/.ssh/authorized_keys"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " ~/id_rsa.pub"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "That about does it for the hard way. But it sure was a lot of work - and a lot of password typing! There\u2019s a better way, though. Stay tuned for\u2026"
    }), "\n", createVNode(_components.h2, {
      id: "the-easy-way",
      children: "The Easy Way"
    }), "\n", createVNode(_components.p, {
      children: ["Luckily, there is a handy little tool called ", createVNode(_components.code, {
        children: "ssh-copy-id"
      }), " that takes care of most of these steps for us. We can push keys from a source node to a destination node in just one line, like this:"]
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
            children: "# From source node:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ssh-copy-id"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/.ssh/id_rsa.pub"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " DESTINATION_HOSTNAME_OR_IP"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "-i"
      }), " command specifies which public / private key pair, or ", createVNode(_components.strong, {
        children: "identity"
      }), ", you want to use. You can use ", createVNode(_components.code, {
        children: "ssh-keygen"
      }), " to generate more than one pair, if desired or required."]
    }), "\n", createVNode(_components.p, {
      children: "Once you run that command and enter the password when prompted, you should be able to login to the destination node without a password. Try it out. Did it work? While you\u2019re at it, push keys the other way:"
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
            children: "# From desintation node:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ssh-copy-id"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " ~/.ssh/id_rsa.pub"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " SOURCE_HOSTNAME_OR_IP"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "All done! Wasn\u2019t that easy?"
    }), "\n", createVNode(_components.h2, {
      id: "final-thoughts",
      children: "Final Thoughts"
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s all for this quick SSH tip. If you liked this article, have comments or concerns, or just want to express yourself, leave a comment below. Check out some of the other articles on this blog for more technical info, or even try ", createVNode(_components.a, {
        href: "https://youtube.com/@PageKey",
        children: "our YouTube channel"
      }), " on for size. Thanks for reading!"]
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
const url = "src/content/post/blog/2018/push-ssh-keys/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/push-ssh-keys/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2018/push-ssh-keys/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
