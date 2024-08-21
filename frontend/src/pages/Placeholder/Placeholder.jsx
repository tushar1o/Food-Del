import React, { useContext } from 'react'
import './Placeholder.css'
import { StoreContext } from '../../component/context/StoreContext'



const Placeholder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (

    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">delivery Information </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="phone" placeholder='phone' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal  </p>
              <p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery fees</p>
              <p> ${getTotalCartAmount() == 0 ? 0 : 2}</p></div>
            <hr />
            <div className="cart-total-details"><p>Total</p>
              <p>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}</p></div>

          </div>
          <button >PROCEED TO payment </button>
        </div>
      </div></form>
  )
}

export default Placeholder
