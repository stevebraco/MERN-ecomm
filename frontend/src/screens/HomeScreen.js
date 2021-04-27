import React, { useEffect } from 'react'
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, newListProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

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
  <hr/>
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
