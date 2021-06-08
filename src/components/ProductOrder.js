import { Component } from 'react';

class ProductOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      name: '',
      desc: '',
      price: '',

    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleOrder(this.state);
    this.setState({
      img: '',
      name: '',
      desc: '',
      price: '',
    })
  }

  render() {
    return (

        <button type="submit">Submit Youur order</button>

    );
  }
}

export default ProductOrder;
