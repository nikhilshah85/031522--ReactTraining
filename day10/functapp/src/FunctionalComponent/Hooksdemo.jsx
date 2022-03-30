import React,{useState} from 'react';
function HookDemo(){
    const [color,changeColor] = useState('Red');
    const [emp,changeDesignation] = useState({
        empNo:101,
        empName:'Nik',
        empDesignation:'Consultant',
        empSal:2000
    })
    const updateColor = ()=>{
        changeDesignation(p=>{
            return{...p,empDesignation:'Trainer'};
        })
    }


    return(<div>
        <h1> Welcome to Demo on Hooks</h1>
        <p> My Fav Color is {color}</p>

        <button onClick={()=>changeColor('Blue')}>Blue</button>
        <button onClick={()=>changeColor('Green')}>Green</button>
        <button onClick={()=>changeColor('Orange')}>Orange</button>
        <button onClick={()=>changeColor('Pink')}>Pink</button>
        {emp.empDesignation}
        <button onClick={updateColor}>Update</button>
    </div>)
}

export default HookDemo;