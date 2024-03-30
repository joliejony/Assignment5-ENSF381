import React from 'react'; // Importing React library
import Header from './Header'; // Importing Header component
import HomeMainSection from './HomeMainSection'; // Importing HomeMainSection component
import Footer from './Footer'; // Importing Footer component

// Homepage component renders the header, main section, and footer of the homepage
const Homepage = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <HomeMainSection /> {/* Render the HomeMainSection component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default Homepage; // Export the Homepage component as the default export
