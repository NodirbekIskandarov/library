import React, { useEffect, useState } from 'react'
import Line from '../line/Line'
import './rahbaryat.css'
import man from '../../assets/images/Ellipse 8 (1).png'
import clock from '../../assets/images/Time Circle 6.png'
import phone from '../../assets/images/Calling 1 2.png'
import gmail from '../../assets/images/Message 36.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BASE_URL, LEADERS } from '../../tools/urls'
import axios from 'axios'
function Rahbaryat() {
    const { t } = useTranslation() 
    const { state } = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${LEADERS}`);
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
    // const data2 = [
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     },
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     },
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     },
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     },
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     },
    //     {
    //         img: man,
    //         name: "Rajapboy Allayorov",
    //         text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
    //         time: "10:00 - 18:00",
    //         phone: "+998990001234",
    //         gmail: "kutubxonachi@gmail.com"
    //     }
    // ]
  return (
    <div className='rahbaryat'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>{t("raxbariyat")}</h2>
                    <p>{t("bizning_rahbarlarimiz")}</p>
                </div>
            </div>
            <div className='row rahbarlar'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-4 box' key={index}>
                                <img src={item.image} alt="rasm"/>
                                {lang==="ru" ? (<h3>{item.translations.ru.full_name}</h3>) : (<h3>{item.translations.uz.full_name}</h3>)}
                                {lang==="ru" ? (<p>{item.translations.ru.about}</p>) : (<p>{item.translations.uz.about}</p>)}
                                <p><img src={clock} alt='clock'/> {item.work_time}</p>
                                <p><img src={phone} alt='phone'/> {item.phone}</p>
                                <p><img src={gmail} alt='gmail'/> {item.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Rahbaryat