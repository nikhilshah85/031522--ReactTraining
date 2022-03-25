import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {

  




  render(){
    return(
    <div>
        <h1 className='appHeader'> Welcome to Shopping APP</h1>

        <table>
          <tr>
            {/* <td> <Link to="/">Home </Link></td> */}
            <td> <Link to="/productlist">Product List </Link></td>
            <td> <Link to="/addproduct">Add Product </Link></td>
            <td> <Link to="/searchproduct">Search Product </Link></td>
            <td> <Link to="/deleteproduct">Delete product </Link></td>
            <td> <Link to="/updateproduct">Update Procuct </Link></td>
            <td> <Link to="/cart">Cart </Link></td>
          </tr>
        </table>
    </div>
    )};
}

export default App;
