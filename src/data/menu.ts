// src/data/menu.ts
import { Fish, Shell, Utensils, Coffee, Star } from 'lucide-react'
import type { MenuCategory, MenuData } from '@/types/menu'

export const menuCategories: MenuCategory[] = [
  { id: 'all', name: 'הכל' },
  { id: 'appetizers', name: 'ראשונות' },
  { id: 'fish', name: 'דגים' },
  { id: 'seafood', name: 'פירות ים' },
  { id: 'mains', name: 'עיקריות' },
  { id: 'desserts', name: 'קינוחים' },
]

export const menuData: MenuData = {
  appetizers: [
    { name: 'קרפצ׳יו דניס', price: 68, description: 'פרוסות דקות של דניס טרי, שמן זית, לימון ועשבי תיבול' },
    { name: 'סביצ׳ה ים תיכונית', price: 72, description: 'קוביות דג לבן, הדרים, כוסברה ובצל סגול' },
    { name: 'טרטר טונה אדומה', price: 78, description: 'קוביות טונה אדומה, אבוקדו, סויה וג׳ינג׳ר' },
    { name: 'סלט פירות ים חם', price: 82, description: 'תמנון, קלמרי ומולים על מצע חסות עם רוטב ויניגרט' },
    { name: 'כבדי דגים מטוגנים', price: 65, description: 'כבדי דגים בציפוי פריך, מוגש עם טחינה וסלט' },
    { name: 'חומוס עם דגים מעושנים', price: 58, description: 'חומוס ביתי עם נתחי סלמון מעושן ושמן זית' },
  ],
  fish: [
    { name: 'לברק בגריל', price: 145, description: 'לברק שלם צלוי על הגריל, ירקות צלויים ותפוח אדמה' },
    { name: 'מוסר ים בחמאת לימון', price: 165, description: 'פילה מוסר ים ברוטב חמאה, לימון ושום, מוגש עם אורז' },
    { name: 'דניס שלם בתנור', price: 155, description: 'דניס שלם אפוי עם עשבי תיבול, שום ולימון' },
    { name: 'סלמון אטלנטי', price: 138, description: 'פילה סלמון צלוי עם רוטב טריאקי וירקות מוקפצים' },
    { name: 'בורי בקרום מלח', price: 125, description: 'בורי שלם אפוי בקרום מלח גס ועשבי תיבול' },
    { name: 'אמנון כרם', price: 98, description: 'פילה אמנון ברוטב עגבניות, יין לבן וזיתים' },
  ],
  seafood: [
    { name: 'שרימפס בשום וחמאה', price: 98, description: 'שרימפס ג׳מבו מוקפצים בחמאה, שום ויין לבן' },
    { name: 'פלטת פירות ים', price: 285, description: 'מבחר פירות ים טריים: שרימפס, קלמרי, מולים וסרטנים' },
    { name: 'לובסטר תרמידור', price: 320, description: 'חצי לובסטר ברוטב שמנת עשיר, גבינה וברנדי' },
    { name: 'קלמרי מטוגן', price: 78, description: 'טבעות קלמרי בציפוי פריך עם רוטב איולי' },
    { name: 'מולים ברוטב יין', price: 95, description: 'מולים מאודים ביין לבן, שום ועגבניות' },
    { name: 'תמנון על הגריל', price: 145, description: 'זרועות תמנון צלויות עם תפוחי אדמה ופלפלים' },
  ],
  mains: [
    { name: 'פסטה פירות ים', price: 125, description: 'פסטה טרייה עם שרימפס, מולים וקלמרי ברוטב עגבניות' },
    { name: 'ריזוטו פירות ים', price: 135, description: 'ריזוטו קרמי עם מבחר פירות ים ועשבי תיבול' },
    { name: 'המבורגר דגים', price: 78, description: 'המבורגר דג טרי עם חסה, עגבנייה ורוטב טרטר' },
    { name: 'פיש אנד צ׳יפס', price: 85, description: 'נתחי דג בבצק בירה עם צ׳יפס עבה' },
    { name: 'פאייה ספרדית', price: 155, description: 'אורז ספרדי עם פירות ים, עוף וירקות' },
    { name: 'טאקוס דגים', price: 68, description: 'שלוש טורטיות עם דג מטוגן, כרוב סגול וגוואקמולי' },
  ],
  desserts: [
    { name: 'קרם ברולה וניל', price: 42, description: 'קרם וניל עם קרמל שרוף' },
    { name: 'עוגת שוקולד חמה', price: 48, description: 'עוגת שוקולד עם ליבה נוזלית, מוגש עם גלידת וניל' },
    { name: 'טירמיסו', price: 45, description: 'קינוח איטלקי קלאסי עם קפה ומסקרפונה' },
    { name: 'סורבה פירות', price: 38, description: 'מבחר סורבה מפירות העונה' },
    { name: 'מלבי', price: 35, description: 'קינוח חלב קר עם רוטב ורדים ופיסטוקים' },
    { name: 'פאי לימון', price: 42, description: 'פאי לימון עם מרנג שרוף' },
  ],
}