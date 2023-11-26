import React, { useEffect, useState } from 'react'
import Line from '../line/Line'
import './kurslar.css'
import clock from '../../assets/images/Time Circle 6.png'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { BASE_URL, OFFLINE } from '../../tools/urls'
function Kurslar() {
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
          const response = await axios.get(`${BASE_URL}/${OFFLINE}`);
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
    <div className='kurslar'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("kurslar")}</h3>
                    <p>{t("ananaviy_talim_yonalishidagi_kurslar")}</p>
                </div>
            </div>
            <div className='information'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='box'>
                                <img src={item.image} alt="rasm"/>
                                {lang==="uz" ? (<h3>{item.translations.uz.name}</h3>) : (<h3>{item.translations.ru.name}</h3>)}
                                {lang==="uz" ? (<p>{item.translations.uz.sub_name}</p>) : (<p>{item.translations.ru.sub_name}</p>)}
                                <p><img src={clock} alt='clock'/> {lang==="ru" ? (<span>{item.translations.ru.duration}</span>) : (<span>{item.translations.uz.duration}</span>)}</p>
                                <div className='narx'>
                                <Link className='link' to={`/batafsil/${item.id}`}><button>{t("batafsil")}</button></Link>
                                    <div className='p'>
                                        <p>{t("narx")}</p> <span>{item.amount}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Kurslar