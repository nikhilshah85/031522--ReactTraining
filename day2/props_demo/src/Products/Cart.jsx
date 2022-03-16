import { Component} from 'react';

class Cart extends Component
{

    constructor(props){
        super(props);
    }



    render()
    {
        return(<div>
            <h1> Cart Component </h1>
            <h1> {this.props.appliationName }</h1>
            <h1> {this.props.developer }</h1>
            <h2> {this.props.greetingsMessage()}</h2>
        </div>)
    }
}

export default Cart;