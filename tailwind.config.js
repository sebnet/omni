module.exports = {
  hainWebpack: (config) => {
    config.module
      .rule('postcss') // css, sass, scss, less, postcss, stylus
      .oneOf('normal') // normal, module
      .use('postcss-loader')
      .tap((options) => {
        options.plugins.unshift(
          ...[
            require('postcss-import'),
            require('tailwindcss')(config.tailwind),
          ],
        );

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(
            ...[require('@fullhuman/postcss-purgecss')(config.purgecss)],
          );
        }

        return options;
      });
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
