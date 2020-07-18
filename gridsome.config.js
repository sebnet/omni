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
