import React from 'react';
import { Navbar } from '../../components/LandingPage';
import './style.scss'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className="page-header">
        <Navbar />
      </header>
      <main className="page-main">
        
      </main>
    </div>
  )
}

export default LandingPage