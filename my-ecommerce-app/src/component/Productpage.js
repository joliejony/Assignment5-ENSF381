import React, { useEffect, useState } from 'react';
import Header from './Header'; // Importing Header component
import ProductList from './ProductList'; // Importing ProductList component
import Cart from './Cart'; // Importing Cart component
import Footer from './Footer'; // Importing Footer component
import './styles.css'; // Importing CSS file for styling

const Productpage = () => {
    // State to manage the cart items
    const [cart, setCart] = useState(() => {
        // Initialize cart from localStorage if available, otherwise set it as an empty array
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // useEffect hook to update localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            // If item already exists in cart, update its quantity
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
        } else {
            // If item is new, add it to cart with quantity 1
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = (product) => {
        const updatedCart = cart.map(item => item.id === product.id ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    // Render the Productpage component
    return (
        <div className="product-page">
            <Header /> {/* Render the Header component */}
            <table>
                <tr>
                    <td><ProductList addToCart={addToCart} /></td> {/* Render the ProductList component and pass addToCart function as prop */}
                    <td style={{verticalAlign: 'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td> {/* Render the Cart component and pass cart and removeFromCart function as props */}
                </tr>
            </table>
            <Footer /> {/* Render the Footer component */}
        </div>
    );
};

export default Productpage; // Export the Productpage component as the default export
