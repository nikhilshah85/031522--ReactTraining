import { Component} from 'react';
import Cart from './Cart';

class Shopping extends Component
{

    //this is a property
    //values will come by making the rest api call
    appName = "This is a Online Shopping APP";


    greetUser()
    {
        return "Welcome to function world, From Parent";
    }

    addNumbers(n1,n2)
    {
        return n1 * n2;
    }
    render()
    {
        //this are the variables, u can use old var keyword, u can use let keyword of ES6
        //values will come by making the rest api call
       let productName = "T-Shirt";
       let  productPrice = 300;
       let  productQty = 3;

        return(<div>
          <h1> {this.appName} </h1>

          <h2> {this.greetUser()}</h2>
          <h2> Add Function : { this.addNumbers(2,60) } </h2>

          <p> Product Name : {productName} </p>
          <p> Product Price : {productPrice} </p>
          <p> Available Qty : {productQty} </p>
           <hr/>
           <p> Stock Value : {productPrice * productQty} </p>

            <Cart appliationName={this.appName} 
                  developer="Nikhil Shah"
                  greetingsMessage = {this.greetUser}></Cart>
            


        </div>)
    }
}

export default Shopping;