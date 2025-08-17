import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='notfound'>
        <div className='contentNot'>
      <h1 className='t404'>404</h1>
      <h2 className='titreNot'>Page Not Found</h2>
     <Link to="/" className="home-btn">
      Page d'accueil
    </Link>
        </div>
    </div>
  )
}

export default Notfound
