import React from 'react'
import './Cart.css'

const Cart = (props) => {
  const cart = props.item
  console.log(cart)
  const productTotal = cart.reduce(
    (productTotal, item) => productTotal + item.price,
    0
  )
  //   shipping charge
  let shippingCharge = 0
  if (productTotal > 0 && productTotal < 200) {
    shippingCharge = 4.99
  } else if (productTotal > 200 && productTotal < 2000) {
    shippingCharge = 2.99
  } else if (productTotal > 2000) {
    shippingCharge = productTotal * 0.02
  }
  // tax section
  const tax = productTotal * 0.03
  const total = (productTotal + shippingCharge + tax).toFixed(2)
  const discounts = (total * 0.1).toFixed(2)
  const payable = (total - discounts).toFixed(2)
  return (
    <div className="Cart">
      <h3>Cart Container</h3>
      <h5>productTotal Items : {cart.length}</h5>
      <h5>Product Price: ${productTotal}</h5>
      <h5>Shipping Charge: ${shippingCharge.toFixed(2)}</h5>
      <h5>TAX + VAT : ${tax.toFixed(2)}</h5>
      <hr />
      <h4>Total : ${total} </h4>
      <h5>Discounts: ${discounts}</h5>
      <h5>To Pay: ${payable}</h5>
    </div>
  )
}

export default Cart
