// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],

  bail: true,

  clearMocks: true,

  testMatch: ["**/__tests__/**/*.test.js?(x)"],

  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
