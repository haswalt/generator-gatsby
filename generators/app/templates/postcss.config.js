const CONFIG = {
  subgrid: {
    ieHack: true
  },
  presetEnv: {
    stage: 2,
    autoprefixer: {
      grid: true
    }
  }
};

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('postcss-custom-media'),
    require('postcss-subgrid')(CONFIG.subgrid),
    require('postcss-aspect-ratio'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')(CONFIG.presetEnv),
    // Configure autoprefixer separately from preset-env, grid config borking
    require('autoprefixer')(CONFIG.presetEnv.autoprefixer)
  ]
};
