module.exports = {
  mode: "jit",
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `app.vue`,
    `error.vue`,
    `plugins/**/*.{js,ts}`,
    // `nuxt.config.{js,ts}`,
  ], 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

