import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {

//Closingfunction with useState
const [menuStatus, setMenuStatus] = useState(false);

  return <Container>
  
            <a href="/">
            <img className="logo" src={require('../img/icons8-pizza-80.png')} alt="Pizza icon by Icons8" />
            </a>
            <a href="/"><p>PizzaFinder</p> </a>
           
           <Announce>
        <p>A pizza always nearby</p> 
                     
           </Announce>

           <RightMenu>
           
                 <MobileToggler onClick={()=>setMenuStatus(true)} sx={{ color: "white",  background:"white"}}/>
          </RightMenu>

           <BurgerMenu show={menuStatus}>
             <ClosingWrapper> 
                <CustomClose onClick={()=>setMenuStatus(false)}sx={{ color: "white",  background:"white"}}/>
             </ClosingWrapper> 
             <li><a href="#/">My Account</a></li>
             <li><a href="#/">Customer Service</a></li>
             <li><a href="#/">Integrity</a></li>
             <li><a href="#/">About PizzaFinder</a></li>
           </BurgerMenu>
            
        </Container>
}

export default Header;

//Styling with styled components
const Container = styled.div`
min-height:80px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 10px;
top: 0;
left: 0;
right: 0;
z-index:1;
background:black;
margin-bottom:2vh;

a {
  cursor:pointer;
  text-decoration:none;
}

p{
  color:white;
  font-weight: 600;
 

}



`
const Announce= styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   flex: 1;
   p {
   font-weight: 600;
   text-transform: uppercase;
   color:white;
   margin-right:10px;
   text-decoration:none;

}
 @media(max-width: 768px){
     display:none;
 }
`

const RightMenu = styled.div`
   display:flex;
   align-items:center;


 a {
     font-weight: 600;
     text-transform: uppercase;
     color:white;
     margin-right:10px;
     
     
 }
`
const MobileToggler = styled(MenuIcon)`
cursor:pointer;

`
const BurgerMenu = styled.div`
position:fixed;
top: 0;
bottom:0;
right:0;
background:black;
opacity: 0.95;
width:300px;
z-index:99;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.3s ease-in;


li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0, .3);
  cursor:pointer;
  
  a {
    text-decoration:none;
    font-weight:600;
    color:white;
    font-size:28px;
  }
 
}


`
const CustomClose = styled(CloseIcon)`
  cursor:pointer;

  

`

const ClosingWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
 

`






