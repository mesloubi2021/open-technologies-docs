// require('dotenv').config({
//   path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
// });

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const SITE_URL = process.env.SITE_URL ? process.env.SITE_URL : 'https://learning.postman.com/open-technologies'
const DOMAIN_NAME = process.env.DOMAIN_NAME ? process.env.DOMAIN_NAME : 'learning.postman.com';
const PATH_PREFIX = '/open-technologies'

module.exports = {
  siteMetadata: {
    title: 'Postman Open Technologies Docs',
    description: '',
    author: 'Postman',
    siteUrl: SITE_URL,
    domainName: DOMAIN_NAME,
    pathPrefix: PATH_PREFIX
  },
  pathPrefix: PATH_PREFIX, // The pathPrefix key is apart of gatsby build process, can find in gatsby docs
  trailingSlash: 'always',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-check-links',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Open Technologies Docs',
        short_name: 'Open Technologies Docs',
        start_url: '/',
        background_color: '#FF6C37',
        theme_color: '#FF6C37',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/search/']
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap:`${SITE_URL}/sitemap/sitemap-index.xml`,
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha512', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
        crossorigin: false, // Optional
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['MUNCHKIN_ID'],
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'G-CX7P9K6W67',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        config: {
          instrumentationType: 'pro',
          accountId: process.env.RELIC_ACCOUNT_ID,
          trustKey: process.env.RELIC_TRUST_KEY,
          agentID: process.env.RELIC_PRODUCTION_AGENT_ID,
          licenseKey: process.env.RELIC_LICENSE_KEY,
          applicationID: process.env.RELIC_PRODUCTION_APPLICATION_ID,
          beacon: 'bam.nr-data.net',
          errorBeacon: 'bam.nr-data.net'
        }
      }
    }
  ],
};
