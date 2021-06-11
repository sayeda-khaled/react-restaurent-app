import { Component } from 'react';

const defalutState = {
  name: '',
  PhoneNumber: '',
  Address: '',

}

class ProductOrder extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addOrder(this.state);
    this.setState({defaultState});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Full name
          <input type="text" name="fullName" onChange={this.habdleInput} value={this.state.name}/>
        </label>

        <label>
          Address
          <input type="text" name="address" onChange{this.handleChange} value={this.state.address}/>
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" onChange={this.handleChange} value={this.state.phoneNumber} />
        </label>

        <button type="submit">Add Order</button>
      </form>
    );
  }
}

export default ProductOrder;
