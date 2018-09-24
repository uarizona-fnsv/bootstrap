module.exports = {
  title: 'FSO Bootstrap',
  description: 'Bootstrap 4 meets University of Arizona branding',
  base: '/fso-bootstrap/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#4a634e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#4a634e' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#4a634e' }],
    // Font Awesome
    ['link', { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/solid.css", integrity: "sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/brands.css", integrity: "sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css", integrity: "sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7", crossorigin: "anonymous" }],
    // Bootstrap
    ['script', { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' }],
    ['script', { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' }],
    // TODO: Need a better way to import these... probably through webpack?
  ],
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '#'
    }
  },
  // Config for the default theme
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content', link: '/content/' },
      { text: 'Components', link: '/components/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Usage', link: '/usage/' },
    ],
    sidebar: {
      '/content/': [
        ['/content/', 'Content'],
        ['code', 'Code'],
        ['colors', 'Colors'],
        ['figures', 'Figures'],
        ['images', 'Images'],
        ['tables', 'Tables'],
        ['typography', 'Typography'],
        ['ua-branding', 'UA Branding Colors']
      ],
      '/components/': [
        ['/components/', 'Components'],
        ['alerts', 'Alerts'],
        ['badge', 'Badge'],
        ['breadcrumb', 'Breadcrumb'],
        ['button-group', 'Button Group'],
        ['buttons', 'Buttons'],
        ['card', 'Card'],
        ['carousel', 'Carousel'],
        ['collapse', 'Collapse'],
        ['dropdowns', 'Dropdowns'],
        ['font-awesome-icons', 'Font Awesome'],
        ['forms', 'Forms'],
        ['input-group', 'Input Group'],
        ['jumbotron', 'Jumbotron'],
        ['list-group', 'List Group'],
        ['modal', 'Modal'],
        ['navbar', 'Navbar'],
        ['navs', 'Navs'],
        ['pagination', 'Pagination'],
        ['popovers', 'Popovers'],
        ['progress', 'Progress'],
        ['scrollspy', 'Scrollspy'],
        ['tooltips', 'Tooltips'],
        ['ua-brand-icons', 'UA Brand Icons']
      ]
    },
    lastUpdated: 'Last Updated',
    repo: 'https://gitlab.fso.arizona.edu/FAST/fso-bootstrap',
    docsDir: 'docs',
    editLinks: true,
    logo: '/logo.png'
  }
}
