const tailwindcss = require('tailwindcss');
module.exports = {
  siteName: 'Gridsome Example Site',
  templates: {
    Productos: '/producto/:title',
  },
  siteName: 'Gridsome',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },

  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md',
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/data/productos/*.md',
        typeName: 'Productos',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
