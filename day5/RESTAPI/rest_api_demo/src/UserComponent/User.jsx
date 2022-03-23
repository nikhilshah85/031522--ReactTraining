import { Component } from "react";

class User extends Component
{

    constructor(props)
    {
        super(props);
    }

    render(){
        return(<div>
            <h2> This is a child component will call the method from parent to make API CALL</h2>

            {/* <button onClick={this.props.getUsers}> Call User Method from Parent </button> */}

            <table>
                {this.props.userDetails.map( (u)=> 
                    <tr>
                        <td> {u.name } </td>
                        <td> {u.email } </td>
                        <td> {u.address.city } </td>
                        <td> {u.address.geo.lat } "  " {u.address.geo.lng } </td>
                        <td> {u.company.name } </td>
                        <td> {u.company.catchPhrase } </td>
                    </tr>
                )}
            </table>

        </div>)
    }
}

export default User;