import { Component } from "react";
import { useParams } from "react-router-dom";

class Cart extends Component
{

    productsInCart=[];
    




    render(){
        var { urlParameters } =  useParams();
        return(<div>
            <h2> Cart value : (500) </h2>
            <h4> Products in Cart</h4>
            Product : {urlParameters}
        </div>)
    }
}

export default Cart;