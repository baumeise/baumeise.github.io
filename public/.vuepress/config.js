module.exports = {
  title: 'Baumeise',
  description: 'Learn coding while plying with a robot!',
  base: '/',
  themeConfig: {
    logo: '/baumeise_signet.svg',
    search: false,
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Project', link: '/project/' },
      { text: 'Amsel', link: 'https://baumeise.github.io/amsel/' },
    ],
    sidebar: {
      '/about/': [
        '/about/'
      ]
    }
  }
}
