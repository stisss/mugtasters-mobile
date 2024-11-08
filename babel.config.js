module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@hooks": "./src/hooks/index",
            "@pages": "./src/pages/index",
            "@styles": "./src/styles/index",
            "@components": "./src/components/index",
          },
        },
      ],
      "nativewind/babel",
    ],
  }
}
