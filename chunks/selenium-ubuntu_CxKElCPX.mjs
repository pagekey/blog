const id = "blog/2020/90-sec/selenium-ubuntu.mdx";
						const collection = "post";
						const slug = "blog/2020/90-sec/selenium-ubuntu";
						const body = "\nIn this video, we learn how to set up Selenium in 90 seconds or less! Made using Ubuntu on Windows (WSL). You may need to start an Xming server if you use this method (I did).\n\nimport BlogYoutubeVideo from '~/components/common/BlogYoutubeVideo.astro';\n\n<BlogYoutubeVideo videoId=\"MTarw_BUR-M\" />\n\n## Steps\n\n### 1. Install packages.\n\n```bash\nsudo apt update && sudo apt install python3 python3-pip firefox\n```\n\n### 2. Download `geckodriver`.\n\n```bash\nwget https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz\n```\n\n### 3. Untar `geckodriver`.\n\n```bash\ntar xvf geckodriver-v0.26.0-linux64.tar.gz\n```\n\n### 4. Copy `geckodriver` into system `PATH`.\n\n**Edit**: `/usr/local/lib` may be more appropriate than `/usr/lib` because `/usr/local/lib` is typically the place for user-installed software (whereas `/usr/lib` is for the package manager). Use whichever you prefer, but if you decide to use `/usr/local/lib`, make sure that it is in your `$PATH` environment variable.\n\n```bash\nsudo cp geckodriver /usr/lib\n```\n\n### 5. Install the `selenium` Python package.\n\n```bash\npip3 install selenium\n```\n\n### 6. Edit `verify.py` and make sure Selenium is working.\n\n```bash\nvi verify.py\n```\n\n```python\n#!/usr/bin/env python\nfrom selenium import webdriver\nbrowser = webdriver.Firefox() \nbrowser.get('http://www.google.com/')\n```\n\n### 7. Run the test script.\n\n```bash\npython verify.py\n```\n\n### 8. Try writing a unit test with Selenium.\n\n```bash\nvi test_selenium.py\n```\n\n```python\nfrom selenium import webdriver\n\nclass TestGoogle(unittest.TestCase):\n  def setUp(self):\n    self.browser = webdriver.FireFox()\n  def test_title(self): \n    self.browser.get('http://www.google.com/') \n    self.assertIn('Google', self.browser.title)\n  def tearDown(self):\n    self.browser.close()\n\nif __name__ == '__main__':\n  unittest.main()\n```\n\n### 9. Run your test.\n\n```bash\npython test_selenium.py\n```\n\nNeed Python? We have a tutorial for that, too! Install Python in 90 seconds or less [on Windows](./python-windows) or [on Ubuntu](./python-ubuntu).\n";
						const data = {publishDate:new Date(1585094400000),title:"≤90s: Install Selenium for Python on Ubuntu",category:"90 Seconds or Less",tags:["linux","python"],author:"Steve Grice"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/website/website/astrowind/src/content/post/blog/2020/90-sec/selenium-ubuntu.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
