import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של מסעדת ג׳קו - מסעדת דגים ומאכלי ים בנתניה.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">מדיניות פרטיות</h1>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              מדיניות פרטיות זו (&quot;המדיניות&quot;) נועדה להסביר כיצד מסעדת ג׳קו (&quot;המסעדה&quot;, &quot;אנחנו&quot;, &quot;שלנו&quot;) אוספת, משתמשת, שומרת ומשתפת מידע אישי במסגרת השימוש באתר, בשירותים ובמוצרים שלנו.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">מידע שנאסף</h2>
            <p>בעת השימוש באתר או בשירותים שלנו, ייתכן שנאסוף את המידע הבא:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>מידע שמוזן על ידי המשתמש בטפסים, לרבות שם, טלפון, כתובת דוא&quot;ל ופרטים נוספים.</li>
              <li>מידע טכני, כגון כתובת IP, סוג מכשיר, מערכת הפעלה, דפדפן, ופעולות שבוצעו באתר.</li>
              <li>קבצי קוקיז וטכנולוגיות מעקב דומות לצורך ניתוח, אבטחה ושיפור חוויית המשתמש.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">מטרות השימוש במידע</h2>
            <p>המידע האישי שנאסף משמש את המסעדה לצרכים הבאים:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>מתן השירותים שהוזמנו.</li>
              <li>יצירת קשר עם המשתמשים לצרכים תפעוליים או שיווקיים.</li>
              <li>שיפור השירותים, חוויית המשתמש ותכני האתר.</li>
              <li>שמירה על אבטחת המידע ומניעת פעולות הונאה.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">שיתוף מידע עם צדדים שלישיים</h2>
            <p>
              המסעדה לא תמכור או תעביר מידע אישי לצדדים שלישיים למטרות שיווקיות ללא הסכמת המשתמש. עם זאת, ייתכן ונשתף מידע עם ספקים חיצוניים לצורך אספקת השירותים (כגון ספקי אחסון, דיוור, אבטחת מידע וכדומה), בכפוף להסכמי סודיות.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">שמירה ואבטחת מידע</h2>
            <p>
              המסעדה נוקטת באמצעים סבירים לאבטחת המידע האישי מפני גישה בלתי מורשית, שימוש לרעה או חשיפה. עם זאת, אין ביכולתנו להבטיח אבטחה מוחלטת של המידע.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">זכויות המשתמש</h2>
            <p>למשתמש קיימת הזכות:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>לבקש לעיין, לתקן או למחוק את המידע האישי שנשמר עליו.</li>
              <li>להתנגד לעיבוד מידע מסוים.</li>
              <li>למשוך הסכמה, ככל שהעיבוד מבוסס על הסכמה.</li>
            </ul>
            <p>לבירורים ובקשות ניתן לפנות אלינו באמצעי הקשר מטה.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">שינויים במדיניות</h2>
            <p>
              המסעדה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. במקרה של שינוי מהותי, תפורסם הודעה באתר.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">יצירת קשר</h2>
            <p>לשאלות או בירורים לגבי מדיניות פרטיות זו, ניתן לפנות אלינו:</p>
            <ul className="list-none space-y-2">
              <li><strong>מסעדת ג׳קו - מסעדת דגים ומאכלי ים</strong></li>
              <li>כתובת: גיבורי ישראל 7, נתניה</li>
              <li>טלפון: <a href="tel:09-8652878" className="text-blue-primary hover:underline">09-8652878</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
