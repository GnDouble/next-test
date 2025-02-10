// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Hero from "./components/hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Feature 1</h2>
            <p className="text-gray-600">Nordtec auf die 1</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Feature 2</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Feature 3</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <Contact />
    </div>
    
    
  );
};

export default Home;
