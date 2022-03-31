import React,{useRef} from 'react';



function Signup()
{

        const firstName = useRef();
        const lastName = useRef();
        const designation = useRef();
        const age = useRef();


      function  collectValues()
        {
            //we will collect the value and may be pass it to the rest service
           var fName= firstName.current.value;
           var lName = lastName.current.value;
           var eDesignation = designation.current.value;
           var eAge = age.current.value;

            console.log(' We collect ');
            console.log(fName + ' ' + lName + ' ' + eDesignation + ' ' + eAge);
        }




    return(<div>
        Sign Up Now !! <br/>

        <input type="text" placeholder='Enter first name' ref={firstName}/><br/>
        <input type="text" placeholder='Enter Last name' ref={lastName}/><br/>
        <input type="text" placeholder='Enter Designation' ref={designation}/><br/>
        <input type="numer" placeholder='Enter first name' ref={age}/><br/>
        <button onClick={collectValues}> Collect </button>
    </div>)
}

export default Signup;