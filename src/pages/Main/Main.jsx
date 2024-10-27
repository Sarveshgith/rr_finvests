import React from 'react'
import Header from '../../components/Navbar/Header';
import About from '../../components/Frame2/About';
import Firm from '../../components/Frame5/FirmPage';
import Home from '../../components/Frame6/Home';
import Home1 from '../../components/Frame7/Home1';
import Footer from '../../components/Frame34/Footer';

import News from '../../components/Frame8/News';
const Main = () => {
  return (
    <div>
      <Header />
      <About />
			<Firm />
			<Home />
			<Home1 />
			<News />
      <Footer />
    </div>
  )
}

export default Main

