module.exports = {
  title: 'Baumeise',
  description: 'Learn coding while playing with a robot!',
  base: '/',
  themeConfig: {
    logo: '/baumeise_signet.svg',
    search: false,
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Amsel', link: 'https://baumeise.github.io/amsel/' },
    ],
    sidebar: {
      '/about/': [
        '/about/'
      ]
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-155634377-2'
      }
    ]
  ]
}
