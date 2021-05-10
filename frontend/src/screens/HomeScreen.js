import React, { useEffect } from 'react'
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, newListProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import Intro from '../components/Intro';

export default function HomeScreen() {
  const dispatch = useDispatch(); 
  // PRODUCT LIST
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // LAST PRODUCTS ARRIVALS
  const productNewList = useSelector(state => state.productNewList);
  const {loading: loadingProductNewList, error: errorProductNewList, newProducts} = productNewList
  console.log(productNewList);
  useEffect( () => {
    //on appelle le créateur d'action pour créer une action, que l'on dispatch
    dispatch(newListProducts()) // BY STEVE
    dispatch(listProducts({}));
  }, [dispatch] );


    return (
        <div>
          <div className='home '>
            <h1 className='heading-one'>LIBERTE COLLECTION</h1>
            <Link to='/' className='link' >
            LA BOUTIQUE
            </Link>
          </div>
          {/* STEVE */}
          <div className='section container txt-center'>
            <div className="wrapper">
            <h2 className='heading-two'> Made with love </h2>
           
            <div className='wrapper-video'>
            <video src="./video/production.mp4" loading='lazy'  width="800" height="500"  autostart autoPlay loop type="video/mp4"/>
            </div>
            <p>Jewelery can be made from a wide variety of materials. Precious stones, amber and coral, precious stones such as precious metals, bead and shells, and similar meterials are but the love in the work important.</p>
          </div>
          </div>
          <div>
            <h2 className='txt-center'>LASTEST ARRIVALS</h2>
            {loadingProductNewList ? (
            <LoadingBox></LoadingBox>
          ) : errorProductNewList ? (
            <MessageBox> {error} </MessageBox>
          ) : (
            <div className="row center">
          {
              newProducts.map( (product) => (
              <Product key={product._id}  product={product} />
            ))
          }
           </div>
          )          
        }  
        <div className=''>
          <div className='bijoux-text'>
          <img src="./bijoux.jpeg" alt="" srcset="" />
          <h1 className='heading-one absolute'>LIBERTE COLLECTION</h1>
          </div>


        </div>
          {/* STEVE */}

          </div>
         
           {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox> {error} </MessageBox>
          ) : (
            <div className="row center">
          {
              products.map( (product) => (
              <Product key={product._id}  product={product} />
            ))
          }
           </div>
          )          
        } 
      </div>
    )
}
