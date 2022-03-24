import { Component} from 'react'

class Products extends Component
{

    pList = [
        {pId:101, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:102, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:103, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:104, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:105, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:106, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:107, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:108, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:109, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},
        {pId:110, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:300},

    ]


    render(){
        return(<div>
            <h1> Product list Component </h1>

            <table>
                {this.pList.map( (p) => <tr>
                    <td> {p.pId }</td>
                    <td> {p.pName }</td>
                    <td> {p.pCategory }</td>
                    <td> {p.pPrice }</td>
                </tr>)}
            </table>
        </div>)
    }
}

export default Products;