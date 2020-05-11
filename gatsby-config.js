module.exports = {
  siteMetadata: {
        title: `Marguerite Roth | Product Designer & Developer`,
        description: `Personal site for Marguerite Roth`,
        author: `Marguerite Roth | marguerite.io | @marrrguerite`,
        siteUrl: "https://marguerite.io",
        image: `https://marguerite.io/og-image.png`,
        twitterImage: `https://marguerite.io/twitter-image.png`,
        keywords: `web development, design, data, product, visualization, dashboard, analytics, currents, parse.ly, visual`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    `gatsby-remark-autolink-headers`,
    {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
        siteUrl: `https://marguerite.io`,
    },
      },
    // {
    //     resolve: `gatsby-plugin-layout`,
    //     options: {
    //         component: require.resolve(`./src/components/Layout/Layout.jsx`),
    //     },
    // },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1035,
                    },
                },
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        // Class prefix for <pre> tags containing syntax highlighting;
                        // defaults to 'language-' (eg <pre class="language-js">).
                        // If your site loads Prism into the browser at runtime,
                        // (eg for use with libraries like react-live),
                        // you may use this to prevent Prism from re-processing syntax.
                        // This is an uncommon use-case though;
                        // If you're unsure, it's best to use the default value.
                        classPrefix: "language-",
                        // This is used to allow setting a language for inline code
                        // (i.e. single backticks) by creating a separator.
                        // This separator is a string and will do no white-space
                        // stripping.
                        // A suggested value for English speakers is the non-ascii
                        // character '›'.
                        inlineCodeMarker: null,
                        // This lets you set up language aliases.  For example,
                        // setting this to '{ sh: "bash" }' will let you use
                        // the language "sh" which will highlight using the
                        // bash highlighter.
                        aliases: {},
                        // This toggles the display of line numbers globally alongside the code.
                        // To use it, add the following line in src/layouts/index.js
                        // right after importing the prism color scheme:
                        //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                        // Defaults to false.
                        // If you wish to only show line numbers on certain code blocks,
                        // leave false and use the {numberLines: true} syntax below
                        showLineNumbers: false,
                        // If setting this to true, the parser won't handle and highlight inline
                        // code used in markdown i.e. single backtick code like `this`.
                        noInlineHighlight: false,
                        // This adds a new language definition to Prism or extend an already
                        // existing language definition. More details on this option can be
                        // found under the header "Add new language definition or extend an
                        // existing language" below.
                        languageExtensions: [
                            {
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            },
                        ],
                        // Customize the prompt used in shell output
                        // Values below are default
                        prompt: {
                            user: "root",
                            host: "localhost",
                            global: false,
                        },
                    }
                }
            ],
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bachelor`,
        path: `${__dirname}/src/components/Bachelor/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/work`,
        name: `work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/content/blog`,
    //     name: `blog`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `rose madder`,
            short_name: `rose`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/oscar-icon.png`, // This path is relative to the root of the site.
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
            head: true,
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            // In your gatsby-transformer-remark plugin array
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1080,
                    },
                },
            ],
        },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    {
        resolve: `gatsby-plugin-parsely-analytics`,
        options: {
          apikey: `marguerite.io`,
          enableInDevelopment: false // send page views when NODE_ENV !== prod
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
