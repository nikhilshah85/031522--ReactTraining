import { Component} from 'react'
import { Link} from 'react-router-dom';
class MyNavigation extends Component
{
    render(){
        return(
            <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li> <Link to="/product">Products</Link> </li>        
                    <li> <Link to="/news">News</Link></li>       

                </ul>
            </nav>
            </div>
        )
    }
}

export default MyNavigation;