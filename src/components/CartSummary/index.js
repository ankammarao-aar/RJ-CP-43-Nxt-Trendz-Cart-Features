// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(element => {
        totalPrice += element.price * element.quantity
      })
      const totalItems = cartList.length

      return (
        <>
          <div className="cart-summary-container">
            <div className="cart-summary-card">
              <h1 className="cart-summary-heading">
                Order Total: <span className="total">Rs {totalPrice}/-</span>
              </h1>
              <p className="cart-summary-para">{totalItems} Items in cart</p>
              <button type="button" className="checkout">
                Checkout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
