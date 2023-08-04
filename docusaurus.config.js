// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scribe-docs',
  tagline: 'Documentation for Scribe',
  url: 'https://autographa-docs.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'friendsofagape', // Usually your GitHub org/user name.
  projectName: 'scribe-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //disableVersioning: true,
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
             current: {
               label: '0.4.1'
                },
            },
          
          // // REMOVE WHEN VERSIONING 2.0.0
          // // lastVersion: 'current',
          // // versions: {
          // //   current: {
          // //     label: '0.2.0',
            
          //   },
          //   // '1.0.0': {
          //   //   label: '1.0.0',
          //   //   path: '1.0.0',
          //   //   banner: 'unmaintained',
          //   // },
          //   // TILL HERE
          // },
          editUrl:
						'https://github.com/friendsofagape/autographa-docs/edit/v2/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Scribe',
      logo: {
        alt: 'My Site Logo',
        src: 'img/scribe_logo.png',
        srcDark: 'img/scribe_logo.png',
      },
      hideOnScroll: false,
      items: [
        {
          to: '/docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
          dropdownActiveClassDisabled: true,
        },
        {
					href: 'https://github.com/bible-technology/scribe-docs',
					label: 'GitHub',
					position: 'right',
				},
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
