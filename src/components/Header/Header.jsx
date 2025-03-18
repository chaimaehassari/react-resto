
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';
import gallery10 from '../../utils/images/gallery22.jpg';
import gallery12 from '../../utils/images/gallery12.jpg';
import gallery13 from '../../utils/images/gallery13.jpg';

const carouselItems = [
  { id: 1, image: gallery10 },
  { id: 2, image: gallery12 },
  { id: 3, image: gallery13 },
];

function Header() {
  return (
    <header>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="mt-5 sm:mt-0"
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Gradient overlay with responsive opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/75 md:from-black/70 md:to-black/70" />
            
            <div className="container mx-auto px-4 text-white text-center md:text-left relative z-10">
              <h2 className="font-bold text-3xl">Welcome to</h2>
              <h1 className="text-4xl md:text-5xl font-bold capitalize">Golden Table</h1>
              <p className="mt-4 text-lg max-w-xl">
                Welcome to Golden Table in London, the perfect experience for special people.
                Our fancy restaurant will bring your special moments to another level.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <MenuBtn />
                <Link to='/contact'>
                  <button className="border border-white text-white px-6 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-black transition">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </header>
  );
}

export default Header;