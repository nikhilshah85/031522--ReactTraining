import logo from './logo.svg';
import './App.css';
import { Component} from 'react';
import Technology from './technology/technology';
import Product from './technology/Products/products';

class App extends Component {
 

  constructor(props)
  {
    super(props);
    this.state = {
      appName: "State Demonstration in React",
      presenter:'Nikhil Shah' ,
      techList : ['React','WebAPI','REST'],
      productList:[
        {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:20, pIsInStock:true},
        {pId:102, pName:'Maggie',pCategory:'Fast-Food',pPrice:20, pIsInStock:true},
        {pId:103, pName:'Pasta',pCategory:'Fast-Food',pPrice:20, pIsInStock:false},
        {pId:104, pName:'Dosai',pCategory:'Fast-Food',pPrice:20, pIsInStock:true},
        {pId:105, pName:'Pears',pCategory:'Soap',pPrice:20, pIsInStock:false},
      ]
    }

    this.changePresenter = this.changePresenter.bind(this); //this will react, that changepresenter is a part of this state
    this.addTechnology = this.addTechnology.bind(this);
  }

  changePresenter()
  {
    console.log('Hello from Presenter');
    this.setState({presenter:'Arun G',appName:'This is a simple example on changeing the state value'});
  }

  addTechnology()
  {
   var currentTechList = this.state.techList;
   var newT = document.getElementById('txtNewTech').value; //not a good practise, 
                                                          //as React virtual DOM has to go out to another (browser dom)
                                                          //get the value and come back
                                                          //this can be avoided by using Ref (this is ReactHook)
    currentTechList.push(newT);
    this.setState({techList:currentTechList});
  }

 

  render()
  {
  
    return(<div>
      {/* <h1> {this.state.appName } </h1>
      <button onClick={this.changePresenter}> Check </button>

      <h1> Presenter : {this.state.presenter }</h1> */}

      {/* <h4> Tech list : </h4> */}


      {/* <input type="text" placeholder='Enter the new technology Name' id="txtNewTech"/>
      <button onClick={this.addTechnology}>Add Tech</button>
      <ul>
        {this.state.techList.map( (t)=> <li> {t} </li>)}
      </ul> */}

      <hr/>
      {/* <Technology presenter={this.state.presenter}></Technology> */}

      <Product pList={this.state.productList}></Product>

    </div>)
  }



}

export default App;
