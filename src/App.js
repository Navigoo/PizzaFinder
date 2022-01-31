import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Meny from './components/Meny';
import Orders from './components/Orders';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {CartProvider} from 'react-use-cart';
import Cart from './components/Cart'




function App() {
  return (
    <div className="App">
    
     <Header/>
     <Router>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/orders" element={<Orders/>}/>
         
          <Route exact path="/menu/:id" element={ <CartProvider> <Meny /> <Cart /> 
          </CartProvider>}/>
   
         
          </Routes>
      </Router>
    
    
         
      
         
     
    </div>
      
  );
}

export default App;
