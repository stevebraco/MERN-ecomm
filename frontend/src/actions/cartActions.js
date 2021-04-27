import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants"

//Pour ajouter un article, il nous faut le bon id 
export const addToCart = (productId, qty) => async (dispatch, getState) => {
    //Middleware crée en backend pour avoir l'id
    const {data} = await Axios.get(`/api/products/${productId}`)  //Récupération des données depuis le backend
    dispatch({ 
        type: CART_ADD_ITEM, // Type AJOUT D'UN ARTILE
        payload: {           // LES DONNEES A AVOIR POUR AFFICHER L'ARTICLE
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            seller: data.seller,
            qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => ( dispatch, getState ) => { // supprime et met à jour le state
    dispatch({
        type: CART_REMOVE_ITEM,
        payload : productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {  //see cartReducers
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data})
}