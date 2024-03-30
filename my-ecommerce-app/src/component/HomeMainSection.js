import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState hooks
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom
import customerReviews from '../data/reviews'; // Importing customerReviews data
import './styles.css'; // Importing CSS file for styling

function HomeMainSection() {
    const [randomReviews, setRandomReviews] = useState([]); // State to store random reviews

    // useEffect hook to fetch random reviews when component mounts
    useEffect(() => {
        const randomReviews = getRandomReviews(2); // Get 2 random reviews
        setRandomReviews(randomReviews); // Update state with random reviews
    }, []);

    // Function to get random reviews from customerReviews data
    function getRandomReviews(count) {
        const shuffled = customerReviews.sort(() => 0.5 - Math.random()); // Shuffle reviews array
        return shuffled.slice(0, count); // Get the specified number of random reviews
    }

    // Render the HomeMainSection component
    return (
        <div className="home-main-section">
            {/* Section about the company */}
            <section>
                <h2>About Us</h2>
                <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
                {/* Link to the products page */}
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </section>
            {/* Section displaying random customer reviews */}
            <section>
                <h2>Customer Reviews</h2>
                {/* Map through randomReviews and display each review */}
                {randomReviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        {/* Display stars based on review rating */}
                        <div>{"★".repeat(review.stars)}</div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomeMainSection; // Export the HomeMainSection component as the default export
