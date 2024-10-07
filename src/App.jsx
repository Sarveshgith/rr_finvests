import React from 'react'
import Header from './components/Navbar/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Frame6/Home';
import Home1 from './components/Frame7/Home1';
import Mf from './components/Frame10/Mf';
import News from './components/Frame8/News';
import MotarIns1 from './components/Frame11/MotarIns1';
import HealthIns1 from './components/Frame12/HealthIns1';
import Ins1 from './components/Frame13/Ins1';
import Ins2 from './components/Frame14/Ins2';
import Whatwedo from './components/Frame9/Whatwedo';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Home1 />
      <News />
      <Mf />
      <MotarIns1 />
      <HealthIns1 />
      <Ins1 />
      <Ins2 />
      <Whatwedo />
    </div>
  )
}

export default App
