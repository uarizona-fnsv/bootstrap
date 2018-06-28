module.exports = {
    title: 'FSO Bootstrap',
    description: 'Bootstrap meets University of Arizona branding',
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
    ],
    serviceWorker: true,
    evergreen: true,
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
                ['tooltips', 'Tooltips']
            ]
        },
        lastUpdated: 'Last Updated',
        repo: 'https://gitlab.fso.arizona.edu/FAST/fso-bootstrap',
        docsDir: 'docs',
        editLinks: true
    }
}
