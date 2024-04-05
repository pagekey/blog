const id = "blog/2022/pagekey-fit-1-initial-setup.mdx";
						const collection = "post";
						const slug = "blog/2022/pagekey-fit-1-initial-setup";
						const body = "\nLet's code a workout app from scratch. Why? Watch the video and find out.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"hO16sBPMe34\" />\n\nSource code is available at: https://github.com/pagekey/pfl\n\n## Timestamps\n\n- 0:00 The idea and why bother?\n- 1:22 Today's progress\n- 3:36 Existing Python scripts/data\n\n## Summary\n\nHere's a quick recap on what I did to get this far. It's not much!\n\n1. Generate a new flutter project.\n\n```bash\nflutter create\n```\n\n2. Update the application ID, which must be unique\n    - Ctl-Shift-F to search the entire project in Android Studio \n    - Find instances of `com.example`\n    - Replace with `com.pagekeysolutions`\n\n3. Start getting Google API set up\n    - I followed (part of) this article: https://betterprogramming.pub/the-minimum-guide-for-using-google-drive-api-with-flutter-9207e4cb05ba\n\t- Most of the work for this video was setting up Firebase. Just follow this article for this.\n\t- I was able to get \"Login with Google\" working on Android (though there were some warnings about it not being a verified app - we can worry about this later)\n\n4. I set up the [repo](https://github.com/pagekey/pfl), made it public, and made a video.\n\nIf you're trying to re-create my results exactly, note that I committed the \"Initial commit\" **directly** after running `flutter create`. Hopefully this makes my changes easier to follow.\n";
						const data = {publishDate:new Date(1645488000000),title:"Coding a Workout App from Scratch - #1 Initial Setup",image:"http://i3.ytimg.com/vi/hO16sBPMe34/hqdefault.jpg",tags:["flutter"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/pagekey-fit-1-initial-setup.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
