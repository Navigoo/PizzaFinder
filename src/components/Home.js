import React from 'react';
import styled from 'styled-components';
import HeroSlider from './HeroSlider';
import Arrow from './Arrow';
import RestaurantNearby from './RestaurantNearby';
import LocationMapping from './LocationMapping';




function Home() {
  

  return <Container>
    
    <HeroSlider />
    <Arrow />
    <RestaurantNearby />
    <LocationMapping />
    

  </Container>
  
}

export default Home;

//Using styled components in some of the elements

const Container = styled.div`
height:200vh;
overflow-x:hidden;

`





