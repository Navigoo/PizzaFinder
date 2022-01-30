import React from 'react';
import Slider from 'react-slick'; 
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HeroSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
    
  };
  
  return <Carousel {...settings}>
           <Wrap>
           <Slider1>
      <img src={require('../img/pizza1.jpg')} alt="pizzaimage2" />
      
      
      </Slider1>
           
      </Wrap>
      <Wrap>
        <Slider2>
      <img src={require('../img/pizza2.jpg')} alt="pizzaimage2" />
      <h2>sharing is caring.</h2>
     
        
       
      </Slider2>
      </Wrap>
        </Carousel>
        
}

export default HeroSlider;

const Carousel = styled(Slider)`
height:70vh;
margin-top:8vh;


`

const Wrap = styled.div`
position: relative;
margin-bottom:10vh;
img{ 
width:100%;
height:70vh;
object-fit: cover;
}


`
const Slider1 = styled.div`
h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 46px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  text-transform: uppercase;
 }


`

const Slider2 = styled.div`
h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 46px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  text-transform: uppercase;
 }

`

