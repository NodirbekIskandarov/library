import React from 'react'
import './announcements.css'
import Line from '../line/Line'
function Announcements() {
  return (
    <div className='announcements'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>E'lonlar</h3>
                    <p>Yangi e'lonlar</p>
                </div>
            </div>
            <div className='textPart'>
                <span>31.12.2023</span>
                <p>Lorem ipsum dolor sit amet consectetur. Posuere enim proin facilisis sagittis convallis ultrices auctor. Faucibus pellentesque in ac sit velit. Mauris neque vestibulum adipiscing mi odio. Turpis cras ipsum purus neque. Nibh augue pretium leo donec netus.</p>
            </div>
            <div className='textPart'>
                <span>31.12.2023</span>
                <p>Lorem ipsum dolor sit amet consectetur. Posuere enim proin facilisis sagittis convallis ultrices auctor. Faucibus pellentesque in ac sit velit. Mauris neque vestibulum adipiscing mi odio. Turpis cras ipsum purus neque. Nibh augue pretium leo donec netus.</p>
            </div>
            <div className='textPart'>
                <span>31.12.2023</span>
                <p>Lorem ipsum dolor sit amet consectetur. Posuere enim proin facilisis sagittis convallis ultrices auctor. Faucibus pellentesque in ac sit velit. Mauris neque vestibulum adipiscing mi odio. Turpis cras ipsum purus neque. Nibh augue pretium leo donec netus.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements