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
        // console.log(response.data)
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
                                {lang==="uz" ? (<p>{item.translations.uz.description}</p>) : (<p>{item.translations.ru.description}</p>)}
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