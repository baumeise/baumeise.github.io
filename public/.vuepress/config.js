module.exports = {
  title: 'Baumeise',
  description: 'Learn coding while plying with a robot!',
  base: '/',
  themeConfig: {
    logo: '/baumeise_signet.svg',
    search: false,
    nav: [
      { text: 'Amsel', link: '/amsel/' },
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
