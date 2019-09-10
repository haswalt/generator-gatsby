const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { resolveDocument } = require('./src/lib/resolve');

registerLinkResolver(resolveDocument);
