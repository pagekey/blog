const id = "blog/2020/pkos/2.mdx";
						const collection = "post";
						const slug = "blog/2020/pkos/2";
						const body = "\nIn this video, we install qemu and nasm so that we can build our first bootloader and run it.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"1lAuJoPZ3Q0\" />\n\n## Notes\n\nCommand for getting the first bootloader code:\n\n```bash\nwget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/first.asm\n```\n\nCommand for getting the Makefile:\n\n```bash\nwget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/Makefile\n```\n\n## Sources\n\n* [https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader](https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader)\n\n* [http://mikeos.sourceforge.net/write-your-own-os.html](http://mikeos.sourceforge.net/write-your-own-os.html)\n\n## Code\n\n- [Link to tag](https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos002)\n- [Diff from previous video](https://github.com/pagekeysolutions/pkos/compare/vid/os001..vid/os002)";
						const data = {publishDate:new Date(1577836800000),title:"OS2: First Bootloader",category:"PageKey Operating System",tags:["tutorial","assembly"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/pkos/2.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
