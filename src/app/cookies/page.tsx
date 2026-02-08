import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות קוקיז',
  description: 'מדיניות השימוש בקוקיז של מסעדת ג׳קו - מסעדת דגים ומאכלי ים בנתניה.',
  alternates: {
    canonical: '/cookies',
  },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">מדיניות קוקיז</h1>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              מדיניות זו מסבירה כיצד מסעדת ג׳קו (&quot;המסעדה&quot;, &quot;אנחנו&quot;) משתמשת בקוקיז ובטכנולוגיות דומות באתר שלנו.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">מהם קוקיז?</h2>
            <p>
              קוקיז הם קבצי טקסט קטנים הנשמרים על המכשיר שלכם בעת גלישה באתר. הם מאפשרים לאתר לזכור מידע על הביקור שלכם, כגון העדפות שפה והגדרות אחרות, ובכך מקלים על השימוש באתר בביקורים הבאים.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">שימוש בקוקיז באתר שלנו</h2>
            <p>
              נכון למועד עדכון מדיניות זו, האתר שלנו אינו משתמש בקוקיז לצרכי מעקב, ניתוח או שיווק. האתר אינו מפעיל כלי אנליטיקס או פיקסלים של צדדים שלישיים.
            </p>
            <p>
              ייתכן שבעתיד נוסיף שימוש בקוקיז לצורך שיפור חוויית המשתמש, ניתוח תנועה באתר או מטרות תפעוליות אחרות. במקרה כזה, מדיניות זו תעודכן בהתאם.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">ניהול קוקיז</h2>
            <p>
              ניתן לשלוט בקוקיז ולנהל אותם באמצעות הגדרות הדפדפן שלכם. לרוב הדפדפנים ישנה אפשרות לצפות בקוקיז שנשמרו, למחוק קוקיז ספציפיים או לחסום קוקיז מאתרים מסוימים או מכל האתרים.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">שינויים במדיניות</h2>
            <p>
              המסעדה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. במקרה של שינוי מהותי, תפורסם הודעה באתר.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">יצירת קשר</h2>
            <p>לשאלות או בירורים לגבי מדיניות הקוקיז שלנו, ניתן לפנות אלינו:</p>
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
