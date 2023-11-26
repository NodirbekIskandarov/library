import React, { useEffect, useState } from 'react'
import Line from '../line/Line'
import './batafsil.css'
import group from '../../assets/images/Group 2.png'
import clock from '../../assets/images/Time Circle 6.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, DETAIL } from '../../tools/urls'
import { useTranslation } from 'react-i18next'
function Batafsil() {
     const { t } = useTranslation()
    const pk = useParams()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    // console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${DETAIL}/${pk.id}`);
          setData(response.data);
          // console.log(response.data)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [pk.id]);
    if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='batafsil'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("kurs_haqida")}</h3>
                    <p>{t("kurs_haqida_batafsil_malumot")}</p>
                </div>
            </div>
            <div className='box'>
                <div className='imagePart'>
                    <img src={data.image} alt='rasm'/>
                </div>
                <div className='cart'>
                    {lang==="uz" ? (<h2>{data.translations.uz.name}</h2>) : (<h2>{data.translations.ru.name}</h2>)}
                    <div className='group'>
                        <p className='first'><img src={group} alt='group'/>{t("tinglovchi_kontingenti")}:</p>
                        {lang==="uz" ? (<p className='second'>{data.translations.uz.sub_name}</p>) : (<p className='second'>{data.translations.ru.sub_name}</p>)}
                    </div>
                    <div className='time'>
                        <p className='first'><img src={clock} alt="clock"/>{t("kurs_davomiyligi")}</p>
                        {lang==="uz" ? (<p className='second'>{data.translations.uz.duration}</p>) : (<p className='second'>{data.translations.ru.duration}</p>)}
                    </div>
                    <div className='buttonPart'>
                        <Link className='link' to="/application"><button>{t("ariza_berish")}</button></Link>
                        <p><span>{t("narx")} </span> 300 000 UZS</p>
                    </div>
                </div>
            </div>
            <div className='plan'>
                {lang==="uz" ? (<p>{data.translations.uz.description}</p>) : (<p>{data.translations.ru.description}</p>)}
            </div>
        </div>
    </div>
  )
}

export default Batafsil