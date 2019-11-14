module.exports = {
  description: 'Official documentation for the learning robot Amsel',
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
