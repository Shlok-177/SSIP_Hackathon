import React from 'react'
import './Card.css'
import leftEllipse from './assets/Ellipse154.png'
import starL from './assets/Star22.png'
import arrow from './assets/Vector417.png'
import rightEllipse from './assets/Ellipse155.png'
import { cardsData } from "../../Data/Data";
import {Link} from "react-router-dom";



const card = () => {


  return (
    <>
    <div className='Main_div'>
      {cardsData.map(item => {
        return(
          <Link to={`/Learing/${item.title}`}>
            <div className='dictionary-card'>
            <div className="left-ellipse"><img src={leftEllipse} alt="" /></div>
            <div className="right-ellipse"><img src={rightEllipse} alt="" /></div>
            <div className="character"><img src={item.img} alt="" /></div>
            <div className="star1"><img src={starL} alt="" /></div>
            <div className="star2"><img src={starL} alt="" /></div>
            <div className="star3"><img src={starL} alt="" /></div>
            <div className="star4"><img src={starL} alt="" /></div>
            <div className="sign-info-btn">
              <div className="sign-text">{item.title}</div>
              <div className="arrow-btn">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          </Link>

           );
      })}
    // </div>
    </>

  )
}

export default card