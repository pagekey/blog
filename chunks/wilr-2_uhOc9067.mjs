const id = "blog/2022/wilr-2.mdx";
						const collection = "post";
						const slug = "blog/2022/wilr-2";
						const body = "\nI learned some basic Rust by following the Rust Book's Chapter 12, where they show us how to build a `minigrep` command-line application.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"Lelgwgs63Z8\" />\n\nWhat you see below are very rough notes I took as I went through this for the first time. Hopefully this, along with the video walkthrough, is helpful to you in some way.\n\n## Timestamps\n- 0:00 Intro\n- 0:32 Installation\n- 0:45 Discussing the Rust Book\n- 2:13 The finished code\n- 2:44 What it does\n- 3:56 Code walkthrough\n\n## Installing Rust\n\nhttps://www.rust-lang.org/tools/install\n\n- Just use script:\n```bash\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n```\n- If having trouble on proxy, use minimal installation\n\t- (I was having trouble with rust-docs)\n\n## Rust Book Ch. 12\n\nhttps://doc.rust-lang.org/book/ch12-00-an-io-project.html\n\n- Importing standard libraries: you can import `std::env::args` if you want, but it's not recommended. Better to import `std::env` to prevent name conflicts\n\t- Either way, `use` seems to take the last thing and make it accessable. `use std::env` makes `env` accessible, `use std::error::Error` makes `Error` accessible\n- `env::args()` returns an iterator, and `collect()` turns it into a vector (basically a list) so that we can use it\n- `expect()` fails out and prints a rust backtrace (ugly)\n- First: Can simply return a tuple\n- Then, abstract the tuple to `struct Config` - this way, you can name your fields \n- Adding `impl Config`, and `new` method: Allows you to \"instantiate\" the Config object using `args`\n- Checking for errors: Can `panic!()`, which is like `expect!` in that it prints a backtrace (ugly)\n- Alternative: Return a `Result` and let the caller handle it. `Ok()` with return value or `Err()` with message\n\t- What is `&'static` ?? something to do with reference/memory ownership I think\n\t- It says to see Chapter 10 on \"Lifetimes\": https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html\n- `unwrap_or_else`: Alternative to `expect()`\n\t- `expect()` gives you the return value in `Result`, or panics\n\t- `unwrap_or_else` gives you the return value if ok, otherwise lets you handle it in a block of code\n\t- \"custom, non-panic error handling\"\n\t- Uses a Closure, or anonymous function\n- `std::process` lets you exit with error code, much like python's `sys.exit`\n- `Box<dyn Error>` is a **trait** object\n\t- Basically means what it returns must be a subclass of Error\n\t- Ending a line with `?` instead of `expect()`: Returns the error automatically instead of panicking\n- `if let` syntax?? Similar to `unwrap_or_else`?\n- We move our code to separate `lib.rs` file - it calls this a separate crate? This way, it can be tested. Added `pub` everywhere\n- Tutorial uses TDD! My heart!\n- Lifetime `'a` marks the argument with matching lifetime of return value. So return value will live as long as the `contents` variable\n\t- Again, see Chapter 10 on \"Lifetimes\": https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html\n- Topics covered: file input and output, lifetimes, testing, and command line parsing.\n- Env to add case sensitivity\n- Print to stderr with `eprintln!`\n";
						const data = {publishDate:new Date(1655683200000),title:"WILR2: Rust Beginnings (minigrep)",image:"http://i3.ytimg.com/vi/Lelgwgs63Z8/hqdefault.jpg",category:"What I Learned Recently",tags:["rust"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/wilr-2.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
