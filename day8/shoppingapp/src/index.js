import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home/Home'
import ProductList from './ProductList/ProductList'
import Addproduct from './AddProduct/AddProduct'
import Cart from './Cart/Cart'
import DeleteProduct from './DeleteProduct/DeleteProduct'
import SearchProduct from './Searchproduct/Searchproduct'
import UpdateProduct from './UpdateProduct/UpdateProduct'
ReactDOM.render(
  
 <BrowserRouter>
   <Routes>
      <Route path='/' element={<App/>}/>  
      <Route path='/home' element={<Home/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/searchproduct' element={<SearchProduct/>}/>
      <Route path='/deleteproduct' element={<DeleteProduct/>}/>
      <Route path='/updateproduct' element={<UpdateProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
 </BrowserRouter>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
