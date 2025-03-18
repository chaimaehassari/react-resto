
import React from 'react';
import { motion } from 'framer-motion';
import food from '../../utils/food';
import drinks from '../../utils/drinks';
import MenuBtn from '../MenuBtn/MenuBtn';


function MenuSection() {
  return (
    <div 
      className="bg-cover bg-center py-5 text-light shadow-md"
      style={{
        backgroundImage: `url(../../utils/images/menu-section-img.jpg)`
      }}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="grid md:grid-cols-2 gap-8 w-full mb-8 md:mb-10">
       
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className='text-2xl md:text-3xl mb-6 font-semibold uppercase text-[#E4C268]'>Mains</h3>
            <ul className='w-full space-y-4'>
              {food.map((foodItem) => (
                <li key={foodItem.id} className='flex justify-between items-center'>
                  <p className='text-lg md:text-xl capitalize font-semibold mr-4 text-black'>{foodItem.name}</p>
                  <p className='text-lg md:text-xl text-[#E4C268]'>{foodItem.price}</p>
                </li>
              ))}
            </ul>
          </motion.div>

    
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className='text-2xl md:text-3xl mb-6 font-semibold uppercase text-[#E4C268]'>Drinks</h3>
            <ul className='w-full space-y-4'>
              {drinks.map((drink) => (
                <li key={drink.id} className='flex justify-between items-center'>
                  <p className='text-lg md:text-xl capitalize font-semibold mr-4 text-black'>{drink.name}</p>
                  <p className='text-lg md:text-xl text-[#E4C268]'>{drink.price}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MenuBtn />
        </motion.div>
      </div>
    </div>
  )
}

export default MenuSection;