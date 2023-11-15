import React from 'react'
import Line from '../line/Line'
import './kurslar.css'
import img1 from '../../assets/images/undraw_data_points_re_vkpq.png'
import img2 from '../../assets/images/undraw_data_processing_yrrv.png'
import img3 from '../../assets/images/undraw_education_f8ru 1.png'
import img4 from '../../assets/images/undraw_profile_data_re_v81r.png'
import clock from '../../assets/images/Time Circle 6.png'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
function Kurslar() {
    const data = [
        {
            img: img1,
            theme: "Elektron kutubxona maʼlumotlar bazasini shakllantirish va foydalanish asoslari bo’yicha malaka oshirish",
            text: "Аxborot-kutubxona muassasalari rahbar hamda xodimlari ",
            time: "5 kun (40 soat)",
            prise: "300 000 UZS"
        },
        {
            img: img2,
            theme: "Elektron kutubxona maʼlumotlar bazasini shakllantirish va foydalanish asoslari bo’yicha malaka oshirish",
            text: "Аxborot-kutubxona muassasalari rahbar hamda xodimlari ",
            time: "5 kun (40 soat)",
            prise: "300 000 UZS"
        },
        {
            img: img3,
            theme: "Elektron kutubxona maʼlumotlar bazasini shakllantirish va foydalanish asoslari bo’yicha malaka oshirish",
            text: "Аxborot-kutubxona muassasalari rahbar hamda xodimlari ",
            time: "5 kun (40 soat)",
            prise: "300 000 UZS"
        },
        {
            img: img4,
            theme: "Elektron kutubxona maʼlumotlar bazasini shakllantirish va foydalanish asoslari bo’yicha malaka oshirish",
            text: "Аxborot-kutubxona muassasalari rahbar hamda xodimlari ",
            time: "5 kun (40 soat)",
            prise: "300 000 UZS"
        }
    ]
  const { state } = useLocation();

  return (
    <div className='kurslar'>
        <div className='container'>
        <div className="locationOfPage">
          <p>Markaz haqida</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Kurslar</h3>
                    <p>An’anaviy ta’lim yo’nalishidagi kurslar</p>
                </div>
            </div>
            <div className='information'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='box'>
                                <img src={item.img} alt={item.text}/>
                                <h3>{item.theme}</h3>
                                <p>{item.text}</p>
                                <p><img src={clock} alt='clock'/> {item.time}</p>
                                <div className='narx'>
                                <Link className='link' to="/batafsil"><button>Batafsil</button></Link>
                                    <div className='p'>
                                        <p>Narx:</p> <span>{item.prise}</span>
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