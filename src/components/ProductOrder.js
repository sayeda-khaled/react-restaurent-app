import { Component } from 'react';

const defaultState = {
  name: '',
  phone: '',
  address: '',
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
