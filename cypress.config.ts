import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

// Setup Webpack with Cypress
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
  };

  on("file:preprocessor", webpack(options));

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
    specPattern: "**/*.feature",
    setupNodeEvents,
    supportFile: "cypress/support/e2e.ts",  // Ensure this path is correct
  },
});
