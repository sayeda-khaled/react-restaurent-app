
import { Component } from 'react';
import './App.css';
import supremePizza from './images/supremePizza.jpeg';
import cheesePizza from './images/cheesePizza.jpeg';
import veggiePizza from './images/veggiePizza.jpeg';
import ProductList from './components/ProductList.js'
import ProductOrder from './components/ProductOrder.js'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    products: [],
  };
  this.toggleOrder = this.toggleOrder.bind(this);
  }

  componentDidMount() {
    const productData = [
     {
       img: supremePizza,
       name: 'Supreme Pizza',
       desc:
         'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$19.99'

     },
     {
       img: cheesePizza,
       name: 'Cheese Pizza',
       desc:
         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$16.99'
     },
     {
       img: veggiePizza,
       name: 'Veggie Pizza',
       desc:
         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
       price: '$14.99'
     }
   ];

    this.setState({ productData });
  }

  addOrder(newEntry){
    let productCopy=[...this.state.products];
    productCopy.push(newEntry);
    this.setState({
    productd: productCopy,
    });
  }


  toggleOrder(id) {
      const products = [...this.state.products];
      const index = products.findIndex(product => product.id === id);
      products[index].isComplete = !products[index].isComplete;
      this.setState({ products });
    }


  render() {

    return (
      <>
      <ProductOrder toggleOrder={this.toggleOrder} />
      <ProductList orders={this.state.products} />
      </>
    );
  }
}

export default App;
