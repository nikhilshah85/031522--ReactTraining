import { Component } from "react";

class Friends extends Component
{

    constructor(props)
    {
        super(props);
    }

        render(){
            return(<div>
                <p> Friends Component</p>

                <ul>
                    {this.props.favFriends.map((f)=>
                        <li> {f}</li>
                    )}
                </ul>
            </div>)
        }
}

export default Friends;