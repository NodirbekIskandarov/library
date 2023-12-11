import React, { useEffect, useState } from 'react'
import './announcements.css'
import Line from '../line/Line'
import { useTranslation } from 'react-i18next'
import { BASE_URL, LANDING } from '../../tools/urls'
import axios from 'axios'
function Announcements() {
    const { t } = useTranslation()

    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"))
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.elon);
        // console.log(response.data.elon)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='announcements'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("elonlar")}</h3>
                    <p>{t("yangi_elonlar")}</p>
                </div>
            </div>
            <div>
                {
                    data && data.map((item, index) => {
                        return  (
                            <div key={index} className='textPart'>
                                <span>sana</span>
                                {lang==="uz" ? (<p>{item.description_uz}</p>) : lang==="ru" ? (<p>{item.description_ru==="" ? item.description : item.description_ru}</p>) : lang==="en" ? (<p>{item.description_en==="" ? item.description : item.description_en}</p>) : (<p>{item.description}</p>)}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Announcements