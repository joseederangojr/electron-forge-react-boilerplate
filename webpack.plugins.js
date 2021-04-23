const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const isDev = process.env.NODE_ENV !== "production"
module.exports = [isDev && new ReactRefreshWebpackPlugin()].filter(Boolean)
