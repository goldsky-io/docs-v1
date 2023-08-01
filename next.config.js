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
      ["/bridges", "/mirror"],
      ["/bridges/elasticsearch", "/mirror/elasticsearch"],
      ["/bridges/goldsky-graphql", "/mirror/goldsky-graphql"],
      ["/bridges/timescale", "/mirror/timescale"],
      ["/bridges/webhooks", "/mirror/webhooks"],
      ["/docs/:path*", "/:path*"],
      ["/mirror", "/mirror/what-are-mirror-pipelines"],
      ["/mirror/choose-the-right-sink", "/mirror/choosing-the-right-sink"],
      ["/mirror/create-a-pipeline", "/mirror/creating-a-pipeline"],
      ["/mirror/elasticsearch", "/mirror/sinks/elasticsearch"],
      ["/mirror/goldsky-graphql", "/mirror/sinks/graphql"],
      ["/mirror/pipeline-cli", "/mirror/references/cli-commands"],
      [
        "/mirror/pipeline-definitions",
        "/mirror/references/pipeline-configuration",
      ],
      ["/mirror/rockset", "/mirror/sinks/rockset"],
      ["/mirror/timescale", "/mirror/sinks/timescale"],
      ["/mirror/webhooks", "/mirror/sinks/webhooks"],
      [
        "/references/instant-subgraphs-config",
        "/references/instant-subgraphs-configuration",
      ],
      ["/streams", "/fusion"],
      ["/streams/cross-chain-subgraphs", "/fusion/cross-chain-subgraphs"],
      ["/streams/transforms", "/fusion/transforms"],
    ].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),
};

module.exports = withMarkdoc()(nextConfig);
