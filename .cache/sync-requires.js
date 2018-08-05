// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslit/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslit/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/my-second-post.json"),
  "hello-world.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/hello-world.json"),
  "hi-folks.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/index.json")
}