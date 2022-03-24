import logo from './logo.svg';
import './App.css';
import MyNavigation from './Navigation/Navigation';
import Home from './Home/Home'
import About from './About/About';

function App() {
  return (
    <div className="App">
      <MyNavigation></MyNavigation>
      
      <Home></Home>
    </div>
  );
}

export default App;
