import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Popular from "../../components/popular/Popular";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <hr style={styles.hr} />
      {/* <Filter />
      <ProductCard /> */}
      {/* <div className="flex justify-center -mt-10 mb-4">
        <Link to="/allproducts">
          <button className="bg-gray-300 px-5 py-2 rounded-xl">See more</button>
        </Link>
      </div> */}
      {/* <Popular/> */}
      <br />
      <Card />
      <hr style={styles.hr} />
      <Banner />
      <hr style={styles.hr} />
      <br />
      <Categories />
      <hr style={styles.hr} />
      <Track />
      <br />
      <hr style={styles.hr} />
      <Testimonial />
      <br />
      <hr style={styles.hr} />
    </Layout>
  );
}

const styles = {
  hr: {
    width: "80%", // Set the width of the line
    border: "none", // Remove default border
    borderTop: "2px solid blue", // blue line
    height: "2px", // Line height
    margin: "20px auto", // Center the line with auto margin
  },
};

export default Home;
