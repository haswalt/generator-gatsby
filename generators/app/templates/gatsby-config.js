const resolveDocument = require('./src/utils/resolver').resolveDocument;

const PLUGIN_OPTS = {
  prismic: {
    repositoryName: '<%= props.prismicRepo %>',
    accessToken: process.env.PRISMIC_TOKEN,
    linkResolver: () => resolveDocument
  },
  manifest: {
    name: '<%= props.name %>',
    short_name: '<%= props.name %>',
    background_color: '#fff',
    theme_color: '<%= props.brandColor %>',
    icon: './src/assets/img/icon.png',
    display: 'minimal-ui',
    include_favicon: false
  },
  layout: {
    component: require.resolve(`./src/containers/App`)
  },
  polyfill: {
    features: ['']
  },
  svgr: {
    icon: false
  },
  nprogress: {
    color: '<%= props.brandColor %>',
    showSpinner: false
  }
};

module.exports = {
  siteMetadata: {
    siteUrl: '<%= props.url %>'
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: PLUGIN_OPTS.prismic
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: PLUGIN_OPTS.layout
    },
    'gatsby-plugin-react-css-modules',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-svgr',
      options: PLUGIN_OPTS.svgr
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: PLUGIN_OPTS.nprogress
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      option: PLUGIN_OPTS.polyfill
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: PLUGIN_OPTS.manifest
    },
    // Offline must be called after manifest
    'gatsby-plugin-offline',
    // Netlify must be called last
    'gatsby-plugin-netlify'
  ]
};
