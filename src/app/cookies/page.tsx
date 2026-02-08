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

            <h2 className="text-2xl font-bold text-gray-900 mt-10">סוגי הקוקיז בהם אנו משתמשים</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6">קוקיז הכרחיים</h3>
            <p>
              קוקיז אלה חיוניים לתפקוד התקין של האתר ואינם ניתנים לביטול. הם מוגדרים בדרך כלל בתגובה לפעולות שביצעתם, כגון הגדרות פרטיות, כניסה לאתר או מילוי טפסים.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">קוקיז ביצועים וניתוח</h3>
            <p>
              קוקיז אלה מאפשרים לנו לספור ביקורים ומקורות תנועה, כדי שנוכל למדוד ולשפר את ביצועי האתר. הם עוזרים לנו לדעת אילו עמודים פופולריים ואילו פחות, ולראות כיצד מבקרים נעים באתר.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">קוקיז שיווקיים</h3>
            <p>
              קוקיז אלה עשויים להיות מוגדרים באתר על ידי שותפי הפרסום שלנו. הם עשויים לשמש חברות אלה לבניית פרופיל של תחומי העניין שלכם ולהצגת פרסומות רלוונטיות באתרים אחרים.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">ניהול קוקיז</h2>
            <p>
              ניתן לשלוט בקוקיז ולנהל אותם באמצעות הגדרות הדפדפן שלכם. לרוב הדפדפנים ישנה אפשרות לצפות בקוקיז שנשמרו, למחוק קוקיז ספציפיים או לחסום קוקיז מאתרים מסוימים או מכל האתרים.
            </p>
            <p>
              שימו לב שחסימת קוקיז מסוימים עלולה להשפיע על חוויית הגלישה שלכם ועל הפונקציונליות הזמינה באתר.
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
              <li>דוא&quot;ל: <a href="mailto:info@jacko-seafood.co.il" className="text-blue-primary hover:underline">info@jacko-seafood.co.il</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
