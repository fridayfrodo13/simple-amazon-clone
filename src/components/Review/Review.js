import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getDatabaseCart } from '../../utilities/databaseManager'
import fakedata from '../../fakeData/products.json'
import './Review.css'
import ReviewCart from './ReviewCart'

const Review = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    // Cart
    const savedCart = getDatabaseCart()
    const productKey = Object.keys(savedCart)

    const cartProducts = productKey.map((key) => {
      const product = fakedata.find((product) => product.id === key)
      product.quantity = savedCart[key]
      return product
    })
    setCart(cartProducts)
  }, [])
  return (
    <div>
      <h3>Total Items : {cart.length}</h3>
      <h1> Review Cart: </h1>
      {cart.map((product) => (
        <ReviewCart key={product.id} product={product}></ReviewCart>
      ))}
    </div>
  )
}

export default Review
