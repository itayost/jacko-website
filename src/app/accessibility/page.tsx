import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת נגישות של מסעדת ג׳קו - מסעדת דגים ומאכלי ים בנתניה.',
  alternates: {
    canonical: '/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">הצהרת נגישות</h1>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              מסעדת ג׳קו (&quot;המסעדה&quot;, &quot;אנחנו&quot;) מחויבת להנגשת האתר והשירותים הדיגיטליים שלה לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ&quot;ח-1998, ותקנות הנגישות הנלוות.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">פעולות שנעשו להנגשת האתר</h2>
            <p>אנו פועלים להתאים את האתר לתקן הנגישות הישראלי (ת&quot;י 5568) ולהנחיות WCAG 2.1 ברמה AA. במסגרת זו בוצעו, בין היתר, הפעולות הבאות:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>התאמת מבנה האתר לניווט באמצעות מקלדת.</li>
              <li>הוספת טקסט חלופי (alt) לתמונות.</li>
              <li>שימוש בניגודיות צבעים מתאימה.</li>
              <li>התאמת האתר לקוראי מסך.</li>
              <li>מבנה כותרות היררכי ותקין.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">נגישות המסעדה הפיזית</h2>
            <p>מסעדת ג׳קו פועלת להנגיש את המקום הפיזי בהתאם לדרישות החוק, לרבות:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>גישה נוחה לכיסאות גלגלים.</li>
              <li>שירותים נגישים.</li>
              <li>תפריט זמין בפורמט דיגיטלי נגיש.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">דיווח על בעיית נגישות</h2>
            <p>
              אם נתקלתם בבעיית נגישות באתר או במסעדה, נשמח לשמוע ולטפל בכך בהקדם. ניתן לפנות אלינו:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>מסעדת ג׳קו - מסעדת דגים ומאכלי ים</strong></li>
              <li>כתובת: גיבורי ישראל 7, נתניה</li>
              <li>טלפון: <a href="tel:09-8652878" className="text-blue-primary hover:underline">09-8652878</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">עדכון ההצהרה</h2>
            <p>
              הצהרה זו עודכנה לאחרונה בתאריך פברואר 2025. אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
