const config = {
  siteName: 'منحى',
  logoPath: '/src/assets/imgs/logo.png',
  activeIcon: '/src/assets/imgs/active-icon.png',
  pages: {
    home: {
      title: 'الرئيسية',
      link: '/'
    },
    services: {
      title: 'خدماتنــا',
      link: '/services'
    },
    projects: {
      title: 'أعمالنــا',
      link: '/projects'
    },
    customers: {
      title: 'عملائنــا',
      link: '/customers'
    },
    contact: {
      title: 'تواصل معنــا',
      link: '/contact'
    },
    noMatch: {
      title: '404',
      link: '*'
    }
  },
  headerMenu: {
    services: {
      title() {return config.pages.services.title},
      link() {return config.pages.services.link}
    },
    projects: {
      title() {return config.pages.projects.title},
      link() {return config.pages.projects.link}
    },
    customers: {
      title() {return config.pages.customers.title},
      link() {return config.pages.customers.link}
    },
  }
}

export default config