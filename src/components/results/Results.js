import React, { useEffect, useState } from 'react'
import './results.css'
import group from '../../assets/images/group-fill 1.png'
import macbook from '../../assets/images/macbook-fill.png'
import hat from '../../assets/images/graduation-cap-fill.png'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { BASE_URL, LANDING } from '../../tools/urls'
function Results() {
    const { t } =useTranslation()


    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"))
  console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.results);
        console.log(response.data.results)
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
    <div className='results'>
        <div className='container'>
            <h2>{t("talim_natijalarimiz_raqamlarda")}</h2>
            <div className='numbers'>
                <div className='box'>
                    <img src={group} alt='logo'/>
                    <p>{t("jami_oquvchilarimiz_soni")}</p>
                    <span>{data.offline+data.online}</span>
                </div>
                <div className='box'>
                    <img src={macbook} alt='logo'/>
                    <p>{t("online_oqigan_oquvchilarimiz_soni")}</p>
                    <span>{data.online}</span>
                </div>
                <div className='box'>
                    <img src={hat} alt='logo'/>
                    <p>{t("offline_oqigan_oquvchilarimiz_soni")}</p>
                    <span>{data.offline}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Results