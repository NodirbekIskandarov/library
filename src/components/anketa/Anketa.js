import React from 'react'
import Line from '../line/Line'
import './anketa.css'
function Anketa() {
    const data = [
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'Telefon raqam*',
            placeholder: "+998 ** *** ** **",
            type: "text"
        },
        {
            text: 'Malumoti*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "s"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        },
        {
            text: 'F.I.Sh.*',
            placeholder: "To'liq ism sharifingizni kiriting",
            type: "text"
        }
    ]
  return (
    <div className='anketa'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>Eng yaxshi kutubxonachi ko’rik tanlovi</h2>
                    <p>Tanlovda qatnashish uchun ma’lumotlaringizni qoldiring</p>
                </div>
            </div>
            <div className='formPart'>

            </div>
        </div>
    </div>
  )
}

export default Anketa