import logo from './logo.svg';
import './App.css';
import Greet from './FunctionalComponent/Greet'
import DemoStateHook from './FunctionalComponent/useStateHookDemo';
import Counter from './FunctionalComponent/Counter';
import {useState} from 'react';
import HookDemo from './FunctionalComponent/Hooksdemo';
function App() {

  const [appName,changeAppName] = useState('This is a training APP');
  return (
    <div>
       {/* <Greet/>  
        <DemoStateHook/>   */}
        {/* <Counter applicationName={appName}></Counter> */}
        <HookDemo></HookDemo>
    </div>
  );
}

export default App;
