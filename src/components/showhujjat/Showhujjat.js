import React, { useEffect, useState } from 'react'
import Line from '../line/Line'
import './showhujjat.css'
import img from '../../assets/images/Rectangle 39.png'
import right from '../../assets/images/Right 1.png'
import download from '../../assets/images/Download.png'
import { useTranslation } from 'react-i18next'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, DOCUMENTS_ID } from '../../tools/urls'
function Showhujjat() {
  const { state } = useLocation();

    const  { t } = useTranslation()
    const pk = useParams()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    // console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${DOCUMENTS_ID}/${pk.id}`);
          setData(response.data);
          // console.log(response.data)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='showhujjat'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          {/* <p>{state.name}</p> */}
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("meyoriy_hujjatlar")}</h3>
                    <p>{t("huquqiy_meyoriy_hujjatlar")}</p>
                </div>
            </div>
            <div className='box'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='cart'>
                                <img src={img} alt="rasm"/>
                                {lang==="uz" ? (<p>{item.name_uz}</p>) : lang==="ru" ? (<p>{item.name_ru===null ? item.name : item.name_ru}</p>) : lang==="en" ? (<p>{item.name_en===null ? item.name : item.name_en}</p>) : (<p>{item.name}</p>)}
                                {lang==="uz" ? (<a className='button' href={item.file_uz}><img src={download} alt="download"/>PDF da yuklab olish</a>) : lang==="ru" ? (<a className='button' href={item.file_ru===null ? item.file : item.file_ru}><img src={download} alt="download"/>PDF da yuklab olish</a>) : lang==="en" ? (<a className='button' href={item.file_en===null ? item.file : item.file_en}><img src={download} alt="download"/>PDF da yuklab olish</a>) : (<a className='button' href={item.file}><img src={download} alt="download"/>PDF da yuklab olish</a>)}
                                <br/>
                                <br/>
                                <a href={item.url}> Manba <img src={right} alt="right"/></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Showhujjat