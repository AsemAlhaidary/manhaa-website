# دليل تعديل ملف الإعدادات (config.js)

## الهدف
هذا الملف يتحكم في جميع إعدادات الموقع وعناصر المحتوى الرئيسية. يمكنك من خلاله تعديل:
- معلومات الموقع الأساسية (الاسم، الشعار، حقوق النشر)
- هيكل الصفحات والقوائم
- المحتوى المعروض في جميع أقسام الموقع
- إعدادات التواصل والشبكات الاجتماعية

## مكان الملف
`public/config/config.js`

## خطوات التعديل الأساسية
1. افتح الملف باستخدام محرر نصوص (مثل Visual Studio Code)
2. قم بالتعديلات المرغوبة مع الحفاظ على التركيبة الأساسية
3. احفظ الملف
4. أعد تحميل الموقع لرؤية التغييرات

## الأقسام الرئيسية

### 1. المعلومات الأساسية
```javascript
siteName: 'منحى', // اسم الموقع
logoPath: '/imgs/logo.png', // مسار شعار الموقع
activeIcon: '/imgs/active-icon.png', // أيقونة النشاط
copyright: '@جميع الحقوق محفوظة لموقع manhaa.com', // نص حقوق النشر
```

### 2. الصفحات الرئيسية
```javascript
pages: {
  home: { title: 'الرئيسية', link: '/' },
  // ... باقي الصفحات
}
```

### 3. القائمة الرئيسية
```javascript
headerMenu: {
  services: {
    title() {return window.clientConfig.pages.services.title},
    link() {return window.clientConfig.pages.services.link}
  },
  // ... باقي العناصر
}
```

### 4. المحتوى الرئيسي

#### أ. الصفحة الرئيسية
```javascript
home: {
  heroVideoSrc: '/videos/home-hero.mp4', // فيديو الخلفية
  heroVideoThumbnail: '/imgs/home-thumbnail.jpg' // صورة بديلة للفيديو
},
```

#### ب. قسم الخدمات
```javascript
services: [
  {
    id: 'artistic-production', // معرف الخدمة (لا تغيير)
    title: 'الإنتاج الفني', // عنوان الخدمة
    description: 'إعلانات تجارية...', // وصف الخدمة
    icon: '/imgs/artistic-production.png' // أيقونة الخدمة
  },
  // ... باقي الخدمات
]
```

#### ج. قسم المشاريع
```javascript
projects: [
  {
    title: 'نحلم ونحقق', // عنوان المشروع
    description: 'إعداد التوجه الاستراتيجي...', // وصف المشروع
    thumbnail: '/imgs/projects/project-1.jpg', // صورة المصغرة
    categories: ['فيديو', 'تصميم'] // التصنيفات
  },
  // ... باقي المشاريع
]
```

## نصائح مهمة
1. **أسماء الملفات**: استخدم أسماء لاتينية للصور والفيديوهات
2. **تركيبة الملف**: احتفظ بالأقواس {} والفوارز ، كما هي
3. **النسخ الاحتياطي**: احفظ نسخة من الملف قبل أي تعديلات
4. **التجربة**: أعد تحميل الصفحة بعد كل تعديل للتأكد من السلامة

## إضافة/تعديل محتوى
### لإضافة خدمة جديدة:
```javascript
{
  id: 'new-service',
  title: 'خدمة جديدة',
  description: 'وصف الخدمة الجديدة...',
  icon: '/imgs/new-service-icon.png'
},
```

### لتعديل معلومات التواصل:
```javascript
contact: {
  address: 'العنوان الجديد',
  phone: 'رقم الهاتف الجديد',
  email: 'البريد الإلكتروني الجديد'
}
```

## استكشاف الأخطاء
- **أخطاء الصور**: تأكد من صحة المسارات وأسماء الملفات
- **أخطاء التركيب**: تأكد من عدم نسيان الفواصل بين العناصر
- **أخطاء المحتوى**: تأكد من تطابق الأقواس {}

## الدعم الفني
لأي استفسارات تقنية، يرجى التواصل مع:
البريد الإلكتروني: support@manhaa.com
هاتف: 009665000000
```

This README provides:
- Clear Arabic instructions for non-technical users
- Visual code examples with comments
- Step-by-step modification guides
- Troubleshooting section
- Maintenance best practices
- Support contact information

The guide uses simple language and focuses on the most common customization needs while warning about potential pitfalls.