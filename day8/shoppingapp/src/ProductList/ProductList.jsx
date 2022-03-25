import { Component } from "react";
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';
import DeleteProduct from '../DeleteProduct/DeleteProduct'
class ProductList extends Component
{
    constructor(props){
        super(props);
  
        this.state ={
          productList:[
            {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50},
            {pId:102, pName:'Coke',pCategory:'Cold-Drink',pPrice:50},
            {pId:103, pName:'Fossil',pCategory:'Watch',pPrice:50},
            {pId:104, pName:'IPhone',pCategory:'Smart-Phone',pPrice:50},
            {pId:105, pName:'Mac Book Pro',pCategory:'Laptop',pPrice:50},
            {pId:106, pName:'Appy',pCategory:'Cold-Drink',pPrice:50},
            {pId:107, pName:'Maggie',pCategory:'Fast-Food',pPrice:50},
          ]
        }
      }
    render(){
        return(<div>
            <h2> List Of Available Products </h2>

            <table>
                {this.state.productList.map((p) => <tr>
                    <td> {p.pId}</td>
                    <td> {p.pName}</td>
                    <td> {p.pCategory}</td>
                    <td> {p.pPrice}</td>
                    <td> <Link to={"/Cart/:product:" + p.pId} element={<Cart/>}>Add To Cart</Link></td>
                    <td> <Link to="/deleteproduct" element={<DeleteProduct/>}>Delete Product </Link></td>
                    {/* <td> <Link to={"/Cart/:" + p.pId} element={<Cart/>}> Parameter</Link></td> */}
                </tr>)}
            </table>
           
        </div>)
    }
}

export default ProductList;