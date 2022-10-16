import './Products.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
  //   console.log(props)
  const { name, price, img, stock, seller, id } = props.product
  return (
    <div className="Products">
      <div className="ProductLeft">
        <img src={img} alt="" />
      </div>
      <div className="ProductRight">
        <h3>{name}</h3>
        <p> Product ID :{id}</p>
        <p>By {seller}</p>
        <p>Price ${price}</p>
        <p>Currently items in stock {stock}</p>
        <button onClick={props.addProductHandler}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  )
}

export default Products
