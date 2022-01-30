
import React from 'react';
import styled from 'styled-components';









function RestaurantNearby() {

    
  return <NearBy>

        <h2>Pizzerias near you</h2>


  </NearBy>;
}

export default RestaurantNearby;

const NearBy = styled.div`
height:40vh;
display:flex;
justify-content:center;
margin-top:2vh;



h2 {
    color:white;
    text-transform:uppercase;
}

`