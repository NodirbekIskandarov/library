import React from 'react'
import './ariza.css'
import Line from '../line/Line'
import img from '../../assets/images/casual-life-3d-cat-lying-on-books 1.png'
function Ariza() {
  return (
    <div className='ariza'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Ariza qoldirish</h3>
                    <p>An’anaviy ta’limda o’qish uchun ariza qoldiring va biz sizga aloqaga chiqamiz</p>
                </div>
            </div>
            <div className='forms'>
                <div className='image'>
                    <img src={img} alt="cat"/>
                </div>
                <div className='formPart'>
                    <div className='cart'>
                        <p>F.I.SH.*</p>
                        <input type='text' placeholder="To'liq ism sharifingizni kiriting"></input>
                    </div>
                    <div className='cart'>
                        <p>F.I.SH.*</p>
                        <input type='text' placeholder="To'liq ism sharifingizni kiriting"></input>
                    </div>
                    <div className='cart'>
                        <p>F.I.SH.*</p>
                        <input type='text' placeholder="To'liq ism sharifingizni kiriting"></input>
                    </div>
                    <div className='cart'>
                        <p>F.I.SH.*</p>
                        <input type='text' placeholder="To'liq ism sharifingizni kiriting"></input>
                    </div>
                    <button>Ariza jo'natish</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ariza