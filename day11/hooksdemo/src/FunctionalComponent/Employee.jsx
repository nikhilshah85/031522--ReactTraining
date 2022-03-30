import React,{useState} from 'react';

function Employee()
{

   const [empName,changeName] = useState("Nikhil");
   const[empDetails,changeDesignation] = useState({empNo:101,
                                                   empName:'Priya',
                                                empDesigantion:'HR',
                                                empSalary:5000});

    const changeEmpDesigination = ()=>{
            changeDesignation(oldValue =>{
                return{...oldValue,empDesigantion:'Senior Manageer'};
            })
    }


    return(<div>
        <h1> Welcome to Employee Component - Functional </h1>

        <button onClick={()=>changeName("Nikhil Shah")}> Change Name</button>
        <button onClick={()=>changeName("Nik Shah")}> Change Name</button>
        <button onClick={()=>changeName("Nikky Shah")}> Change Name</button>
        <button onClick={()=>changeName("NS")}> Change Name</button>
        <h1>{empName}</h1>

        <hr/>
        <h3> Employee Number : {empDetails.empNo} </h3>
        <h3> Employee Name : {empDetails.empName} </h3>
        <h3> Employee Designation : {empDetails.empDesigantion}</h3>
        <h3> Employee Salary :{empDetails.empSalary} </h3>
        <h3> Employee Bonus : {empDetails.empSalary * 0.2 }</h3>

        <button onClick={changeEmpDesigination}> Change Designation</button>

    </div>)
}

export default Employee;