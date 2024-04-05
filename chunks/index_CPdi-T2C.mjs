import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const __0___vga1_png__ = new Proxy({"src":"/_astro/vga1.D6uC3KjV.png","width":1264,"height":918,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/vga1.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/vga1.png");
							return target[name];
						}
					});

const __1___vga2_png__ = new Proxy({"src":"/_astro/vga2.txxBAwgx.png","width":1278,"height":918,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/vga2.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/vga2.png");
							return target[name];
						}
					});

const frontmatter = {
  "title": "OS15: Writing a Simple VGA Driver (Bare-Metal Graphics)",
  "publishDate": "2022-05-03T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/GllPGcVLEDY/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["assembly", "c", "tutorial"],
  "readingTime": 8
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "steps-to-reproduce",
    "text": "Steps to Reproduce"
  }, {
    "depth": 2,
    "slug": "code",
    "text": "Code"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "qemu-hardware",
    "text": "QEMU Hardware"
  }, {
    "depth": 2,
    "slug": "vga-hardware",
    "text": "VGA Hardware"
  }, {
    "depth": 2,
    "slug": "settings-the-graphics-mode-without-the-bios",
    "text": "Settings the Graphics Mode (without the BIOS)"
  }, {
    "depth": 2,
    "slug": "writing-the-code",
    "text": "Writing the Code"
  }, {
    "depth": 2,
    "slug": "were-stuck-in-vga-mode",
    "text": "We\u2019re Stuck in VGA Mode"
  }, {
    "depth": 2,
    "slug": "other-lessons-learned",
    "text": "Other Lessons Learned"
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
      "astro-image": "astro-image",
      blockquote: "blockquote",
      code: "code",
      em: "em",
      h2: "h2",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      section: "section",
      span: "span",
      strong: "strong",
      sup: "sup",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Our OS just got a lot more colorful. In this post, we figure out how to draw on the screen by switching to VGA mode and manually editing the video memory."
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "GllPGcVLEDY"
    }), "\n", createVNode(_components.p, {
      children: "Thanks to Scott Spitler for suggesting this topic."
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Intro"
      }), "\n", createVNode(_components.li, {
        children: "0:35 Demo (Emulated)"
      }), "\n", createVNode(_components.li, {
        children: "1:04 Demo (Real hardware)"
      }), "\n", createVNode(_components.li, {
        children: "2:04 VGA Background"
      }), "\n", createVNode(_components.li, {
        children: "2:34 QEMU Hardware"
      }), "\n", createVNode(_components.li, {
        children: "3:27 VGA Hardware"
      }), "\n", createVNode(_components.li, {
        children: "4:52 Setting the Graphics Mode"
      }), "\n", createVNode(_components.li, {
        children: "5:57 CODE WALKTHROUGH"
      }), "\n", createVNode(_components.li, {
        children: "9:28 Stuck in VGA Mode"
      }), "\n", createVNode(_components.li, {
        children: "11:30 Other lessons learned"
      }), "\n", createVNode(_components.li, {
        children: "12:17 Outro"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Clone the repo: ", createVNode(_components.code, {
            children: "git clone https://github.com/pagekeysolutions/pkos"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enter the repo: ", createVNode(_components.code, {
            children: "cd pkos"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Check out the code snapshot for this post: ", createVNode(_components.code, {
            children: "git checkout vid/015"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enable X connections: ", createVNode(_components.code, {
            children: "xhost local:root"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Run the OS on QEMU: ", createVNode(_components.code, {
            children: "docker-compose up"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos015",
          children: "Link to tag"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/pagekeysolutions/pkos/compare/vid/os014..vid/os015",
          children: "Diff from previous video"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: ["VGA stands for Video Graphics Array ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". Designed for use with CRT monitors, this old-fashioned video display chipset uses an analog signal. It has been replaced by DVI, or Digital Video Interface ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-2",
          id: "user-content-fnref-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), ". As it turns out, the HDMI standard is just DVI with better color support and audio bundled into the same (smaller) connector ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "qemu-hardware",
      children: "QEMU Hardware"
    }), "\n", createVNode(_components.p, {
      children: ["I thought it may be helpful to look into what hardware is being simulated in our beloved i386 QEMU emulator. Thankfully, the man page for ", createVNode(_components.code, {
        children: "qemu-system-i386"
      }), " tells us exactly what to expect. For VGA, emulator uses the \u201CCirrus CLGD 5446 PCI VGA card or dummy VGA card with Bochs VESA extensions\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-4",
          id: "user-content-fnref-4",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "4"
        })
      }), ".  This card connects via the PCI bus ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-5",
          id: "user-content-fnref-5",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "5"
        })
      }), ".  It seems to be old enough that it\u2019s hard to purchase anywhere. I am wondering how modern computers, like the laptop I\u2019ve tried this OS out on in ", createVNode(_components.a, {
        href: "../../2020/pkos/10",
        children: "OS10"
      }), ", support VGA mode for x86. I can\u2019t seem to find any sources on it, but I thought that I read somewhere (maybe on the OSDev Wiki) that the external VGA chipsets were replaced with a smaller version included directly on the motherboard."]
    }), "\n", createVNode(_components.h2, {
      id: "vga-hardware",
      children: "VGA Hardware"
    }), "\n", createVNode(_components.p, {
      children: "As always, the OS Dev Wiki has our back on this topic. Their page on VGA hardware greets me with an encouraging quote:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "While the VGA chip is quite a simple piece of hardware \u2026 it is possibly one of the most complicated devices to program for"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Wonderful! However, it goes on to mention that there are many shortcuts you can take to make it easier, and it\u2019s still a good place to get your start developing video drivers ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), ". With this in mind, I found some code in the public domain that I was able to make heavy use of to get ", createVNode(_components.em, {
        children: "something"
      }), " working, even if that something isn\u2019t the most elegant graphics code ever written. The OS Dev post ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), " goes into great depth about which ports are used to control VGA. It seems that a combination of I/O ports are used to program the chipset into the right mode, and then you can use memory-mapped I/O once everything is set up. The code that I \u201Cborrowed\u201D took care of the hard part of writing very specific values to VGA I/O ports, and then I was able to quite simply modify the right memory locations to draw on the screen."]
    }), "\n", createVNode(_components.p, {
      children: ["One other tidbit that I learned from ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), " is that VGA uses a \u201Csequencer,\u201D among other devices in its rendering pipeline (if you could call it that). The sequencer is connected to the VGA memory space, reading it and generating colors that are fed to subsequent stages. Also, it\u2019s worth noting that there are 4 planes of VGA memory, each 64 KB in size, for a total of 256 KB."]
    }), "\n", createVNode(_components.h2, {
      id: "settings-the-graphics-mode-without-the-bios",
      children: "Settings the Graphics Mode (without the BIOS)"
    }), "\n", createVNode(_components.p, {
      children: ["How do you set the graphics mode in protected mode? The sage answer comes again from OSDev ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-7",
          id: "user-content-fnref-7",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "7"
        })
      }), ":"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "You don\u2019t"
        }), ". Graphics programming is fun, but graphics are hardly essential for an OS. ", createVNode(_components.strong, {
          children: "Don\u2019t get side-tracked"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["In fact, it\u2019s recommended that you avoid getting too deep into this topic unless you have \u201Cmore than one life to waste\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-8",
          id: "user-content-fnref-8",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "8"
        })
      }), ". Apparently, you can make VGA work without the BIOS and still get some low-resolution graphics working, but to move beyond it, you\u2019ll hit some serious barriers. Graphics cards would ", createVNode(_components.strong, {
        children: "each, separately"
      }), " require their own graphics driver implementation, and there often isn\u2019t sufficient documentation on these cards ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-8",
          id: "user-content-fnref-8-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "8"
        })
      }), ", meaning that you\u2019d be reverse engineering it. That being said, at some point ", createVNode(_components.em, {
        children: "far"
      }), " down the line, I\u2019m sure there\u2019s a way to obtain implementations of graphics drivers for popular cards and compile them specifically for our OS. But this is all besides the point - let\u2019s jump into the actual code of writing the VGA driver."]
    }), "\n", createVNode(_components.h2, {
      id: "writing-the-code",
      children: "Writing the Code"
    }), "\n", createVNode(_components.p, {
      children: ["The code that helped me get this working was found at ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-9",
          id: "user-content-fnref-9",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "9"
        })
      }), ". It\u2019s an actual example of techniques for changing the graphics mode without the BIOS. The file itself is huge, and I made no effort to build or run it. Instead, I searched for relevant code snippets that I could use in PKOS. I found ", createVNode(_components.code, {
        children: "write_regs"
      }), " to be a key function. This, paired with a character array named ", createVNode(_components.code, {
        children: "g_320x200x256"
      }), ", representing register values required to enter 320x200 VGA resolution with a color-depth of 256, allowed me to change the graphics mode. I added a command to ", createVNode(_components.code, {
        children: "kernel.c"
      }), " so that whenever you type ", createVNode(_components.code, {
        children: "vga"
      }), ", it runs the ", createVNode(_components.code, {
        children: "vga_test()"
      }), " function in ", createVNode(_components.code, {
        children: "vga.c"
      }), ", which in turn runs ", createVNode(_components.code, {
        children: "write_regs(g_320x200x256)"
      }), ". When we do this, our text-based interface goes away, and we see something cool!"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __0___vga1_png__,
        alt: "VGA Mode with Random Noise"
      }), "\n", createVNode("figcaption", {
        children: "Our first glimpse of VGA mode"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Beautiful! The coolest part of this is that we seem to be unintentionally visualizing a section of memory as VGA. The little dots of yellow and stripes of gray must have had some other meaning to the computer before we entered this mode, though I\u2019m not sure what. Maybe the buffer for our text interface that just disappeared is represented here."
    }), "\n", createVNode(_components.p, {
      children: ["Our next step is to figure out how to clear the screen. Again, I borrow some code from [9], modifying it to compile with our OS. Specifically, I got rid of the ", createVNode(_components.code, {
        children: "far"
      }), " keyword - I wasn\u2019t sure what this was, and neither was our compiler! This gave us the following function to plot a pixel:"]
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
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " vga_plot_pixel"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " x"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " y"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "unsigned"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " short"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	unsigned"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " short"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " offset "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 320"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " y;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	unsigned"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " char"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "VGA "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "unsigned"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " char*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") VGA_ADDRESS;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "	VGA"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[offset] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " color;"
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
      children: ["We simply calculate the address of the color we\u2019d like to update based on ", createVNode(_components.code, {
        children: "x"
      }), " and ", createVNode(_components.code, {
        children: "y"
      }), ", and then change it in memory! I originally had the wrong address for ", createVNode(_components.code, {
        children: "VGA_ADDRESS"
      }), ", and so this code didn\u2019t seem to do anything. The correct value is ", createVNode(_components.code, {
        children: "0xA0000"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["We\u2019re now free to clear the screen by plotting color 0 (black) on every pixel from 0,0 to 320,200. From that point on, we can have some fun with our ", createVNode(_components.code, {
        children: "vga_plot_pixel"
      }), " function. We\u2019re basically free to draw whatever we want! As for me, I drew some happy faces, a rectangle, and a pallete of colors ", createVNode(_components.code, {
        children: "0x0"
      }), " through ", createVNode(_components.code, {
        children: "0xF"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_component0, {
        src: __1___vga2_png__,
        alt: "VGA Mode with Custom Drawing"
      }), "\n", createVNode("figcaption", {
        children: "The output of our custom drawing code"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["While we apparently have 256 colors available in this mode, I did not explore past color ", createVNode(_components.code, {
        children: "0xF"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "were-stuck-in-vga-mode",
      children: "We\u2019re Stuck in VGA Mode"
    }), "\n", createVNode(_components.p, {
      children: ["Unfortunately, I was not able to find a way out of this mode. I left my various unsuccessful attempts on the ", createVNode(_components.code, {
        children: "vga-text-mode"
      }), " branch in the repo. Though ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-9",
          id: "user-content-fnref-9-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "9"
        })
      }), " provides ", createVNode(_components.code, {
        children: "g_80x25_text"
      }), " register values, writing this with ", createVNode(_components.code, {
        children: "write_regs"
      }), " when the user hits ESC was not enough. The actual code also writes 4096-byte font into a specific place in ", createVNode(_components.em, {
        children: "virtual"
      }), " memory. Unfortunately, this makes use of external dependencies to calculate, and I wasn\u2019t able to get it to work. Depending on your compiler, this would either be a ", createVNode(_components.code, {
        children: "memcpy"
      }), ", include some variables from ", createVNode(_components.code, {
        children: "dos.h"
      }), ", or something like that. Since we\u2019re running on bare-metal, we don\u2019t have ", createVNode(_components.code, {
        children: "dos.h"
      }), " and we\u2019d have to roll our own ", createVNode(_components.code, {
        children: "memcpy"
      }), ". I took a quick-and-dirty attempt at ", createVNode(_components.code, {
        children: "memcpy"
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
            children: "// Famous last words - how hard can memcpy be"
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
            children: " memcpy"
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
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "dest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void*"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " n"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " n; i"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "		*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")dest "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")src)[i];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "	}"
          })
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
      children: "Sadly, this didn\u2019t seem to help, so I gave up on it for now. The only way out of this mode is a reboot!"
    }), "\n", createVNode(_components.h2, {
      id: "other-lessons-learned",
      children: "Other Lessons Learned"
    }), "\n", createVNode(_components.p, {
      children: ["I was having trouble getting into the debugger, so I added a script for debugging named ", createVNode(_components.code, {
        children: "scripts/docker_run_debug"
      }), " which allows easy access to the existing debugging functionality with QEMU and GDB. It was poking around in memory and checking values that made me realize I had the wrong VGA address."]
    }), "\n", createVNode(_components.p, {
      children: ["I also found out about how global variables work in C. Apparently, you should declare the global as ", createVNode(_components.code, {
        children: "extern"
      }), " in your header file, and then actually give it a value in your implementation file. Otherwise, you\u2019ll get yelled at for having multiple definitions of the same variable, even if you use header guards ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-10",
          id: "user-content-fnref-10",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "10"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Speaking of which, I added header guards! Without these lovely ", createVNode(_components.code, {
        children: "#ifndef __HEADER_H"
      }), ",  ", createVNode(_components.code, {
        children: "#define __HEADER_H"
      }), ", ", createVNode(_components.code, {
        children: "#endif"
      }), " combos, you\u2019ll get all sorts of errors for mutliple definitions of the same variable or function."]
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
              href: "https://www.britannica.com/technology/VGA",
              children: "https://www.britannica.com/technology/VGA"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://computer.howstuffworks.com/monitor3.htm",
              children: "https://computer.howstuffworks.com/monitor3.htm"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.toptenreviews.com/how-hdmi-cables-work",
              children: "https://www.toptenreviews.com/how-hdmi-cables-work"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-4",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://manpages.debian.org/stretch/qemu-system-x86/qemu-system-i386.1.en.html",
              children: "https://manpages.debian.org/stretch/qemu-system-x86/qemu-system-i386.1.en.html"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-4",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 4",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-5",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "http://www.vgamuseum.info/index.php/cpu/item/147-cirrus-logic-cl-gd5446",
              children: "http://www.vgamuseum.info/index.php/cpu/item/147-cirrus-logic-cl-gd5446"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-5",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 5",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-6",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://wiki.osdev.org/VGA_Hardware",
              children: "https://wiki.osdev.org/VGA_Hardware"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6-3",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "3"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-7",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://files.osdev.org/mirrors/geezer/osd/graphics/index.htm",
              children: "https://files.osdev.org/mirrors/geezer/osd/graphics/index.htm"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-7",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 7",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-8",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://wiki.osdev.org/How_do_I_set_a_graphics_mode",
              children: "https://wiki.osdev.org/How_do_I_set_a_graphics_mode"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-8",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 8",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-8-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 8-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-9",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://files.osdev.org/mirrors/geezer/osd/graphics/modes.c",
              children: "https://files.osdev.org/mirrors/geezer/osd/graphics/modes.c"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-9",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 9",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-9-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 9-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-10",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://stackoverflow.com/questions/8201944/multiple-definition-and-header-only-libraries",
              children: "https://stackoverflow.com/questions/8201944/multiple-definition-and-header-only-libraries"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-10",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 10",
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
const url = "src/content/post/blog/2022/pkos/15/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/15/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
