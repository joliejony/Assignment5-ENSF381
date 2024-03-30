import React from 'react'; // Importing React library
import './styles.css'; // Importing CSS file for styling

// CartItem component renders a single item in the cart
const CartItem = ({ item, removeFromCart }) => {
    const total = item.quantity * item.price; // Calculate total price for the item

    // Function to remove the item from the cart
    const removeItem = () => {
        if (item.quantity === 1) {
            removeFromCart(item); // Remove the item if quantity is 1
        } else {
            removeFromCart({ ...item, quantity: item.quantity - 1 }); // Decrease quantity by 1 if quantity is greater than 1
        }
    };

    // Render the CartItem component
    return (
        <div className="cart-item"> {/* Cart item container */}
            {/* Display item image */}
            <img src={item.image} alt={item.name} style={{ width: '250px', height: '250px' }} />
            <div>
                {/* Display item details */}
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${total}</p>
                {/* Button to remove the item */}
                <button onClick={removeItem}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem; // Export the CartItem component as the default export
