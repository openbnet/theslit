// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/JEZRIEL/Desktop/activ/theslit/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/JEZRIEL/Desktop/activ/theslit/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/JEZRIEL/Desktop/activ/theslit/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/layout-index.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/my-second-post.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/hello-world.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/JEZRIEL/Desktop/activ/theslit/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/JEZRIEL/Desktop/activ/theslit/.cache/layouts/index.js")
}