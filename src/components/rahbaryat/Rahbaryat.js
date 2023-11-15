import React from 'react'
import Line from '../line/Line'
import './rahbaryat.css'
import man from '../../assets/images/Ellipse 8 (1).png'
import clock from '../../assets/images/Time Circle 6.png'
import phone from '../../assets/images/Calling 1 2.png'
import gmail from '../../assets/images/Message 36.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
function Rahbaryat() {
    const data = [
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        },
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        },
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        },
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        },
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        },
        {
            img: man,
            name: "Rajapboy Allayorov",
            text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
            time: "10:00 - 18:00",
            phone: "+998990001234",
            gmail: "kutubxonachi@gmail.com"
        }
    ]
  const { state } = useLocation();

  return (
    <div className='rahbaryat'>
        <div className='container'>
        <div className="locationOfPage">
          <p>Markaz haqida</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>Rahbariyat</h2>
                    <p>Bizning rahbarlarimiz</p>
                </div>
            </div>
            <div className='row rahbarlar'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-4 box' key={index}>
                                <img src={item.img} alt={item.name}/>
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                                <p><img src={clock} alt='clock'/> {item.time}</p>
                                <p><img src={phone} alt='phone'/> {item.phone}</p>
                                <p><img src={gmail} alt='gmail'/> {item.gmail}</p>
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