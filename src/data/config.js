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
      title: 'خدماتنـــا',
      link: '/services'
    },
    projects: {
      title: 'أعمالنـــا',
      link: '/projects'
    },
    customers: {
      title: 'عملائنـــا',
      link: '/customers'
    },
    contact: {
      title: 'تواصل معنـــا',
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
  },
  siteContent: {
    home: {
      heroVideoSrc: '/src/assets/videos/home-hero.mp4',
      heroVideoThumbnail: '/src/assets/imgs/home-thumbnail.jpg',
    }
  }
}

export default config