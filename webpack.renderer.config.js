const $rules = require("./webpack.rules")
const plugins = require("./webpack.plugins")

const rules = $rules()
rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
}
