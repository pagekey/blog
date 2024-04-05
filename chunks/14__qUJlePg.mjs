const id = "blog/2022/pkos/14.mdx";
						const collection = "post";
						const slug = "blog/2022/pkos/14";
						const body = "\nIn this video, we reorganize the entire project, taking it from cluttered to modular in less than 10 minutes.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"Qa-WjNWkNeA\" />\n\n## Timestamps\n\n- 0:00 Intro, Overview\n- 0:25 Running the OS\n- 0:43 The Main Changes\n- 1:16 Other Minor Changes\n- 1:34 Lessons Learned\n- 2:40 The (New!) File Tree\n- 3:42 Code Diff Walkthrough\n- 7:06 Outro\n\n## References\n\n- [Recursive Make Considered Harmful paper](https://accu.org/journals/overload/14/71/miller_2004/)\n    - Goes into detail about why you shouldn't use separate `Makefile`s for each submodule in your project\n- [GNU Make Include docs](https://www.gnu.org/software/make/manual/html_node/Include.html)\n    - Tell you how to use `include` in GNU Make, which we use in this video\n\n## Other Resources\n\n- [Implementing Non-Recursive Make](http://sites.e-advies.nl/nonrecursive-make.html)\n    - A helpful article\n- [boilermake](https://github.com/dmoulding/boilermake)\n    - Seems to be a boilerplate for Make projects using `include`\n    - Definitely too complicated for me to understand/use, but a helpful reference\n\n## Code\n\n- [Link to tag](https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos014)\n- [Diff from previous video](https://github.com/pagekeysolutions/pkos/compare/vid/os013..vid/os014)\n";
						const data = {publishDate:new Date(1649462400000),title:"OS14: Organizing Our OS Code",image:"http://i3.ytimg.com/vi/Qa-WjNWkNeA/hqdefault.jpg",category:"PageKey Operating System",tags:["assembly","c","tutorial"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pkos/14.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
