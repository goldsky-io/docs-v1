const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  redirects: () =>
    [
      ["/docs/:path*", "/:path*"],
      [
        "/references/instant-subgraphs-config",
        "/references/instant-subgraphs-configuration",
      ],
      ["/bridges", "/mirror"],
      ["/bridges/webhooks", "/mirror/webhooks"],
      ["/bridges/goldsky-graphql", "/mirror/goldsky-graphql"],
      ["/bridges/timescale", "/mirror/timescale"],
      ["/bridges/elasticsearch", "/mirror/elasticsearch"],
      ["/mirror", "/mirror/what-are-mirror-pipelines"],
      ["/mirror/elasticsearch", "/mirror/sinks/elasticsearch"],
      ["/mirror/rockset", "/mirror/sinks/rockset"],
      ["/mirror/pipeline-cli", "/mirror/references/cli-commands"],
      [
        "/mirror/pipeline-definitions",
        "/mirror/references/pipeline-configuration",
      ],
      ["/streams", "/fusion"],
      ["/streams/cross-chain-subgraphs", "/fusion/cross-chain-subgraphs"],
      ["/streams/transforms", "/fusion/transforms"],
      ["/mirror/choose-the-right-sink", "/mirror/choosing-the-right-sink"],
      ["/mirror/create-a-pipeline", "/mirror/creating-a-pipeline"],
    ].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),
};

module.exports = withMarkdoc()(nextConfig);
