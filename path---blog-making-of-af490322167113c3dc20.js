webpackJsonp([0x944d7d7dd38f],{333:function(A,e){A.exports={data:{markdownRemark:{html:'<p>When I started building this website, I started to think about what it would mean for it to be different. I knew I wanted to stray away from the generic patterns that are employed on so many webpages out there. But I didn’t want to stray too far from them that it felt unfamiliar to the average visitor. I wanted the interface of my site to have a fresh look and bring something different to the table, but still have a sense of intuitiveness to it so that people could curiously click through without hesitation.</p>\n<p>After a few hours of brainstorming and trying out various designs, I came up with this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/mockup-cc787b58303261b3b0dcdac6bd369d63-ce6e5.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAYHabzS6H//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMQESH/2gAIAQEAAQUCrZlBTcKdGf/EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAwEBPwGtU//EABcRAQADAAAAAAAAAAAAAAAAAAABERL/2gAIAQIBAT8BzCn/xAAaEAEAAgMBAAAAAAAAAAAAAAABABECIDFx/9oACAEBAAY/AqwE9lrbOaf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAQABPyGcR0OuoN9LDY3p/9oADAMBAAIAAwAAABDkz//EABgRAAIDAAAAAAAAAAAAAAAAAAABESFx/9oACAEDAQE/EJrbMH//xAAXEQEBAQEAAAAAAAAAAAAAAAABACFx/9oACAECAQE/EAdC7v/EABoQAAMBAQEBAAAAAAAAAAAAAAERIQBREDH/2gAIAQEAAT8QYya1B9VORsByDLYM2fMTF8n/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="effulgence.io v1 mockup"\n        title=""\n        src="/static/mockup-cc787b58303261b3b0dcdac6bd369d63-ec749.jpg"\n        srcset="/static/mockup-cc787b58303261b3b0dcdac6bd369d63-d894e.jpg 173w,\n/static/mockup-cc787b58303261b3b0dcdac6bd369d63-97c21.jpg 345w,\n/static/mockup-cc787b58303261b3b0dcdac6bd369d63-ec749.jpg 690w,\n/static/mockup-cc787b58303261b3b0dcdac6bd369d63-ce6e5.jpg 900w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Super basic sketch of the homepage layout.</em></p>\n<p>It resembles an abstract P (to me at least, most people didn’t see it at first glance), and is emblematic in nature. I love the simple geometry behind it. I felt very strongly about having visual elements much more than textual ones, so I decided to embed pictures into the 4 blocks and use those as my main navigation links. Something about your eyes interpreting colors and visual stimuli in a parallel manner vs interpreting text in a serial manner. Yeah… that’s cool. Let’s formalize that on a webpage:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-1addc.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3Vm4LYAn/8QAGBABAAMBAAAAAAAAAAAAAAAAAgEDEBH/2gAIAQEAAQUCXYNNic4TBz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAQUAAAAAAAAAAAAAAAABEAARISIxkf/aAAgBAQAGPwI03MuOwX//xAAaEAEAAgMBAAAAAAAAAAAAAAABEBEAITFB/9oACAEBAAE/IWgRBq8sSOceSelUf//aAAwDAQACAAMAAAAQIA//xAAXEQADAQAAAAAAAAAAAAAAAAAQESFh/9oACAEDAQE/EItH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAQADAQAAAAAAAAAAAAAAAREAEDFB/9oACAEBAAE/EL1oBwxgDSgvrq6QSJTABFVZr//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="effulgence.io v2"\n        title=""\n        src="/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-ec749.jpg"\n        srcset="/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-d894e.jpg 173w,\n/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-97c21.jpg 345w,\n/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-ec749.jpg 690w,\n/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-f7d37.jpg 1035w,\n/static/v1-e8ab893d43b7bfbd45847d2a50e0ef53-1addc.jpg 1280w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Check it out live <a href="http://effulgence.io/v1">here</a>.</em></p>\n<p>Now, this was in no way perfect. The styling would crap itself on mobile. Gave it a nice harsh white background (cringe). I hardcoded all the markup and CSS. None of the images were optimized. It was a bunch of <code>&#x3C;div></code> elements floating next to each other in the middle of nowhere which brought about some interesting layout challenges in CSS. The site loaded extremely slow because of all the external assets I was pulling. I also had the wonderfully brilliant idea of embedding a bunch of soundcloud players and rendering them in an <code>&#x3C;iframe></code> when you clicked on a specific link. All of this made sense for me at the time but it also resulted in a very choppy experience. Frankly, it was not even a fully realized website. It was a static landing page that just happened to have a bunch of links to other places.</p>\n<p>Fast forward a year or so and we arrive at v2:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/v2-2f446cc6d55dd724daf702193d410652-1addc.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAexToiMYn//EABgQAQADAQAAAAAAAAAAAAAAAAEAAhAh/9oACAEBAAEFAllLtp3ADP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAAQMQEh/9oACAEBAAY/AoQi5i//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEQITHx/9oACAEBAAE/IaTqOLxWiX6YvQjH/9oADAMBAAIAAwAAABB8/wD/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFR/9oACAEDAQE/EBIdX//EABcRAQADAAAAAAAAAAAAAAAAAAARIWH/2gAIAQIBAT8QpOP/xAAbEAEAAQUBAAAAAAAAAAAAAAABEQAQITFBcf/aAAgBAQABPxBG3BidVxcEXJ7QxOPosOArKB23/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="effulgence.io v2"\n        title=""\n        src="/static/v2-2f446cc6d55dd724daf702193d410652-ec749.jpg"\n        srcset="/static/v2-2f446cc6d55dd724daf702193d410652-d894e.jpg 173w,\n/static/v2-2f446cc6d55dd724daf702193d410652-97c21.jpg 345w,\n/static/v2-2f446cc6d55dd724daf702193d410652-ec749.jpg 690w,\n/static/v2-2f446cc6d55dd724daf702193d410652-f7d37.jpg 1035w,\n/static/v2-2f446cc6d55dd724daf702193d410652-1addc.jpg 1280w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Check it out live <a href="http://effulgence.io/v2">here</a>.</em></p>\n<p>Still not a full site. It’s a single page with a bunch of jQuery spaghetti handling clicks and hiding/showing things on cue. Regardless, I got more experience making other sites (and apps). v2 harnesses the power of inline SVGs, meaning my whole graphic is embedded into my page as a bunch of numbers that the browser knows how to draw. Working with SVG allowed me to be meticulous about the design. It gave me full control of the sizing, curvature of lines, relative placement of the blocks, all with added benefit of not having to write any custom CSS to achieve the same layout. And if I wanted to change something I could simply pop back into Illustrator, make my changes, and copy-paste the new numbers into my HTML. I embedded my navigation links wrapping the <code>&#x3C;path></code> tags of the SVG. And search engines would still crawl through it, because in the end, it’s all just markup. Brilliant, thank you W3C.</p>\n<p>You might have also noticed that v2 has an animation running in the back. Shortly after v1 and v2, I started spending more time exploring the realm of <a href="https://en.wikipedia.org/wiki/Creative_coding">creative coding</a>. I started a project where I coded a graphic everyday for the year (I failed halfway through but that’s another story). But the 100+ pieces that I did do taught me a lot. It became clear to me that I needed to incorporate this into my website. And off I went trying to integrate a <code>&#x3C;canvas></code> element into my site because animations are cool. They add so much to the visual experience. I was an art-major.. of course I was going to add this to my site. Who am I kidding?</p>\n<p>v2 gave me a much clearer direction as to where I wanted my site to go. I was happy that I had something unique, and it had a cool animation with some content, but the experience wasn’t satisfying enough to me. I hated using some hacky jQuery just to get the single page application feeling, and I didn’t want to remake the whole thing using some hot new JavaScript framework that come out this morning to accomplish that. And I certainly didn’t want my whole page to be rendered dynamically on load, even though Google does index pages that use JavaScript to render their UI. I also wanted to start a blog, so I could post more content. Also the page had no sense of history, meaning that you were stuck on one page and could not navigate using the back and forward buttons. Not a good user experience. There had to be another way.</p>\n<p>I considered using Jekyll (a static site/blog generator), but I REALLY wanted the single page design to work. I did not want the page to refresh every time the user navigated to another page on the site. I wanted it to be a unified, cohesive experience from one part of the site to another, no jitters and no refreshes. The Web has come so far, why not utilize it to its fullest?</p>\n<p>After a lot of research, I ran into an awesome new framework called <a href="https://www.gatsbyjs.org/">gatsby.js</a>, a static site generator that transforms plain text into dynamic blogs and websites using React (an amazing library that lets you create functional UIs). It has no page reloads, supports global page transitions, and leverages server-side rendering so all the components are rendered into raw markup for production builds. You mean I can blog, create a static site, and embed all the interactivity I want without having to compromise the user experience? I’ll take it.</p>\n<p>Finally, we arrive at v3:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/v3-c6e126fcc20068595b2f2a7e80943bf6-93e81.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.47058823529412%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAexRqgUcs//EABkQAAIDAQAAAAAAAAAAAAAAAAABAgMRIP/aAAgBAQABBQLWVzcjeP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAQEBAAAAAAAAAAAAAAAAADEQIP/aAAgBAQAGPwIhj//EABsQAQACAgMAAAAAAAAAAAAAAAEAEBFRITFB/9oACAEBAAE/IUCFFTjR5M96AOjFf//aAAwDAQACAAMAAAAQTB//xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhUf/aAAgBAwEBPxA0Nh7f/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAgEBPxCrCrD/xAAcEAEBAAICAwAAAAAAAAAAAAABEQAQIUFRYYH/2gAIAQEAAT8QaI/XeLNVIOPD9NAsKawnOv/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="effulgence.io v3"\n        title=""\n        src="/static/v3-c6e126fcc20068595b2f2a7e80943bf6-ec749.jpg"\n        srcset="/static/v3-c6e126fcc20068595b2f2a7e80943bf6-d894e.jpg 173w,\n/static/v3-c6e126fcc20068595b2f2a7e80943bf6-97c21.jpg 345w,\n/static/v3-c6e126fcc20068595b2f2a7e80943bf6-ec749.jpg 690w,\n/static/v3-c6e126fcc20068595b2f2a7e80943bf6-f7d37.jpg 1035w,\n/static/v3-c6e126fcc20068595b2f2a7e80943bf6-93e81.jpg 1275w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Awwww yeee. WebGL FTW.</em></p>\n<p>It’s not perfect, but it’s a step in the right direction. I’m still working on optimizing it and adding more functionality, but it’s a good start for now. Big ups to the creators of gatsby.js and React. The web just gets better and faster everyday.</p>\n<p>You can check out the source code for this website <a href="https://github.com/prayasht/prayasht.github.io">here</a>.</p>',timeToRead:5,frontmatter:{date:"February 22, 2017",title:"Making of"}}},pathContext:{slug:"/blog/making-of"}}}});
//# sourceMappingURL=path---blog-making-of-af490322167113c3dc20.js.map