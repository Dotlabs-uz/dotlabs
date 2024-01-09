const uz = {
   header: {
      links: [
         {
            id: 1,
            path: "/",
            name: "Bosh sahifa",
         },
         {
            id: 2,
            path: "/about",
            name: "Biz haqimizda",
         },
         {
            id: 3,
            path: "/portfolio",
            name: "Portfolio",
         },
         {
            id: 4,
            path: "/services",
            name: "Xizmatlar",
         },
         {
            id: 5,
            path: "/contact",
            name: "Aloqa",
         },
      ],
      buttonText: "Menga qo'ng'iroq qiling",
   },
   section1: {
      h1Text1: "In",
      h1Text2: "vatsiya",
      h1Text3: "har bir pikselda",
      pText: "DOT LABS - da biz har bir piksel muhim bo'lgan rivojlanish dunyosiga yangilik keltiramiz. Biz eng so'nggi texnologiya tendentsiyalarini kuzatib boramiz va ajoyib natijaga erishish uchun ularni har bir loyihada qo'llaymiz.",
      buttonText: "Loyihaga buyurtma bering",
   },
   services_arr: [
      {
         id: 1,
         ru_title: "Veb-saytlar",
         description:
            "Bizning tajribali dizaynerlarimiz va ishlab chiquvchilarimiz siz uchun raqobatchilardan ajralib turadigan zamonaviy, funktsional va ijodiy veb-sayt yaratadilar.",
         img: "/images/serviceOne.png",
         points: [
            {
               icon: "figma",
               title: "Brendingizni aks ettiruvchi noyob dizayn",
            },
            {
               icon: "smartphone",
               title: "Turli xil qurilmalar va ekranlar uchun moslashuvchanlik",
            },
            {
               icon: "thumbs-up",
               title: "Qidiruv tizimlarni optimallashtirish (SEO)",
            },
         ],
      },
      {
         id: 2,
         ru_title: "iOS/Android",
         description:
            "Bizning ilovalarni ishlab chiqish guruhimiz sizning biznesingiz samaradorligini oshiradigan va mijozlar tajribasini yaxshilaydigan mobil yoki veb-ilovani yaratadi.",
         img: "/images/servTwo.png",
         points: [
            {
               icon: "loader",
               title: "Yuqori ishlash va ishonchlilik",
            },
            {
               icon: "toggle-right",
               title: "Sizning ehtiyojlaringiz uchun echimlar",
            },
            {
               icon: "check",
               title: "Brendingizga mos keladigan interfeys",
            },
         ],
      },
      {
         id: 3,
         ru_title: "CRM tizimlari",
         description:
            "Bizning CRM tizimlarimiz mijozlarni samarali boshqarish, sotishni yaxshilash va biznes jarayonlarini optimallashtirishga yordam beradi.",
         img: "/images/servThree.png",
         points: [
            {
               icon: "navigation",
               title: "Maxsus ishlab chiqilgan echimlar",
            },
            { icon: "activity", title: "Biznesingizni avtomatlashtirish" },
            {
               icon: "msg",
               title: "Qaror qabul qilish uchun tahlil va hisobot",
            },
         ],
      },
   ],
   section2: {
      title: "DASTURIY TA'MINOTNI ISHLAB CHIQISHDA SIZNING",
      title2: "ISHONCHLI HAMKORINGIZ",
      pText: "Dot Labs - da biz sizning biznesingizni keyingi bosqichga olib chiqadigan ajoyib veb-echimlarni yaratishga ishtiyoq bilan bag'ishlanganmiz. Veb-saytlar, mobil ilovalar va CRM tizimlarini ishlab chiqish bo'yicha tajribamiz bilan biz sizning ishonchli texnologiya hamkoringiz bo'lishga intilamiz.",
      persentText: "Mijozlar ehtiyojini qondirish",
      secontBlockTitle: "Katta tajribaga ega mutaxassislar",
      secontBlockPText:
         "DOT LABS - da biz sizning biznesingizni keyingi bosqichga olib chiqadigan ajoyib veb-echimlarni yaratishga ishtiyoq bilan bag'ishlanganmiz.",
      blueButtonText: "Jami xodimlar",
   },
   portfolio: {
      title: "BIZNING ISHLARIMIZ",
      pText: "Allaqachon amalga oshirilgan loyihalarga qarang va ishimiz sifatiga ishonch hosil qiling!",
   },
   contact: {
      title1: "So'rov qoldiring",
      title2:
         "Biz siz bilan bir kun ichida Telegram yoki WhatsApp orqali bog'lanamiz",
      inputName: "Ism",
      inputNameEror: "Ism maydoni majburiydir!",
      inputNumber: "Telefon raqami",
      inputNumberEror:
         "Keyinroq qo'ng'iroq qilish uchun sizga raqamingiz kerak!",
      buttonText: "Yuborish",
   },
   footer: {
      adress: "Buyuk Ipak Yo'li 52, Samarqand, O'zbekiston",
      bottomText: "Barcha huquqlar himoyalangan",
   },
   aboutPage: {
      title1: "Bizning maqsadimiz",
      title2:
         "innovatsion echimlar va yuqori darajadagi professionallikni taqdim etish orqali onlayn muvaffaqiyatga erishishingizga yordam bering.",
      text: "DOT LABS veb-ishlab chiqishda sizning ishonchli hamkoringizdir",
      teamText: "Jamoa",
      blackBlock: {
         title: "BIZNING PRINTSIPLARIMIZ",
         text1: "Har doim mijozlar bilan samimiy. Eshitamiz, taklif qilamiz va moslashuvchan bo'lishga harakat qilamiz, ``yo'q`` deyishdan qo'rqmaymiz.",
         text2: "Ular nafaqat yuqori sifatli natijaga, balki mijoz muammolarini hal qilishning qulay va tushunarli jarayoniga ham qaratilgan.",
         text3: "Biz siyosiy tusdagi loyihalarni qabul qilmaymiz. Biz o'z nuqtai nazarimizga egamiz va boshqa nuqtai nazarlarning mavjudligiga imkon beramiz.",
         text4: "Biz soxta tenderlarda, turli xil xaridlarda, barter loyihalarida va boshqa noaniq sxemalarda qatnashmaymiz..",
      },
      team: [
         {
            name: "Daler Sharifkulov",
            position: "Ijrochi direktor",
            img: "/images/about/daler2.webp",
         },
         {
            name: "Mirsaid Siddikov",
            position: "Frontend dasturchisi",
            img: "/images/about/mirsaid.webp",
         },
         {
            name: "Davlatshoh Pardaqulov",
            position: "Дизайн-директор, основатель",
            img: "/images/about/davlatshox.webp",
         },
         {
            name: "Jonibek Latipov",
            position: "Frontend dasturchisi",
            img: "/images/about/jony.webp",
         },
         {
            name: "Samir Sattarov",
            position: "Mobil dasturchi",
            img: "/images/about/samir.webp",
         },
         {
            name: "Ozodbek Shukurov",
            position: "Fullstack dasturchisi",
            img: "/images/about/ozod.webp",
         },
         {
            name: "Алексей Задорожный",
            position: "Buyurtmachilar bilan ishlash bo'yicha menejer",
            img: "/images/about/kostya.webp",
         },
      ],
   },
   servicesPage: {
      section1: {
         title: "Biz nima qilamiz",
         pText: "Biz veb-echimlarni yaratish va dasturiy ta'minotni ishlab chiqishga ixtisoslashgan mutaxassislar guruhimiz.",
         bottomBlocks: {
            title: "Innovatsiyalar",
            text: "Biz har doim mijozlarimizni hayratda qoldirish va ilhomlantirish uchun yangi g'oyalar va texnologik echimlarni izlaymiz.",
         },
      },
      section2: {
         title: "amalga oshirilgan loyihalarni ko'ring",
         pText: "Bizning ishimiz nafaqat loyihalar, balki muvaffaqiyat hikoyalari va biz ular bilan faxrlanamiz. Bizning kollektsiyamizni ko'rib chiqing va biz boshqa mijozlarga o'z maqsadlariga erishishda va internetda muvaffaqiyat qozonishda qanday yordam berganimizga ishonch hosil qilasiz. Sizning muvaffaqiyat hikoyangiz quyidagicha bo'lishi mumkin",
         buttonText: "O'tish",
      },
      section3: {
         title: "HAR QANDAY MURAKKABLIKDAGI LOYIHALAR",
         services: [
            {
               id: 1,
               text: "Veb-saytlarni ishlab chiqish",
            },
            {
               id: 2,
               text: "Mobil ilovalarni ishlab chiqish",
            },
            {
               id: 3,
               text: "CRM tizimlarini ishlab chiqish",
            },
            {
               id: 4,
               text: "Veb-dizayn va UI / UX ishlab chiqish",
            },
            {
               id: 5,
               text: "SEO va qidiruv tizimini optimallashtirish",
            },
            {
               id: 6,
               text: "Elektron tijorat va onlayn-do'konlar",
            },
            {
               id: 7,
               text: "Veb-xosting va xizmat",
            },
         ],
         button: "Maslahat",
      },
   },
   contactPage: {
      title: "Kontaktlar",
      pText: "Bizga qo'ng'iroq qiling va biz sizning barcha savollaringizga javob beramiz",
      buttonText: "Qo'ng'iroq qiling",
      connectWithUs: "Biz bilan bog'laning",
      adressTitle: "Manzil",
      adress1: "Buyuk Ipak Yo'li 52,",
      adress2: "Samarqand, O'zbekiston",
      social: "Ijtimoiy tarmoqlar",
   },
   modal: {
      title: "Buyurtma uchun ariza",
      inputName: "Ismingizni kiriting",
      inputNumber: "Kontakt raqamini kiriting",
      button: "Ma'lumotlarni yuborish",
      warring:
         "Iltimos, ma'lumotlarni to'g'ri kiritganingizga ishonch hosil qiling.",
   },
};

export default uz;
