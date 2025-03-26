window.clientConfig = {
  siteName: 'منحى',
  logoPath: '/imgs/logo.png',
  activeIcon: '/imgs/active-icon.png',
  copyright: '@جميع الحقوق محفوظة لموقع manhaa.com',
  generalThumbnail: '/imgs/home-thumbnail.jpg',
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
    project: {
      title: 'مشروع',
      link: '/project'
    },
    customers: {
      title: 'عملاؤنـــا',
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
      title() {return window.clientConfig.pages.services.title},
      link() {return window.clientConfig.pages.services.link}
    },
    projects: {
      title() {return window.clientConfig.pages.projects.title},
      link() {return window.clientConfig.pages.projects.link}
    },
    customers: {
      title() {return window.clientConfig.pages.customers.title},
      link() {return window.clientConfig.pages.customers.link}
    },
  },
  siteContent: {
    home: {
      heroVideoSrc: '/videos/home-hero.mp4',
      heroVideoThumbnail: '/imgs/home-thumbnail.jpg',
      aboutUs: [
        {
          title: 'قصتنا',
          description: 'نحن أكثر من مجرد كيان إعلامي نحن مصنع للإفكار وشركاء في النجاح نسعى لإحداث فرق في كل رسالة وكل قصة نرويها لنترك إثرا إبداعيا يثري ويبتكر.'
        },
        {
          title: 'رؤيتنا',
          description: 'أن نكون المقصد الأول في المملكة لصناعة الفكرة, والذهاب بها الى منحى أبعد مما يمكن تصوره.'
        },
        {
          title: 'غايتنا',
          description: 'نساعد أهدافك على أن تسمع, ترى, وتحس. نخلق تجارب أصيلة تترك أثرا دائما.'
        },
      ]
    },
    services: {
      services: [
        {
          id: 'artistic-production',
          title: 'الإنتــاج<br />الفنــي',
          description: '<ul><li>إعلانات تجارية</li><li>تغطيات للفعاليات</li><li>انتاج بودكاست مرئي ومسموع</li><li>أفلام وثائقية</li><li>تصوير فوتوغرافي</li><li>تصوير بالواقع الافتراضي ( ٣٦٠ )</li><li>الإنتاج الموسيقي والهويات السمعية</li></ul>',
          icon: '/imgs/artistic-production.png'
        },
        {
          id: 'digital-marketing',
          title: 'التسويــق<br />الرقمــــــي',
          description: '<ul><li>كتابة وتصميم ونشر المحتوى</li><li>إعداد الخطة التسويقية</li><li>إدارة الحملات التسويقية وتشغيلها</li><li>تقارير الرصد والمتابعة</li></ul>',
          icon: '/imgs/digital-marketing.png'
        },
        {
          id: 'marketing-consulting',
          title: 'الإستشارات<br />التسويقيــــة',
          description: '<ul><li>إعداد التوجه الاستراتيجي للخطة التسويقية</li><li>تقييم الوضع الراهن وطرح آلية التحسين للإدارات السويقية بالجاهت</li><li>تقديم الدورات في مجال التسويق والتصوير والإنتاج</li></ul>',
          icon: '/imgs/marketing-consulting.png'
        },
        {
          id: 'media-consulting',
          title: 'الإستشارات<br />الإعلاميـــــة',
          description: '<ul><li>إعداد التوجه الاستراتيجي للخطة الإعلامية</li><li>إعداد البيانات الصحفية للجهات</li><li>كتابة وتحرير الأخبار الصحفية</li><li>نشر الأخبار في الوسائل الرسمية</li></ul>',
          icon: '/imgs/media-consulting-on.png'
        },
      ]
    },
    projects: {
      projects: [
        {
          title: 'نحلم ونحقق',
          description: 'إعداد التوجه الاستراتيجي للخطة الإعلامية. إعداد البيانات الصحفية للجهات. كتابة وتحرير الأخبار الصحفية. نشر الأخبار في الوسائل الرسمية.',
          media: '/videos/projects/Alsaigh Final.mp4',
          mediaType: 'video',
          logo: '/imgs/clients/2كورة.png',
          customer: 'المركز السعودي للأعمال',
          categories: [
            'فيديو'
          ]
        },
        {
          title: 'نحلم ونحقق',
          description: 'إعداد التوجه الاستراتيجي للخطة الإعلامية. إعداد البيانات الصحفية للجهات. كتابة وتحرير الأخبار الصحفية. نشر الأخبار في الوسائل الرسمية.',
          media: '/videos/projects/Alsaigh Final.mp4',
          mediaType: 'video',
          logo: '/imgs/clients/2كورة.png',
          customer: 'المركز السعودي للأعمال',
          categories: [
            'فيديو'
          ]
        },
        {
          title: 'نحلم ونحقق',
          description: 'إعداد التوجه الاستراتيجي للخطة الإعلامية. إعداد البيانات الصحفية للجهات. كتابة وتحرير الأخبار الصحفية. نشر الأخبار في الوسائل الرسمية.',
          media: '/imgs/projects/project-1.jpg',
          logo: '/imgs/clients/2كورة.png',
          customer: 'المركز السعودي للأعمال',
          categories: [
            'صورة'
          ]
        },
      ]
    },
    customers: {
      customers: [
        {
          name: 'كورة',
          logo: '/imgs/clients/كورة.png'
        },
        {
          name: 'Light Tea',
          logo: '/imgs/clients/light tea.png'
        },
        {
          name: 'Tayyah',
          logo: '/imgs/clients/TAYYAH.png'
        },
        {
          name: 'شعار',
          logo: '/imgs/clients/الشعار-مفرغ-بيج.png'
        },
        {
          name: 'العراب',
          logo: '/imgs/clients/العراب.png'
        },
        {
          name: 'اهداف',
          logo: '/imgs/clients/اهداف.png'
        },
        {
          name: 'اوكازيون',
          logo: '/imgs/clients/اوكازيون.png'
        },
        {
          name: 'الركن الجديد',
          logo: '/imgs/clients/شعار الركن الجديد (1).png'
        },
        {
          name: 'صيحات',
          logo: '/imgs/clients/شعار-صيحات.png'
        },
        {
          name: 'وزارة الشؤون البلدية',
          logo: '/imgs/clients/شعار_وزارة_الشؤون_البلدية.png'
        },
        {
          name: 'شيغف',
          logo: '/imgs/clients/شيغف.png'
        },
        {
          name: 'فيونا',
          logo: '/imgs/clients/فيونا.png'
        },
        {
          name: 'الشعار',
          logo: '/imgs/clients/متسطيل 10000+500.png'
        },
        {
          name: 'ممر',
          logo: '/imgs/clients/ممر.png'
        },
        {
          name: 'هيئة المتاحف',
          logo: '/imgs/clients/هيئة المتاحف.png'
        },
      ]
    },
    contact: {
      address: 'المملكة العربية السعودية - الرياض',
      phone: '009665000000',
      email: 'email@manhaa.com',
      socialMedia: {
        username: '@manhaa',
        social: [
          {
            name: 'Instagram',
            username: '@manhaa',
            url: '',
            icon: 'fa-brands fa-instagram'
          },
          {
            name: 'Linked In',
            username: '@manhaa',
            url: '',
            icon: 'fa-brands fa-linkedin'
          },
          {
            name: 'X',
            username: '@manhaa',
            url: '',
            icon: 'fa-brands fa-x-twitter'
          },
        ]
      },
      form: {
        apiAccessKey: '9059985a-765e-4fb1-98dd-25ec346ee212',
        name: 'الإسم',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'تواصل معنا',
        onSuccess: {
          title: 'تم!',
          text: 'لقد تم إرسال رسالتك بنجاح, سنرد عليك في اقرب وقت ممكن.',
          icon: 'success'
        },
        onError: {
          title: 'خطأ!',
          text: 'حدث خطأ أثناء الإرسال',
          icon: 'error'
        }
      }
    }
  }
}