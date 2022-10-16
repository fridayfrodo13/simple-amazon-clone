import React, { useState } from 'react'
import './Shop.css'
import fakeData from '../../fakeData/products.json'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'

const Shop = () => {
  //   console.log(fakeData)
  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  const [cart, setCart] = useState([])
  const buttonClicker = (product) => {
    // console.log('Product Added', product)
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="Shop">
      <div className="ShopContainer">
        <ul>
          {products.map((products) => (
            <Products
              product={products}
              addProductHandler={buttonClicker}
            ></Products>
          ))}
        </ul>
      </div>
      <div className="CartContainer">
        <Cart item={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
