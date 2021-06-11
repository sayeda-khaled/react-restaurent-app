import { Component } from 'react';

class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      selection: null,
    }
  }

  render() {

    const listOrders = this.props.orders.map((product, index) =>(
    <div key={index}>
    <p>{product.name}</p>
    <img src={product.img}></img>
    <p>{product.desc}</p>
    <p>{product.price}</p>
    </div>
    ));
    return (
      <div>
        <div>{listOrders}</div>
      </div>
    );
  }
}

export default ProductList
