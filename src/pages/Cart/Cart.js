/* eslint-disable jsx-a11y/alt-text */
import "./Cart.css";
const Cart = ({ handeldelete, cart }) => {
  // const carting = cart.map(({ id, image, price, category }) => (
  //   <div className="cart-content" key={id}>
  //     <img src={image} />
  //     <h3>price: {price}</h3>
  //     <h3>{category}</h3>
  //     <button onClick={() => handeldelete({ id })} className="delete">
  //       Delete
  //     </button>
  //   </div>
  // ));
  return (
    <div className="cart">
      {cart.length > 0 ? (
        cart.map(({ id, image, price, category }) => (
          <div className="cart-content" key={id}>
            <div className="cart-datales">
              <img src={image} />
              <h3>price: {price}</h3>
              <h3>{category}</h3>
              <button onClick={() => handeldelete({ id })} className="delete">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="nothing">You are not add any thing</h1>
      )}
    </div>
  );
};

export default Cart;
