import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../component/context/StoreContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='cart'>

      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>items</p>
          <p> tittle</p>
          <p> Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>REmove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-tittle  cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }

        })}


      </div>
      <div className="cart-bottom">
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
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT </button>
        </div>
        <div className="cart-promocode">
          <div >
            <p> if you have any promocode  enter here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}


export default Cart
