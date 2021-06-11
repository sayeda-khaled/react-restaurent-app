
import { Component } from 'react';
import './App.css';
import supremePizza from './images/supremePizza.jpeg';
import cheesePizza from './images/cheesePizza.jpeg';
import veggiePizza from './images/veggiePizza.jpeg';
import ProductList from './components/ProductList.js'
import ProductOrder from './components/ProductOrder.js'

// {
//   this.state.selection &&
//   <aside>
//     <h2>{this.state.selection?.title}</h2> {/*display the title for the selected blog*/}
//     <p>{this.state.selection?.body}</p> {/*display the body for the selected blog*/}
//     <button onClick={() => this.setState({selection: null})}>Close</button> {/*reset the selection to null upon clicking on the button*/}
//   </aside>
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    products: [],

  };
  this.selectProduct = this.selectProduct.bind(this);
  this.toggleSelection = this.toggleSelection.bind(this);
  this.addOrder = this.addOrder.bind(this);
  }

  componentDidMount() {
    const products = [
     {
       id: 1,
       img: supremePizza,
       name: 'Supreme Pizza',
       desc:
         'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$19.99',
       selected: false

     },
     {
       id: 2,
       img: cheesePizza,
       name: 'Cheese Pizza',
       desc:
         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$16.99',
       selected: false
     },
     {
       id: 3,
       img: veggiePizza,
       name: 'Veggie Pizza',
       desc:
         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$14.99',
       selected: false
     }
   ];

    this.setState({ products });
  }

  selectProduct(event) {
  console.dir(event.target)
  const index = Number(event.currentTarget.dataset.index);
  // const index = +event.currentTarget.dataset.index
  console.log(index);
  this.setState({ selection: this.state.products[index] });
}

  addOrder(newEntry){
    let productCopy=[...this.state.products];
    productCopy.push(newEntry);
    this.setState({
    products: productCopy,
    });
  }


  toggleSelection(id) {
      const products = [...this.state.products];
      const index = products.findIndex(product => product.id === id);
      products[index].selected = !products[index].selected;
      this.setState({ products });
    }


  render() {


    return (
      <>


      <ProductOrder addOrder={this.addOrder} />
      <ProductList selectProduct={this.state.selectProduct} productList={this.state.products} toggleSelection={this.toggleSelection} />
      </>
    );
  }
}

export default App;
