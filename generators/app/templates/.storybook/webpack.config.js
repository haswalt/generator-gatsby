const path = require('path');

const NEW_RULES = {
  cssModules: {
    test: /\.module\.css$/,
    use: [
      `style-loader`,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path]--[local]--[hash:base64:5]'
        }
      },
      `postcss-loader`
    ],
    include: path.resolve(__dirname, '../src')
  },
  svgr: {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: false
        }
      },
      'url-loader'
    ]
  }
};

module.exports = ({ config }) => {
  const findRule = ext => {
    return config.module.rules.find(rule => {
      return rule.test.toString().includes(ext);
    });
  };

  // Use Gatsby's ES6 entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // Transpile Gatsby
  findRule('js').exclude = /node_modules\/(?!(gatsby)\/)/;

  // Setup CSS
  findRule('css').use.push('postcss-loader');
  findRule('css').exclude = /\.module\.css$/;
  config.module.rules.push(NEW_RULES.cssModules);

  // Setup SVGO
  findRule('svg').exclude = /\.svg$/;
  config.module.rules.push(NEW_RULES.svgr);

  return config;
};
