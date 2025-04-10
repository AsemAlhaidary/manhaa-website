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
          description: 'نحن أكثر من مجرد كيان إعلامي نحن مصنع للإفكار وشركاء في النجاح نسعى لإحداث فرق في كل رسالة وكل قصة نرويها لنترك إثرا إبداعيا يثري ويبتكر'
        },
        {
          title: 'رؤيتنا',
          description: 'أن نكون المقصد الأول في المملكة لصناعة الفكرة, والذهاب بها الى منحى أبعد مما يمكن تصوره'
        },
        {
          title: 'غايتنا',
          description: 'نساعد أهدافك على أن تسمع, ترى, وتحس. نخلق تجارب أصيلة تترك أثرا دائما'
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
          description: '<ul><li>إعداد التوجه الاستراتيجي للخطة التسويقية</li><li>تقييم الوضع الراهن وطرح آلية التحسين للإدارات السويقية بالجهات</li><li>تقديم الدورات في مجال التسويق والتصوير والإنتاج</li></ul>',
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
          title: 'مركز الاعمال السعودي',
          description: 'فيديو يوثق احتفال مركز الاعمال السعودي باليوم الوطني بروح الفخر والانتماء, متضمنا ذكر انجازات الشركة ومساهمتها بتحقيق الرؤية',
          media: 'https://drive.google.com/file/d/1dJ0aeYkBOUFgakdsMH4kACsomyuY0ont/preview',
          mediaType: 'video',
          logo: '/imgs/projects/المركز الأعمال السعودي.png',
          customer: 'المركز السعودي للأعمال',
          categories: [
            'فيديو',
          ]
        },
        {
          title: 'فندق هيلتون',
          description: 'فيديو يعرض تجربة متكاملة للإقامة في الفندق, مسلطا الضوء على الخدمات المقدمة والأجواء العائلية التي تجعله وجهة مثالية للعائلات',
          media: 'https://drive.google.com/file/d/1hDG38u343zKAqXiFfqPlM5hUiAYc3Vre/preview',
          mediaType: 'video',
          logo: '/imgs/projects/هيلتون.png',
          customer: 'فندق هيلتون',
          categories: [
            'فيديو',
          ]
        },
        {
          title: 'سيرمونيا ومجموعة راديسون',
          description: 'فيديو يبرز جمال المنتجع ومرافقه الفريدة, مقدما تجربة بصرية آسرة تدعو الزوار للإسترخاء والإستمتاع بالطبيعة',
          media: 'https://drive.google.com/file/d/1Z-kp5-6yRbjNpCavUg551Y0mNhpcKkCb/preview',
          mediaType: 'video',
          logo: '/imgs/projects/سيرمونيا  ومجموعة رادسيون.png',
          customer: 'سيرمونيا ومجموعة راديسون',
          categories: [
            'فيديو',
          ]
        },
      ]
    },
    customers: {
      customers: [
        {
          name: 'اهداف',
          logo: '/imgs/clients/أهداف.png'
        },
        {
          name: 'هيئة المتاحف',
          logo: '/imgs/clients/هيئة المتاحف.png'
        },
        {
          name: 'وزارة شؤوون البلدية',
          logo: '/imgs/clients/وزارة شؤوون البلدية.png'
        },
        {
          name: 'المركز السعودي',
          logo: '/imgs/clients/المركز السعودي.png'
        },
        {
          name: 'هيلتون',
          logo: '/imgs/clients/هيلتون.png'
        },
        {
          name: 'وزارة الثقافة',
          logo: '/imgs/clients/وزارة الثقافة.png'
        },
        {
          name: 'العراب',
          logo: '/imgs/clients/العراب.png'
        },
        {
          name: 'راديسون',
          logo: '/imgs/clients/راديسون.png'
        },
        {
          name: 'بلاك دايموند',
          logo: '/imgs/clients/بلاك دايموند.png'
        },
        {
          name: 'سيرمونيا',
          logo: '/imgs/clients/سيرمونيا.png'
        },
        {
          name: 'ممر',
          logo: '/imgs/clients/ممر.png'
        },
        {
          name: 'اوزكازيون',
          logo: '/imgs/clients/اوزكازيون.png'
        },
        {
          name: 'شغف',
          logo: '/imgs/clients/شغف.png'
        },
        {
          name: 'كورة شور',
          logo: '/imgs/clients/كورة شور.png'
        },
        {
          name: 'كورة بلانت',
          logo: '/imgs/clients/كورة بلانت.png'
        },
        {
          name: 'فيونا',
          logo: '/imgs/clients/فيونا.png'
        },
        {
          name: 'صيحات',
          logo: '/imgs/clients/صيحات.png'
        },
        {
          name: 'لايت تي',
          logo: '/imgs/clients/لايت تي.png'
        },
        {
          name: 'Tayyah',
          logo: '/imgs/clients/TAYYAH.png'
        },
      ]
    },
    contact: {
      info: [
        {
          icon: 'fa-solid fa-location-dot',
          info: 'المملكة العربية السعودية - الرياض',
          url: ''
        },
        {
          icon: 'fa-solid fa-phone',
          info: '+966538020808',
          url: 'tel:+966538020808'
        },
        {
          icon: 'fa-solid fa-envelope',
          info: 'hello@manhaa.com',
          url: 'mailto:hello@manhaa.com'
        },
      ],
      socialMedia: {
        social: [
          {
            name: 'Instagram',
            username: '@manhaa_sa',
            url: 'https://www.instagram.com/manhaa_sa/',
            icon: 'fa-brands fa-instagram'
          },
          {
            name: 'Linked In',
            username: '@manhaa-agency',
            url: 'https://www.linkedin.com/company/manhaa-agency/',
            icon: 'fa-brands fa-linkedin'
          },
          {
            name: 'X',
            username: '@manhaa_sa',
            url: 'https://x.com/manhaa_sa/',
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