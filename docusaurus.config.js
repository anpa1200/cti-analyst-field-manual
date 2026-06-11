// @ts-check
const config = {
  title: 'CTI Analyst Field Manual',
  tagline: 'From threat intelligence research to defensible analytic judgment, hunting hypotheses, and detection-ready outputs.',
  favicon: 'img/logo.png',
  url: 'https://1200km.com',
  baseUrl: '/cti-analyst-field-manual/',
  organizationName: 'anpa1200',
  projectName: 'cti-analyst-field-manual',

  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-TMTG21RVHM',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TMTG21RVHM');
      `,
    },
  ],
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/anpa1200/cti-analyst-field-manual/tree/main/'
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'}
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'CTI Analyst Field Manual',
      logo: {
        alt: '1200km',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'manualSidebar', position: 'left', label: 'Manual'},
        {to: '/docs/ecosystem', label: 'Ecosystem', position: 'left'},
        {to: '/docs/limitations', label: 'Limitations', position: 'left'},
        {label: 'Projects', position: 'right', items: [
          {label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/'},
          {label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/'},
          {label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/'},
          {label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/'},
          {label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/'},
          {label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/'},
          {label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai'},
          {label: 'ThreatMapper Docs', href: 'https://1200km.com/threatmapper-docs/'}
        ]},
        {href: 'https://medium.com/@1200km', label: 'Medium', position: 'right'},
        {href: 'https://github.com/anpa1200/cti-analyst-field-manual', label: 'GitHub', position: 'right'},
        {href: 'https://1200km.com/', label: 'Main Page', position: 'right', className: 'navbar-portfolio-btn'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Manual', items: [
          {label: 'Start Here', to: '/docs/intro'},
          {label: 'CTI Foundations', to: '/docs/cti-foundations/what-is-cti'},
          {label: 'CTI to Detection', to: '/docs/cti-to-detection/intelligence-to-detection'}
        ]},
        {title: 'Ecosystem', items: [
          {label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/'},
          {label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/'},
          {label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/'},
          {label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/'},
          {label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/'},
          {label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai'},
          {label: 'ThreatMapper Docs', href: 'https://1200km.com/threatmapper-docs/'}
        ]},
        {title: 'Author', items: [
          {label: 'Medium', href: 'https://medium.com/@1200km'},
          {label: 'GitHub', href: 'https://github.com/anpa1200'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrey-pautov/'}
        ]}
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. Defensive CTI field manual.`
    },
    prism: {theme: require('prism-react-renderer').themes.github, darkTheme: require('prism-react-renderer').themes.dracula}
  }
};
module.exports = config;
