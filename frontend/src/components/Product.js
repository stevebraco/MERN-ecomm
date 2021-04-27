import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
    return (
        <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
            <figure>
              <img className="medium" src={product.image} alt={product.name} />
              </figure>
            </Link>
            <div className="card-body">
              <Link to={`/product/${product._id}`}>
                <h2 className='heading-product' >{product.name}</h2>
              </Link>
              <div className="price">${product.price}</div>
              <Rating 
              rating={product.rating}
               numReviews={product.numReviews}> 
               </Rating>
            </div>
          </div>
    )
}
