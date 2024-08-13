// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Whale Tail Badge Documentation',
  tagline: 'Documentation',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://whaletail.freewili.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'freewili', // Usually your GitHub org/user name.
  projectName: 'whaletale_webdocs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: true, // Set global trailingSlash configuration 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: false, // Hide the author's name
          showLastUpdateTime: true, // Show the exact time of the last update
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/freewili/whaletale_webdocs/blob/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/test/**', '/markdown-page/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/freewili-social-card.jpg',
      navbar: {
        title: 'Whale Tail Badge Documentation',
         logo: {
          alt: 'Whale_Tail_Logo',
          src: '/img/logo.svg',
          srcDark: '/img/logo-dark.svg', 
          // href: '#',
          target: '_self',
          // style: {border: 'solid red'},
        },
        items: [
          {
            href: 'https://freewili.com/',
            label: 'Website',
            position: 'left',
            className: 'nav-link',
        },
        {
          href: 'https://docs.freewili.com/',
          label: 'FREE-WILi Documentation',
          position: 'left',
          className: 'nav-link',
          target:'_self',
        },
        {
          type: 'dropdown',
          label: 'Products',
          position: 'left',
          items: [
            {
              label: 'FREE-WILi',
              href: 'https://freewili.com/products/freewili/',
              target: '_blank',
            },
            {
              label: 'Orca Modules',
              href: 'https://freewili.com/products/orca-modules/',
              target: '_blank',
            },
            {
              label: 'Whale Tail',
              href: 'https://freewili.com/products/whale-tail/',
              target: '_blank',
            },
          ],
        },

        {
          href: 'https://github.com/freewili/whaletale_webdocs/tree/main',
          label: 'GitHub',
          position: 'right',
        },
      ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Follow Us',
            items: [
              {
                html: `
                    <a href="https://www.facebook.com/ICSFREEWILI/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a> <a href="https://www.facebook.com/ICSFREEWILI/" target="_blank" rel="noopener noreferrer">Facebook</a>
                `,
              },
              {
                html: `
                    <a href="https://www.instagram.com/free_wili_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> <a href="https://www.instagram.com/free_wili_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                `,
              },
              {
                html: `
                    <a href="https://www.linkedin.com/company/freewili/about/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> <a href="https://www.linkedin.com/company/freewili/about/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                `,
              },
              {
                html: `
                    <a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer"><img src="/img/x-twitter.svg" alt="Twitter Icon" class="x-twitter"></a> <a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer">Twitter</a>
                `,
              },
              {
                html: `
                    <a href="https://www.youtube.com/channel/UCSx1CmqjhiaWd3I42zJyuDw" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a> <a href="https://www.youtube.com/channel/UCSx1CmqjhiaWd3I42zJyuDw" target="_blank" rel="noopener noreferrer">YouTube</a>
                `,
              },

            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About FREE-WILi',
                href: 'https://freewili.com/products/freewili/',
              },
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'FREE-WILi Discord',
                href: 'https://discord.com/invite/XJRBUCX62z',
              },
              {
                label: 'Contact Us',
                href: 'https://freewili.com/contact-us/',
              },
            ],
          },
        ],

        logo: {
          alt: 'FREE-WILi',
          src: '/img/FreeWIli_trans.png',
          href: 'https://freewili.com/',
          width: 160,
          // height: 150,
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://freewili.com/" class="freewili-link"> FREE-WILi, Inc.</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
    }),
    plugins: [
      [
        require.resolve('docusaurus-lunr-search'),
        {
          // languages: ['en'], // Specify the languages, e.g., ['en', 'de']
          indexBaseUrl: true, // Whether to index base URLs
          // excludeRoutes: ['!docs/my-excluded-doc'], // Routes to exclude from indexing
        },
      ],
    ],
    scripts: [
      {
        src: '/js/zoom.js',
        async: true,
      },
    ],

    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon-16x16.png',
          sizes: '16x16',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon-32x32.png',
          sizes: '32x32',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon-180x180.png',
          sizes: '180x180',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon-192x192.png',
          sizes: '192x192',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/favicon-512x512.png',
          sizes: '512x512',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          href: '/img/apple-touch-icon.png',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:type',
          content: 'website',
          'data-rh': 'true',
        },
      },
    ],
  };

export default config;
