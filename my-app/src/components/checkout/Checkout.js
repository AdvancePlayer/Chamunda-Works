import './Checkout.css'

const Checkout = () => {
    return (
      <div className="checkout-main">
        <div className="checkout-layout">
          <div className="checkout-slider">
            {/* slider animation */}
          </div>
          <div className="checkout-delivey-details">
              <h3>Enter delevery address</h3>
              <hr />
              <form action="#">
                <label htmlFor="name">Name(Optional)</label>
                <input type="text" />
                <label htmlFor="address">Delevery Address</label>
                <input type="text" />
                <label htmlFor="number">Phone no.</label>
                <input type="number" />
                <label htmlFor="maddress">Landmark</label>
                <input type="text" />
                <label htmlFor="country">Country</label>
                <input type="text" />
                <label htmlFor="state">State</label>
                <input type="text" />
                <label htmlFor="city">City</label>
                <input type="text" />
                <label htmlFor="zip">Zip code</label>
                <input type="number" />
                <button type="submit">Continue to payment</button>
              </form>
          </div>
          <div className="checkout-payment">
              {/* payment details */}
              paymnet
          </div>
          <div className="checkout-summary">
            summary
          </div>
        </div>
      </div>

)}
export default Checkout;