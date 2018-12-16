module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-import"),
          require("postcss-url"),
          require("postcss-aspect-ratio-mini"),
          require("postcss-write-svg")({
            utf8: false
          }),
          require("postcss-px-to-viewport")({
            viewportWidth: 750,
            unitPrecision: 3,
            viewportUnit: "vw",
            selectorBlackList: [".ignore", ".hairlines"],
            minPixelValue: 1,
            mediaQuery: false
          }),
          require("cssnano")({
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
          })
        ]
      }
    }
  }
};
