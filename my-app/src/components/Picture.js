import React from 'react';
import { Link } from 'react-router-dom'
import Val from '../assets/9вал.png';

function Picture() {

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', gap: '1rem', color:'black', fontSize: '2rem', margin: '2rem'}}>
            The most famouse picture named: The Ninth Wave
        <img style={{width: '50%'}} src={Val} alt={'9вал'}/>
            </div>
        <Link style={{textDecoration: 'none', color:'black', fontSize: '2rem', margin: '2rem'}} to='/'>На главную</Link>
        </>
        );

        

}

export default Picture;