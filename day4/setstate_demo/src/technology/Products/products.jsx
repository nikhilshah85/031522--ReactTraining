import { Component } from "react";

class Product extends Component
{
    render(){
        return(<div>
            <p> Welcome to product list</p>

            <table border="1">
                {this.props.pList.map( (p) => <tr> 
                    <td> {p.pId }</td>
                    <td> {p.pName }</td>
                    <td> {p.pCategory }</td>
                    <td> {p.pIsInStock ? 'Available':'NA' }</td>
                    <td> {p.pPrice }</td>
                    <td> {(p.pPrice * 90) /100 }</td>
                </tr>)}
            </table>
        </div>)
    }
}

export default Product;