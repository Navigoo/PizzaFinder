import React from 'react';
import { useCart } from 'react-use-cart';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from 'styled-components';
import {Table} from 'react-bootstrap';


//Used React Bootstrap Cards at first but since it chould beand for sure needs to be more mobile friendly i used a table instead, makes it more compact
//Using react-use-cart for cart

function ItemCard(props) {
    const { addItem } = useCart();
  

    

  return <Container> 
    <TableContainer>
 
    
<Table striped bordered variant="dark">
  

  <tr>
    <th>Product:</th>
    <td>{props.name}</td>
   </tr>
    <tr className="toppingwidth">
     <th >Info:</th>
     <td>{props.topping}</td>
    </tr>
    <tr>
     <th >Price:</th>
     <td>{props.price} Kr</td>
    </tr>
    <tr>
</tr>
</Table>
</TableContainer>

<IconButton aria-label="add to shopping cart" onClick={() => addItem(props.item)}>
  <AddShoppingCartIcon style={{ fill: '#04BF68'  }} />
</IconButton>

</Container>
 
}

export default ItemCard;

const Container = styled.div`
display:flex;
justify-content:center;

`

const TableContainer = styled.div`
width:378px;
display:flex;
justify-content:center;

`









