// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/index.js")),
  "component---src-pages-music-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/music.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/work.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/src/pages/blog/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "blog-on-creativity.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/blog-on-creativity.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "blog-evolution-of-effulgence.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/blog-evolution-of-effulgence.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "blog-origins.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/blog-origins.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "blog-undiscovered-colors.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/blog-undiscovered-colors.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "404.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/404.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "about.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/about.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/index.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "music.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/music.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "work.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/work.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/404-html.json"),
  "layout-index.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/layout-index.json"),
  "blog.json": require("/Users/effulgence/dev/effulgence.io/v4/.cache/json/blog.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/effulgence/dev/effulgence.io/v4/.cache/layouts/index.js"))
}