import { Component } from 'react';

class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      selection: null,
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value});
  }


  render() {

    const listProducts = this.props.productList.map((product, index) =>(
    <div key={index}>
    <p>{product.name}</p>
    <img src={product.img}></img>
    <p>{product.desc}</p>
    <p>{product.price}</p>
    <input type="checkbox" onChange={() => this.props.toggleSelection(product.id)}/>
    <button type="button" onClick={() => this.selectProduct()}>Add To Order</button>
    </div>
    ));
    return (
      <div>
        <div>{listProducts}</div>
      </div>
    );
  }
}

export default ProductList
