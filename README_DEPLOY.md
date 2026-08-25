# دليل نشر LibCore GUI — رابط حي للبشمهندسة

## الملفات الموجودة في فولدر `04_Web_GUI`

| الملف | الوصف |
|-------|-------|
| `index.html` | الواجهة الرئيسية — كل التبويبات والـ modals |
| `app.js` | كل منطق التطبيق — بيانات، CRUD، SQL Lab، Charts |
| `styles.css` | تصميم Dark Mode مخصص |
| `supabase_schema.sql` | SQL script لـ PostgreSQL / Supabase |

---

## طريقة 1: Netlify Drop (الأسرع — دقيقة واحدة)

1. افتح: https://app.netlify.com/drop
2. اسحب فولدر `04_Web_GUI` بأكمله وادروبه على الصفحة
3. هتاخد رابط فوراً مثل: `https://amazing-name-123456.netlify.app`
4. ابعت الرابط ده للبشمهندسة

> لا محتاج account ولا تسجيل

---

## طريقة 2: Vercel (محتاج account مجاني)

```bash
# بعد تنزيل Vercel CLI
npm i -g vercel
cd "d:/كتب/DB Team/04_Web_GUI"
vercel --prod
```

هتاخد رابط زي: `https://libcore.vercel.app`

---

## طريقة 3: GitHub Pages

1. عمل repo جديد على GitHub
2. ارفع محتويات فولدر `04_Web_GUI` فيه
3. روح Settings > Pages > Deploy from main branch
4. الرابط هيبقي: `https://username.github.io/repo-name`

---

## ربط Supabase (اختياري للداتا الحقيقية)

1. روح https://supabase.com وعمل project مجاني
2. في SQL Editor، رن ملف `supabase_schema.sql`
3. روح Settings > API وهتلاقي:
   - Project URL
   - Anon Public Key
4. في الـ GUI، اضغط "Configure Supabase" وادخل البيانات دي

---

## ميزات الـ GUI

- **Dashboard**: إحصائيات حية + Charts
- **Books Catalog**: كارت لكل كتاب مع search وفلتر بالتصنيف
- **Circulation**: جدول القروض مع زرار Return وحساب الغرامة تلقائياً
- **Members**: تسجيل عضو جديد وسيرش
- **Staff**: كارت لكل موظف مع عدد القروض اللي اتعامل معاها
- **SQL Lab**: 6 queries جاهزة تشغلها أمام الدكتورة مباشرة
