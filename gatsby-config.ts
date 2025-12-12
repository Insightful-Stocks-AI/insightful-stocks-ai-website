import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Insightful Stocks AI`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    // Only enable Google Analytics in production (not on localhost)
    ...(process.env.NODE_ENV === "production"
      ? [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // Google Analytics 4 Measurement ID
              trackingIds: [
                "G-E17M5MMYCT",
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true,
                // Does not respect Do Not Track
                respectDNT: false,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
              },
            },
          },
        ]
      : []),
  ]
};

export default config;
