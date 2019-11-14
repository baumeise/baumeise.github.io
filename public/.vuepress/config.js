module.exports = {
  title: 'Amsel',
  description: 'An low budget ESP32-based learning robot for students',
  base: '/amseldocs/',
  themeConfig: {
    logo: '/signet-white.svg',
    search: false,
    nav: [
      { text: 'Getting started', link: '/getting-started/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'API Reference', link: '/api/' }
    ],
    sidebar: {
      '/getting-started/': [
        '/getting-started/'
      ],
      '/docs/': [
        '/docs/'
      ],
      '/api/': [
        '/api/'
      ]
    }
  }
}
