// src/data/about.ts

export interface AboutImage {
  id: string
  src: string
  alt: string
  caption?: string
}

export interface AboutSection {
  id: string
  title: string
  content: string
  images: AboutImage[]
  layout?: 'left' | 'right' | 'full' | 'grid' // Different layout options
}

export const aboutSections: AboutSection[] = [
  {
    id: 'beginning',
    title: 'ההתחלה האגדית',
    content: `מסעדת ג׳קו נוסדה בשנת 1973 בחיפה על ידי יעקב (ג׳קו) אללוף, דייג לשעבר שהחליט להביא את אוצרות הים ישירות לצלחת. מה שהתחיל כמסעדת דגים קטנה בחיפה, הפך למותג קולינרי מוביל שזכה להכרה ארצית בזכות הטריות, האיכות והטעמים האותנטיים.`,
    layout: 'right',
    images: [
      {
        id: 'old-restaurant',
        src: '/images/gallery/old-restaurant.jpg',
        alt: 'המסעדה בשנותיה הראשונות',
        caption: 'המסעדה המקורית בחיפה, 1973'
      },
      {
        id: 'founder',
        src: '/images/gallery/founder.jpg',
        alt: 'יעקב (ג׳קו) אללוף',
        caption: 'ג׳קו אללוף, המייסד האגדי'
      }
    ]
  },
  {
    id: 'tradition',
    title: 'מסורת של איכות',
    content: `הפילוסופיה שביסס ג׳קו אללוף הייתה פשוטה וברורה - דגים טריים, מתכונים אותנטיים, ושירות מהלב. השיטות והמתכונים שפיתח הפכו לאבני דרך בעולם מסעדות הדגים בישראל, והשפיעו על דורות של שפים ובעלי מסעדות. הסטנדרט הגבוה שהציב הפך לסימן ההיכר של השם "ג׳קו".`,
    layout: 'left',
    images: [
      {
        id: 'fresh-fish',
        src: '/images/gallery/fresh-fish.jpg',
        alt: 'דגים טריים',
        caption: 'כל בוקר - דגים טריים מהים'
      },
      {
        id: 'fishing-boat',
        src: '/images/gallery/fishing-boat.jpg',
        alt: 'סירת דייג',
        caption: 'שיתוף פעולה עם דייגים מקומיים'
      },
      {
        id: 'market',
        src: '/images/gallery/fish-market.jpg',
        alt: 'שוק הדגים',
        caption: 'בחירה קפדנית של חומרי הגלם'
      }
    ]
  },
  {
    id: 'netanya-chapter',
    title: 'הפרק החדש בנתניה',
    content: `תחת הניהול של יוסי אזוז, מסעדת ג׳קו בנתניה ממשיכה את המסורת הקולינרית המפוארת. יוסי, עם ניסיון עשיר בתחום המסעדנות והאירוח, הביא עמו חזון של שמירה על המסורת המקורית תוך התאמה לטעמי הקהל המודרני. המסעדה ממוקמת על טיילת הים של נתניה עם נוף מרהיב לים התיכון.`,
    layout: 'grid',
    images: [
      {
        id: 'restaurant-netanya',
        src: '/images/gallery/restaurant-netanya.jpg',
        alt: 'המסעדה בנתניה',
        caption: 'מסעדת ג׳קו על טיילת נתניה'
      },
      {
        id: 'modern-interior',
        src: '/images/gallery/modern-interior.jpg',
        alt: 'העיצוב המודרני',
        caption: 'חלל מעוצב עם אווירה חמה'
      },
      {
        id: 'sea-view',
        src: '/images/gallery/sea-view.jpg',
        alt: 'נוף לים',
        caption: 'נוף פנורמי לים התיכון'
      },
      {
        id: 'terrace',
        src: '/images/gallery/terrace-view.jpg',
        alt: 'המרפסת',
        caption: 'מרפסת רומנטית מול הים'
      }
    ]
  },
  {
    id: 'quality-commitment',
    title: 'מחויבות לאיכות',
    content: `תחת הנהגתו של יוסי אזוז, המסעדה ממשיכה להקפיד על אותם עקרונות שהנחו את ג׳קו אללוף - טריות מקסימלית, חומרי גלם מעולים, והכנה מקצועית. כל בוקר מגיעים הדגים הטריים ביותר ישירות מהדייגים, ועוברים בדיקה קפדנית לפני שהם מגיעים למטבח. הצוות המקצועי שלנו מכין כל מנה בקפידה ובאהבה.`,
    layout: 'right',
    images: [
      {
        id: 'team-work',
        src: '/images/gallery/team-work.jpg',
        alt: 'הצוות המקצועי',
        caption: 'צוות מיומן ומסור'
      },
      {
        id: 'kitchen-work',
        src: '/images/gallery/kitchen-work.jpg',
        alt: 'עבודה במטבח',
        caption: 'תשוקה ומקצועיות בכל מנה'
      }
    ]
  },
  {
    id: 'culinary',
    title: 'אמנות קולינרית',
    content: `המטבח שלנו משלב בין המתכונים הקלאסיים של ג׳קו לבין חידושים וטכניקות בישול מודרניות. השף הראשי שלנו, עם ניסיון של שנים רבות, מביא את הידע והמומחיות שלו כדי ליצור חוויה קולינרית בלתי נשכחת. התפריט שלנו מציע מגוון רחב - מהמנות הקלאסיות האהובות ועד יצירות חדשניות שמפתיעות בכל ביקור.`,
    layout: 'full',
    images: [
      {
        id: 'signature-dish-1',
        src: '/images/gallery/dish-1.jpg',
        alt: 'מנת חתימה',
        caption: 'לברק בתנור עם עשבי תיבול'
      },
      {
        id: 'signature-dish-2',
        src: '/images/gallery/dish-2.jpg',
        alt: 'פלטת פירות ים',
        caption: 'פלטת פירות ים מפוארת'
      },
      {
        id: 'signature-dish-3',
        src: '/images/gallery/dish-3.jpg',
        alt: 'דג בגריל',
        caption: 'דניס שלם בגריל'
      },
      {
        id: 'preparation',
        src: '/images/gallery/chef-preparation.jpg',
        alt: 'הכנת מנה',
        caption: 'תשומת לב לכל פרט'
      },
      {
        id: 'plating',
        src: '/images/gallery/plating.jpg',
        alt: 'עיצוב צלחת',
        caption: 'אמנות על הצלחת'
      }
    ]
  },
  {
    id: 'community',
    title: 'חלק מהקהילה',
    content: `אנחנו גאים להיות חלק בלתי נפרד מהקהילה הנתנייתית. לאורך השנים אירחנו אינספור חגיגות משפחתיות, ארוחות עסקיות, וביקורים של אורחים מכל העולם. המסעדה שלנו היא לא רק מקום לאכול - היא מקום מפגש, מקום של זיכרונות, ומקום שבו כל אורח מרגיש כמו בבית.`,
    layout: 'left',
    images: [
      {
        id: 'celebration',
        src: '/images/gallery/celebration.jpg',
        alt: 'חגיגה משפחתית',
        caption: 'רגעים מיוחדים במסעדה'
      },
      {
        id: 'community-event',
        src: '/images/gallery/community-event.jpg',
        alt: 'אירוע קהילתי',
        caption: 'אירועים וחגיגות'
      },
      {
        id: 'happy-guests',
        src: '/images/gallery/happy-guests.jpg',
        alt: 'אורחים מרוצים',
        caption: 'חיוכים מרוצים'
      }
    ]
  },
  {
    id: 'future',
    title: 'המסע ממשיך',
    content: `50 שנה של מצוינות קולינרית, והמסע רק מתחזק. בהנהגתו של יוסי אזוז, אנחנו ממשיכים לחדש, להתפתח ולהפתיע, תמיד עם כבוד למסורת של ג׳קו ואהבה למקצוע. ההבטחה שלנו אליכם - להמשיך להביא את הטוב ביותר מהים לצלחת שלכם, עם אותה תשוקה, מסירות ומקצועיות שהפכו את השם "ג׳קו" למושג.`,
    layout: 'right',
    images: [
      {
        id: 'sunset-restaurant',
        src: '/images/gallery/sunset-restaurant.jpg',
        alt: 'המסעדה בשקיעה',
        caption: 'נוף לשקיעה מהמסעדה'
      },
      {
        id: 'team-future',
        src: '/images/gallery/team-future.jpg',
        alt: 'הצוות שלנו',
        caption: 'מוכנים להמשך הדרך'
      }
    ]
  }
]

export const aboutHero = {
  title: 'הסיפור שלנו',
  subtitle: '50 שנה של טעם, מסורת ואהבה לים',
  backgroundImage: '/images/about-hero.jpg',
  description: 'ממסעדה קטנה בחיפה למוסד קולינרי מוביל על חוף נתניה'
}