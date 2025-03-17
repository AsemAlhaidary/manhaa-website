const config = {
  siteName: 'منحى',
  logoPath: '/src/assets/imgs/logo.png',
  pages: {
    home: {
      title: 'الرئيسية',
      link: '/'
    },
    services: {
      title: 'خدماتنا',
      link: '/services'
    },
    projects: {
      title: 'أعمالنا',
      link: '/projects'
    },
    customers: {
      title: 'عملائنا',
      link: '/customers'
    },
    contact: {
      title: 'تواصل معنا',
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