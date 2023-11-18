import React, { useEffect, useState } from 'react'
import './hujjatlar.css'
import Line from '../line/Line'
import right from '../../assets/images/Right 2.png'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { BASE_URL, DOCUMENTS } from '../../tools/urls'
import axios from 'axios'
function Hujjatlar() {
    // const data = [
    //     {
    //         text: "O‘zbekiston Respublikasi qonunlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Respublikasi Prezidentining farmonlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Respublikasi Prezidentining qarorlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "Muassasaning o‘z kuchini yo‘qotgan me’yoriy-huquqiy hujjatlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Respublikasi Adliya vazirligida davlat ro‘yxatidan o‘tkazilgan normativ-huquqiy hujjatlar",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Respublikasi davlat standartlari",
    //         link: "/documents"
    //     },
    //     {
    //         text: "O‘zbekiston Milliy kutubxonasi tomonidan qabul qilingan me’yoriy hujjatlar",
    //         link: "/documents"
    //     },
    //     {
    //         text: "Davlat dasturlari",
    //         link: "/documents"
    //     }
    // ]
  const { state } = useLocation();
const { t } = useTranslation()
const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${DOCUMENTS}`);
          setData(response.data);
          console.log(response)
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
    <div className='hujjatlar'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("axborot_kutubxona_faoliyatiga_oid_hujjatlar")}</h3>
                    <p>{t("huquqiy_meyoriy_hujjatlar")}</p>
                </div>
            </div>
            <div className='box'>
                {
                    data.map((item, index) => {
                        return (
                            <Link className='link' to={`/documents/${item.id}`}>
                                <div key={index} className='cart'>
                                    {lang==="ru" ? (<p>{item.translations.ru.name}</p>) : (<p>{item.translations.uz.name}</p>)}
                                    <img src={right} alt="toright"/>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Hujjatlar