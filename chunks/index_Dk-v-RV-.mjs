const id = "blog/2021/quick-python-8/index.mdx";
						const collection = "post";
						const slug = "blog/2021/quick-python-8";
						const body = "\nIn this video, we learn how to create, manage, and remove Python Virtual Environments.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"O5rH_fsOOJM\" />\n\n**[Here's a link to the source code.](https://github.com/pagekeysolutions/education/tree/master/Quick_Python/08_Installing_Packages)**\n\n-----\n\n## Quick Tips\n\n### Commands\n\n```bash\npython3 -m venv <path>\n```\n\nCreates a virutal environment located at `<path>`\n\n```bash\nsource <path>/bin/activate\n```\n\nActivates a virtual environment\n\n```bash\ndeactivate\n```\n\nDeactivates a virutal environment\n\n### Bonus: Bash Alias for Quick Switching\n\nPaste this function into your `~/.bashrc` or `~/.bash_aliases` file and restart your shell. It assumes you keep your virtual environments in the `~/venv` folder.\n\n```bash\nvenv() {\n    source ~/venv/$1/bin/activate\n}\n```\n\nSwitch to the venv with `venv <NAME>` and get out of it by typing `deactivate`.\n\nExample:\n\n```bash\npython3 -m venv ~/venv/my-env\nvenv my-env\n# do stuff in your environment. When done:\ndeactivate\n```\n\n-----\n\nIf you liked this video, check out the whole [Quick Python series](/category/quick-python) and be sure to sign up using the form below to get notified of new posts! Thanks for checking this one out.";
						const data = {publishDate:new Date(1623369600000),title:"Quick Python 8: Virtual Environments",image:"http://i3.ytimg.com/vi/O5rH_fsOOJM/hqdefault.jpg",category:"Quick Python",tags:["python","tutorial"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2021/quick-python-8/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
