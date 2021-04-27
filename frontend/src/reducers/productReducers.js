// fonction prenant en paramètres un state et une action, et renvoyant un nouveau state
const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_NEW_LIST_SUCCESS,
  PRODUCT_NEW_LIST_REQUEST,
  PRODUCT_NEW_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
} = require("../constants/productConstants");

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: // REQUETE CHARGEMENT
      return { loading: true };
    case PRODUCT_LIST_SUCCESS: // REQUETE FINI DONC CHARGEMENT: FALSE ON AFFICHE LE PAYLOAD
      return { loading: false, products: action.payload }; //Ajout dans le state products, la data de productAction.js
    case PRODUCT_LIST_FAIL: // CHARGEMENT FALSE ERREUR DU PAYLOAD
      return { loading: false, error: action.payload }; // on renvoie dans error, le message d'erreur
    default:
      return state;
  }
};

//CATEGORY
export const productCategoryListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST: // REQUETE CHARGEMENT
      return { loading: true };
    case PRODUCT_CATEGORY_LIST_SUCCESS: // REQUETE FINI DONC CHARGEMENT: FALSE ON AFFICHE LE PAYLOAD
      return { loading: false, categories: action.payload }; //Ajout dans le state products, la data de productAction.js
    case PRODUCT_CATEGORY_LIST_FAIL: // CHARGEMENT FALSE ERREUR DU PAYLOAD
      return { loading: false, error: action.payload }; // on renvoie dans error, le message d'erreur
    default:
      return state;
  }
};

// BY STEVE
export const productNewListReducer = (
  state = { loading: true, newProducts: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_NEW_LIST_REQUEST: // REQUETE CHARGEMENT
      return { loading: true };
    case PRODUCT_NEW_LIST_SUCCESS: // REQUETE FINI DONC CHARGEMENT: FALSE ON AFFICHE LE PAYLOAD
      return { loading: false, newProducts: action.payload }; //Ajout dans le state products, la data de productAction.js
    case PRODUCT_NEW_LIST_FAIL: // CHARGEMENT FALSE ERREUR DU PAYLOAD
      return { loading: false, error: action.payload }; // on renvoie dans error, le message d'erreur
    default:
      return state;
  }
};


export const productDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }; // Ajout de la data de productAction dans le state product
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
