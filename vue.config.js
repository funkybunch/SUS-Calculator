/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    outputDir: "dist",
    assetsDir: "assets",
    chainWebpack: config => {
    config
        .plugin("html")
        .tap(args => {
            args[0].template = './src/index.html'
            return args
        })
    }
}