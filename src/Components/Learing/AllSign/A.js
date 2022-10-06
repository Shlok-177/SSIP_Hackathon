import React from 'react'
import Sidebar from '../../Sidebar'
import "./Allsign.css";
import { UilArrowRight } from '@iconscout/react-unicons'
import InnerCard from './InnerCards/InnerCard.js'
import { DataForA } from '../../../Data/Data';

function A() {
  return (
    <>

      <div className='scroll'>
        <div className="heading">
          <h1>Dictionary <UilArrowRight /> A</h1>
        </div>
        <div className="Main-div">
        {DataForA.map(item => {
        return(
              <InnerCard
              title={item.title}
              img = {item.img}
              YLink = {item.YoutubLink}
              />
           );
      })}
         </div>
         </div>
      </>
      )
}

      export default A