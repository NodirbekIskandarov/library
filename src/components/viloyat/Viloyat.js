import React, { useEffect, useState } from 'react'
import './viloyat.css'
import Line from '../line/Line'
import logo from '../../assets/images/logo1 1.png'
import website from '../../assets/images/Website.png'
import { useLocation, useParams } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import axios from 'axios'
import { BASE_URL, REGION_ID } from '../../tools/urls'
function Viloyat() {
  const { state } = useLocation();

  const pk = useParams()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${REGION_ID}/${pk.id}`);
          setData(response.data);
          console.log(response.data)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='viloyat'>
        <div className='container'>
        <div className="locationOfPage">
          <p>Monitoring</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{data.translations.uz.name}</h3>
                    <p>{data.translations.uz.name} ma'lumotlari</p>
                </div>
            </div>
            <div className='image'>
                <div className='imagePart'>
                    <img src={data.image} alt="logo"/>
                </div>
                <div className='textPart'>
                    <p>{data.translations.uz.about}</p>
                    <a href={data.site}><button><img src={website} alt='website'/>Web saytiga o'tish</button></a>
                </div>
            </div>
            <div className='maqsadPart'>
                <h2>Filialning maqsadi</h2>
                <p>{data.translations.uz.description}</p>
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