const path = require("path");

export default function (options) {
  this.addPlugin({
    src: path.resolve(__dirname, "templates/plugin.mjs"),
    fileName: "supabase.js",
    options,
  });
}

module.exports.meta = require("../package.json");
