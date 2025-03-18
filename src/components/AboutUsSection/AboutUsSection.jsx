
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutSectionImg from "../../utils/images/about-section-img.jpg";

function AboutUsSection() {
  return (
    <div className="w-full py-10" style={{ backgroundColor: "#E4C268" }}>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
  
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={AboutSectionImg}
            className="w-3/4 sm:w-full shadow-lg mt-5 lg:mt-0"
            alt="about us"
          />
        </motion.div>

   
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: 350 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold uppercase mb-6">About us</h2>
          <p className="mb-4">
            Welcome to Golden Table in London, the perfect experience for
            special people. Our fancy restaurant will bring your special moments
            to another level.
          </p>
          <p className="mb-6">
            Our restaurant is situated at a 5-minute walk from the train station
            and shopping center. The location is ideal for a perfect breakfast,
            a fancy lunch, or a nice dinner with your family or friends. We can't
            wait to serve you our delicious dishes!
          </p>
          <Link to="/about">
            <button className="bg-black text-white px-6 py-3 text-lg rounded-md shadow-md hover:bg-gray-800 transition">
              More about us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsSection;
