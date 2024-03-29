import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';


const INITIAL_STATE = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};


// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
    // Your comment here
    //   updating the products state with whatever
    //   we are getting from the action
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
    // Your comment here
    case UPDATE_CART_QUANTITY:
      // sets cartOpen to true to display the cart
      return {
        ...state,
        cartOpen: true,
        // going through each product and for each product,
        // we are setting its quantity to whatever action.purchaseQuantity is
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
    // Your comment here
    case REMOVE_FROM_CART:
      // Creating a brand new array by removing all the items that match whatever action._id is
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        // if there are no more items in the cart, we are setting cartOpen to false
        cartOpen: newState.length > 0,
        // update the cart with the new filtered array
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // TODO: Add a comment describing what the default case is for
    // Your comment here
    //   in case we dont have a matching action type
    //   we return the current state by default in order to not lose any previous state at all
    default:
      return state;
  }
};
