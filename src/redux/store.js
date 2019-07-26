import { createStore } from "redux";

const initialState = {
  name: "",
  price: 0,
  imageurl: "",
  inventory: []
};

export const UPDATE_INVENTORY = "UPDATE_INVENTORY";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const RESET_FIELDS = "RESET_FIELDS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_PRICE:
      return { ...state, price: payload };
    case UPDATE_IMAGE:
      return { ...state, imageurl: payload };
    case RESET_FIELDS:
      return { ...state, name: "", price: 0, imageurl: "" };
    case UPDATE_INVENTORY:
      return { ...state, inventory: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
