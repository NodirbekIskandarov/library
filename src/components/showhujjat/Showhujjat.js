import React from 'react'
import Line from '../line/Line'
import './showhujjat.css'
import img from '../../assets/images/Rectangle 39.png'
import right from '../../assets/images/Right 1.png'
import download from '../../assets/images/Download.png'
function Showhujjat() {
    const data = [
        {
            img: img,
            name: "Xujjat nomi"
        },
        {
            img: img,
            name: "Xujjat nomi"
        },
        {
            img: img,
            name: "Xujjat nomi"
        },
        {
            img: img,
            name: "Xujjat nomi"
        },
        {
            img: img,
            name: "Xujjat nomi"
        },
        {
            img: img,
            name: "Xujjat nomi"
        }
    ]
  return (
    <div className='showhujjat'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Me’yoriy xujjatlar</h3>
                    <p>Huquqiy me’yoriy xujjatlar</p>
                </div>
            </div>
            <div className='box'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='cart'>
                                <img src={item.img} alt={item.name}/>
                                <p>{item.name}</p>
                                <button><img src={download} alt="download"/>PDF da yuklab olish</button>
                                <br/>
                                <a href='/'> Manba <img src={right} alt="right"/></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Showhujjat