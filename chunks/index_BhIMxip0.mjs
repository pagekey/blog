import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Ba_0T9xz.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DwFntjGq.mjs';
import { $ as $$Image } from './prerender_ey88lZ_4.mjs';
import 'clsx';

const frontmatter = {
  "title": "Snap the Line! Understanding Linear Regression and Scikit-Learn",
  "publishDate": "2021-05-20T00:00:00.000Z",
  "image": "/blog/2021/linear-regression-sklearn.jpg",
  "author": "Steve Grice",
  "tags": ["machine-learning"],
  "readingTime": 10
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "disclaimer-and-sources",
    "text": "Disclaimer and Sources"
  }, {
    "depth": 2,
    "slug": "a-real-world-example",
    "text": "A Real World Example"
  }, {
    "depth": 2,
    "slug": "the-math",
    "text": "The Math"
  }, {
    "depth": 3,
    "slug": "population-vs-sample-statistics",
    "text": "Population vs. Sample Statistics"
  }, {
    "depth": 3,
    "slug": "residuals-and-error",
    "text": "Residuals and Error"
  }, {
    "depth": 4,
    "slug": "whats-a-residual",
    "text": "What\u2019s a Residual?"
  }, {
    "depth": 4,
    "slug": "how-is-residual-different-from-error",
    "text": "How is residual different from error?"
  }, {
    "depth": 4,
    "slug": "understanding-correlation-coefficients",
    "text": "Understanding Correlation Coefficients"
  }, {
    "depth": 4,
    "slug": "sample-mean",
    "text": "Sample Mean"
  }, {
    "depth": 4,
    "slug": "standard-deviation",
    "text": "Standard Deviation"
  }, {
    "depth": 4,
    "slug": "z-scores",
    "text": "z-scores"
  }, {
    "depth": 4,
    "slug": "calculating-correlation-coefficients",
    "text": "Calculating Correlation Coefficients"
  }, {
    "depth": 4,
    "slug": "ordinary-least-squares",
    "text": "Ordinary Least Squares"
  }, {
    "depth": 2,
    "slug": "the-fun-part---using-scikit-learn",
    "text": "The Fun Part - Using scikit-learn"
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
    annotation: "annotation",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    msqrt: "msqrt",
    mstyle: "mstyle",
    msub: "msub",
    msup: "msup",
    munder: "munder",
    munderover: "munderover",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Where do we start with something as complex as scikit-learn? At the beginning, of course!"
    }), "\n", createVNode(_components.p, {
      children: "The Linear Regression module in scikit-learn provides an excellent first step into the world of machine learning. Rather than having to read a 90 page paper, we can instead make use of the knowledge that we gained in our stats class to form a model that will make some predictions for us."
    }), "\n", createVNode(_components.p, {
      children: "If this sounds like a lot, don\u2019t worry. We\u2019ll briefly review the math concepts you need to know to fully understand what\u2019s going on, and also touch on an example with real-world data that will put things in perspective."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Photo by ", createVNode(_components.a, {
          href: "https://www.pexels.com/@nohkstudio?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels",
          children: "NOHK"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "disclaimer-and-sources",
      children: "Disclaimer and Sources"
    }), "\n", createVNode(_components.p, {
      children: "I am simultaneously learning and teaching this topic. I\u2019ve been watching various videos across the web to fill in my own personal knowledge gaps in statistics. The article below is my attempt to explain what I\u2019ve learned so far. If you\u2019re like me, you may want to try to figure out the answers yourself before reading my solution. To follow the same path that I did, check the sources at the end of this article. Each link contains some information that I cited somewhere in this article."
    }), "\n", createVNode(_components.h2, {
      id: "a-real-world-example",
      children: "A Real World Example"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s start with the problem that we\u2019re trying to solve, and then we can work our way back to a solution."
    }), "\n", createVNode(_components.p, {
      children: ["Khan Academy ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), " provides what may be the simplest problem we could attempt to solve with linear regression. Suppose you collect the height and weight of many individuals in your hometown and would like to find the relation between height and weight. To do so, you can create a scatter plot by plotting height along the x-axis and weight along the y-axis. In doing so, we are assuming that height is the independent variable and weight is the dependent variable."]
    }), "\n", createVNode(_components.p, {
      children: "Looking at a scatter plot, we can come up with a line ourselves. Just hold your finger up to the graph and you can approximate a \u201Cline of best fit.\u201D But this is machine learning, not people learning, so we\u2019ll need to automate the process of finding that fit line somehow."
    }), "\n", createVNode(_components.p, {
      children: "To do so, we\u2019ll need to think about how the data would relate to the fit line and apply some statistics that we\u2019ll learn in the next section."
    }), "\n", createVNode(_components.h2, {
      id: "the-math",
      children: "The Math"
    }), "\n", createVNode(_components.h3, {
      id: "population-vs-sample-statistics",
      children: "Population vs. Sample Statistics"
    }), "\n", createVNode(_components.p, {
      children: ["In statistics, a population contains ", createVNode(_components.strong, {
        children: "all"
      }), " members of a specific group, whereas a sample consists of a subset of that group ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-8",
          id: "user-content-fnref-8",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), ". For example, if you\u2019re trying to draw conclusions about people living in the United States, the population you\u2019re working with will be upwards of 300 million people. This makes it obvious why we would want to work with samples - there\u2019s no way you\u2019ll be able to gather reasonable, accurate data for 300 million people! Instead, you need to sample the population of 300 million to get a subset of people that represent the larger group."]
    }), "\n", createVNode(_components.p, {
      children: ["It seems in the world of statistics that you often have a choice between using formulas for the ", createVNode(_components.strong, {
        children: "population"
      }), " or for the ", createVNode(_components.strong, {
        children: "sample"
      }), ". In our case, we\u2019ll pretty much always be using the formula for ", createVNode(_components.strong, {
        children: "sample"
      }), ". I believe I know why this is (though I could be wrong): We\u2019re working to form a linear regression ", createVNode(_components.strong, {
        children: "model"
      }), " based on ", createVNode(_components.strong, {
        children: "training data"
      }), " (which is a sample). Then we apply our model to other members of the population that were not part of the training data set."]
    }), "\n", createVNode(_components.p, {
      children: "If we used every single member of the population as training data, then we\u2019d just be calculating it outright, wouldn\u2019t we? There would be nothing left to use the model on after training! For this reason, it makes sense to me that we\u2019re using the formulas for sample rather than for population."
    }), "\n", createVNode(_components.h3, {
      id: "residuals-and-error",
      children: "Residuals and Error"
    }), "\n", createVNode(_components.p, {
      children: ["In the context of the last problem, we are trying to find a line that most closely matches the dataset. Before we can come up with an entire continuous line to represent the dataset, we first have to figure out how to determine whether a ", createVNode(_components.strong, {
        children: "single data point"
      }), " is any good or not. To do so, we\u2019ll use the concept of a ", createVNode(_components.strong, {
        children: "residual"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "whats-a-residual",
      children: "What\u2019s a Residual?"
    }), "\n", createVNode(_components.p, {
      children: ["A residual is \u201Cthe difference between the observed value of the dependent variable (", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "y"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "y"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.625em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            })]
          })
        })]
      }), ") and the predicted value (", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "^"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })
        })]
      }), ") is called the residual (", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "e"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "e"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "e"
            })]
          })
        })]
      }), ")\u201D ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-2",
          id: "user-content-fnref-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ". As an equation, that would be:"]
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mi, {
                    children: "e"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "\u2212"
                  }), createVNode(_components.mover, {
                    accent: "true",
                    children: [createVNode(_components.mi, {
                      children: "y"
                    }), createVNode(_components.mo, {
                      children: "^"
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\ne=y-\\hat{y}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5167em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal sizing reset-size6 size7",
              children: "e"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.9333em",
                verticalAlign: "-0.2333em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal sizing reset-size6 size7",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), createVNode(_components.span, {
              class: "mbin sizing reset-size6 size7",
              children: "\u2212"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "1.0667em",
                verticalAlign: "-0.2333em"
              }
            }), createVNode(_components.span, {
              class: "mord accent sizing reset-size6 size7",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Notice that we use ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "^"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })
        })]
      }), " (prounounced \u201Cy hat\u201D) to represent our predicted value. All in all, the goal of linear regression is to find an equation for ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "^"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })
        })]
      }), ". First though, let\u2019s use the above equation to find the residual of a real-world example."]
    }), "\n", createVNode(_components.p, {
      children: ["Consider someone who is 5\u20198 and weighs 160 pounds. When all\u2019s said and done, we\u2019ll have an equation where we plug in the x-value, 5\u20198, and get a weight as a result. If the result is 170 pounds, then we have a residual of 160-170=-10 pounds. In math terms, ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "y"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mn, {
                  children: "160"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "y=160"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.625em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6444em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "160"
            })]
          })]
        })]
      }), " and ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "^"
                  })]
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mn, {
                  children: "170"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y}=170"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6444em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "170"
            })]
          })]
        })]
      }), ", meaning that residual ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "e"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mo, {
                  children: "\u2212"
                }), createVNode(_components.mn, {
                  children: "10"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "e=-10"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "e"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "\u2212"
            }), createVNode(_components.span, {
              class: "mord",
              children: "10"
            })]
          })]
        })]
      }), " for this particular point."]
    }), "\n", createVNode(_components.p, {
      children: "Another example is someone who is 6\u20190 and 200 lbs. If our model predicted that they would weight 190, the residual e=200-190=10."
    }), "\n", createVNode(_components.h4, {
      id: "how-is-residual-different-from-error",
      children: "How is residual different from error?"
    }), "\n", createVNode(_components.p, {
      children: ["Since the variable used for residual is ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "e"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "e"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "e"
            })]
          })
        })]
      }), ", you may think that it\u2019s the same thing as error. It\u2019s similar, but not quite the same. As it turns out, the ", createVNode(_components.strong, {
        children: "residual"
      }), " is the exact difference between the actual and predicted value for a given sample, as we\u2019ve already seen; the ", createVNode(_components.strong, {
        children: "error"
      }), " is the same thing, but for an entire population ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "4"
        })
      }), " ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-4",
          id: "user-content-fnref-4",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "5"
        })
      }), ". This means that the error can be hard or impossible to calculate exactly, so it\u2019s usually just theoretical."]
    }), "\n", createVNode(_components.h4, {
      id: "understanding-correlation-coefficients",
      children: "Understanding Correlation Coefficients"
    }), "\n", createVNode(_components.p, {
      children: ["Another key part of calculating the regression line is to correlation coefficients. Khan Academy concisely summarizes the concept: \u201CCorrelation coefficients are trying to measure how well a ", createVNode(_components.strong, {
        children: "linear model"
      }), " can describe the relationship between ", createVNode(_components.strong, {
        children: "two variables"
      }), "\u201D (emphasis mine) ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-5",
          id: "user-content-fnref-5",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), ". See ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-5",
          id: "user-content-fnref-5-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), " for a video to build intuition, so that you can match the given correlation coefficient to a dataset based on how well it is correlated and whether the correlation is positive or negative."]
    }), "\n", createVNode(_components.p, {
      children: ["The ability to calculate a correlation coefficient ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "r"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "r"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "r"
            })]
          })
        })]
      }), " will play a key role in determining the slope ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "m"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "m"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "m"
            })]
          })
        })]
      }), " of our regression line ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "^"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.6944em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        style: {
                          marginRight: "0.03588em"
                        },
                        children: "y"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.1944em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "In order to actually calculate the correlation coefficient, we\u2019ll need two more concepts in our toolkit: sample mean and standard deviation."
    }), "\n", createVNode(_components.h4, {
      id: "sample-mean",
      children: "Sample Mean"
    }), "\n", createVNode(_components.p, {
      children: "The sample mean is just the mean, or average, of a given set of samples. Because our model will be bivariate, involving two variables, we\u2019ll calculate the sample mean for both x, the independent variable, and y, the dependent variable."
    }), "\n", createVNode(_components.p, {
      children: "Calculating the sample mean is as easy as adding up all the values and dividing by the total number of values, just like any other average. Mathematically, it would be"
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mover, {
                    accent: "true",
                    children: [createVNode(_components.mi, {
                      children: "x"
                    }), createVNode(_components.mo, {
                      children: "\u02C9"
                    })]
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.munder, {
                        children: [createVNode(_components.mo, {
                          children: "\u2211"
                        }), createVNode(_components.mrow, {
                          children: [createVNode(_components.mi, {
                            children: "x"
                          }), createVNode(_components.mo, {
                            children: "\u2208"
                          }), createVNode(_components.mi, {
                            children: "X"
                          })]
                        })]
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "\u2223"
                      }), createVNode(_components.mi, {
                        children: "X"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "\u2223"
                      })]
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\n\\bar{x}=\\frac{\\sum_{x \\in X}{x}}{|X|}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6813em"
              }
            }), createVNode(_components.span, {
              class: "mord accent sizing reset-size6 size7",
              children: createVNode(_components.span, {
                class: "vlist-t",
                children: createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.5678em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        children: "x"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "\u02C9"
                        })
                      })]
                    })]
                  })
                })
              })
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "2.8793em",
                verticalAlign: "-1.1232em"
              }
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.4634em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: "\u2223"
                          }), createVNode(_components.span, {
                            class: "mord mathnormal",
                            style: {
                              marginRight: "0.07847em"
                            },
                            children: "X"
                          }), createVNode(_components.span, {
                            class: "mord",
                            children: "\u2223"
                          })]
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.9134em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mop",
                            children: [createVNode(_components.span, {
                              class: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "\u2211"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.1582em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.5027em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mtight",
                                          children: [createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            children: "x"
                                          }), createVNode(_components.span, {
                                            class: "mrel mtight",
                                            children: "\u2208"
                                          }), createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.07847em"
                                            },
                                            children: "X"
                                          })]
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.3234em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord",
                            children: createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "x"
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.936em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "for all points x in the domain X and"
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mover, {
                    accent: "true",
                    children: [createVNode(_components.mi, {
                      children: "x"
                    }), createVNode(_components.mo, {
                      children: "\u02C9"
                    })]
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.munder, {
                        children: [createVNode(_components.mo, {
                          children: "\u2211"
                        }), createVNode(_components.mrow, {
                          children: [createVNode(_components.mi, {
                            children: "x"
                          }), createVNode(_components.mo, {
                            children: "\u2208"
                          }), createVNode(_components.mi, {
                            children: "X"
                          })]
                        })]
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "\u2223"
                      }), createVNode(_components.mi, {
                        children: "X"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "\u2223"
                      })]
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\n\\bar{x}=\\frac{\\sum_{x \\in X}{x}}{|X|}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6813em"
              }
            }), createVNode(_components.span, {
              class: "mord accent sizing reset-size6 size7",
              children: createVNode(_components.span, {
                class: "vlist-t",
                children: createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.5678em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        children: "x"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3.2em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3.2em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "\u02C9"
                        })
                      })]
                    })]
                  })
                })
              })
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "2.8793em",
                verticalAlign: "-1.1232em"
              }
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.4634em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: "\u2223"
                          }), createVNode(_components.span, {
                            class: "mord mathnormal",
                            style: {
                              marginRight: "0.07847em"
                            },
                            children: "X"
                          }), createVNode(_components.span, {
                            class: "mord",
                            children: "\u2223"
                          })]
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.9134em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mop",
                            children: [createVNode(_components.span, {
                              class: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "\u2211"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.1582em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.5027em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mtight",
                                          children: [createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            children: "x"
                                          }), createVNode(_components.span, {
                                            class: "mrel mtight",
                                            children: "\u2208"
                                          }), createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.07847em"
                                            },
                                            children: "X"
                                          })]
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.3234em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord",
                            children: createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "x"
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.936em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "for points y in codomain Y."
    }), "\n", createVNode(_components.h4, {
      id: "standard-deviation",
      children: "Standard Deviation"
    }), "\n", createVNode(_components.p, {
      children: ["The standard deviation of a set of number is just a measure of how spread out the numbers are ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "7"
        })
      }), ". To calculate it, you take the square root of the variance. The variance is the average of squared distances from the mean. In math, this would be:"]
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mi, {
                    children: "s"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.msqrt, {
                    children: createVNode(_components.mfrac, {
                      children: [createVNode(_components.mrow, {
                        children: [createVNode(_components.munderover, {
                          children: [createVNode(_components.mo, {
                            children: "\u2211"
                          }), createVNode(_components.mrow, {
                            children: [createVNode(_components.mi, {
                              children: "i"
                            }), createVNode(_components.mo, {
                              children: "="
                            }), createVNode(_components.mn, {
                              children: "1"
                            })]
                          }), createVNode(_components.mi, {
                            children: "N"
                          })]
                        }), createVNode(_components.mrow, {
                          children: [createVNode(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), createVNode(_components.msub, {
                            children: [createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mi, {
                              children: "i"
                            })]
                          }), createVNode(_components.mo, {
                            children: "\u2212"
                          }), createVNode(_components.mover, {
                            accent: "true",
                            children: [createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "\u02C9"
                            })]
                          }), createVNode(_components.msup, {
                            children: [createVNode(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), createVNode(_components.mn, {
                              children: "2"
                            })]
                          })]
                        })]
                      }), createVNode(_components.mrow, {
                        children: [createVNode(_components.mi, {
                          children: "N"
                        }), createVNode(_components.mo, {
                          children: "\u2212"
                        }), createVNode(_components.mn, {
                          children: "1"
                        })]
                      })]
                    })
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\ns=\\sqrt{\\frac{\\sum_{i=1}^{N}{(x_i-\\bar{x})^2}}{N-1}}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5167em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal sizing reset-size6 size7",
              children: "s"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "3.648em",
                verticalAlign: "-1.1544em"
              }
            }), createVNode(_components.span, {
              class: "mord sqrt sizing reset-size6 size7",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "2.078em"
                    },
                    children: [createVNode(_components.span, {
                      class: "svg-align",
                      style: {
                        top: "-5em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "5em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord",
                        style: {
                          paddingLeft: "1em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mopen nulldelimiter sizing reset-size7 size6"
                          }), createVNode(_components.span, {
                            class: "mfrac",
                            children: createVNode(_components.span, {
                              class: "vlist-t vlist-t2",
                              children: [createVNode(_components.span, {
                                class: "vlist-r",
                                children: [createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "1.6576em"
                                  },
                                  children: [createVNode(_components.span, {
                                    style: {
                                      top: "-2.514em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord",
                                      children: [createVNode(_components.span, {
                                        class: "mord mathnormal",
                                        style: {
                                          marginRight: "0.10903em"
                                        },
                                        children: "N"
                                      }), createVNode(_components.span, {
                                        class: "mspace",
                                        style: {
                                          marginRight: "0.2222em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "mbin",
                                        children: "\u2212"
                                      }), createVNode(_components.span, {
                                        class: "mspace",
                                        style: {
                                          marginRight: "0.2222em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "mord",
                                        children: "1"
                                      })]
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-3.43em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "frac-line",
                                      style: {
                                        borderBottomWidth: "0.04em"
                                      }
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-3.8873em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord",
                                      children: [createVNode(_components.span, {
                                        class: "mop",
                                        children: [createVNode(_components.span, {
                                          class: "mop op-symbol small-op",
                                          style: {
                                            position: "relative",
                                            top: "0em"
                                          },
                                          children: "\u2211"
                                        }), createVNode(_components.span, {
                                          class: "msupsub",
                                          children: createVNode(_components.span, {
                                            class: "vlist-t vlist-t2",
                                            children: [createVNode(_components.span, {
                                              class: "vlist-r",
                                              children: [createVNode(_components.span, {
                                                class: "vlist",
                                                style: {
                                                  height: "0.9702em"
                                                },
                                                children: [createVNode(_components.span, {
                                                  style: {
                                                    top: "-2.5027em",
                                                    marginLeft: "0em",
                                                    marginRight: "0.0417em"
                                                  },
                                                  children: [createVNode(_components.span, {
                                                    class: "pstrut",
                                                    style: {
                                                      height: "2.8em"
                                                    }
                                                  }), createVNode(_components.span, {
                                                    class: "sizing reset-size7 size4 mtight",
                                                    children: createVNode(_components.span, {
                                                      class: "mord mtight",
                                                      children: [createVNode(_components.span, {
                                                        class: "mord mathnormal mtight",
                                                        children: "i"
                                                      }), createVNode(_components.span, {
                                                        class: "mrel mtight",
                                                        children: "="
                                                      }), createVNode(_components.span, {
                                                        class: "mord mtight",
                                                        children: "1"
                                                      })]
                                                    })
                                                  })]
                                                }), createVNode(_components.span, {
                                                  style: {
                                                    top: "-3.3147em",
                                                    marginRight: "0.0417em"
                                                  },
                                                  children: [createVNode(_components.span, {
                                                    class: "pstrut",
                                                    style: {
                                                      height: "2.8em"
                                                    }
                                                  }), createVNode(_components.span, {
                                                    class: "sizing reset-size7 size4 mtight",
                                                    children: createVNode(_components.span, {
                                                      class: "mord mtight",
                                                      children: createVNode(_components.span, {
                                                        class: "mord mathnormal mtight",
                                                        style: {
                                                          marginRight: "0.10903em"
                                                        },
                                                        children: "N"
                                                      })
                                                    })
                                                  })]
                                                })]
                                              }), createVNode(_components.span, {
                                                class: "vlist-s",
                                                children: "\u200B"
                                              })]
                                            }), createVNode(_components.span, {
                                              class: "vlist-r",
                                              children: createVNode(_components.span, {
                                                class: "vlist",
                                                style: {
                                                  height: "0.2973em"
                                                },
                                                children: createVNode(_components.span, {})
                                              })
                                            })]
                                          })
                                        })]
                                      }), createVNode(_components.span, {
                                        class: "mspace",
                                        style: {
                                          marginRight: "0.1667em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "mord",
                                        children: [createVNode(_components.span, {
                                          class: "mopen",
                                          children: "("
                                        }), createVNode(_components.span, {
                                          class: "mord",
                                          children: [createVNode(_components.span, {
                                            class: "mord mathnormal",
                                            children: "x"
                                          }), createVNode(_components.span, {
                                            class: "msupsub",
                                            children: createVNode(_components.span, {
                                              class: "vlist-t vlist-t2",
                                              children: [createVNode(_components.span, {
                                                class: "vlist-r",
                                                children: [createVNode(_components.span, {
                                                  class: "vlist",
                                                  style: {
                                                    height: "0.2897em"
                                                  },
                                                  children: createVNode(_components.span, {
                                                    style: {
                                                      top: "-2.65em",
                                                      marginLeft: "0em",
                                                      marginRight: "0.0417em"
                                                    },
                                                    children: [createVNode(_components.span, {
                                                      class: "pstrut",
                                                      style: {
                                                        height: "2.8em"
                                                      }
                                                    }), createVNode(_components.span, {
                                                      class: "sizing reset-size7 size4 mtight",
                                                      children: createVNode(_components.span, {
                                                        class: "mord mathnormal mtight",
                                                        children: "i"
                                                      })
                                                    })]
                                                  })
                                                }), createVNode(_components.span, {
                                                  class: "vlist-s",
                                                  children: "\u200B"
                                                })]
                                              }), createVNode(_components.span, {
                                                class: "vlist-r",
                                                children: createVNode(_components.span, {
                                                  class: "vlist",
                                                  style: {
                                                    height: "0.15em"
                                                  },
                                                  children: createVNode(_components.span, {})
                                                })
                                              })]
                                            })
                                          })]
                                        }), createVNode(_components.span, {
                                          class: "mspace",
                                          style: {
                                            marginRight: "0.2222em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "mbin",
                                          children: "\u2212"
                                        }), createVNode(_components.span, {
                                          class: "mspace",
                                          style: {
                                            marginRight: "0.2222em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "mord accent",
                                          children: createVNode(_components.span, {
                                            class: "vlist-t",
                                            children: createVNode(_components.span, {
                                              class: "vlist-r",
                                              children: createVNode(_components.span, {
                                                class: "vlist",
                                                style: {
                                                  height: "0.5678em"
                                                },
                                                children: [createVNode(_components.span, {
                                                  style: {
                                                    top: "-3.2em"
                                                  },
                                                  children: [createVNode(_components.span, {
                                                    class: "pstrut",
                                                    style: {
                                                      height: "3.2em"
                                                    }
                                                  }), createVNode(_components.span, {
                                                    class: "mord mathnormal",
                                                    children: "x"
                                                  })]
                                                }), createVNode(_components.span, {
                                                  style: {
                                                    top: "-3.2em"
                                                  },
                                                  children: [createVNode(_components.span, {
                                                    class: "pstrut",
                                                    style: {
                                                      height: "3.2em"
                                                    }
                                                  }), createVNode(_components.span, {
                                                    class: "accent-body",
                                                    style: {
                                                      left: "-0.2222em"
                                                    },
                                                    children: createVNode(_components.span, {
                                                      class: "mord",
                                                      children: "\u02C9"
                                                    })
                                                  })]
                                                })]
                                              })
                                            })
                                          })
                                        }), createVNode(_components.span, {
                                          class: "mclose",
                                          children: [createVNode(_components.span, {
                                            class: "mclose",
                                            children: ")"
                                          }), createVNode(_components.span, {
                                            class: "msupsub",
                                            children: createVNode(_components.span, {
                                              class: "vlist-t",
                                              children: createVNode(_components.span, {
                                                class: "vlist-r",
                                                children: createVNode(_components.span, {
                                                  class: "vlist",
                                                  style: {
                                                    height: "0.7186em"
                                                  },
                                                  children: createVNode(_components.span, {
                                                    style: {
                                                      top: "-3.089em",
                                                      marginRight: "0.0417em"
                                                    },
                                                    children: [createVNode(_components.span, {
                                                      class: "pstrut",
                                                      style: {
                                                        height: "2.8em"
                                                      }
                                                    }), createVNode(_components.span, {
                                                      class: "sizing reset-size7 size4 mtight",
                                                      children: createVNode(_components.span, {
                                                        class: "mord mtight",
                                                        children: "2"
                                                      })
                                                    })]
                                                  })
                                                })
                                              })
                                            })
                                          })]
                                        })]
                                      })]
                                    })]
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-s",
                                  children: "\u200B"
                                })]
                              }), createVNode(_components.span, {
                                class: "vlist-r",
                                children: createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.7693em"
                                  },
                                  children: createVNode(_components.span, {})
                                })
                              })]
                            })
                          }), createVNode(_components.span, {
                            class: "mclose nulldelimiter sizing reset-size7 size6"
                          })]
                        })
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-4.038em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "5em"
                        }
                      }), createVNode(_components.span, {
                        class: "hide-tail",
                        style: {
                          minWidth: "1.02em",
                          height: "3.08em"
                        },
                        children: createVNode(_components.svg, {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "400em",
                          height: "3.08em",
                          viewBox: "0 0 400000 3240",
                          preserveAspectRatio: "xMinYMin slice",
                          children: createVNode(_components.path, {
                            d: "M473,2793\nc339.3,-1799.3,509.3,-2700,510,-2702 l0 -0\nc3.3,-7.3,9.3,-11,18,-11 H400000v40H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM1001 80h400000v40H1017.7z"
                          })
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "\u200B"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.962em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Note that you use Greek sigma (", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "\u03C3"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "\u03C3"
            })]
          })
        })]
      }), ") to represent ", createVNode(_components.strong, {
        children: "population standard deviation"
      }), ", which is when you are calculating for all possible points you could be interested in. However, in our case, we only have some of the data (training data), so we need the ", createVNode(_components.strong, {
        children: "sample standard deviation"
      }), ", represented with letter ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "s"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "s"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "s"
            })]
          })
        })]
      }), ". The only difference in the calculation is that we divide by ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "n"
                }), createVNode(_components.mo, {
                  children: "\u2212"
                }), createVNode(_components.mn, {
                  children: "1"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "n-1"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6667em",
                verticalAlign: "-0.0833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "n"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), createVNode(_components.span, {
              class: "mbin",
              children: "\u2212"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6444em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "1"
            })]
          })]
        })]
      }), " instead of by ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "n"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "n"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "n"
            })]
          })
        })]
      }), " when calculating the average of squared distances from the mean (the variance)."]
    }), "\n", createVNode(_components.h4, {
      id: "z-scores",
      children: "z-scores"
    }), "\n", createVNode(_components.p, {
      children: ["The z-score, or \u201Cstandard score,\u201D tells you how many standard deviations above or below the population mean a given sample is ", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-7",
          id: "user-content-fnref-7",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "8"
        })
      }), ". This number will give you an idea of how far off that data point is from the mean. To calculate the z-score, we use this formula:"]
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mi, {
                    children: "z"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.msub, {
                        children: [createVNode(_components.mi, {
                          children: "x"
                        }), createVNode(_components.mi, {
                          children: "i"
                        })]
                      }), createVNode(_components.mo, {
                        children: "\u2212"
                      }), createVNode(_components.mover, {
                        accent: "true",
                        children: [createVNode(_components.mi, {
                          children: "x"
                        }), createVNode(_components.mo, {
                          children: "\u02C9"
                        })]
                      })]
                    }), createVNode(_components.mi, {
                      children: "s"
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\nz=\\frac{x_i-\\bar{x}}{s}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5167em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal sizing reset-size6 size7",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "2.3356em",
                verticalAlign: "-0.8232em"
              }
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.2603em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: createVNode(_components.span, {
                            class: "mord mathnormal",
                            children: "s"
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.877em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "x"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.2897em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.65em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mbin",
                            children: "\u2212"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord accent",
                            children: createVNode(_components.span, {
                              class: "vlist-t",
                              children: createVNode(_components.span, {
                                class: "vlist-r",
                                children: createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.5678em"
                                  },
                                  children: [createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord mathnormal",
                                      children: "x"
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "accent-body",
                                      style: {
                                        left: "-0.2222em"
                                      },
                                      children: createVNode(_components.span, {
                                        class: "mord",
                                        children: "\u02C9"
                                      })
                                    })]
                                  })]
                                })
                              })
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above, ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "z"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "z"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            })]
          })
        })]
      }), " represents the final z-score, while ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mi, {
                    children: "i"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "x_i"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is the sample, ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mover, {
                  accent: "true",
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "\u02C9"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\bar{x}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5678em"
              }
            }), createVNode(_components.span, {
              class: "mord accent",
              children: createVNode(_components.span, {
                class: "vlist-t",
                children: createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.5678em"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord mathnormal",
                        children: "x"
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "accent-body",
                        style: {
                          left: "-0.2222em"
                        },
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: "\u02C9"
                        })
                      })]
                    })]
                  })
                })
              })
            })]
          })
        })]
      }), " is the sample mean, and of course ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "s"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "s"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "s"
            })]
          })
        })]
      }), " is the sample standard deviation."]
    }), "\n", createVNode(_components.h4, {
      id: "calculating-correlation-coefficients",
      children: "Calculating Correlation Coefficients"
    }), "\n", createVNode(_components.p, {
      children: "Given the sample mean and sample standard deviation, the correlation coefficient can be calculated using the following formula:"
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mstyle, {
                  mathsize: "1.2em",
                  children: [createVNode(_components.mi, {
                    children: "r"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mn, {
                      children: "1"
                    }), createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "n"
                      }), createVNode(_components.mo, {
                        children: "\u2212"
                      }), createVNode(_components.mn, {
                        children: "1"
                      })]
                    })]
                  }), createVNode(_components.mo, {
                    children: "\u2211"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.msub, {
                        children: [createVNode(_components.mi, {
                          children: "x"
                        }), createVNode(_components.mi, {
                          children: "i"
                        })]
                      }), createVNode(_components.mo, {
                        children: "\u2212"
                      }), createVNode(_components.mover, {
                        accent: "true",
                        children: [createVNode(_components.mi, {
                          children: "x"
                        }), createVNode(_components.mo, {
                          children: "\u02C9"
                        })]
                      })]
                    }), createVNode(_components.msub, {
                      children: [createVNode(_components.mi, {
                        children: "s"
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mfrac, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.msub, {
                        children: [createVNode(_components.mi, {
                          children: "y"
                        }), createVNode(_components.mi, {
                          children: "i"
                        })]
                      }), createVNode(_components.mo, {
                        children: "\u2212"
                      }), createVNode(_components.mover, {
                        accent: "true",
                        children: [createVNode(_components.mi, {
                          children: "y"
                        }), createVNode(_components.mo, {
                          children: "\u02C9"
                        })]
                      })]
                    }), createVNode(_components.msub, {
                      children: [createVNode(_components.mi, {
                        children: "s"
                      }), createVNode(_components.mi, {
                        children: "y"
                      })]
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\large\nr=\\frac{1}{n-1}\\sum(\\frac{x_i-\\bar{x}}{s_x})(\\frac{y_i-\\bar{y}}{s_y})"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5167em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal sizing reset-size6 size7",
              style: {
                marginRight: "0.02778em"
              },
              children: "r"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel sizing reset-size6 size7",
              children: "="
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "2.7445em",
                verticalAlign: "-1.1588em"
              }
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord mathnormal",
                            children: "n"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mbin",
                            children: "\u2212"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord",
                            children: "1"
                          })]
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.877em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: createVNode(_components.span, {
                            class: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.7693em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mop op-symbol large-op sizing reset-size6 size7",
              style: {
                position: "relative",
                top: "0em"
              },
              children: "\u2211"
            }), createVNode(_components.span, {
              class: "mopen sizing reset-size6 size7",
              children: "("
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.2603em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: createVNode(_components.span, {
                            class: "mord",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "s"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.137em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.65em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mathnormal mtight",
                                          children: "x"
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.877em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "x"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.2897em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.65em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mbin",
                            children: "\u2212"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord accent",
                            children: createVNode(_components.span, {
                              class: "vlist-t",
                              children: createVNode(_components.span, {
                                class: "vlist-r",
                                children: createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.5678em"
                                  },
                                  children: [createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord mathnormal",
                                      children: "x"
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "accent-body",
                                      style: {
                                        left: "-0.2222em"
                                      },
                                      children: createVNode(_components.span, {
                                        class: "mord",
                                        children: "\u02C9"
                                      })
                                    })]
                                  })]
                                })
                              })
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.836em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            }), createVNode(_components.span, {
              class: "mclose sizing reset-size6 size7",
              children: ")"
            }), createVNode(_components.span, {
              class: "mopen sizing reset-size6 size7",
              children: "("
            }), createVNode(_components.span, {
              class: "mord sizing reset-size6 size7",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter sizing reset-size7 size6"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.2603em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.514em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: createVNode(_components.span, {
                            class: "mord",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal",
                              children: "s"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.137em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.65em",
                                        marginLeft: "0em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "y"
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.2796em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.43em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.877em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3.2em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal",
                              style: {
                                marginRight: "0.03588em"
                              },
                              children: "y"
                            }), createVNode(_components.span, {
                              class: "msupsub",
                              children: createVNode(_components.span, {
                                class: "vlist-t vlist-t2",
                                children: [createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: [createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.2897em"
                                    },
                                    children: createVNode(_components.span, {
                                      style: {
                                        top: "-2.65em",
                                        marginLeft: "-0.0359em",
                                        marginRight: "0.0417em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.8em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "sizing reset-size7 size4 mtight",
                                        children: createVNode(_components.span, {
                                          class: "mord mathnormal mtight",
                                          children: "i"
                                        })
                                      })]
                                    })
                                  }), createVNode(_components.span, {
                                    class: "vlist-s",
                                    children: "\u200B"
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.15em"
                                    },
                                    children: createVNode(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mbin",
                            children: "\u2212"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord accent",
                            children: createVNode(_components.span, {
                              class: "vlist-t vlist-t2",
                              children: [createVNode(_components.span, {
                                class: "vlist-r",
                                children: [createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.5678em"
                                  },
                                  children: [createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord mathnormal",
                                      style: {
                                        marginRight: "0.03588em"
                                      },
                                      children: "y"
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-3.2em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3.2em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "accent-body",
                                      style: {
                                        left: "-0.1944em"
                                      },
                                      children: createVNode(_components.span, {
                                        class: "mord",
                                        children: "\u02C9"
                                      })
                                    })]
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-s",
                                  children: "\u200B"
                                })]
                              }), createVNode(_components.span, {
                                class: "vlist-r",
                                children: createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.1944em"
                                  },
                                  children: createVNode(_components.span, {})
                                })
                              })]
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.9656em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter sizing reset-size7 size6"
              })]
            }), createVNode(_components.span, {
              class: "mclose sizing reset-size6 size7",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["There are three parts to this. In the first part, we have ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mfrac, {
                  children: [createVNode(_components.mn, {
                    children: "1"
                  }), createVNode(_components.mrow, {
                    children: [createVNode(_components.mi, {
                      children: "n"
                    }), createVNode(_components.mo, {
                      children: "\u2212"
                    }), createVNode(_components.mn, {
                      children: "1"
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\frac{1}{n-1}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "1.2484em",
                verticalAlign: "-0.4033em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.8451em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.655em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mtight",
                            children: [createVNode(_components.span, {
                              class: "mord mathnormal mtight",
                              children: "n"
                            }), createVNode(_components.span, {
                              class: "mbin mtight",
                              children: "\u2212"
                            }), createVNode(_components.span, {
                              class: "mord mtight",
                              children: "1"
                            })]
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.394em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mtight",
                            children: createVNode(_components.span, {
                              class: "mord mtight",
                              children: "1"
                            })
                          })
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.4033em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            })]
          })
        })]
      }), ", which is a number that will get smaller as more points are added. We are multiplying this by a sum of all points, so as more points are added, each individual point affects the outcome less."]
    }), "\n", createVNode(_components.p, {
      children: ["What about the summation? It looks complicated at first, but you\u2019re really just doing something for every sample, or (x, y) point, in your data set. Notice that the first term, ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mfrac, {
                  children: [createVNode(_components.mrow, {
                    children: [createVNode(_components.msub, {
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mi, {
                        children: "i"
                      })]
                    }), createVNode(_components.mo, {
                      children: "\u2212"
                    }), createVNode(_components.mover, {
                      accent: "true",
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "\u02C9"
                      })]
                    })]
                  }), createVNode(_components.msub, {
                    children: [createVNode(_components.mi, {
                      children: "s"
                    }), createVNode(_components.mi, {
                      children: "x"
                    })]
                  })]
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\frac{x_i-\\bar{x}}{s_x}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "1.2635em",
                verticalAlign: "-0.4451em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.8184em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.655em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mtight",
                            children: createVNode(_components.span, {
                              class: "mord mtight",
                              children: [createVNode(_components.span, {
                                class: "mord mathnormal mtight",
                                children: "s"
                              }), createVNode(_components.span, {
                                class: "msupsub",
                                children: createVNode(_components.span, {
                                  class: "vlist-t vlist-t2",
                                  children: [createVNode(_components.span, {
                                    class: "vlist-r",
                                    children: [createVNode(_components.span, {
                                      class: "vlist",
                                      style: {
                                        height: "0.1645em"
                                      },
                                      children: createVNode(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "0em",
                                          marginRight: "0.0714em"
                                        },
                                        children: [createVNode(_components.span, {
                                          class: "pstrut",
                                          style: {
                                            height: "2.5em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "sizing reset-size3 size1 mtight",
                                          children: createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            children: "x"
                                          })
                                        })]
                                      })
                                    }), createVNode(_components.span, {
                                      class: "vlist-s",
                                      children: "\u200B"
                                    })]
                                  }), createVNode(_components.span, {
                                    class: "vlist-r",
                                    children: createVNode(_components.span, {
                                      class: "vlist",
                                      style: {
                                        height: "0.143em"
                                      },
                                      children: createVNode(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            })
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.4101em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mtight",
                            children: [createVNode(_components.span, {
                              class: "mord mtight",
                              children: [createVNode(_components.span, {
                                class: "mord mathnormal mtight",
                                children: "x"
                              }), createVNode(_components.span, {
                                class: "msupsub",
                                children: createVNode(_components.span, {
                                  class: "vlist-t vlist-t2",
                                  children: [createVNode(_components.span, {
                                    class: "vlist-r",
                                    children: [createVNode(_components.span, {
                                      class: "vlist",
                                      style: {
                                        height: "0.3281em"
                                      },
                                      children: createVNode(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "0em",
                                          marginRight: "0.0714em"
                                        },
                                        children: [createVNode(_components.span, {
                                          class: "pstrut",
                                          style: {
                                            height: "2.5em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "sizing reset-size3 size1 mtight",
                                          children: createVNode(_components.span, {
                                            class: "mord mathnormal mtight",
                                            children: "i"
                                          })
                                        })]
                                      })
                                    }), createVNode(_components.span, {
                                      class: "vlist-s",
                                      children: "\u200B"
                                    })]
                                  }), createVNode(_components.span, {
                                    class: "vlist-r",
                                    children: createVNode(_components.span, {
                                      class: "vlist",
                                      style: {
                                        height: "0.143em"
                                      },
                                      children: createVNode(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), createVNode(_components.span, {
                              class: "mbin mtight",
                              children: "\u2212"
                            }), createVNode(_components.span, {
                              class: "mord accent mtight",
                              children: createVNode(_components.span, {
                                class: "vlist-t",
                                children: createVNode(_components.span, {
                                  class: "vlist-r",
                                  children: createVNode(_components.span, {
                                    class: "vlist",
                                    style: {
                                      height: "0.5678em"
                                    },
                                    children: [createVNode(_components.span, {
                                      style: {
                                        top: "-2.7em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "mord mathnormal mtight",
                                        children: "x"
                                      })]
                                    }), createVNode(_components.span, {
                                      style: {
                                        top: "-2.7em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), createVNode(_components.span, {
                                        class: "accent-body",
                                        style: {
                                          left: "-0.2222em"
                                        },
                                        children: createVNode(_components.span, {
                                          class: "mord mtight",
                                          children: "\u02C9"
                                        })
                                      })]
                                    })]
                                  })
                                })
                              })
                            })]
                          })
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "\u200B"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.4451em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            })]
          })
        })]
      }), ", is actually just the z-score for x, or the residual for x divided by the standard deviation for x. The same is the case in the next term, except it\u2019s for y."]
    }), "\n", createVNode(_components.p, {
      children: "So this means that we multiply the z-score of each variable, x and y, together for every point, and then add all of these values together. This is scaled by our first term, which keeps r from getting excessively large or small. We know that r will always be between 1 and negative 1 thanks to that initial term."
    }), "\n", createVNode(_components.h4, {
      id: "ordinary-least-squares",
      children: "Ordinary Least Squares"
    }), "\n", createVNode(_components.p, {
      children: ["Remember when we calculated an example residual of -10? That\u2019s great for one point, but how to we get a feel for how ", createVNode(_components.strong, {
        children: "all"
      }), " of the points fit our line?"]
    }), "\n", createVNode(_components.p, {
      children: "One way would be to sum all of the residuals. However, this won\u2019t work, because a large negative residual, say -1,000, could be added to a large positive residual, 1,000, and you\u2019d end up with a difference of 0. That makes no sense - if the points are off by a thousand, it\u2019s not a great line!"
    }), "\n", createVNode(_components.p, {
      children: ["One thought could be to use ", createVNode(_components.code, {
        children: "math.abs"
      }), " to take the absolute value of each point. However, there\u2019s an easier way. How about squaring the numbers? That takes care of the sign, ", createVNode(_components.em, {
        children: "and"
      }), " as an added bonus, makes the numbers much larger, which further highlights the extend to which they differ from the line."]
    }), "\n", createVNode(_components.p, {
      children: "Credit to Khan for this explanation, building this up step-by-step."
    }), "\n", createVNode(_components.h2, {
      id: "the-fun-part---using-scikit-learn",
      children: "The Fun Part - Using scikit-learn"
    }), "\n", createVNode(_components.p, {
      children: "Now that we\u2019ve put all that effort into learning the math behind it, let\u2019s sit back and let scikit-learn do it all for us!"
    }), "\n", createVNode(_components.p, {
      children: ["We\u2019ll start out by using the ", createVNode(_components.a, {
        href: "https://scikit-learn.org/stable/datasets/toy_dataset.html#diabetes-dataset",
        children: "Diabetes dataset"
      }), ", one of several \u201CToy Datasets\u201D built into scikit-learn. This way, we don\u2019t have to worry about doing any preprocessing, which is the sometimes tedious process of getting data into the right format for our algorithm to ingest. Instead, we just call the handy-dandy ", createVNode(_components.code, {
        children: "load_diabetes"
      }), " method and wham! We\u2019ve got X and Y samples loaded up into variables."]
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s the code to load all of the samples:"
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
            children: " sklearn.datasets "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " load_diabetes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "X, y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " load_diabetes("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "return_X_y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "True"
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
      children: "The dataset itself consists of data for 442 diabetes patients. There are 10 predictive variable columns and the 11th column indicates the extent to which the disease progressed in the last year. Our goal is to use these predictive variables to form a model, which in this case takes the form of a regression line, so that we can predict someone\u2019s disease progression based on one or more of these variables."
    }), "\n", createVNode(_components.p, {
      children: "If we want to use this to do real lienar regression, things get a bit more complicated. We\u2019ll have to split the data into training data and test data. This way, we\u2019ll have a way to check how well the model we come up with actually reflects the remaining real-world data that we have to test with."
    }), "\n", createVNode(_components.p, {
      children: ["I would recommend trying out ", createVNode(_components.a, {
        href: "https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html",
        children: "the example provided by scikit-learn"
      }), ", which does just this and allows you to form a prediction based on one of the features in this dataset."]
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
              href: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression",
              children: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-8",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://statsandr.com/blog/what-is-the-difference-between-population-and-sample/",
              children: "https://statsandr.com/blog/what-is-the-difference-between-population-and-sample/"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-8",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression",
              children: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/a/introduction-to-residuals",
              children: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/a/introduction-to-residuals"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 4",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-4",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "http://www.askanalytics.in/2015/09/difference-between-error-and-residual.html",
              children: "http://www.askanalytics.in/2015/09/difference-between-error-and-residual.html"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-4",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 5",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-5",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/scatterplots-and-correlation/v/correlation-coefficient-intuition-examples",
              children: "https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/scatterplots-and-correlation/v/correlation-coefficient-intuition-examples"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-5",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6",
              class: "data-footnote-backref",
              children: "\u21A9"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-5-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6-2",
              class: "data-footnote-backref",
              children: ["\u21A9", createVNode(_components.sup, {
                children: "2"
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-6",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.mathsisfun.com/data/standard-deviation.html",
              children: "https://www.mathsisfun.com/data/standard-deviation.html"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 7",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-7",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.statisticshowto.com/probability-and-statistics/z-score/",
              children: "https://www.statisticshowto.com/probability-and-statistics/z-score/"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-7",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 8",
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
const url = "src/content/post/blog/2021/linear-regression-sklearn/index.mdx";
const file = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/linear-regression-sklearn/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/linear-regression-sklearn/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
