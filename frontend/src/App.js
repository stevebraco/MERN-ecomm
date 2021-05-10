import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { listProductsCategories } from "./actions/productActions";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import PrivateRoute from "./components/PrivateRoute";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./components/SearchScreen";
import SellerRoute from "./components/SellerRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(listProductsCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <header className="row">
        <div>
        <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
          <Link to="/" className="brand" href="index.html">
            <img
              src="https://fontmeme.com/permalink/210419/4d81f544b9745b9c130ab6e42850dd63.png"
              alt="emily-in-paris-font"
            />
          </Link>
        </div>
        <div>
          <Route
            render={({ history }) => <SearchBox history={history}></SearchBox>}
          ></Route>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge"> {cartItems.length} </span>
            )}
          </Link>
          {userInfo ? ( // Si l'utilisateur est connecté
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/orderhistory">Order History</Link>
                </li>
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isSeller && (
            <div className="dropdown">
              <Link to="#admin">
                {" "}
                Seller <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/productlist/seller">Products</Link>
                </li>
                <li>
                  <Link to="/orderlist/seller">Orders</Link>
                </li>
              </ul>
            </div>
          )}
          {/* Lorsque l'user est connecté et que admin est vrai */}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <Link to="#admin">
                {" "}
                Admin <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/productlist">Products</Link>
                </li>
                <li>
                  <Link to="/orderlist">Orders</Link>
                </li>
                <li>
                  <Link to="/userlist">Users</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
        </ul>
      </aside>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route
          path="/product/:id/edit"
          component={ProductEditScreen}
          exact
        ></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <Route
          path="/search/name/:name?"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name"
          component={SearchScreen}
          exact
        ></Route>
      <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order"
            component={SearchScreen}
            exact
          ></Route>
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        {/* //ADMIN ROUTE */}
        <AdminRoute
          path="/productlist"
          component={ProductListScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/orderlist"
          component={OrderListScreen}
          exact
        ></AdminRoute>
        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
          path="/user/:id/edit"
          component={UserEditScreen}
        ></AdminRoute>
        <SellerRoute
          path="/productlist/seller"
          component={ProductListScreen}
        ></SellerRoute>
        <SellerRoute
          path="/orderlist/seller"
          component={OrderListScreen}
        ></SellerRoute>
        {/* MAIN ROUTE */}
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </BrowserRouter>
  );
}

export default App;
