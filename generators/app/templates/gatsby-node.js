const path = require(`path`);
const WebpackNotifierPlugin = require('webpack-notifier');

const TEMPLATES = './src/templates',
  PAGE_CONFIGS = {
    // example: {
    //   query: `{
    //     allExample {
    //       edges {
    //         node {
    //           id
    //           uid
    //         }
    //       }
    //     }
    //   }`,
    //   rootQueryNode: 'allExample',
    //   basePath: '/examples',
    //   templateName: 'example'
    //   // customContext: node => {...}
    // }
  };

/**
 * Page generation
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  async function generatePages({
    query,
    rootQueryNode,
    basePath,
    templateName
  }) {
    const { data } = await graphql(query),
      result = data[rootQueryNode];

    !!result &&
      result.data[rootQueryNode].edges.forEach(({ node }) => {
        createPage({
          path: `${basePath}/${node.uid}`,
          component: path.resolve(`${TEMPLATES}/${templateName}/index.js`),
          context: Object.assign(
            {
              id: node.id,
              uid: node.uid
            },
            customContext && customContext(node)
          )
        });
      });
  }

  Object.keys(PAGE_CONFIGS).forEach(page => generatePages(PAGE_CONFIGS[page]));
};

/**
 * Webpack customization
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // Add notifier
    plugins: [
      new WebpackNotifierPlugin({
        skipFirstNotification: true
      })
    ]
  });
};
