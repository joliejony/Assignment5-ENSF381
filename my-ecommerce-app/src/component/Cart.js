import React from 'react'; // Importing React library
import CartItem from './CartItem'; // Importing CartItem component
import './styles.css'; // Importing CSS file for styling

// Cart component renders the shopping cart with items
const Cart = ({ cart, removeFromCart }) => {
    // Calculate the total price of all items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    // Render the Cart component
    return (
        <div className="cart"> {/* Cart container */}
            <h2>Shopping Cart</h2> {/* Heading for the cart */}
            {/* Map through cart items and render CartItem component for each item */}
            {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} /> 
            ))}
            <p>Total (in cart): ${totalPrice}</p> {/* Display total price of items in the cart */}
        </div>
    );
};

export default Cart; // Export the Cart component as the default export
