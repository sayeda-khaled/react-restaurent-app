import { Component } from 'react';
import "../App.css"

class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleClick(orderSelection) {
    this.props.addOrder(orderSelection);
  }

  render() {

    const listProducts = this.props.productList.map((product, index) =>(
    <div className = "products" key={index}>
        <p>{product.name}</p>
        <img src={product.img}></img>
        <p>{product.desc}</p>
        <p>{product.price}</p>
        <input type="checkbox" onChange={() => this.props.toggleSelection(product.id)}/>
        <div  onClick= {() => this.handleClick(product)}>Add To Order</div>
    </div>
    ));
    return (
      <div  className= "productList">
        <h1>Menu</h1>
        <div>{listProducts}</div>
      </div>
    );
  }
}

export default ProductList
