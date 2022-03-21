import logo from './logo.svg';
import './App.css';
import Employee from './employee/Employee';
import Client from './Client/Client';
import { Component } from 'react';
import Friends from './Friends/Friends';


class App extends Component {

  //this values will come from REST calls and not hardcoded
  projectName = "This is React Training";
  teamStrength = 40;

  constructor(props)
  {
    super(props);


    this.state = 
      {
     empDetails:{ firstName:'Nikhil', lastName:'Shah',age:30,isPermenant:true },
     skills:['React','Angular','Azure Cloud','.Net','SQL Server'],
     friends : ['Akshay','Priya','Riya','Jiya','Amar','Akbar','Antony','Ramesh','Suresh'],
     city:"Mumbai",
     greet:()=>{alert("Hello and welcome to state");},
     addNumbers:(n1,n2)=>{
      let number1 = parseInt(n1);
      let number2 = parseInt(n2);
      let addition = number1 + number2;
      alert(addition);

     },
     employeeList:[
       {empNo:101,empName:'Nikky',empDesignation:'Consultant',empSal:5000},
       {empNo:102,empName:'Ram',empDesignation:'HR',empSal:6000},
       {empNo:103,empName:'Venky',empDesignation:'Consultant',empSal:15000},
       {empNo:104,empName:'Sachin',empDesignation:'Sales',empSal:16000},
       {empNo:105,empName:'Karthik',empDesignation:'Consultant',empSal:55000},
       {empNo:106,empName:'Stefan',empDesignation:'Accounts',empSal:3000},
       {empNo:107,empName:'Stephny',empDesignation:'Consultant',empSal:85000},
     ]
      }
    
  }



  render(){
  return (
    <div>
      <h1> Props and State Demo </h1>
{/* 
     Props : <input type="textbox" value={this.projectName} placeholder="Enter Your Name"/>
     State : <input type="textbox" value={this.state.city}/> */}
{/* 
    <ul>
      {this.state.skills.map( (s)=> <li> Hello : { s }</li>)}
    </ul> */}



      {/* <h2> {this.state.city}</h2> */}
     {/* <p> {this.state.greet()}</p> */}
     {/* <button onClick={this.state.addNumbers(10,20)}>Additions </button> */}

    {/* <button onClick={this.state.greet}>Greet</button> */}
    {/* <Employee project={this.projectName} teamsize={this.teamStrength}/>
    <Client appName={this.projectName} totalMembers={this.teamStrength} city={this.state.city}/> */}

                {/* <ul>
                    {this.state.friends.map((f)=>
                        <li> {f}</li>
                    )}
                </ul>

    <Friends favFriends={this.state.friends}></Friends> */}

    {/* <h2> {this.state.empDetails.firstName} {this.state.empDetails.lastName}</h2> */}

    <table border="1">
      {this.state.employeeList.map((e)=><tr>
        <td> {e.empNo}</td>
        <td> {e.empName}</td>
        <td> {e.empDesignation}</td>
        <td> {e.empSal}</td>
        <td> {e.empSal * 0.1}</td>
        <td> <button>Add</button></td>
        <td> <button>Edit</button></td>
        <td> <button>Delete</button></td>
      </tr>)}
    </table>
    </div>
  );
}
}

export default App;
