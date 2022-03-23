
import {Component} from 'react';
import User from './UserComponent/User';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      commentsData:[],
      userData:[],
      photos:[]
    }

    this.getCommentsData = this.getCommentsData.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }


  getCommentsData()
  {

    fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
                                                          .then( resultData => {
                                                            console.log("We got the data successfully")
                                                            // console.log(resultData);
                                                            // this.commentsData = resultData;
                                                            // console.log(this.commentsData);
                                                            this.setState({commentsData:resultData});
                                                            console.log(this.state.commentsData);
                                                            
                                                          })
                                                          .catch(err => console.log(err))
                                                          .finally(alert('Completed the call'))

  }

  getPhotos()
  {
    fetch('https://jsonplaceholder.typicode.com/photos').then( response => response.json())
                                                        .then(data => {
                                                          this.setState({photos:data})
                                                          console.log(this.state.photos);
                                                        })
                                                        .finally('Thank you for get the photos')
  }

  getUserDetails()
  {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
                                                          .then( data => 
                                                            {
                                                               this.setState({userData:data});
                                                              //  console.log(this.state.userData);
                                                            })
                                                          .catch(err => console.log(err))
                                                          .finally(console.log('call completed'));
  }



  render(){
  return (
    <div>
      <h1> Welcome to Rest API Service</h1>
      <button onClick={this.getCommentsData}> Show Comments </button>
      <button onClick={this.getUserDetails}>Get Users</button>
      <button onClick={this.getPhotos}> Get Photos</button>
      <User userDetails={this.state.userData}></User>
      <table>
        {this.state.commentsData.map( (d)=>
        <tr>
          <td>{d.postId }</td>
          <td>{d.id }</td>
          <td>{d.name }</td>
          <td>{d.email }</td>
          <td>{d.body }</td>
        </tr>
        
        
        )}
      </table>

          {this.state.photos.map( p => <div>
            <h3> Album ID : {p.albumId } ({p.id}) </h3>
            <h3> Title : {p.title } </h3>
            <img src={p.thumbnailUrl}/>
            <hr/>

          </div>
            
            
            )}
    </div>
  );
  }
}

export default App;
