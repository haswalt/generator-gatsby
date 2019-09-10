const path = require('path');

const NEW_RULES = {
  cssModules: {
    matching: '.css',
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
  svg: {
    matching: '.svg',
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
      return rule.test.toString().includes(ext.replace('.', ''));
    });
  };

  // Transpile Gatsby
  config.resolve.mainFields = ['browser', 'module', 'main'];
  findRule('js').exclude = /node_modules\/(?!(gatsby)\/)/;

  // Add new rules
  for (let rule in NEW_RULES) {
    const newRule = NEW_RULES[rule];

    findRule(newRule.matching).exclude = newRule.test;
    delete newRule.matching;
    config.module.rules.push(newRule);
  }

  // Add extra loaders
  findRule('.css').use.push('postcss-loader');

  return config;
};
