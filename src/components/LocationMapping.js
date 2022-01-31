import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';
import { convertDistance, getDistance } from 'geolib';

//API url "Restuarants"
const url = `https://private-63b47-pizzaapp.apiary-mock.com/restaurants/`


function LocationMapping() {
  

    
    //using axios to do get request
    const [showRestaurantList, setShowRestaurantList] = useState([]);
    useEffect(() => {
        // GET request using axios inside useEffect React hook to only run once
        axios.get(url)
            .then(response => setShowRestaurantList(response.data))
            .catch(err => console.log(err))
           
       
    }, []);

    //Creating an dynamic redirect to the right menu from choosen restaurant
     

    const toRightMenu = value => {
        const a = value;
        const b = String(a);
        
    
         window.location.href = `/menu/${b}`;
 
     
    }

    
    //Sorting before mapping
    return (
        <LocationTable>
       
        
        {showRestaurantList.sort((a, b) => a.latitude - b.latitude).map((val, latitude) => {

            //Have to get the values out
            const lat = [val.latitude];
            const long = [val.longitude];
            const restLocations = {latitude: lat, longitude: long};
            

        //Getting my position, use it manually...
                
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         const latitude = (position.coords.latitude);
    //         const longitude = (position.coords.longitude);
    //         const myLoc = {latitude:latitude, longitude: longitude};
    //         console.log(myLoc);
            
    //     },
    //     );

               //Set my location manually, did not use the geolocation function dynamiclly
               const myLocation = {latitude: 59.202576, longitude: 18.1816868}

                

               //Use Geolib npm package to get distance (however the distance seems not to be accurate compared to google)
               //Could have been using geolocation api as well but not this time :)
               const distance = getDistance( myLocation, 
                   restLocations, 1000 );
   
                           //Get the distance in m to each restaurant (did not get this fully accurate..)
                           const distanceMeters = convertDistance(distance, 'm');
                           
                         
                                           
                        
           return <RestaurantBox key={latitude}>
            
            
            <h2>{val.name}</h2>
            <h3>Adress:</h3>
            <p>{val.address1}</p>
            <p>{val.address2}</p>
            <h3>{distanceMeters}m bort</h3>
            <Button variant="contained" onClick={() => toRightMenu(val.id)}>See Menu</Button>
      
          </RestaurantBox>
    })}
            
            </LocationTable>
        
        );
  
}

export default LocationMapping;

const LocationTable = styled.div`
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:-30vh;


`

const RestaurantBox = styled.div`
width:350px;
height:auto;
background:black;
border-radius:8px;
-webkit-box-shadow: 5px 5px 15px -4px #808080; 
box-shadow: 5px 5px 15px -4px #808080;
margin-bottom:10px;



p{
    color:white;
    padding:3px;
}
h2{
    color:white;
    padding:10px;
}
h3{
    color:white;
    padding:10px;
}
Button{
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    margin-bottom:2vh;
    margin-top:2vh;
}

`

