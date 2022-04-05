import React from 'react'
import Images from './Images'

const Cards = (props) => {
    return (
      <>
      <div className='cards'>
        <div className='card'>
          <Images imgsrc={props.imgsrc} />
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_title'>{props.sname}</h3>
            <a href={props.link} target='_blank'>
              <div className='but'>
              <button>Watch Now</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }
  

export default Cards