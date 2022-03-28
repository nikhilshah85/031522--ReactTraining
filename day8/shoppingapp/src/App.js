// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import { Link } from 'react-router-dom';

// class App extends Component {



//   render(){
//     return(
//     <div>
//         <h1 className='appHeader'> Welcome to Shopping APP</h1>

//         <table>
//           <tr>
//             {/* <td> <Link to="/">Home </Link></td> */}
//             <td> <Link to="/productlist">Product List </Link></td>
//             <td> <Link to="/addproduct">Add Product </Link></td>
//             <td> <Link to="/searchproduct">Search Product </Link></td>
//             <td> <Link to="/deleteproduct">Delete product </Link></td>
//             <td> <Link to="/updateproduct">Update Procuct </Link></td>
//             <td> <Link to="/cart">Cart </Link></td>
//           </tr>
//         </table>
//     </div>
//     )};
// }

// export default App;


import React, { Component } from 'react';  
import axios from 'axios';
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "JavaTpoint",
                  data:[]};  

      this.changeState = this.changeState.bind(this)  
      this.getAlbumData = this.getAlbumData.bind(this);
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>   
             <button onClick={this.getAlbumData}>Album Data</button>       
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!') ;
      console.log('We are initiating your session, something like RazorPay');
      console.log('We are sending the email, appling lock on your account, so that it cannot be accessed from any other place');

   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!');
      console.log('start the process.....');
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  


      getAlbumData()
      {
         axios.get('https://jsonplaceholder.typicode.com/todos').then((albumData)=>{
            console.log(albumData);
            this.setState({data:albumData});
         })

      }




}  
export default App;  
