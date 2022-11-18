import React from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'
import fakedata from '../../fakeData/products.json'
import './Products.css'

const Product = () => {
  const { productkey } = useParams()
  const product = fakedata.find((product) => product.id === productkey)

  return (
    <div className="SingleProduct">
      <h1>{product.name} Page</h1>
      <Products showAddToCart={false} product={product} />
    </div>
  )
}

export default Product
