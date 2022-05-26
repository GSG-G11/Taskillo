import React, { useState } from 'react';
import { Navbar, BannerSec, RocketSec, ArticlesSec, Footer } from '../../components/LandingPage';
import './style.scss';

const LandingPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='landing-page'>
      <header className={open ? "page-header active" : "page-header"}>
        <Navbar open={open} setOpen={setOpen} />
      </header>
      <main className="page-main">
        <BannerSec />
        <RocketSec />
        <ArticlesSec />
        <Footer />
      </main>
    </div>
  )
}

export default LandingPage