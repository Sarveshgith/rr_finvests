import React from 'react'
import Header from './components/Navbar/Header';
import About from './components/Frame2/About';
import Firm from './components/Frame5/FirmPage';
import Home from './components/Frame6/Home';
import Home1 from './components/Frame7/Home1';
import Mf from './components/Frame10/Mf';
import News from './components/Frame8/News';
import Whatwedo from './components/Frame9/Whatwedo';
import Insurance from './components/Frame15/Insurance';
const Main = () => {
  return (
    <div>
      <Header />
      <About />
			<Firm />
			<Home />
			<Home1 />
			<News />
			<Whatwedo />
			<Mf />
			<Insurance />
    </div>
  )
}

export default Main

