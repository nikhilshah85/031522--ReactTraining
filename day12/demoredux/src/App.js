import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,double} from './actions/index'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  
  return (
    <div>

<button onClick={()=>dispatch(increment())}> +  </button>
<button onClick={() => dispatch(decrement())}> -  </button>

<button onClick={() => dispatch(double(2))}> Double  </button>
<button onClick={() => dispatch(double(4))}> Four  </button>
<button onClick={() => dispatch(double(6))}> Six  </button>
<button onClick={() => dispatch(double(8))}> Eight  </button>
<button onClick={() => dispatch(double(10))}> Ten  </button>
      <h1> Counter : {counter} </h1>
      <h1> Redux App </h1>
    </div>
  );
}

export default App;
