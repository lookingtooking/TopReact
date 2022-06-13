import React from 'react';
import { Link } from 'react-router-dom'
function Main() {

    return (
        <>
        <div style={{width: '100%', backgroundColor: '#808080', display:'flex', flexDirection: 'column', gap: '1rem', padding:'2rem'}}>
          <span style={{color:'black', fontSize: '2rem'}}>Ivan Aivazovsky:</span> 
          <Link style={{textDecoration: 'none', color:'white', fontSize: '2rem'}} to='/biography'>Biography</Link>
          <Link style={{textDecoration: 'none', color:'white', fontSize: '2rem'}} to='/picture'>The most famouse picture</Link>
          <Link style={{textDecoration: 'none', color:'white', fontSize: '2rem'}} to='/gallery'>Gallery</Link>
        </div>
        </>
        );

}

export default Main;