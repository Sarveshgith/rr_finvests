import React from 'react'
import Header from '../../components/Navbar/Header';
import About from '../../components/Frame2/About';
import Firm from '../../components/Frame5/FirmPage';
import Home from '../../components/Frame6/Home';
import Home1 from '../../components/Frame7/Home1';

import News from '../../components/Frame8/News';
import Whatwedo from '../../components/Frame9/Whatwedo';
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
    </div>
  )
}

export default Main

