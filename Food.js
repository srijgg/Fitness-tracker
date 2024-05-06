import React from 'react'
import NavBar from '../TopBar/NavBar'
import { Button } from '@mui/material';

import Food1 from './FoodImages/Food1.jpg'
import Food2 from './FoodImages/Food2.jpg'
import Food3 from './FoodImages/Food3.jpg'
import Food4 from './FoodImages/Food4.jpg'
import Food5 from './FoodImages/Food5.jpg'
import Food6 from './FoodImages/Food6.jpg'
import Food7 from './FoodImages/Food7.jpg'

import './Food.css'

function Food() {
    return (

        <div>

            <div> <NavBar /></div>

            <div className='Boxes'>
                <div style={{ paddingTop: '10%' }}>
                    <div>
                        <div className='boxes1'>
                            <div><img className='Box1' src={Food1} alt="example photo" /><div>Breakfast</div></div>
                            <div><img className='Box2' src={Food2} alt="example photo" /><div>Lunck</div></div>
                            <div> <img className='Box3' src={Food3} alt="example photo" /><div>Dinner</div></div>
                            <div><img className='Box4' src={Food4} alt="example photo" /><div>Breakfast</div></div></div>
                        <div className='boxes2'>
                            <div><img className='Box5' src={Food5} alt="example photo" /><div>Breakfast</div></div>
                            <div><img className='Box6' src={Food6} alt="example photo" /><div>Breakfast</div></div>
                            <div><img className='Box7' src={Food7} alt="example photo" /><div>Breakfast</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Food