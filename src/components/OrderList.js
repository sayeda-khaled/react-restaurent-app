import { Component } from 'react';
import "../App.css"

class OrderList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value});
  }


  handleClick(removedSelection) {
    this.props.removeOrder(removedSelection);
    }




  render() {

    const listProducts = this.props.orderList.map((product, index) =>(
    <div className = "orders" key={index}>
        <p>{product.name}</p>
        <img src={product.img}></img>
        <p>{product.desc}</p>
        <p>{product.price}</p>
        <div  onClick= {() => this.handleClick(product)}>X</div>
    </div>
    ));

    // console.log(this.props.orderList.reduce((total, order) => (order.price.replace(/\$/g,'')), 0))
    this.state.total += this.props.orderList.reduce((total, order) => (parseFloat(order.price.replace(/\$/g,''))), 0)
    return (
      <div className="orderList">
        <h1>Order</h1>
        <h1>total Price: {this.state.total}</h1>
        <div>{listProducts}</div>

      </div>
    );
  }
}

export default OrderList
