import { ADD_TO_CART } from "../constant";

/* eslint-disable default-case */
const initialState = {
  cartData: [],
};

export default function cartItems( state= [], action) {
  switch (action.type) {
    case ADD_TO_CART:

    // console.log("reducer",action)
      return [
        ...state,
       { cartData: action.data,}
      ];
      default:
        return state
  }
}
