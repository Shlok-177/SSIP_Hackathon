import React from 'react'
import './Learing.css';
import Sidebar from '../Sidebar';
import Card from './Card.js';


export default function Learing() {
    return (
        <>

            <div className='learing'>
                <div className="heading">
                    <h1>Dictionary</h1>
                </div>
                <div className="main">
                     <Card />
                </div>
            </div>
        </>
    )
}
