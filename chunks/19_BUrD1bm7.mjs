import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import { $ as $$BlogYoutubeVideo } from './BlogYoutubeVideo_01kLtAlr.mjs';
import 'clsx';

const frontmatter = {
  "title": "OS19: More VGA + stdlib/memory improvements",
  "publishDate": "2022-09-12T00:00:00.000Z",
  "image": "http://i3.ytimg.com/vi/E26AtZNIj8c/hqdefault.jpg",
  "author": "Steve Grice",
  "category": "PageKey Operating System",
  "tags": ["assembly", "c", "tutorial"],
  "readingTime": 4
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "timestamps",
    "text": "Timestamps"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this video, we make massive improvements to stdlib, add memset and memcpy, and most importantly, allow ourselves to get out of VGA (graphics) mode once we enter it."
    }), "\n", createVNode(_components.p, {
      children: ["MR for this video: ", createVNode(_components.a, {
        href: "https://gitlab.com/pagekeytech/pkos/-/merge_requests/4",
        children: "https://gitlab.com/pagekeytech/pkos/-/merge_requests/4"
      })]
    }), "\n", "\n", createVNode($$BlogYoutubeVideo, {
      videoId: "E26AtZNIj8c"
    }), "\n", createVNode(_components.h2, {
      id: "timestamps",
      children: "Timestamps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "0:00 Debugging Walkthrough"
      }), "\n", createVNode(_components.li, {
        children: "2:23 Full System Demo"
      }), "\n", createVNode(_components.li, {
        children: "2:27 Demo on Real Hardware"
      }), "\n", createVNode(_components.li, {
        children: "3:00 Slides: Major Changes"
      }), "\n", createVNode(_components.li, {
        children: "6:06 Notes Walkthrough"
      }), "\n", createVNode(_components.li, {
        children: "7:28 Merge Request Walkthrough"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Only waste multiple lifetimes if you want hi res! Low res VGA is not too hard"
      }), "\n", createVNode(_components.li, {
        children: ["VGA resources osdev\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "http://www.osdever.net/FreeVGA/vga/vga.htm",
              children: "http://www.osdever.net/FreeVGA/vga/vga.htm"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Can fix up the cursor:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "http://www.osdever.net/FreeVGA/vga/textcur.htm",
              children: "http://www.osdever.net/FreeVGA/vga/textcur.htm"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Absolutely need a better way of analyzing memory - VGA and regular mem"
      }), "\n", createVNode(_components.li, {
        children: ["Installed ghex for exploring ", createVNode(_components.code, {
          children: "dump-guest-memory"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["In qemu:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: "dump-guest-memory mem.bin"
                })
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "ghex mem.bin"
                }), ", CTL-F for stuff"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://qemu-project.gitlab.io/qemu/system/monitor.html",
          children: "https://qemu-project.gitlab.io/qemu/system/monitor.html"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "info ramblock"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Has a vga ramblock etc"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "memsave\xA0addr\xA0size\xA0file"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "pmemsave addr size file"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "info mtree"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.qemu.org/docs/master/devel/memory.html",
          children: "https://www.qemu.org/docs/master/devel/memory.html"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["QEMU models:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Regular RAM"
              }), "\n", createVNode(_components.li, {
                children: "Memory-mapped IO (MMIO)"
              }), "\n", createVNode(_components.li, {
                children: "Rerouting physical memory"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Acyclic graph of MemoryRegion objects"
      }), "\n", createVNode(_components.li, {
        children: ["Types of regions\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "RAM"
          }), "\n", createVNode(_components.li, {
            children: "MMIO"
          }), "\n", createVNode(_components.li, {
            children: "ROM"
          }), "\n", createVNode(_components.li, {
            children: "ROM device"
          }), "\n", createVNode(_components.li, {
            children: "IOMMU"
          }), "\n", createVNode(_components.li, {
            children: "container (of other memory regions, for grouping)"
          }), "\n", createVNode(_components.li, {
            children: "alias"
          }), "\n", createVNode(_components.li, {
            children: "reservation"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.qemu.org/2018/02/09/understanding-qemu-devices/",
          children: "https://www.qemu.org/2018/02/09/understanding-qemu-devices/"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Understanding QEMU Devices"
          }), "\n", createVNode(_components.li, {
            children: "\u201DMost bare-metal machines are basically giant memory maps, where software poking at a particular address will have a particular side effect\u201D"
          }), "\n", createVNode(_components.li, {
            children: "x86 has two memory spaces - main and I/O"
          }), "\n", createVNode(_components.li, {
            children: ["Relevant to future video:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "\u201Chow to manage an IDE disk - the driver is merely software that is programmed to make specific I/O requests to a specific subset of the memory map (wherever the IDE bus lives, which is specific to the hardware board).\u201C"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://www.osdever.net/FreeVGA/vga/vgamem.htm",
          children: "http://www.osdever.net/FreeVGA/vga/vgamem.htm"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Accessing VGA memory"
          }), "\n", createVNode(_components.li, {
            children: "RAM Enable: Do we listen to the CPU?"
          }), "\n", createVNode(_components.li, {
            children: "Memory Map Select: Where do we read from?"
          }), "\n", createVNode(_components.li, {
            children: ["00 \u2014 A0000h-BFFFFh \u2014 128K\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: "pmemsave 0xa0000 128000 00.bin"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["01 \u2014 A0000h-AFFFFh \u2014 64K\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: "pmemsave 0xa0000 64000 01.bin"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["10 \u2014 B0000h-B7FFFh \u2014 32K\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: "pmemsave 0xa0000 32000 10.bin"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["11 \u2014 B8000h-BFFFFh \u2014 32K\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: createVNode(_components.code, {
                  children: "pmemsave 0xa0000 32000 11.bin"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/",
          children: "https://www.kraxel.org/blog/2019/09/display-devices-in-qemu/"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Display Devices in QEMU"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://blog.reds.ch/?p=1379",
          children: "https://blog.reds.ch/?p=1379"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Accessing the RAM of a QEMU Emulated System from another Process"
          }), "\n", createVNode(_components.li, {
            children: "Can map qemu to /dev/shm file"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "How do we check RAM enable, Memory Map Select fields on VGA?"
      }), "\n", createVNode(_components.li, {
        children: "Which parts of memory can we save stuff in without breaking everything?"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://wiki.osdev.org/Memory_Map_(x86)",
          children: "https://wiki.osdev.org/Memory_Map_(x86)"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Memory Map (x86)"
          }), "\n", createVNode(_components.li, {
            children: "\u201CThe region of RAM above 1 MiB is not standardized, well-defined, or contiguous.\u201D"
          }), "\n", createVNode(_components.li, {
            children: "I guess that means we just go for it??"
          }), "\n", createVNode(_components.li, {
            children: "0x00100000-0x00EFFFFF: RAM - free for use if it exists"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "info mtree"
        }), " seems to have various named regions (a DAG)"]
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
          children: createVNode(_components.span, {
            children: "(qemu) info mtree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "address-space: memory"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  0000000000000000-ffffffffffffffff (prio 0, i/o): system"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0000000000000000-0000000007ffffff (prio 0, i/o): alias ram-below-4g @pc.ram 0000000000000000-0000000007ffffff"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Trying to access fields"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://www.osdever.net/FreeVGA/vga/graphreg.htm#06",
          children: "http://www.osdever.net/FreeVGA/vga/graphreg.htm#06"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Graphics Address Register, Graphics Data Register"
          }), "\n", createVNode(_components.li, {
            children: "Address reg: 0x3CE"
          }), "\n", createVNode(_components.li, {
            children: "Data reg: 0x3CF"
          }), "\n", createVNode(_components.li, {
            children: "Misc graphics reg: Index 0x06"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://www.osdever.net/FreeVGA/vga/vgareg.htm",
          children: "http://www.osdever.net/FreeVGA/vga/vgareg.htm"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Accessing Graphics Registers: each have two unique read/write ports\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "First: Address Register. Second: Data Register"
              }), "\n", createVNode(_components.li, {
                children: "Best to save/restore address register (in case you\u2019re in an ISR)"
              }), "\n", createVNode(_components.li, {
                children: ["Steps\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: ["\n", createVNode(_components.ol, {
                      children: ["\n", createVNode(_components.li, {
                        children: "Input the value of address register, save it (inb)"
                      }), "\n"]
                    }), "\n"]
                  }), "\n", createVNode(_components.li, {
                    children: ["\n", createVNode(_components.ol, {
                      start: "2",
                      children: ["\n", createVNode(_components.li, {
                        children: "Output index of desired data reg to addr reg"
                      }), "\n"]
                    }), "\n"]
                  }), "\n", createVNode(_components.li, {
                    children: ["\n", createVNode(_components.ol, {
                      start: "3",
                      children: ["\n", createVNode(_components.li, {
                        children: "Read value of data reg, save if needed"
                      }), "\n"]
                    }), "\n"]
                  }), "\n", createVNode(_components.li, {
                    children: "4-5 only apply if writing"
                  }), "\n", createVNode(_components.li, {
                    children: ["\n", createVNode(_components.ol, {
                      start: "6",
                      children: ["\n", createVNode(_components.li, {
                        children: "Restore addr reg value"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["Accessing external registers\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Simpler - just read/write to their ports"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["So for us that looks like:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["RAM Enable - External Register / General Register\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Read port 0x3CC"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["Memory Map Select - Graphics Register\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Read port 0x3CE, save this value"
              }), "\n", createVNode(_components.li, {
                children: "Write 0x06 to 0x3CE"
              }), "\n", createVNode(_components.li, {
                children: "Read 0x3CF - this is misc graphics reg value"
              }), "\n", createVNode(_components.li, {
                children: "Write 0x3CE with original value"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Okay - RAM Enable is 1, Memory Select is 11, which is 0xB8000 - MAKES SENSE!"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://www.osdever.net/FreeVGA/vga/seqreg.htm",
          children: "http://www.osdever.net/FreeVGA/vga/seqreg.htm"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Can select various character sets"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://wiki.osdev.org/VGA_Hardware#The_Sequencer",
          children: "https://wiki.osdev.org/VGA_Hardware#The_Sequencer"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "\u201DThe Sequencer either operates in text (alphanumeric) mode or graphics mode\u201D"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.ardent-tool.com/video/VGA_Video_Modes.html",
          children: "https://www.ardent-tool.com/video/VGA_Video_Modes.html"
        })
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "There are five tasks you must perform to coordinate the different components of the VGA subsystem:"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Program the CRTC."
        }), "\n", createVNode(_components.li, {
          children: "Program the sequencer."
        }), "\n", createVNode(_components.li, {
          children: "Select a dot-clock frequency."
        }), "\n", createVNode(_components.li, {
          children: "Specify the displayed character height."
        }), "\n", createVNode(_components.li, {
          children: "Update relevant ROM BIOS variables."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Control components\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "CRT controller (CRTC)"
          }), "\n", createVNode(_components.li, {
            children: "Sequencer"
          }), "\n", createVNode(_components.li, {
            children: "Attribute controller"
          }), "\n", createVNode(_components.li, {
            children: "Graphics controller"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Create your own video modes!"
      }), "\n", createVNode(_components.li, {
        children: ["Video mode characteristics\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Vertical resolution: rows of pixels (scan lines) on screen"
          }), "\n", createVNode(_components.li, {
            children: "Horizontal resolution: number of characters or pixels per row"
          }), "\n", createVNode(_components.li, {
            children: "Data representation in buffer"
          }), "\n", createVNode(_components.li, {
            children: "Attribute decoding: colors, blinking, etc."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Horizontal/vertical resolution is flexible; data rep/attributes are constrained by hardware"
      }), "\n", createVNode(_components.li, {
        children: ["Resolution is a matter of timing\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "VGA output signal timing controls electron beam in video monitor"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Character clock = unit of time. Corresponds to 8 pixels in graphics mode, 8 or 9 in alphanumeric mode"
      }), "\n", createVNode(_components.li, {
        children: ["Three rates to consider\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Dot rate: rate at which video subsystem displays pixels. Established by dot clock"
          }), "\n", createVNode(_components.li, {
            children: "Horizontal scan rate: number of scan lines displayed per second"
          }), "\n", createVNode(_components.li, {
            children: "Vertical scan rate: refresh rate. Number of times per second screen refreshes"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Bits 0 through 4 of CRTC register 0x09 control displayed height of alphanum chars"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "http://www.osdever.net/FreeVGA/vga/vgaseq.htm",
          children: "http://www.osdever.net/FreeVGA/vga/vgaseq.htm"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "\u201DWhen the Alphanumeric Mode Disable field is set to 1, the sequencer operates in graphics mode where data in memory references pixel values, as opposed to the character map based operation used for alphanumeric mode.\u201D"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://files.osdev.org/mirrors/geezer/osd/graphics/modes.c",
          children: "https://files.osdev.org/mirrors/geezer/osd/graphics/modes.c"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "(copied code for writing regs, etc)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://forum.osdev.org/viewtopic.php?f=1&t=10910",
          children: "https://forum.osdev.org/viewtopic.php?f=1&t=10910"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Discussion about how to implement memcpy"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://sites.google.com/site/microprocessorsbits/string-instructions/rep",
          children: "https://sites.google.com/site/microprocessorsbits/string-instructions/rep"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Explanation of REP assembly"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://docs.oracle.com/cd/E19620-01/805-4693/instructionset-64/index.html",
          children: "https://docs.oracle.com/cd/E19620-01/805-4693/instructionset-64/index.html"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Explanation of variations of REP"
          }), "\n", createVNode(_components.li, {
            children: "rep movsb: Copy byte from esi to edi"
          }), "\n", createVNode(_components.li, {
            children: "repz stosl: copy eax to edl"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://medium.com/@ophirharpaz/a-summary-of-x86-string-instructions-87566a28c20c",
          children: "https://medium.com/@ophirharpaz/a-summary-of-x86-string-instructions-87566a28c20c"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Has a nice cheat sheet of x86 string instructions"
          }), "\n", createVNode(_components.li, {
            children: ["rep\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "movsb"
                }), ": move byte from ", createVNode(_components.code, {
                  children: "*ESI"
                }), " to ", createVNode(_components.code, {
                  children: "*EDI"
                })]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "lodsb"
                }), ": load a byte from ", createVNode(_components.code, {
                  children: "*ESI"
                }), " to ", createVNode(_components.code, {
                  children: "EAx"
                })]
              }), "\n", createVNode(_components.li, {
                children: "stosb: store a byte from EAx into *EDI"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://members.tripod.com/vitaly_filatov/ng/asm/asm_000.115.html",
          children: "https://members.tripod.com/vitaly_filatov/ng/asm/asm_000.115.html"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "stosb: copy al to di"
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
const url = "src/content/post/blog/2022/pkos/19.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/19.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/19.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
