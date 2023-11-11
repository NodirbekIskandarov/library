import React from 'react'
import './results.css'
import group from '../../assets/images/group-fill 1.png'
import macbook from '../../assets/images/macbook-fill.png'
import hat from '../../assets/images/graduation-cap-fill.png'
function Results() {
  return (
    <div className='results'>
        <div className='container'>
            <h2>Ta'lim natijalarimiz raqamlarda</h2>
            <div className='numbers'>
                <div className='box'>
                    <img src={group} alt='logo'/>
                    <p>Jami o'quvchilarimiz soni</p>
                    <span>250</span>
                </div>
                <div className='box'>
                    <img src={macbook} alt='logo'/>
                    <p>Online o'qigan o'quvchilarimiz soni</p>
                    <span>250</span>
                </div>
                <div className='box'>
                    <img src={hat} alt='logo'/>
                    <p>Offline o'qigan o'quvchilarimiz soni</p>
                    <span>250</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Results