import {useState} from 'react';
import Registration from './FunctionalComponent/Registration';
import Signup from './FunctionalComponent/Signup';
import  useFetch   from "./CustomHOOK/apiCallsHook";
import CommentsData from './CustomHOOK/customHookTest'

function App() {

    const [myCountry,setCountry] = useState('India');
    const [commentsFromJsonPlaceHolder] = useFetch('https://jsonplaceholder.typicode.com/comments');
    const [photosFromJsonPlaceHolder] = useFetch('https://jsonplaceholder.typicode.com/photos');

  return (
    <div>
      <Signup residence={myCountry}></Signup>
      <hr/>
      <Registration located={myCountry}></Registration>

    
      <CommentsData/>


    
    </div>
  );
}

export default App;
