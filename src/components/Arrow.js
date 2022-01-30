import React from 'react';
import styled from 'styled-components';

function Arrow() {
  return <div>
   <DownArrow>
   <img src={require('../img/down-arrow.png')} alt="arrow down from flaticons" />
   </DownArrow>
  

  </div>
  
}

export default Arrow;

//Using styled components in some of the elements

const DownArrow = styled.div`
margin-top:2vh;
height:40px;
animation: animateDown infinite 1.5s;


`

