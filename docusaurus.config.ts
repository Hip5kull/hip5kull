import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "Hip5kull";
const projectName = "hip5kull";
const config: Config = {
  title: 'Hip5kull' ,
  tagline: 'Tutorials & Documentations',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://Hip5kullgithub.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hip5kull/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hip5kull', // Usually your GitHub org/user name.
  projectName: 'hip5kull',
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr-FR',
    locales: ['fr-FR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
              },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hip5kull',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentations',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/curriculum', label: 'CV', position: 'left'},
          {
          href: 'https://github.com/Hip5kull',
          position: 'right',
          className: 'header-github-link',
        },
        {
          href: 'https://www.linkedin.com/in/medericpochon/',
          position: 'right',
          className: 'header-linkedin-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Hip5kull Documentations, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'powershell',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
