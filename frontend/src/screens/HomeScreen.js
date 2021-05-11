import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, newListProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import Intro from "../components/Intro";

export default function HomeScreen() {
  const dispatch = useDispatch();
  // PRODUCT LIST
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // LAST PRODUCTS ARRIVALS
  const productNewList = useSelector((state) => state.productNewList);
  const {
    loading: loadingProductNewList,
    error: errorProductNewList,
    newProducts,
  } = productNewList;
  console.log(productNewList);
  useEffect(() => {
    //on appelle le créateur d'action pour créer une action, que l'on dispatch
    dispatch(newListProducts()); // BY STEVE
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <div>
      {/* STEVE */}
      <div className="home ">
        <h1 className="heading-one">LIBERTE COLLECTION</h1>
        <a href='#boutique' to="#boutique" className="link">
          LA BOUTIQUE
        </a>
      </div>
      <div>
        <div className="category-container">
          <div className="category">
            <img className='category-img'   src="./images/rings.jpg" alt="" srcset="" />
            <Link to='/search/category/Rings' className='absolute txt-center txt-cat'>RINGS</Link>
          </div>
          <div className="category">
            <img className='category-img'  src="./images/pendant.jpg" alt="" srcset="" />
            <Link to='/search/category/Pendant' className='absolute txt-center txt-cat '>PENDANT</Link>
          </div>
          <div className="category">
            <img className='category-img' src="./images/earrings.jpg" alt="" srcset=""/>
            <Link to='/search/category/Earrings' className='absolute txt-center txt-cat'>EARRINGS</Link>
          </div>
        </div>
      </div>
      <div className="section container txt-center">
        <div className="wrapper">
          <h2 className="heading-two"> Made with love </h2>

          <div className="wrapper-video">
            <video
              src="./video/production.mp4"
              loading="lazy"
              width="800"
              height="500"
              autostart
              autoPlay
              loop
              type="video/mp4"
            />
          </div>
          <p>
            Jewelery can be made from a wide variety of materials. Precious
            stones, amber and coral, precious stones such as precious metals,
            bead and shells, and similar meterials are but the love in the work
            important.
          </p>
        </div>
      </div>
      <div>
        <h2 className="txt-center">LASTEST ARRIVALS</h2>
        {loadingProductNewList ? (
          <LoadingBox></LoadingBox>
        ) : errorProductNewList ? (
          <MessageBox> {error} </MessageBox>
        ) : (
          <div className="row center">
            {newProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
       
        {/* STEVE */}
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox> {error} </MessageBox>
      ) : (
        <div>
                  <h2 className="txt-center" id='boutique'>LA BOUTIQUE</h2>
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        </div>
        
      )}
    </div>
  );
}
