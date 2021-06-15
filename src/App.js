
import { Component } from 'react';
import './App.css';
import supremePizza from './images/supremePizza.jpeg';
import cheesePizza from './images/cheesePizza.jpeg';
import veggiePizza from './images/veggiePizza.jpeg';
import ProductList from './components/ProductList.js'
import ProductOrder from './components/ProductOrder.js'
import OrderList from './components/OrderList.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    products: [],
    orderList: [],
    user: [],

  };
  this.selectProduct = this.selectProduct.bind(this);
  this.toggleSelection = this.toggleSelection.bind(this);
  this.addOrder = this.addOrder.bind(this);
  this.removeOrder = this.removeOrder.bind(this);
  this.newUser = this.newUser.bind(this);
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
         ' Marinara sauce, Cheese, roma tomatoes, olives, and pesto',
       price: '$16.99',
       selected: false
     },
     {
       id: 3,
       img: veggiePizza,
       name: 'Veggie Pizza',
       desc:
         ' Marinara sauce, basil, mushrooms, roma tomatoes, olives, and pesto',
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
    let orderCopy=[...this.state.orderList];
    console.log(newEntry)
    orderCopy.push(newEntry);
    this.setState({
    orderList: orderCopy,
    });
  }

  removeOrder(removedEntry){
    let orderCopy=[...this.state.orderList];
    // console.log(removedEntry.id)
    const index = orderCopy.indexOf(removedEntry);
    // console.log(removedEntry)
    orderCopy.splice(index,1);
    this.setState({
    orderList: orderCopy,
    });
  }


  newUser(newUser){
    this.state.user.push(newUser);
    this.setState({
    user: newUser,
    });

    localStorage.setItem('order', JSON.stringify(this.state));
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
      <ProductOrder newUser = {this.newUser} orderList={this.state.orderList}/>
      <section className="main">
        <ProductList addOrder={this.addOrder} selectProduct={this.state.selectProduct} productList={this.state.products} toggleSelection={this.toggleSelection} price={this.state.price}/>
        <OrderList removeOrder={this.removeOrder} orderList={this.state.orderList}/>
      </section>
      </>
    );
  }
}

export default App;
