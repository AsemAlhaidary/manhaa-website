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
    },
    services: {
      services: [
        {
          id: 'artistic-production',
          title: 'الإنتاج الفني',
          description: 'إعلانات تجارية. تغطيات للفعاليات. انتاج بودكاست مرئي ومسموع. أفلام وثائقية. تصوير فوتوغرافي. تصوير بالواقع الافتراضي ( ٣٦٠ ). الإنتاج الموسيقي والهويات السمعية.',
          icon: '/src/assets/imgs/artistic-production.png'
        },
        {
          id: 'marketing-consulting',
          title: 'الإستشارات التسويقية',
          description: 'إعداد التوجه الاستراتيجي للخطة التسويقية. تقييم الوضع الراهن وطرح آلية التحسين للإدارات السويقية بالجاهت. تقديم الدورات في مجال التسويق والتصوير والإنتاج.',
          icon: '/src/assets/imgs/marketing-consulting.png'
        },
        {
          id: 'digital-marketing',
          title: 'التسويق الرقمي',
          description: 'كتابة وتصميم ونشر المحتوى. إعداد الخطة التسويقية. إدارة الحملات التسويقية وتشغيلها. تقارير الرصد والمتابعة.',
          icon: '/src/assets/imgs/digital-marketing.png'
        },
        {
          id: 'media-consulting',
          title: 'الإستشارات الإعلامية',
          description: 'إعداد التوجه الاستراتيجي للخطة الإعلامية. إعداد البيانات الصحفية للجهات. كتابة وتحرير الأخبار الصحفية. نشر الأخبار في الوسائل الرسمية.',
          icon: '/src/assets/imgs/media-consulting-on.png'
        },
      ]
    }
  }
}

export default config