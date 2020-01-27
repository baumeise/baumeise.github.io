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
      { text: 'Documentation', link: '/docs/' },
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
              sidebarDepth: 4,
              path: '/docs/methods'
            },
            {
              title: 'Classes',
              collapsable: false,
              path: '/docs/classes',
              children: [
                '/docs/classes/amsel',
                '/docs/classes/connection',
                '/docs/classes/skills',
                '/docs/classes/utils'
              ]
            }
          ]
        }
      ],
      '/api/': [
        ''
      ]
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-155634377-3'
      }
    ]
  ]
}
