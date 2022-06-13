import React from 'react';
import { Link } from 'react-router-dom'
import Pic1 from '../assets/кораблекрушение.png';
import Pic2 from '../assets/крейсер.png';
import Pic3 from '../assets/парус.png';
import Pic4 from '../assets/пейзаж.png';
import Pic5 from '../assets/послебури.png';
import Pic6 from '../assets/севастополь.png';
import Pic7 from '../assets/утро.png';
import Pic8 from '../assets/шторм.png';
import Pic9 from '../assets/ялта.png';

function Gallery() {

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', gap: '1rem', color:'black', fontSize: '2rem', margin: '2rem'}}>
            Gallery
            <div style={{display:'flex', flexWrap: 'wrap', gap: '1rem', color:'black', fontSize: '2rem'}}>
                <img style={{width: '25%'}} src={Pic1} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic2} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic3} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic4} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic5} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic6} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic7} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic8} alt={'pic'}/>
                <img style={{width: '25%'}} src={Pic9} alt={'pic'}/>
            </div>
        </div>
        <Link style={{textDecoration: 'none', color:'black', fontSize: '2rem', margin: '2rem'}} to='/'>На главную</Link>
        </>
        );

        

}

export default Gallery;