import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import Reviews from '../../components/Reviews/Reviews';
import ContactHeaderImg from '../../utils/images/contact-page-header-img.jpg';

function Contact() {
  return (
    <div className="contact-page" id="contact-page">
      <header
        className="h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ContactHeaderImg})`,
        }}
      >
        <motion.h1
          className="text-white text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h1>
      </header>

      <div className="container mx-auto my-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <ContactInfo />
          </div>
          <div className="flex justify-center mt-5 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-10">
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
