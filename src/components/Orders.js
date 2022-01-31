import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


//API url, fetching all but can do a dynamic url for specific order, not done here.
const url = `https://private-63b47-pizzaapp.apiary-mock.com/orders/id`


function Orders() {
  
    const [showOrder, setShowOrder] = useState([]);
   

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setShowOrder((data)));
            
        
    
    }, []);

    //Order timestamp
    //Converting timestap to ISO
    // Not doing any fancy conversion with only day and time here..
    const event = new Date(showOrder.orderedAt);
    const jsonDate = event.toJSON();
    const orderTime = new Date(jsonDate).toUTCString();

     //Order timestamp
    //Converting timestap to ISO
    // Not doing any fancy conversion with only day and time here..
    const event2 = new Date(showOrder.esitmatedDelivery);
    const jsonDate2 = event2.toJSON();
    const deliveryTime = new Date(jsonDate2).toUTCString();

    //Time left before pick-up
    var difference = event - event2;
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60;
    
    return (
        <Container>
            <Wrap>
                <ShowOrder>
                    <ImageWrap>
                <img className="blink_me" src={require('../img/pizza-time.png')} alt="Pizzatime-image" />
                </ImageWrap>
                <h2>Order Number: {showOrder.orderId}</h2>
                <p>Order Price: {showOrder.totalPrice} kr</p>
                <p>Order Date/time: {orderTime}</p>
                <p>Current status: {showOrder.status}</p>
                <p>Time to Pick-up: {minutesDifference} Minutes</p>
             
                
                </ShowOrder>
            </Wrap>
        </Container>
    );
  
}

export default Orders;

const Container = styled.div`
display:flex;
justify-content:center;
margin:0 auto;
height:60vh;
width:360px;
background:black;
margin-top:20vh;
border-radius:8px;
-webkit-box-shadow: 5px 5px 15px -4px #808080; 
box-shadow: 5px 5px 15px -4px #808080;


`
const Wrap = styled.div`
display:flex;
justify-content:center;
align-items:center;

`

const ShowOrder = styled.div`

p, h1, h2{
    color:white;
}

`

const ImageWrap = styled.div`

img{
width:40%;
}


`
