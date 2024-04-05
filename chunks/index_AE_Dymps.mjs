const id = "blog/2022/logic-analyzer/index.mdx";
						const collection = "post";
						const slug = "blog/2022/logic-analyzer";
						const body = "\nA logic analyzer lets us look at the digital data coming out of ports on various devices, in much the same way an oscilloscope lets us look at analog signals. In this lesson, we plug our logic analyzer into an Arduino's serial port to show how we can record and analyze digital data.\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"IqiRDxxR8Ds\" />\n\n## Parts List\n\n1. [KeeYees Logic Analyzer](https://amzn.to/3N1YObl) (~$14)\n\n2. [Arduino UNO](https://amzn.to/3M7CWve) (~$30)\n\n3. [Jumper Cables](https://amzn.to/3FHoEiA) (~$7)\n\n\nAs an Amazon associate I earn from qualifying purchases.\n\n## Timestamps\n\n- 0:00 Intro\n- 0:28 Parts list\n- 1:06 Arduino code\n- 1:59 Arduino wiring\n- 2:24 Logic analyzer in action\n- 3:27 Outro\n\n## Arduino Code\n\nWe use the following simple program on our Arduino, which outputs a message via serial every 2 seconds:\n\n```c\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Serial.println(\"Hello world!\");\n  delay(2000);\n}\n```\n\n## Arduino Wiring\n\nWe wire channel 1 of the logic analyzer to the TX port of the Arduino. To do this, we use a female-to-female jumper (which should come with the logic analyzer) and a (more common) male-to-male jumper to complete the connection.\n\n![Logic Analyzer hookup circuit diagram](./logicanalyzer.png)\n\nWith this wiring in place, we can launch the software that came with the logic analyzer and perform a capture, which will show us the \"Hello World\" message coming through Channel 1!\n\nThis same technique can be applied to a variety of protocols, such as I2C, SPI, PS2 Keyboard/Mouse, and USB (low- and full-speed only).\n";
						const data = {publishDate:new Date(1652659200000),title:"How and Why to Use a Logic Analyzer",image:"http://i3.ytimg.com/vi/IqiRDxxR8Ds/hqdefault.jpg",tags:["hardware"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2022/logic-analyzer/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
