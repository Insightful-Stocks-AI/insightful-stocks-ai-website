import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Insightful Stocks AI - AI Agent for SEC Filings Analysis`,
    titleTemplate: `%s | Insightful Stocks AI`,
    description: `The AI Agent That Reads SEC Filings So You Don't Have To. Get autonomous, verifiable insights into material changes affecting your portfolio. Join the waitlist for early access.`,
    author: `Justin Cianci`,
    siteUrl: `https://insightfulstocks.ai`,
    keywords: [
      "SEC filings",
      "AI stock analysis",
      "10-K analysis",
      "10-Q analysis",
      "stock portfolio insights",
      "AI agent",
      "financial analysis",
      "SEC document analysis"
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }: {
          allSitePage: { nodes: Array<{ path: string }> }
        }) => {
          return allPages.map((page: { path: string }) => {
            return { ...page }
          })
        },
        serialize: ({ path }: { path: string }) => {
          return {
            url: path,
            changefreq: `daily`,
            priority: path === `/` ? 1.0 : 0.7,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://insightfulstocks.ai`,
        sitemap: `https://insightfulstocks.ai/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
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
