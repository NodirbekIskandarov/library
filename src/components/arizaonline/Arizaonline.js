import React from 'react'

import Line from '../line/Line'
import img from '../../assets/images/casual-life-3d-cat-lying-on-books 1.png'
import { Link } from 'react-router-dom'
function Arizaonline() {
  return (
    <div className='ariza'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Ariza qoldirish</h3>
                    <p>Online kurslarda o’qish uchun ariza qoldiring va biz sizga aloqaga chiqamiz</p>
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
                    <Link to="/pay"><button>To'lov qilish</button></Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arizaonline