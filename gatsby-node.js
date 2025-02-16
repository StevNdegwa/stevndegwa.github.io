const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@images": path.resolve(__dirname, "src/images"),
          "@components": path.resolve(__dirname, "src/components"),
          "@types": path.resolve(__dirname, "src/types")
        },
      },
    });
  };