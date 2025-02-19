const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@assets": path.resolve(__dirname, "src/assets"),
          "@components": path.resolve(__dirname, "src/components"),
          "@types": path.resolve(__dirname, "src/types")
        },
      },
    });
  };