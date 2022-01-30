import React, {useState} from 'react';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import {Table, Button, Modal} from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AnchorLink from 'react-anchor-link-smooth-scroll'



   //(row 71)Getting Warning: Received `true` for a non-boolean attribute `row` due to conflict with styled components
  

function Cart() {


     //Modal confirm function purchase
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


    const {

        isEmpty,
        items,
        totalItems,
        cartTotal,
        emptyCart,
        updateItemQuantity,
        removeItem,
      } = useCart();

      if (isEmpty) return <h2 className="empty">No order yet</h2>;

      

    
  return ( <Container>
      <section id='things'>
        <section className="py-4 container">
            <div row justify-content-center>
                <div className="col-12">
                    
               
                        <h5>Total Items: ({totalItems})</h5>
                      
                        <Table striped bordered variant="dark">
                        
                    <tbody>
                    {items.map((item, index) => { 
                    return ( 
                             
      
      <tr key={index}>
     
      <th >{item.name}</th> 
      <th >{item.price} kr</th>
      <th >{item.quantity}</th>
      <td>

       
         <Button 
         className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity -1)}>
            - </Button>
         <Button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity +1)}>
            + </Button>

            <IconButton aria-label="delete" size="large" onClick={() => removeItem(item.id)}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
         
      </td>
      </tr>
      )    
      
    })}            
</tbody>
  
        </Table>
                </div>

                    <div className="col-auto ms-auto">
                        <h2>Total Price: {cartTotal} kr</h2>
                    </div>
                    <div className="col-auto">
                    <Button className="btn btn-danger  ms-2 mt-2" onClick={() => emptyCart(items)}> 
                        Clear Cart</Button>
                        <Button className="btn btn-success ms-2 mt-2" onClick={handleShow}> 
                        Buy Now</Button>
                    </div>

            </div>

        </section>
        </section>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food is on its way!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Thanks for your order.
            Your order is soon ready to pick-up!
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
          handleClose();
          emptyCart(items);
        }}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        
        <LiveCart>
    

        <AnchorLink href='#things'> <img className="oven"  src={require('../img/pepperoni.png')} alt="PizzaOven icon by Icons8" />{''}
               {totalItems ? (
               <h4>{totalItems}</h4>    
               ) : ( ''            
               )}</AnchorLink>

    </LiveCart>
        </Container>
    
    
  );
}

export default Cart;

const Container = styled.div`
background:black;
h5 , h2 {
    color:white;
}
 
`
const LiveCart = styled.div`
position:fixed;
background:#04BF68;
border-radius:50%;
height:70px;
width: 70px;
bottom:5%;
right:2%;
z-index:100;



a{
    text-decoration:none;
    
   
}
h4{
    font-size:14px;
    color:white;
}



`


