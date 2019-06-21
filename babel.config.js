module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "node 8", modules: "commonjs" }],
    "@babel/preset-react",
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }]
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};
