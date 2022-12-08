import React from 'react'
import './Review.css'

const ReviewCart = (props) => {
  const { name, quantity, img } = props.product
  return (
    <div className="review">
      <div className="left">
        <img src={img} />
      </div>
      <div className="right">
        <h2>{name}</h2>
        <h3>{quantity}</h3>
        <button>Remove Item</button>
      </div>
    </div>
  )
}

export default ReviewCart
