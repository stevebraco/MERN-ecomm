import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

// TOUTES LES ACTIONS DE CART
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: // AJOUT ARTICLE
      const item = action.payload; // données récupérer depuis cartActions
      console.log(state.cartItems);
      console.log("cartReducers,CARD_ADD_ITEM", item);
      const existItem = state.cartItems.find((x) => x.product === item.product); // item existe déja
      if (existItem) {
        // Si un item est déja dans la shopping cart
        // pour ne pas afficher l'article plusieurs fois lorsqu'on clique sur l'article
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM: // SUPPRIMER ARTICLE
      console.log("CART_REMOVE_ITEM");
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload), // suppression de l'article
      };
    case CART_SAVE_SHIPPING_ADDRESS: // Enregister les données adresses
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:  
      return { ...state, paymentMethod: action.payload };
    case CART_EMPTY:
    return { ...state, cartItems: []}
    default:
      return state;
  }
};
