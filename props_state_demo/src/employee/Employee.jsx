import { Component} from "react";

class Employee extends Component
{

    constructor(props)
    {
        super(props);
    }


    render(){
        return(
            <div>
                    <hr/>
                    <h1> This is Employee Component </h1>
                    <h1> Project :  {this.props.project }</h1>
                    <h1> Team Size :{this.props.teamsize }</h1>
            </div>
        )
    }
}

export default Employee;