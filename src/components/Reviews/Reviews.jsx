import React from 'react';
import { motion } from 'framer-motion';
import reviews from '../../utils/reviews';

function Reviews() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center mb-10 uppercase font-bold text-4xl">Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: review.initialMotion }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full p-6">
              <p className="text-gray-700">{review.description}</p>
              <div className="mt-6 flex items-center">
                <img src={review.img} alt="" className="w-16 h-16 rounded-full shadow-lg mr-4" />
                <h5 className="text-[#E4C268] font-semibold">{review.name}</h5>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
