import { Component } from 'react';



class ProductOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      address: '',
      userOrder: this.props.orderList,
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.appendOrder = this.appendOrder.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // appendOrder = () => {
  //   this.setState({ userOrder: this.props.orderList });
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.props.newUser(this.state)
    // this.appendOrder().then(() => localStorage.setItem('order', JSON.stringify(this.state.userOrder)));
    // this.setState({ userOrder: this.props.orderList });
    // console.log(this.state.userOrder);
    // setTimeout(function(){
      // localStorage.setItem('order', JSON.stringify(this.state));
      // localStorage.setItem('order', JSON.stringify(this.state.userOrder));
    // },1000)



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Full name
          <input type="text" name="name" onChange={this.handleInput} value={this.state.name}/>
        </label>

        <label>
          Address
          <input type="text" name="address" onChange={this.handleInput} value={this.state.address}/>
        </label>

        <label>
          Phone number
          <input type="tel" name="phone" onChange={this.handleInput} value={this.state.phone} />
        </label>

        <button type="submit">Submit Order</button>
      </form>
    );
  }
}

export default ProductOrder;
