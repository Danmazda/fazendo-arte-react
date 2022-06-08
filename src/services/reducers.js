import { cartActions } from "./actions";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD:
      const find = state.find((p) => p.product._id === action.id);
      find.quantity += 1;
      return [...state];
    case cartActions.ADDNEW:
      const product = action.products.find((p) => p._id === action.id);
      const productObject = { product, quantity: 1 };
      return [...state, productObject];
    case cartActions.REMOVE:
      const toRemove = state.find((p) => p.product._id === action.id);
      if(toRemove.quantity -1 >= 0){
        toRemove.quantity -= 1;
      }
      return [...state];
    case cartActions.REMOVEALL:
      const toDelete = state.findIndex((p) => p.product._id === action.id);
      state.splice(toDelete, 1);
      return [...state];
    default:
      return state;
  }
};
