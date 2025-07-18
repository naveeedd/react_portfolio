/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "cloudflare-pages",
    // Add this if you're using functions
    // server: "./server.js", 
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    // Remove serverDependenciesToBundle unless needed
  };
  