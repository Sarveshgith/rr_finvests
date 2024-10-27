import React from 'react'
import './Home1.css'
import Carousel from 'react-bootstrap/Carousel';
const Home1 = () => {
  return (
    <>
    <div><h1 className='text-center mt-5 heading5 '>PORTFOLIO SPOTLIGHT</h1></div>
    <div className='home-img2'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="pic1"
          src='pic2.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1"
          src='pic3.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1"
          src='pic4.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
        <p className='text-center home-content3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fuga aut tempore. Ut vitae labore nemo, repudiandae delectus laboriosam placeat distinctio aliquam iusto excepturi consequatur, iste quia ex voluptas, aut tenetur assumenda. Quidem odit quos atque soluta excepturi facere recusandae, cumque quibusdam id esse nam minus amet maiores libero eaque expedita veniam ducimus ullam inventore, molestias fugiat voluptatibus. Explicabo temp</p>
    </div>
  </>)
}

export default Home1
