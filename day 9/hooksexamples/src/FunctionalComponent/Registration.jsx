import { Component } from 'react';
import ReactDom from 'react-dom';

class Registration extends Component
{

        collectInfo=()=> {
            var name = ReactDom.findDOMNode(this.refs.txtName).value;
            var sal = ReactDom.findDOMNode(this.refs.txtSalary).value;
            var desig = ReactDom.findDOMNode(this.refs.txtSalary).value;
            var city = ReactDom.findDOMNode(this.refs.txtCity).value;

            console.log('we collect');
            console.log(name + " " + sal + " " + desig + " " + city);

            ReactDom.findDOMNode(this.refs.details).value = name + " is a " + desig;
        }


        render(){
            return(<div>
                <h1> Registration - Class based component - {this.props.located}</h1>

                <input type="text" ref="txtName" placeholder="Enter Name"/>
                <input type="text" ref="txtSalary" placeholder="Enter Salary"/>
                <input type="text" ref="txtDesignation" placeholder="Enter Designation"/>
                <input type="text" ref="txtCity" placeholder="Enter City"/>
                <button onClick={this.collectInfo}>Register</button>

                <h1 ref="details"></h1>
            </div>)
        }

}

export default Registration;