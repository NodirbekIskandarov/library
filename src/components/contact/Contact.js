import React from 'react'
import './contact.css'
import books from '../../assets/images/casual-life-3d-stack-of-books-mockup 1.png'
import Line from '../line/Line'
function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Bog'lanish</h3>
                    <p>O'z ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz</p>
                </div>
            </div>
            <div className='inputPart'>
                <div className='inputs'>
                    <div className='singleInput'>
                        <p>F.I.SH</p>
                        <input type='text' placeholder='Ism Sharif'/>
                    </div>
                    <div className='singleInput'>
                        <p>Telefon raqam</p>
                        <input type='text' placeholder='+998'/>
                    </div>
                    <div className='singleInput'>
                        <p>Ma'lumotingiz</p>
                        <select>
                            <option disabled>Ma'lumot</option>
                            <option>Bakalavr</option>
                        </select>
                    </div>
                    <button>Jo'natish</button>
                </div>
                <div className='image'>
                    <img src={books} alt='books'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact