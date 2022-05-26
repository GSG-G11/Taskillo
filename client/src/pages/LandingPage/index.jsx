import React from 'react';
import { Navbar, BannerSec, RocketSec, ArticlesSec } from '../../components/LandingPage';
import './style.scss'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className="page-header">
        <Navbar />
      </header>
      <main className="page-main">
        <BannerSec />
        <RocketSec />
        <ArticlesSec />
      </main>
    </div>
  )
}

export default LandingPage