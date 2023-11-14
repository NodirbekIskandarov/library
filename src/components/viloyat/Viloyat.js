import React from 'react'
import './viloyat.css'
import Line from '../line/Line'
import logo from '../../assets/images/logo1 1.png'
import website from '../../assets/images/Website.png'
function Viloyat() {
  return (
    <div className='viloyat'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Xorazm viloyati filiali</h3>
                    <p>Xorazm viloyati filial ma'lumotlari</p>
                </div>
            </div>
            <div className='image'>
                <div className='imagePart'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='textPart'>
                    <p>Joylarda kadrlar malakasini oshirishning sifatini yaxshilash, tinglovchilarga har tomonlama qulay shart-sharoitlar yaratish maqsadida, O’zbekiston Respublikasi Vazirlar Mahkamasining 2020 yil 8 sentyabrda “Yuridik sohaga oid bilim talab etiladigan mutaxassislarni qayta tayyorlash va malakasini oshirishning zamonaviy tizimini joriy etish chora-tadbirlari to’g’risida”gi 544-son qaroriga asosan Yuristlar malakasini oshirish markazining Xorazm viloyati hududiy filiali tashkil etildi.
Yuristlar malakasini oshirish markazining Xorazm viloyati hududiy filiali Adliya vazirligining Xorazm viloyati yuridik texnikumi binosida, Urganch tumani, Fayozov ko’chasi 1-uyda joylashgan.</p>
                    <a href='/'><button><img src={website} alt='website'/>Web saytiga o'tish</button></a>
                </div>
            </div>
            <div className='maqsadPart'>
                <h2>Filialning maqsadi</h2>
                <p>Filialda mutaxassisliklar bo’yicha o’quv mashg’ulotlarini tashkil etish va o’tkazishning talab qilinadigan darajasini ta’minlash, davlat boshqaruvi organlari va ho’jalik birlashmalarining hududiy bo’linmalari va tashkilotlar kadrlarining huquqiy bilimlarini oshirishga qaratilgan ehtiyojlarini o’rganish, o’quv kurslariga jalb qilish, o’qitishning ilg’or usullari va axborot-kommunikasiya texnologiyalarini joriy etish, filial faoliyatini tashkil etishning asosiy maqsadi hisoblanadi.</p>
            </div>
            <div className='maqsadPart'>
                <h2>Filialning asosiy vazifalari</h2>
                <p>Zamonaviy sharoitlarda kadrlarning kasbiy bilim va saviyasiga qo’yilayotgan talablarni hisobga olib, joylarda ishdan ajralmagan holda o’qitishning innovasion metodlari va pedagogik texnologiyalarini, shu jumladan axborot texnologiyalari imkoniyatlarini keng qo’llash orqali malaka oshirish kurslarini tashkil etish.
Masofadan o’qitish ta’lim usullari orqali qayta tayyorlash va malaka oshirish kurslarini onlayn rejimida o’tkazilishini ta’minlash.
Xo’jalik birlashmalari va boshqa tashkilotlarning mehnat bozorida huquqiy bilimlarini oshirish talab qilinadigan o’zga soha mutaxassislari malakasini oshirishga qaratilgan qisqa muddatli o’quv kurslarini tashkil etish.
Filialda malaka oshirish kursi tinglovchilari uchun tegishli vazirlik va idoralarning malakali mutaxassislarini jalb etgan holda doimiy asosda interfaol mashg’ulotlar, davra suhbatlari va o’quv-amaliy seminarlarni tashkil etish.
Xorazm viloyati bo’yicha vazirlik va idoralar, ho’jalik birlashmalarining hududiy tuzilmalari hamda joylardagi korxonalar, tashkilotlar va muassasalar bilan hamkorlik o’rnatish.
Xorazm viloyati bo’yicha malaka oshirish kurslarida o’qish istagini bildirgan talabgorlar bilan aloqa o’rnatish, ular bilan shartnomalar tuzish.
Malaka oshirish kurslariga jalb qilish uchun Xorazm viloyati bo’yicha kadrlar bozorini tahlil qilib, talabgorlarning mavjud ehtiyojlarini o’rganish, ularni izlash hamda yangi yo’nalishlar bo’yicha qisqa muddatli malaka oshirish kurslarini tashkil etish yuzasidan takliflar tayyorlash.
Malaka oshirish kurslari va o’quv-amaliy seminarlar jarayonida aniqlangan muammolar bo’yicha axborot-tahliliy materiallarni tayyorlash.
Yuristlar malakasini oshirish markazining Xorazm viloyati hududiy filiali zamonaviy ta’lim texnologiyalarini qo’llash orqali hamda xalqaro standartlarni hisobga olgan holda advokatlar, notariuslar, yuriskonsultlar, patent vakillari, mediatorlar hamda yuridik sohaga oid bilim talab etiladigan boshqa soha mutaxassislarining huquqiy sohadagi bilimlarini oshirishga qaratilgan malaka oshirish kurslarini tashkil etish yuzasidan hamkorlik qilishni taklif etadi.</p>
            </div>
        </div>
    </div>
  )
}

export default Viloyat