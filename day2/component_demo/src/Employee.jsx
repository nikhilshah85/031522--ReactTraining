import { Component} from 'react'

class Employee extends Component
{
    //we will have properties and variables
    //methods, constructors React Lifecycle events 
    // testFunction()
    // {
    //     return "This is a test for a function";
    // }
    render()
    {      



        return(<div>
                <h1> This is a Class Component </h1>
                <p> This was so easy</p>

         <h4>  Addition of  My Fav numbers is  :  { 5 + 20} </h4> <br/>
          <h4>  10 is Less than 20 ? { 10 < 20 ? 'Yes':'No'} </h4>
          {/* <h3> { testFunction }</h3> */}
        </div>);
    }

}


export default Employee; //so that the class/component can be used in some other component