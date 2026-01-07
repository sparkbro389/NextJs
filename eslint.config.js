// eslint.config.js
export default [
  {
    files: ["app/lint-demo/**/*.js"],
    rules: {
      "no-unused-vars": "error",
      "semi": ["error", "always"],
    },
  },
];
