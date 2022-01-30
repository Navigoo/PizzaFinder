
import React from 'react';
import styled from 'styled-components';


function Welcometitle() {

    
  return <Welcome>
        
        <h3>What would you like today?</h3>


  </Welcome>;
}

export default Welcometitle;

const Welcome = styled.div`
display:flex;
justify-content:center;
margin-top:15vh;
margin-bottom:5vh;

h3 {
    color:white;
    text-transform:uppercase;
}

`