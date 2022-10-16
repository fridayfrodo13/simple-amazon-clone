import React, { useState } from 'react'
import './Shop.css'
import fakeData from '../../fakeData/products.json'
import Products from '../Products/Products'

const Shop = () => {
  //   console.log(fakeData)
  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  const buttonClicker = () => {
    console.log('Product Added')
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
      <div className="CartContainer"></div>
    </div>
  )
}

export default Shop
