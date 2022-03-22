import { Component } from "react";

class Technology extends Component
{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(<div>
            <h1> I am a child component</h1>
            <h1> Presenter : {this.props.presenter}</h1>
        </div>)
    }
}

export default Technology;