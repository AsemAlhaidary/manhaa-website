const config = {
  siteName: 'منحى',
  logoPath: '/src/assets/imgs/logo.png',
  pages: {
    home: '/',
    services: '/services',
    projects: '/projects',
    customers: '/customers',
    contact: '/contact',
    noMatch: '*'
  },
  headerMenu: {
    services: {
      title: 'خدماتنا',
      link() {
        return config.pages.services
      }
    },
    projects: {
      title: 'أعمالنا',
      link() {
        return config.pages.projects
      }
    },
    customers: {
      title: 'عملائنا',
      link() {
        return config.pages.customers
      }
    },
    contact: {
      title: 'تواصل معنا',
      link() {
        return config.pages.contact
      }
    },
  }
}

export default config