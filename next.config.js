const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const withMDX = require("@next/mdx")();
const BundleAnalyzerOptions = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
};

module.exports = withMDX(
  withCSS(withTypescript(withBundleAnalyzer(BundleAnalyzerOptions))),
);
