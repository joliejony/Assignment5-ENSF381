import React from 'react';
import ProductItem from './ProductItem'; // Importing ProductItem component
import productsData from '../data/products'; // Importing products data

// ProductList component takes addToCart function as a prop
const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {/* Mapping through productsData array to render ProductItem for each product */}
            {productsData.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} /> // Render ProductItem component for each product and pass product and addToCart function as props
            ))}
        </div>
    );
};

export default ProductList; // Export the ProductList component as the default export
