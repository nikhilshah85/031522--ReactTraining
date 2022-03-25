import { Component } from "react";

class SearchProduct extends Component
{
    render(){
        return(<div>
            <h2>Search Product </h2>

            <input type="text" placeholder="Enter the product Name" />
            <button>Search</button>
        </div>)
    }
}

export default SearchProduct;