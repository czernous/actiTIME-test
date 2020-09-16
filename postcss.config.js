module.exports = {
  plugins: {
    precss: {},
    'postcss-preset-env': {
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions', '> 0.25%'],
        grid: true,
      },
    },
  },
};
