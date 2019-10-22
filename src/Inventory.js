import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import axios from "axios";
import store, { UPDATE_INVENTORY } from "./redux/store";

class Inventory extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      inventory: reduxState.inventory
    };
  }

  componentDidMount() {
    this.getInventory();
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        inventory: reduxState.inventory
      });
    });
  }

  getInventory = () => {
    axios
      .get("/api/inventory")
      .then(res =>
        store.dispatch({
          type: UPDATE_INVENTORY,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    // const reduxState = store.getState();
    axios.delete(`/api/inventory/${id}`).then(res => {
      store.dispatch({
        type: UPDATE_INVENTORY,
        payload: res.data
      });
    });
  };

  handleEdit = id => {
    axios.put(`/api/inventory/${id}`).then(res => {
      store.dispatch({
        type: UPDATE_INVENTORY,
        payload: res.data
      });
    });
  };

  render() {
    const inventoryDisplay = this.state.inventory.map((val, index) => {
      return (
        <>
          <p>{val.name}</p>
          <p>${val.price}</p>
          <img src={val.image_url} alt="Oops" />
          <button
            onClick={() => {
              this.handleDelete(val.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.handleEdit(val.id);
            }}
          >
            Edit
          </button>
        </>
      );
    });
    console.log(this.state.inventory);
    return (
      <div className="App">
        <nav className="nav">{inventoryDisplay}</nav>
      </div>
    );
  }
}

export default Inventory;
