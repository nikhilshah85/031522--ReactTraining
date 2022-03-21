import { Component } from "react";

class Client extends Component
{

    constructor(props){
        super(props);
    }


    render(){
        return(<div>
            <hr/>
            <h1> This is a Client Component </h1>
            <h4> Application : {this.props.appName} </h4>
            <h4> Total Consultants : {this.props.totalMembers}</h4>
            <h2> {this.props.city}</h2>
        </div>)
       
    }
}

export default Client;