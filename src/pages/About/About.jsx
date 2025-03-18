import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';
import AboutPageHeaderImg from '../../utils/images/about-page-header-img.jpg';

function About() {
  return (
    <div className="about-page">
 
      <header 
        className="relative bg-cover bg-center h-[50vh] mt-5 flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutPageHeaderImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <motion.h1
          className="relative text-white text-4xl md:text-5xl font-bold text-[#E4C268]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About
        </motion.h1>
      </header>

      
      <div className="container mx-auto my-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>Welcome to Golden Table in London, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
            <p>Our restaurant is situated at 5 minutes walk from train station and shopping center. The location is ideal for a perfect breakfast, a fancy lunch, or a nice dinner with your family or friends. We can't wait to serve you our delicious dishes!</p>
            <Link to="/contact">
              <button 
                type="button" 
                className="mt-5 px-6 py-3 bg-[#E4C268] text-black text-lg font-semibold rounded-md shadow-md transition hover:bg-opacity-80"
              >
                Contact us
              </button>
            </Link>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className="w-full max-w-md rounded-lg shadow-lg" alt="Our staff" />
          </motion.div>
        </div>
      </div>

    
      <div className="bg-gray-900 text-white py-10">
        <ImageGallery />
      </div>

  
      <div className="my-10">
        <Reviews />
      </div>
    </div>
  );
}

export default About;
