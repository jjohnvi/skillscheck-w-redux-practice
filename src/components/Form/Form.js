import React, { Component } from "react";
import axios from "axios";
import store, {
  UPDATE_NAME,
  UPDATE_PRICE,
  UPDATE_IMAGE,
  RESET_FIELDS
} from "../../redux/store";

class Form extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      price: reduxState.price,
      imageurl: reduxState.imageurl
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        price: reduxState.price,
        imageurl: reduxState.imageurl
      });
    });
  }

  handleName = e => {
    // this.setState({ name: e.target.value });
    store.dispatch({
      type: UPDATE_NAME,
      payload: e.target.value
    });
  };

  handlePrice = e => {
    // this.setState({ price: e.target.value });
    store.dispatch({
      type: UPDATE_PRICE,
      payload: e.target.value
    });
  };

  handleImageurl = e => {
    // this.setState({ imageurl: e.target.value });
    store.dispatch({
      type: UPDATE_IMAGE,
      payload: e.target.value
    });
  };

  handleAdd = () => {
    const reduxState = store.getState();
    axios
      .post("/api/inventory", {
        name: reduxState.name,
        price: reduxState.price,
        image_url: reduxState.imageurl
      })
      .then(
        store.dispatch({
          type: RESET_FIELDS
        }),
        this.props.history.push("/")
      );
    // this.props.getInventory();
  };

  render() {
    const reduxState = store.getState();
    console.log(reduxState);
    return (
      <div>
        <h3>
          Name:
          <input
            type="text"
            onChange={this.handleName}
            value={reduxState.name}
          />
        </h3>
        <h3>
          Price:
          <input
            type="text"
            onChange={this.handlePrice}
            value={reduxState.price}
          />
        </h3>
        <h3>
          Image URL:
          <input
            type="text"
            onChange={this.handleImageurl}
            value={reduxState.imageurl}
          />
        </h3>
        <button onClick={this.handleAdd}>Add Product</button>
      </div>
    );
  }
}

export default Form;
