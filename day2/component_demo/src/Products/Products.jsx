import { Component } from "react";

class Product extends Component
{

    //we will have methods here, which will make REST Calls for CRUD Operations

    greetFunction()
    {
        console.log("Hello and welcome to a function, i am for a demo, I can have parameters, I could be called on a click of button");
    }

    render(){
        return(<div>
            <hr/>

                {/* <h2>{{  greetFunction() }} </h2> */}




            <h3> Below are the list of products </h3>
            <ul>
                <li> Pepsi </li>
                <li> Maggie </li>
                <li> Hat </li>
                <li> Appy </li>
            </ul>
        </div>)
    }
}

export default Product;