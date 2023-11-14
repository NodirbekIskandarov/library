import React from 'react'
import './hujjatlar.css'
import Line from '../line/Line'
import right from '../../assets/images/Right 2.png'
import { Link } from 'react-router-dom'
function Hujjatlar() {
    const data = [
        {
            text: "O‘zbekiston Respublikasi qonunlari",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Respublikasi Prezidentining farmonlari",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Respublikasi Prezidentining qarorlari",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari",
            link: "/documents"
        },
        {
            text: "Muassasaning o‘z kuchini yo‘qotgan me’yoriy-huquqiy hujjatlari",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Respublikasi Adliya vazirligida davlat ro‘yxatidan o‘tkazilgan normativ-huquqiy hujjatlar",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Respublikasi davlat standartlari",
            link: "/documents"
        },
        {
            text: "O‘zbekiston Milliy kutubxonasi tomonidan qabul qilingan me’yoriy hujjatlar",
            link: "/documents"
        },
        {
            text: "Davlat dasturlari",
            link: "/documents"
        }
    ]
  return (
    <div className='hujjatlar'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Axborot-kutubxona faoliyatiga oid me'yoriy-huquqiy hujjatlar</h3>
                    <p>Huquqiy me’yoriy xujjatlar</p>
                </div>
            </div>
            <div className='box'>
                {
                    data.map((item, index) => {
                        return (
                            <Link className='link' to={item.link}>
                                <div key={index} className='cart'>
                                    <p>{item.text}</p>
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