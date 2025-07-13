const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));
      allureWriter(on, config);
      config.env = {
        ...config.env,
        "cypress-cucumber-preprocessor": {
          stepDefinitions: "cypress/support/step_definitions",
        },
      };

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js"
  }
});
