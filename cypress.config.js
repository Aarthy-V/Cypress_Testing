const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,

  viewportWidth: 1980,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
