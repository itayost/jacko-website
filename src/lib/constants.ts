export const RESTAURANT_INFO = {
  name: 'ג׳קו',
  fullName: 'ג׳קו - מסעדת דגים ומאכלי ים',
  established: 1973,
  address: 'גיבורי ישראל 7, נתניה',
  phone: '09-8652878',
  hours: {
    weekdays: '12:00 - 22:30',
    friday: '12:00 - 23:00',
    saturday: '12:00 - 22:30',
  },
  email: 'info@jacko-seafood.co.il',
}

export const MENU_CATEGORIES = [
  { id: 'appetizers', name: 'ראשונות', slug: 'appetizers' },
  { id: 'fish', name: 'דגים', slug: 'fish' },
  { id: 'seafood', name: 'פירות ים', slug: 'seafood' },
  { id: 'mains', name: 'עיקריות', slug: 'mains' },
  { id: 'desserts', name: 'קינוחים', slug: 'desserts' },
]

export const SAMPLE_MENU_ITEMS = [
  {
    id: 1,
    name: 'קרפצ׳יו דניס',
    price: 68,
    description: 'פרוסות דקות של דניס טרי, שמן זית, לימון ועשבי תיבול',
    category: 'appetizers',
  },
  {
    id: 2,
    name: 'סביצ׳ה ים תיכונית',
    price: 72,
    description: 'קוביות דג לבן, הדרים, כוסברה ובצל סגול',
    category: 'appetizers',
  },
  {
    id: 3,
    name: 'לברק בגריל',
    price: 145,
    description: 'לברק שלם צלוי על הגריל, ירקות צלויים ותפוח אדמה',
    category: 'fish',
  },
  {
    id: 4,
    name: 'מוסר ים בחמאת לימון',
    price: 165,
    description: 'פילה מוסר ים ברוטב חמאה, לימון ושום, מוגש עם אורז',
    category: 'fish',
  },
  {
    id: 5,
    name: 'שרימפס בשום וחמאה',
    price: 98,
    description: 'שרימפס ג׳מבו מוקפצים בחמאה, שום ויין לבן',
    category: 'seafood',
  },
  {
    id: 6,
    name: 'פלטת פירות ים',
    price: 285,
    description: 'מבחר פירות ים טריים: שרימפס, קלמרי, מולים וסרטנים',
    category: 'seafood',
  },
]