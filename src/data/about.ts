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
    title: 'ההתחלה שלנו',
    content: `מאז 1973, מסעדת ג׳קו מהווה אבן דרך קולינרית בנתניה. מה שהתחיל כחלום של משפחה אחת עם אהבה גדולה לים ולטעמים האותנטיים שלו, הפך למוסד קולינרי מוביל שמשרת אלפי לקוחות מרוצים מדי שנה.`,
    layout: 'right',
    images: [
      {
        id: 'old-restaurant',
        src: '/images/gallery/old-restaurant.jpg',
        alt: 'המסעדה בשנותיה הראשונות',
        caption: 'המסעדה המקורית ברחוב גיבורי ישראל, 1973'
      },
      {
        id: 'founder',
        src: '/images/gallery/founder.jpg',
        alt: 'יעקב (ג׳קו) כהן',
        caption: 'ג׳קו, המייסד והשראה שלנו'
      }
    ]
  },
  {
    id: 'tradition',
    title: 'מסורת של איכות',
    content: `המסעדה נוסדה על ידי יעקב (ג׳קו) כהן, דייג לשעבר שהחליט להביא את אוצרות הים ישירות לצלחת. עם ניסיון של שנים בים ואהבה עמוקה למאכלי ים, ג׳קו פתח את דלתות המסעדה הקטנה ברחוב גיבורי ישראל. הפילוסופיה שלו הייתה פשוטה - דגים טריים, מתכונים אותנטיים, ושירות מהלב.`,
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
    id: 'evolution',
    title: 'התפתחות והתחדשות',
    content: `לאורך השנים, המסעדה התפתחה והתרחבה, אך תמיד שמרה על האופי המשפחתי והחם שלה. ב-1995 עברנו למיקום החדש שלנו על טיילת הים, עם נוף מרהיב לים התיכון. השיפוץ האחרון ב-2020 שילב עיצוב מודרני עם נגיעות נוסטלגיות, יוצר אווירה ייחודית שמשלבת בין ישן לחדש.`,
    layout: 'grid',
    images: [
      {
        id: 'restaurant-1995',
        src: '/images/gallery/restaurant-1995.jpg',
        alt: 'המסעדה ב-1995',
        caption: 'המעבר לטיילת - פרק חדש'
      },
      {
        id: 'renovation',
        src: '/images/gallery/renovation-2020.jpg',
        alt: 'השיפוץ של 2020',
        caption: 'שיפוץ ועיצוב מחדש'
      },
      {
        id: 'modern-interior',
        src: '/images/gallery/modern-interior.jpg',
        alt: 'העיצוב המודרני',
        caption: 'חלל מעוצב עם נוף לים'
      },
      {
        id: 'terrace',
        src: '/images/gallery/terrace-view.jpg',
        alt: 'המרפסת',
        caption: 'מרפסת עם נוף פנורמי'
      }
    ]
  },
  {
    id: 'family',
    title: 'משפחה בלב העסק',
    content: `היום, הדור השני והשלישי של המשפחה ממשיכים את המסורת, תוך שמירה על המתכונים המקוריים לצד חדשנות וטכניקות בישול מודרניות. כל בוקר, הדגים הטריים מגיעים ישירות מהדייגים המקומיים, בדיוק כמו לפני 50 שנה. הילדים שגדלו בין הסירים והמחבתות, היום מנהלים את המטבח ומביאים רעיונות חדשים תוך כיבוד המורשת המשפחתית.`,
    layout: 'right',
    images: [
      {
        id: 'family-team',
        src: '/images/gallery/family-team.jpg',
        alt: 'הצוות המשפחתי',
        caption: 'שלושה דורות של מומחיות'
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
    content: `המטבח שלנו משלב בין המסורת הים תיכונית המקומית לבין השפעות בינלאומיות. השף הראשי שלנו, בן למשפחת המייסדים, למד אצל טובי השפים באירופה וחזר עם ידע וטכניקות חדשות. התפריט שלנו מציע מגוון רחב - מהמנות הקלאסיות שאהבתם תמיד ועד יצירות חדשניות שמפתיעות בכל ביקור.`,
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
    content: `50 שנה עברו, אבל המסע רק התחיל. אנחנו ממשיכים לחדש, להתפתח ולהפתיע, תמיד עם כבוד למסורת ואהבה למקצוע. הבטחה שלנו אליכם - להמשיך להביא את הטוב ביותר מהים לצלחת שלכם, עם אותה תשוקה ומסירות כמו ביום הראשון.`,
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
  description: 'מסע של שלושה דורות, מדייג אחד עם חלום ועד למסעדת דגים מובילה'
}