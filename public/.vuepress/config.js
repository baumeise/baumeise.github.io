module.exports = {
  title: 'Amsel',
  description: 'An low budget ESP32-based learning robot for students',
  base: '/',
  themeConfig: {
    logo: '/signet-white.svg',
    orgLogo: '/baumeise_signet.svg',
    search: false,
    nav: [
      { text: 'Getting started', link: '/getting-started/' },
      { text: 'Documentation', link: '/docs/methods' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Hardware', link: '/hardware/' }
    ],
    sidebar: {
      '/getting-started/': {
        sidebar: 'auto'
      },
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          path: '/docs/',
          children: [
            {
              title: 'Methods',
              collapsable: false,
              sidebarDepth: 1,
              path: '/docs/methods'
            },
            {
              title: 'Classes',
              collapsable: false,
              path: '/docs/classes/amsel',
              children: [
                '/docs/classes/amsel',
                '/docs/classes/connection',
                '/docs/classes/skills'
              ]
            }
          ]
        }
      ],
      '/api/': [
        ''
      ]
    }
  }
}
