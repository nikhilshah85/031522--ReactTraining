import React, {useState,useEffect} from 'react';
import {  } from 'react/cjs/react.development';


const Counter=()=>{

        const [myCounter,incrementCounter] = useState(0);

      
            useEffect(()=>{
                incrementCounter( c => c + 1);
            })

            return(<div>
                <h2> Counter :  {myCounter}</h2>
                <h2> {this.props.applicationName}</h2>
            </div>)

}

export default Counter;