const CONFIG = {
  metadata: {
    siteUrl: '<%= props.url %>'
  },
  manifest: {
    name: '<%= props.name %>',
    short_name: '<%= props.name %>',
    background_color: '#fff',
    theme_color: '<%= props.brandColor %>',
    icon: './src/assets/img/icon.png',
    display: 'minimal-ui',
    include_favicon: false
  },<% if (props.features.includes('prismic')) { %>
  filesystem: {
    name: 'pages',
    path: `${__dirname}/src/pages`
  },
  prismic: {
    repositoryName: '<%= props.prismic %>',
    defaultLang: 'en-us',
    previews: true,
    omitPrismicScript: true,
    pages: [],
    sharpKeys: [/image|photo|picture|thumbnail/]
  },<% } %>
  layout: {
    component: require.resolve(`./src/containers/App`)
  },
  cssModules: {
    handleMissingStyleName:
      process.env.NODE_ENV === 'production' ? 'warn' : 'throw'
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
  },
  preconnect: {
    domains: []
  },
  notify: {
    excludeWarnings: true
  }
};

module.exports = {
  siteMetadata: CONFIG.metadata,
  plugins: [<% if (props.features.includes('prismic')) { %>
    {
      resolve: 'gatsby-source-filesystem',
      options: CONFIG.filesystem
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: CONFIG.prismic
    },<% } %>
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: CONFIG.cssModules
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-layout',
      options: CONFIG.layout
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-svgr',
      options: CONFIG.svgr
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: CONFIG.nprogress
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: CONFIG.polyfill
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-preconnect',
      options: CONFIG.preconnect
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: CONFIG.manifest
    },
    // Offline must be called after manifest
    'gatsby-plugin-offline',<% if (props.features.includes('netlify')) { %>
    // Netlify must be called after building
    'gatsby-plugin-netlify',<% } %>
    {
      resolve: 'gatsby-plugin-notify',
      options: CONFIG.notify
    }
  ]<% if (props.features.includes('netlify')) { %>,
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    );
  }<% } %>
};
