import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';
import WelcomeTitle from './Welcometitle';
import { Container } from "react-bootstrap";
import styled from 'styled-components';


//NOTE TO RICHARD, USE PARAMS TO GET THE RESTAURANT ID NUMBER FROM URL AND USE IT IN URL BELOW

//API url "Restuarants"
const url = `https://private-63b47-pizzaapp.apiary-mock.com/restaurants/1/menu?`



const Meny = () => {

   //using axios to do get request
   const [showMenu, setShowMenu] = useState([]);
   useEffect(() => {
       // GET request using axios inside useEffect React hook to only run once
       axios.get(url)
           .then(response => setShowMenu(response.data));
          
      
   }, []);

  return (
      <>
      
    <WelcomeTitle />
      
    <Wrap>
     
      <Container>
          
    

        {showMenu.sort((a, b) => a.rank - b.rank).map((item, index) => {
         let array = [item.topping];
         let joinedArray = array.join("\n") ;
   
        
            
            return( 
                <div key={index}>
                    
                <ItemCard 
                img="" 
                id={item.id} 
                name={item.name} 
                rank={item.rank}
                topping={joinedArray} 
                price={item.price} 
                item={item} 
                />
                </div> 
)
        })}

        </Container>
      
       </Wrap>   
      
      
         
       </>
        
    );
};

export default Meny;

const Wrap = styled.div`
display:flex;
justify-content:center;
margin-bottom:10vh;


`



