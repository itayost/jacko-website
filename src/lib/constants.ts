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
  { id: 'fish', name: 'דגים', slug: 'fish' },
  { id: 'meats', name: 'בשרים', slug: 'meats' },
  { id: 'seafood', name: 'פירות ים', slug: 'seafood' },
  { id: 'kids', name: 'ארוחות ילדים', slug: 'kids' },
  { id: 'salads', name: 'סלטים', slug: 'salads' },
  { id: 'desserts', name: 'קינוחים', slug: 'desserts' },
  { id: 'alcohol', name: 'אלכוהול', slug: 'alcohol' },
  { id: 'wines', name: 'יינות', slug: 'wines' },
]

export const SAMPLE_MENU_ITEMS = [
  {
    id: 1,
    name: 'דניס',
    price: 139,
    description: 'דג דניס שלם',
    category: 'fish',
  },
  {
    id: 2,
    name: 'לברק',
    price: 144,
    description: 'דג לברק שלם',
    category: 'fish',
  },
  {
    id: 3,
    name: 'שרימפס',
    price: 132,
    description: 'עשויים ברוטב חמאה שום ויין וירקות שורש',
    category: 'seafood',
  },
  {
    id: 4,
    name: 'סטייק אנטריקוט',
    price: 170,
    description: 'סטייק אנטריקוט',
    category: 'meats',
  },
  {
    id: 5,
    name: 'עוגת סולת',
    price: 42,
    description: 'עוגת סולת אותנטית עם נגיעות סירופ פירות יער',
    category: 'desserts',
  },
  {
    id: 6,
    name: 'מרלו רקנטי',
    price: 135,
    description: 'יין אדום - Merlot Recanti',
    category: 'wines',
  },
]
