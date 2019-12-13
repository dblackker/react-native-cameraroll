module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@dblackker/cameraroll": "./js/CameraRoll.js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};
