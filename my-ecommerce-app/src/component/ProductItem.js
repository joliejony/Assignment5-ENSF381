import React, { useState } from 'react'; // Importing React and useState hook
import './styles.css'; // Importing CSS file for styling

// ProductItem component takes product and addToCart function as props
const ProductItem = ({ product, addToCart }) => {
    const [showDetails, setShowDetails] = useState(false); // State to track whether to show product details

    // Event handler for mouse enter
    const handleMouseEnter = () => {
        setShowDetails(true); // Set showDetails to true when mouse enters
    };

    // Event handler for mouse leave
    const handleMouseLeave = () => {
        setShowDetails(false); // Set showDetails to false when mouse leaves
    };

    // Event handler for adding product to cart
    const handleAddToCart = () => {
        addToCart(product); // Call addToCart function with the product as an argument
    };

    // Render the ProductItem component
    return (
        <div className="product-item">
            {/* Render product image */}
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
            {/* Render product name */}
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{product.name}</p>
            {/* Render product price */}
            <p>Price: ${product.price}</p>
            {/* Button to add product to cart */}
            <button onClick={handleAddToCart}>Add to Cart</button>
            {/* Render product description if showDetails is true */}
            {showDetails && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem; // Export the ProductItem component as the default export
